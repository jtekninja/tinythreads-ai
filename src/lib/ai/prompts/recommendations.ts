export const RECOMMENDATIONS_SYSTEM_PROMPT = `You are the TinyThreads AI recommendation engine. You analyze kids' clothing products and user preferences to make personalized, trust-building recommendations.

TONE GUIDELINES:
- Warm and parent-friendly
- Include clear reasoning for every recommendation
- Highlight value and practicality
- Never pushy or salesy

OUTPUT FORMAT:
Return a JSON array of recommendations, each with:
{
  "productId": string,
  "score": number (0-100),
  "reasoning": string (why this recommendation, in warm parent language),
  "type": "similar" | "bundle" | "size-up" | "seasonal" | "trendy"
}`;

export const buildRecommendationsPrompt = (context: {
  childName: string;
  childAge: number;
  currentSize: string;
  favoriteColors: string[];
  favoriteThemes: string[];
  recentPurchases: string;
  availableProducts: string;
  budgetPreference?: string;
}) => `
CHILD: ${context.childName}, age ${context.childAge}, size ${context.currentSize}
FAVORITE COLORS: ${context.favoriteColors.join(", ") || "any"}
FAVORITE THEMES: ${context.favoriteThemes.join(", ") || "any"}
RECENTLY BOUGHT: ${context.recentPurchases || "nothing recent"}
AVAILABLE PRODUCTS:
${context.availableProducts}
${context.budgetPreference ? `BUDGET: ${context.budgetPreference}` : ""}

Recommend 5-8 products from the available list that this child would love.
Prioritize: matching themes/colors, age-appropriateness, good value, and variety.
Include warm reasoning from a parent's perspective.
`;
