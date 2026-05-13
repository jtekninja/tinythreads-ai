// ============================================
// TINYTHREADS AI - CORE TYPE DEFINITIONS
// ============================================

// ----- AUTH -----
export interface SafeUser {
  id: string;
  email: string;
  name: string | null;
  avatarUrl: string | null;
  role: "PARENT" | "SELLER" | "ADMIN";
  provider: "EMAIL" | "GOOGLE" | "APPLE";
  createdAt: string;
}

// ----- CHILDREN -----
export interface ChildProfile {
  id: string;
  userId: string;
  name: string;
  age: number;
  currentSize: string;
  growthSpeed: "slow" | "average" | "fast";
  favoriteColors: string[];
  favoriteThemes: string[];
  preferredBrands: string[];
  sensoryPreferences: string | null;
  schoolDressCode: string | null;
  measurements: {
    height?: number;
    weight?: number;
    chest?: number;
    waist?: number;
  } | null;
  photoUrl: string | null;
}

// ----- PRODUCTS -----
export type ProductCondition = "NEW" | "LIKE_NEW" | "GOOD" | "FAIR";
export type ProductCategory =
  | "T_SHIRTS"
  | "HOODIES"
  | "PANTS"
  | "DRESSES"
  | "OUTFITS"
  | "PAJAMAS"
  | "SWIMWEAR"
  | "OUTERWEAR"
  | "SHOES"
  | "ACCESSORIES"
  | "BUNDLES";
export type ProductStatus =
  | "ACTIVE"
  | "SOLD"
  | "AUCTION"
  | "DRAFT"
  | "DELISTED";

export interface Product {
  id: string;
  sellerId: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number | null;
  size: string;
  brand: string | null;
  condition: ProductCondition;
  category: ProductCategory;
  status: ProductStatus;
  gender: string | null;
  season: string | null;
  images: string[];
  tags: string[];
  color: string | null;
  material: string | null;
  quantity: number;
  aiTags: string[];
  aiDescription: string | null;
  dealScore: number | null;
  trendingScore: number | null;
  resaleValue: number | null;
  styleCategory: string | null;
  viewCount: number;
  favoriteCount: number;
  salesCount: number;
  conversionRate: number | null;
  createdAt: string;
  updatedAt: string;
  seller?: SellerProfile;
  embedding?: AIEmbedding;
}

// ----- AUCTIONS -----
export type AuctionStatus = "SCHEDULED" | "LIVE" | "ENDED" | "CANCELLED";

export interface Auction {
  id: string;
  productId: string;
  sellerId: string;
  startPrice: number;
  currentPrice: number;
  buyNowPrice: number | null;
  bidIncrement: number;
  reservePrice: number | null;
  startTime: string;
  endTime: string;
  status: AuctionStatus;
  winnerId: string | null;
  bidCount: number;
  watcherCount: number;
  auctionType: "standard" | "lightning";
  lightningDuration: number | null;
  product?: Product;
  bids?: Bid[];
  seller?: SellerProfile;
}

export interface Bid {
  id: string;
  auctionId: string;
  userId: string;
  amount: number;
  isAutoBid: boolean;
  createdAt: string;
  user?: SafeUser;
}

// ----- SELLERS -----
export interface SellerProfile {
  id: string;
  userId: string;
  storeName: string;
  storeDescription: string | null;
  logoUrl: string | null;
  rating: number;
  totalSales: number;
  verified: boolean;
}

// ----- ORDERS -----
export type OrderStatus =
  | "PENDING"
  | "PAID"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED"
  | "REFUNDED";

export interface Order {
  id: string;
  buyerId: string;
  sellerId: string;
  status: OrderStatus;
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  stripePaymentId: string | null;
  shippingAddress: string | null;
  trackingNumber: string | null;
  createdAt: string;
  items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  product?: Product;
}

// ----- BUNDLES -----
export type BundleType =
  | "AI_GENERATED"
  | "SELLER_CURATED"
  | "SEASONAL"
  | "BUDGET"
  | "OUTFIT_MATCH"
  | "SCHOOL"
  | "VACATION";

export interface Bundle {
  id: string;
  name: string;
  description: string | null;
  type: BundleType;
  season: string | null;
  budget: number | null;
  totalPrice: number;
  discount: number;
  imageUrl: string | null;
  isActive: boolean;
  aiReasoning: string | null;
  items?: BundleItem[];
}

export interface BundleItem {
  id: string;
  bundleId: string;
  productId: string;
  quantity: number;
  product?: Product;
}

// ----- AI -----
export interface AIRecommendation {
  id: string;
  productId: string;
  score: number;
  reasoning: string | null;
  type: "similar" | "bundle" | "size-up" | "seasonal" | "trendy";
  product?: Product;
}

export interface AIEmbedding {
  id: string;
  productId: string;
  embedding: number[];
  model: string;
}

export interface AIMemory {
  id: string;
  userId: string;
  childId: string | null;
  type: string;
  key: string;
  value: unknown;
}

export interface AISearchResult {
  products: Product[];
  aiInsights: string;
  totalResults: number;
  searchIntent: string;
}

export interface AIGrowthPrediction {
  childName: string;
  currentSize: string;
  predictedSize: string;
  estimatedTimeline: string;
  confidence: number;
  reasoning: string;
}

export interface AIDealScore {
  score: number;
  factors: {
    value: number;
    trend: number;
    resale: number;
    popularity: number;
    condition: number;
  };
  verdict: "great_deal" | "good_value" | "fair_price" | "overpriced";
  reasoning: string;
}

export interface AIBundleSuggestion {
  name: string;
  description: string;
  products: Product[];
  totalPrice: number;
  discount: number;
  reasoning: string;
  type: BundleType;
}

// ----- NOTIFICATIONS -----
export type NotificationType =
  | "AUCTION_ENDING"
  | "AUCTION_WON"
  | "AUCTION_OUTBID"
  | "PRICE_DROP"
  | "BACK_IN_STOCK"
  | "NEW_LISTING_MATCH"
  | "BUNDLE_SUGGESTION"
  | "SIZE_UP_REMINDER"
  | "DEAL_ALERT"
  | "ORDER_UPDATE"
  | "AI_RECOMMENDATION"
  | "SOCIAL";

export interface AppNotification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  body: string;
  data: unknown;
  actionUrl: string | null;
  isRead: boolean;
  createdAt: string;
}

// ----- REVIEWS -----
export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string | null;
  images: string[];
  createdAt: string;
  user?: SafeUser;
}

// ----- PAGINATION -----
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ----- API RESPONSES -----
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
