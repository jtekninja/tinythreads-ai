"use client";

import { motion } from "framer-motion";
import { Sparkles, Timer, Heart, ShoppingBag, Zap } from "lucide-react";

// ── SmartWatchPreview ──────────────────────────────────────────────
// Apple Watch / Galaxy Watch style wearable mockup for hero section
// ────────────────────────────────────────────────────────────────────

export function SmartWatchPreview() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
      className="relative mx-auto w-[min(82vw,300px)] sm:w-[300px] lg:w-[320px] xl:w-[340px]"
    >
      {/* ── Outer bezel / watch body ── */}
      <div className="relative aspect-square rounded-[5rem] bg-[#1E1B4B] p-[14px] sm:p-[16px] lg:p-[18px] shadow-2xl shadow-brand-indigo/25 ring-1 ring-white/[0.12]">
        {/* ── Inner screen ── */}
        <div className="relative h-full w-full rounded-[4rem] overflow-hidden bg-white">
          {/* Subtle inner shadow */}
          <div className="absolute inset-0 rounded-[4rem] pointer-events-none shadow-[inset_0_0_20px_rgba(139,92,246,0.08)]" />

          {/* ── Screen content ── */}
          <div className="relative h-full flex flex-col min-h-0 p-4 sm:p-5 gap-2.5 sm:gap-3 overflow-hidden">
            {/* Status row */}
            <div className="flex items-center justify-between px-0.5">
              <span className="text-[10px] font-semibold text-brand-indigo/40">
                9:41
              </span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-purple/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-brand-purple/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-brand-purple/20" />
              </div>
            </div>

            {/* TT header */}
            <div className="flex items-center gap-2 pb-2.5 border-b border-brand-indigo/5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-brand-purple" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] sm:text-xs font-extrabold text-brand-indigo leading-none truncate">
                  TT Assistant
                </p>
                <p className="text-[9px] sm:text-[10px] text-brand-indigo/35 leading-tight">
                  Emma · Size 5T
                </p>
              </div>
            </div>

            {/* Alert / notification card */}
            <div className="bg-brand-purple/[0.07] rounded-2xl px-3 py-2.5">
              <p className="text-[10px] sm:text-[11px] text-brand-indigo/65 leading-snug">
                🦕 4 dino shirts found in Emma's size
              </p>
              <p className="text-[10px] sm:text-[11px] text-brand-pink/80 font-semibold leading-snug mt-0.5">
                Best deal: $8 tee — 40% below avg
              </p>
            </div>

            {/* Product mini card */}
            <div className="bg-white rounded-2xl border border-brand-purple/[0.12] p-2.5 shadow-sm flex items-center gap-2.5">
              {/* Thumbnail icon */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-brand-purple" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-[11px] font-bold text-brand-indigo leading-tight truncate">
                  Dino Explorer Tee
                </p>
                <p className="text-[9px] text-brand-indigo/35 leading-tight">
                  5T · Like New
                </p>
              </div>

              <div className="text-right flex-shrink-0">
                <p className="text-[12px] sm:text-sm font-extrabold text-brand-purple leading-none">
                  $12.99
                </p>
                <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded-full bg-green-100 text-[8px] sm:text-[9px] font-bold text-green-700 leading-none">
                  Great Deal
                </span>
              </div>
            </div>

            {/* Auction bar */}
            <div className="flex items-center justify-between bg-brand-indigo/[0.04] rounded-2xl px-3 py-2">
              <div className="flex items-center gap-1.5">
                <Timer className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-pink animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-extrabold text-brand-indigo">
                  45s
                </span>
              </div>
              <span className="text-xs font-extrabold text-brand-indigo">
                Current: $8.50
              </span>
            </div>

            {/* Spacer */}
            <div className="flex-1 min-h-0" />

            {/* Action buttons */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <button className="flex-1 h-9 sm:h-10 rounded-full bg-brand-indigo text-white text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-brand-indigo/20 active:scale-95 transition-transform">
                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                Bid $8.50
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-brand-indigo/10 flex items-center justify-center flex-shrink-0 text-brand-indigo/50 hover:text-brand-pink hover:border-brand-pink/20 transition-colors active:scale-95">
                <Heart className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Side crown ── */}
      <div className="absolute -right-[5px] top-[24%] sm:top-[26%] h-16 sm:h-[70px] w-[5px] sm:w-[6px] rounded-r-full bg-[#2A255F]" />
      {/* ── Side button ── */}
      <div className="absolute -right-[5px] top-[48%] sm:top-[50%] h-8 sm:h-9 w-[5px] sm:w-[6px] rounded-r-full bg-[#2A255F]" />

      {/* ── Floating glow blobs ── */}
      <div className="absolute -top-8 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-brand-purple/[0.12] rounded-full blur-3xl animate-breathe pointer-events-none" />
      <div className="absolute -bottom-8 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-brand-pink/[0.08] rounded-full blur-3xl animate-float-slow pointer-events-none" />
    </motion.div>
  );
}
