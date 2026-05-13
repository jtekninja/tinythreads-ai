import { getOpenAIClient, OPENAI_MODEL, withAITracking } from "./client";
import {
  RECOMMENDATIONS_SYSTEM_PROMPT,
  buildRecommendationsPrompt,
} from "./prompts/recommendations";
import { prisma } from "@/lib/db/prisma";

export async function generateRecommendations(
  userId: string,
  childId: string,
  budgetPreference?: string,
) {
  const child = await prisma.childProfile.findUnique({
    where: { id: childId },
    include: { user: true },
  });
  if (!child) return { success: false, error: "Child not found" };

  const products = await prisma.product.findMany({
    where: {
      status: "ACTIVE",
      size: child.currentSize,
    },
    take: 30,
    orderBy: { dealScore: "desc" },
  });

  const productList = products
    .map(
      (p) =>
        `[${p.id}] ${p.title} - $${p.price} | ${p.category} | ${p.condition} | ${p.brand || "unbranded"} | colors: ${p.color || "N/A"} | tags: ${p.tags.join(",")} | rating: ${p.dealScore || "N/A"}`,
    )
    .join("\n");

  const recentOrders = await prisma.order.findMany({
    where: { buyerId: userId, status: "DELIVERED" },
    include: { items: { include: { product: { select: { title: true } } } } },
    take: 10,
  });
  const boughtTitles = recentOrders
    .flatMap((o) => o.items.map((i) => i.product.title))
    .join(", ");

  const prompt = buildRecommendationsPrompt({
    childName: child.name,
    childAge: child.age,
    currentSize: child.currentSize,
    favoriteColors: child.favoriteColors,
    favoriteThemes: child.favoriteThemes,
    recentPurchases: boughtTitles,
    availableProducts: productList,
    budgetPreference,
  });

  const openai = getOpenAIClient();

  return withAITracking(
    "recommendations",
    { childId, budgetPreference },
    async () => {
      const response = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [
          { role: "system", content: RECOMMENDATIONS_SYSTEM_PROMPT },
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
