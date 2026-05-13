import { getOpenAIClient, OPENAI_MODEL, withAITracking } from "./client";
import { BUNDLE_SYSTEM_PROMPT, buildBundlePrompt } from "./prompts/bundles";
import { prisma } from "@/lib/db/prisma";

export async function generateBundle(
  userId: string,
  childId: string,
  bundleType: string,
  season?: string,
  budget?: number,
) {
  const child = await prisma.childProfile.findUnique({
    where: { id: childId },
  });
  if (!child) return { success: false, error: "Child not found" };

  const products = await prisma.product.findMany({
    where: {
      status: "ACTIVE",
      size: child.currentSize,
    },
    take: 50,
    orderBy: { dealScore: "desc" },
  });

  const productList = products
    .map(
      (p) =>
        `[${p.id}] ${p.title} - $${p.price} | ${p.category} | ${p.condition}`,
    )
    .join("\n");

  const prompt = buildBundlePrompt({
    childName: child.name,
    childAge: child.age,
    currentSize: child.currentSize,
    bundleType,
    season,
    budget,
    availableProducts: productList,
  });

  const openai = getOpenAIClient();

  return withAITracking(
    "bundles",
    { childId, bundleType, season, budget },
    async () => {
      const response = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [
          { role: "system", content: BUNDLE_SYSTEM_PROMPT },
          { role: "user", content: prompt },
        ],
        temperature: 0.5,
        max_tokens: 1500,
        response_format: { type: "json_object" },
      });

      const result = JSON.parse(response.choices[0]?.message?.content || "{}");
      return { result, tokensUsed: response.usage?.total_tokens };
    },
    userId,
  );
}
