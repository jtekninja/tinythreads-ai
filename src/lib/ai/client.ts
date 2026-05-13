import OpenAI from "openai";

let openaiInstance: OpenAI | null = null;

export function getOpenAIClient(): OpenAI {
  if (!openaiInstance) {
    openaiInstance = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      maxRetries: 2,
      timeout: 30000,
    });
  }
  return openaiInstance;
}

export const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4.1";
export const EMBEDDING_MODEL =
  process.env.OPENAI_EMBEDDING_MODEL || "text-embedding-3-small";

export interface AIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  tokensUsed?: number;
  latencyMs?: number;
}

export async function withAITracking<T>(
  context: string,
  input: unknown,
  fn: () => Promise<{ result: T; tokensUsed?: number }>,
  userId?: string,
): Promise<AIResponse<T>> {
  const start = Date.now();
  try {
    const { result, tokensUsed } = await fn();
    const latency = Date.now() - start;

    // Log to reasoning log (non-blocking, fire-and-forget)
    if (userId) {
      try {
        const { prisma } = await import("@/lib/db/prisma");
        await prisma.aIReasoningLog.create({
          data: {
            userId,
            context,
            input: input as object,
            output: result as object,
            model: OPENAI_MODEL,
            tokensUsed,
            latencyMs: latency,
          },
        });
      } catch {
        // Silently fail — analytics shouldn't block UX
      }
    }

    return { success: true, data: result, tokensUsed, latencyMs: latency };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "AI service error";
    console.error(`[AI Error] ${context}:`, message);
    return { success: false, error: message };
  }
}
