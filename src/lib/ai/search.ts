import {
  generateEmbedding,
  cosineSimilarity,
  productToEmbeddingText,
} from "./embeddings";
import { prisma } from "@/lib/db/prisma";
import { getOpenAIClient, OPENAI_MODEL, withAITracking } from "./client";

export async function semanticSearch(
  query: string,
  filters: {
    size?: string;
    category?: string;
    maxPrice?: number;
    gender?: string;
    season?: string;
  },
  userId: string,
) {
  // Build filter conditions
  const where: Record<string, unknown> = { status: "ACTIVE" };
  if (filters.size) where.size = filters.size;
  if (filters.category) where.category = filters.category;
  if (filters.maxPrice) where.price = { lte: filters.maxPrice };
  if (filters.gender) where.gender = filters.gender;
  if (filters.season) where.season = filters.season;

  // Get candidate products
  const products = await prisma.product.findMany({
    where,
    take: 100,
    orderBy: { dealScore: "desc" },
    include: { seller: true },
  });

  if (products.length === 0) {
    return {
      success: true,
      data: { products: [], aiInsights: "", totalResults: 0, searchIntent: "" },
    };
  }

  // Generate query embedding
  const queryEmbedding = await generateEmbedding(query);

  // Get stored embeddings or compute similarity
  const scored = await Promise.all(
    products.map(async (p) => {
      const embedding = await prisma.aIEmbedding.findUnique({
        where: { productId: p.id },
      });
      if (embedding?.embedding) {
        return {
          product: p,
          score: cosineSimilarity(
            queryEmbedding,
            embedding.embedding as number[],
          ),
        };
      }
      // Fallback: compute on-the-fly from product text
      const text = productToEmbeddingText(p);
      const fallbackEmbedding = await generateEmbedding(text);
      return {
        product: p,
        score: cosineSimilarity(queryEmbedding, fallbackEmbedding),
      };
    }),
  );

  scored.sort((a, b) => b.score - a.score);
  const topResults = scored.slice(0, 20).filter((s) => s.score > 0.4);

  // Get AI insights
  const openai = getOpenAIClient();
  const insightsPrompt = `You searched for "${query}" in kids clothing. Found ${topResults.length} results. Summarize in one warm, concise sentence what's available and suggest a next search topic.`;

  let aiInsights = "";
  try {
    const response = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: [{ role: "user", content: insightsPrompt }],
      max_tokens: 150,
      temperature: 0.7,
    });
    aiInsights = response.choices[0]?.message?.content || "";
  } catch {
    aiInsights = `Found ${topResults.length} items matching "${query}".`;
  }

  await prisma.aISearchLog.create({
    data: {
      userId,
      query,
      filters: filters as object,
      resultCount: topResults.length,
    },
  });

  return {
    success: true,
    data: {
      products: topResults.map((s) => s.product),
      aiInsights,
      totalResults: topResults.length,
      searchIntent: query,
    },
  };
}
