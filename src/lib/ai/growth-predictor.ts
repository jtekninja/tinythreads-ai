import { getOpenAIClient, OPENAI_MODEL, withAITracking } from "./client";
import { GROWTH_SYSTEM_PROMPT, buildGrowthPrompt } from "./prompts/growth";

export async function predictGrowth(
  child: {
    name: string;
    age: number;
    currentSize: string;
    growthSpeed: string;
    lastSizeChange?: string;
  },
  userId: string,
) {
  const openai = getOpenAIClient();
  const prompt = buildGrowthPrompt({
    childName: child.name,
    age: child.age,
    currentSize: child.currentSize,
    growthSpeed: child.growthSpeed,
    lastSizeChange: child.lastSizeChange,
  });

  return withAITracking(
    "growth_prediction",
    { childName: child.name },
    async () => {
      const response = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [
          { role: "system", content: GROWTH_SYSTEM_PROMPT },
          { role: "user", content: prompt },
        ],
        temperature: 0.4,
        max_tokens: 600,
        response_format: { type: "json_object" },
      });

      const result = JSON.parse(response.choices[0]?.message?.content || "{}");
      return { result, tokensUsed: response.usage?.total_tokens };
    },
    userId,
  );
}
