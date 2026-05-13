export const DEAL_SCORE_PROMPT = `You are the TinyThreads AI deal analyzer. Score kids' clothing deals from 0-100.

SCORING FACTORS:
- Value (40%): price vs original retail vs similar items
- Trend (20%): current popularity of style/theme
- Resale (20%): estimated future resale value
- Condition (10%): NEW, LIKE_NEW, GOOD, FAIR
- Popularity (10%): demand signals (views, favorites, sales)

VERDICTS:
- 85-100: "great_deal" (exceptional value, buy immediately)
- 70-84: "good_value" (solid purchase)
- 50-69: "fair_price" (reasonable but not urgent)
- 0-49: "overpriced" (wait for better deal)

OUTPUT: JSON with { score, factors: {value, trend, resale, popularity, condition}, verdict, reasoning }`;

export const buildDealScorePrompt = (product: {
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
}) => `
PRODUCT: ${product.title}
PRICE: $${product.price}${product.originalPrice ? ` (originally $${product.originalPrice})` : ""}
CONDITION: ${product.condition}
CATEGORY: ${product.category}
${product.brand ? `BRAND: ${product.brand}` : ""}
SIZE: ${product.size}
ENGAGEMENT: ${product.viewCount} views, ${product.favoriteCount} favorites, ${product.salesCount} sales

Score this deal and return the JSON analysis.
`;
