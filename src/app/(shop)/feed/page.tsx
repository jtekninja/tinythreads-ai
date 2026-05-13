"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Timer,
  Sparkles,
  Share2,
  ChevronUp,
  Zap,
  Gem,
} from "lucide-react";
import { Logo } from "@/components/branding/Logo";

// Mock feed data
const MOCK_FEED = [
  {
    id: "1",
    title: "Dino Explorer Tee",
    price: 12.99,
    originalPrice: 22.99,
    size: "5T",
    brand: "Carter's",
    condition: "LIKE_NEW",
    images: [],
    dealScore: 92,
    type: "auction",
    currentBid: 8.5,
    timeLeft: "45s",
    seller: "HappyKidsCloset",
    reason: "Your child loves dinosaurs and this is 43% below retail",
  },
  {
    id: "2",
    title: "Space Adventure Set",
    price: 24.99,
    size: "5T",
    brand: "Primary",
    condition: "NEW",
    images: [],
    dealScore: 88,
    type: "buy-now",
    seller: "LittleTrends",
    reason: "Great value bundle - $25 for 3 space-themed pieces",
  },
  {
    id: "3",
    title: "Pink Unicorn Hoodie",
    price: 15.0,
    originalPrice: 29.99,
    size: "4T",
    brand: "Old Navy",
    condition: "GOOD",
    images: [],
    dealScore: 78,
    type: "auction",
    currentBid: 10.0,
    timeLeft: "120s",
    seller: "MomSquadResale",
    reason: "Soft fleece, perfect for fall. Your child's favorite color.",
  },
  {
    id: "4",
    title: "Back to School Bundle",
    price: 39.99,
    originalPrice: 65.0,
    size: "5T",
    brand: "Mixed Brands",
    condition: "LIKE_NEW",
    images: [],
    dealScore: 95,
    type: "bundle",
    seller: "SmartSaves",
    reason:
      "AI picked this for you: 5 shirts + 2 pants = a perfect school week",
  },
];

const SIZE_COLORS: Record<string, string> = {
  "4T": "from-brand-pink to-brand-pink-light",
  "5T": "from-brand-purple to-brand-glow",
  XS: "from-blue-400 to-cyan-400",
};

const DealBadge = ({ score }: { score: number }) => {
  if (score >= 90)
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/15 text-green-600 text-xs font-bold border border-green-500/20">
        <Zap className="w-3 h-3" /> Great Deal
      </span>
    );
  if (score >= 75)
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold border border-brand-purple/20">
        <Gem className="w-3 h-3" /> Good Value
      </span>
    );
  return null;
};

export default function SwipeFeedPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [direction, setDirection] = useState<"up" | "down" | null>(null);

  const item = MOCK_FEED[currentIndex % MOCK_FEED.length];

  const handleDragEnd = useCallback((_: unknown, info: PanInfo) => {
    const yThreshold = 100;
    if (info.offset.y < -yThreshold) {
      setDirection("up");
      setTimeout(() => {
        setCurrentIndex((p) => p + 1);
        setDirection(null);
      }, 300);
    } else if (info.offset.y > yThreshold) {
      setDirection("down");
      setTimeout(() => {
        setCurrentIndex((p) => Math.max(0, p - 1));
        setDirection(null);
      }, 300);
    }
  }, []);

  const toggleSave = (id: string) => {
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="h-dvh bg-brand-indigo overflow-hidden relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 safe-top px-4 py-3 flex items-center justify-between">
        <Logo variant="compact" size="sm" />
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80">
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Feed Cards */}
      <div className="h-full pt-16 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              y: direction === "up" ? -300 : 300,
              scale: 0.9,
              transition: { duration: 0.3 },
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.9}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 top-16 bottom-24 px-4 flex items-center justify-center"
          >
            <div className="w-full max-w-sm rounded-3xl overflow-hidden bg-white shadow-2xl shadow-brand-purple/20">
              {/* Image Placeholder */}
              <div className="relative aspect-[3/4] gradient-card flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-brand-purple/10 flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-brand-purple" />
                  </div>
                  <p className="text-brand-purple font-semibold text-sm">
                    {item.title}
                  </p>
                </div>

                {/* Size badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${SIZE_COLORS[item.size] || "from-brand-purple to-brand-glow"} text-white text-xs font-bold shadow-lg`}
                >
                  {item.size}
                </div>

                {/* Deal score */}
                <div className="absolute top-4 right-4">
                  <DealBadge score={item.dealScore} />
                </div>

                {/* Auction timer */}
                {item.type === "auction" && (
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-indigo/90 backdrop-blur-sm text-white rounded-2xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Timer className="w-5 h-5 text-brand-pink animate-pulse" />
                      <span className="font-bold text-lg">{item.timeLeft}</span>
                    </div>
                    <span className="font-semibold">
                      ${item.currentBid} bid
                    </span>
                  </div>
                )}

                {item.type === "bundle" && (
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-brand-purple to-brand-pink text-white rounded-2xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      <span className="font-semibold">AI Bundle</span>
                    </div>
                    <span className="font-bold">${item.price}</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-brand-indigo">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-indigo/40">
                      {item.brand} · {item.condition}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-extrabold text-brand-indigo">
                      ${item.price}
                    </p>
                    {item.originalPrice && (
                      <p className="text-sm text-brand-indigo/30 line-through">
                        ${item.originalPrice}
                      </p>
                    )}
                  </div>
                </div>

                {/* AI Reason */}
                <div className="flex items-start gap-2 p-3 rounded-2xl bg-brand-purple/5 border border-brand-purple/10">
                  <Sparkles className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-brand-indigo/60 leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 z-20 safe-bottom px-4 py-3 bg-gradient-to-t from-brand-indigo via-brand-indigo/95 to-transparent">
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => toggleSave(item.id)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
              saved.has(item.id)
                ? "bg-brand-pink text-white shadow-lg shadow-brand-pink/30"
                : "bg-white/10 text-white/70"
            }`}
          >
            <Heart
              className={`w-7 h-7 ${saved.has(item.id) ? "fill-white" : ""}`}
            />
          </button>

          {item.type === "auction" ? (
            <button className="px-10 h-14 rounded-full gradient-brand text-white font-bold text-lg shadow-xl shadow-brand-purple/30 hover:scale-105 active:scale-100 transition-transform">
              Bid ${(item.currentBid || 0) + 1}
            </button>
          ) : (
            <button className="px-10 h-14 rounded-full gradient-brand text-white font-bold text-lg shadow-xl shadow-brand-purple/30 hover:scale-105 active:scale-100 transition-transform">
              Buy Now
            </button>
          )}

          <button className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white/70">
            <Share2 className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-2">
          <ChevronUp className="w-4 h-4 text-white/30" />
          <span className="text-xs text-white/30">Swipe up for next item</span>
        </div>
      </div>
    </div>
  );
}
