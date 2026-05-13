"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/branding/Logo";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  Gem,
  Zap,
  Heart,
  ShoppingBag,
  Share2,
  Timer,
  Star,
} from "lucide-react";

export default function ProductDetailPage() {
  return (
    <div className="min-h-dvh bg-brand-white">
      <div className="safe-top px-4 py-3 flex items-center justify-between border-b border-brand-indigo/5">
        <Link
          href="/feed"
          className="flex items-center gap-2 text-brand-indigo/50 hover:text-brand-purple"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-semibold">Back</span>
        </Link>
        <Logo variant="icon" size="sm" />
        <button className="w-10 h-10 rounded-full bg-brand-purple/5 flex items-center justify-center">
          <Share2 className="w-5 h-5 text-brand-purple" />
        </button>
      </div>

      {/* Image */}
      <div className="relative aspect-square gradient-card flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-brand-purple/10 flex items-center justify-center">
            <Sparkles className="w-12 h-12 text-brand-purple" />
          </div>
          <p className="text-brand-purple font-semibold">Space Adventure Set</p>
        </div>
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full bg-brand-purple text-white text-xs font-bold">
            5T
          </span>
          <span className="px-3 py-1.5 rounded-full bg-green-500 text-white text-xs font-bold flex items-center gap-1">
            <Zap className="w-3 h-3" />
            Great Deal
          </span>
        </div>
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
          <Heart className="w-5 h-5 text-brand-pink" />
        </button>
      </div>

      <div className="px-4 py-6 space-y-5">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-brand-indigo mb-1">
              Space Adventure Set
            </h1>
            <p className="text-brand-indigo/40 text-sm">
              Primary · NEW · 3 pieces
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-extrabold text-brand-indigo">$24.99</p>
            <p className="text-sm text-brand-indigo/30 line-through">$39.99</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-green-50 border border-green-100 flex items-start gap-3">
          <Gem className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-green-700">
              Great Deal · 88/100
            </p>
            <p className="text-xs text-green-600 mt-1">
              38% below retail for a 3-piece set. Excellent condition.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-brand-indigo mb-2">
            AI Insight
          </h3>
          <div className="p-3 rounded-2xl bg-brand-purple/5 border border-brand-purple/10 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
            <p className="text-xs text-brand-indigo/60">
              Great value bundle — $25 for 3 space-themed pieces. Your child
              loves space themes and this is one of the best-rated bundles in 5T
              this week.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-brand-indigo mb-2">Seller</h3>
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-brand-purple/3 border border-brand-purple/5">
            <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple font-bold text-sm">
              LT
            </div>
            <div>
              <p className="font-semibold text-brand-indigo text-sm">
                LittleTrends
              </p>
              <p className="flex items-center gap-1 text-xs text-brand-indigo/40">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> 4.9
                · 230+ sales
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="safe-bottom px-4 py-4 border-t border-brand-indigo/5 flex items-center gap-3">
        <button className="w-14 h-14 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink flex-shrink-0">
          <Heart className="w-6 h-6 fill-brand-pink" />
        </button>
        <Link
          href="/checkout"
          className="flex-1 py-4 rounded-2xl gradient-brand text-white font-extrabold text-lg shadow-xl shadow-brand-purple/30 flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-5 h-5" /> Buy Now — $24.99
        </Link>
      </div>
    </div>
  );
}
