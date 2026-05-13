import { getOpenAIClient, OPENAI_MODEL, withAITracking } from "./client";
import {
  ASSISTANT_SYSTEM_PROMPT,
  ASSISTANT_SHOPPING_PROMPT,
} from "./prompts/assistant";
import { prisma } from "@/lib/db/prisma";

export interface AssistantMessage {
  role: "user" | "assistant";
  content: string;
}

export async function chatWithAssistant(
  messages: AssistantMessage[],
  context: {
    userId: string;
    childProfiles: {
      name: string;
      age: number;
      currentSize: string;
      favoriteColors: string[];
      favoriteThemes: string[];
    }[];
  },
) {
  const openai = getOpenAIClient();
  const childrenContext = context.childProfiles
    .map(
      (c) =>
        `${c.name} (age ${c.age}, size ${c.currentSize}, likes: ${c.favoriteThemes.join(", ")}, colors: ${c.favoriteColors.join(", ")})`,
    )
    .join("; ");

  const recentBought = await prisma.order.findMany({
    where: { buyerId: context.userId, status: "DELIVERED" },
    include: {
      items: { include: { product: { select: { title: true, size: true } } } },
    },
    take: 5,
    orderBy: { createdAt: "desc" },
  });

  const boughtItems = recentBought
    .flatMap((o) => o.items.map((i) => i.product.title))
    .join(", ");

  return withAITracking(
    "assistant",
    { messages, childrenContext },
    async () => {
      const response = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [
          { role: "system", content: ASSISTANT_SYSTEM_PROMPT },
          {
            role: "system",
            content: `Current context - Children: ${childrenContext}. Recent purchases: ${boughtItems || "none"}. Address the parent warmly and reference their children by name.`,
          },
          ...messages.map((m) => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          })),
        ],
        temperature: 0.7,
        max_tokens: 500,
      });

      const reply =
        response.choices[0]?.message?.content ||
        "I'm here to help, but I need a moment to think!";
      return { result: { reply, tokensUsed: response.usage?.total_tokens } };
    },
    context.userId,
  );
}

export async function parseShoppingIntent(
  query: string,
  context: {
    childrenContext: string;
    recentBuys: string;
    preferences: string;
  },
  userId: string,
) {
  const openai = getOpenAIClient();

  return withAITracking(
    "search_intent",
    { query },
    async () => {
      const prompt = ASSISTANT_SHOPPING_PROMPT.replace("{query}", query)
        .replace("{childrenContext}", context.childrenContext)
        .replace("{recentBuys}", context.recentBuys)
        .replace("{preferences}", context.preferences);

      const response = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.3,
        response_format: { type: "json_object" },
      });

      const parsed = JSON.parse(response.choices[0]?.message?.content || "{}");
      return { result: parsed, tokensUsed: response.usage?.total_tokens };
    },
    userId,
  );
}
