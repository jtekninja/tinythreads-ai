import { getOpenAIClient, EMBEDDING_MODEL } from "./client";

export async function generateEmbedding(text: string): Promise<number[]> {
  const openai = getOpenAIClient();
  const response = await openai.embeddings.create({
    model: EMBEDDING_MODEL,
    input: text.slice(0, 8000),
  });
  return response.data[0].embedding;
}

export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  const openai = getOpenAIClient();
  const response = await openai.embeddings.create({
    model: EMBEDDING_MODEL,
    input: texts.map((t) => t.slice(0, 8000)),
  });
  return response.data.map((d) => d.embedding);
}

export function productToEmbeddingText(product: {
  title: string;
  description: string;
  category: string;
  tags: string[];
  aiTags: string[];
  color?: string | null;
  brand?: string | null;
  size: string;
  gender?: string | null;
  season?: string | null;
}): string {
  return [
    product.title,
    product.description,
    `Category: ${product.category}`,
    `Tags: ${product.tags.join(", ")}`,
    product.aiTags?.length ? `AI Tags: ${product.aiTags.join(", ")}` : "",
    product.color ? `Color: ${product.color}` : "",
    product.brand ? `Brand: ${product.brand}` : "",
    `Size: ${product.size}`,
    product.gender ? `For: ${product.gender}` : "",
    product.season ? `Season: ${product.season}` : "",
  ]
    .filter(Boolean)
    .join(" | ");
}

export function cosineSimilarity(a: number[], b: number[]): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}
