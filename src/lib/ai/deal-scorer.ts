import { getOpenAIClient, OPENAI_MODEL, withAITracking } from "./client";
import {
  DEAL_SCORE_PROMPT,
  buildDealScorePrompt,
} from "./prompts/deal-scoring";

export async function scoreDeal(
  product: {
    id: string;
    title: string;
    price: number;
    originalPrice?: number | null;
    condition: string;
    category: string;
    brand?: string | null;
    size: string;
    viewCount: number;
    favoriteCount: number;
    salesCount: number;
  },
  userId: string,
) {
  const openai = getOpenAIClient();
  const prompt = buildDealScorePrompt(product);

  return withAITracking(
    "deal_score",
    { productId: product.id },
    async () => {
      const response = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [
          { role: "system", content: DEAL_SCORE_PROMPT },
          { role: "user", content: prompt },
        ],
        temperature: 0.3,
        max_tokens: 500,
        response_format: { type: "json_object" },
      });

      const result = JSON.parse(response.choices[0]?.message?.content || "{}");
      return { result, tokensUsed: response.usage?.total_tokens };
    },
    userId,
  );
}
