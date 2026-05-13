"use client";

import { motion } from "framer-motion";
import { Sparkles, Timer, Heart, Zap } from "lucide-react";

// ══════════════════════════════════════════════════════════════════
// SmartWatchPreview — TRUE wearable UI with strict safe area
// Apple Watch proportions. ALL content inside px-5 pt-5 pb-5.
// Every text element uses truncate + min-w-0.
// ══════════════════════════════════════════════════════════════════

export function SmartWatchPreview() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      }}
      className="relative mx-auto w-[260px] sm:w-[300px] lg:w-[320px] xl:w-[340px] max-w-full"
    >
      {/* ══ Watch body ══ */}
      <div className="relative aspect-square rounded-[5rem] bg-[#22175D] p-[14px] shadow-[0_24px_64px_rgba(30,20,80,0.4)] ring-1 ring-white/[0.10]">
        {/* ══ Screen ══ */}
        <div className="relative h-full w-full rounded-[4rem] overflow-hidden bg-[#FAFAFC] flex flex-col">
          <div className="absolute top-0 left-6 right-6 h-px bg-white/50 pointer-events-none z-10" />

          {/* ══ SAFE CONTENT WRAPPER — nothing escapes this ══ */}
          <div className="flex h-full flex-col px-5 pt-5 pb-5 overflow-hidden gap-y-2.5">
            {/* Status bar */}
            <div className="flex items-center justify-between h-5 shrink-0 min-w-0">
              <span className="text-[10px] font-semibold text-slate-400">
                9:41
              </span>
              <div className="flex items-center gap-[3px] shrink-0">
                <div className="w-[4px] h-[4px] rounded-full bg-violet-500/60" />
                <div className="w-[4px] h-[4px] rounded-full bg-violet-500/40" />
                <div className="w-[4px] h-[4px] rounded-full bg-violet-500/20" />
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center gap-2 shrink-0 min-w-0">
              <div className="w-[24px] h-[24px] rounded-lg bg-violet-100/70 flex items-center justify-center shrink-0">
                <Sparkles className="w-[13px] h-[13px] text-violet-600" />
              </div>
              <div className="min-w-0 overflow-hidden flex-1">
                <p className="text-[12px] font-semibold text-slate-900 leading-tight truncate">
                  TT Assistant
                </p>
                <p className="text-[9px] text-slate-400 leading-tight truncate">
                  Emma · 5T
                </p>
              </div>
            </div>

            {/* Alert card */}
            <div className="rounded-2xl bg-violet-50/80 px-3 py-2 shrink-0 min-w-0 overflow-hidden">
              <p className="text-[10px] text-slate-800 leading-snug font-medium truncate">
                4 dinosaur shirts found
              </p>
              <p className="text-[10px] text-violet-600 leading-snug font-semibold mt-0.5 truncate">
                Best price: $8
              </p>
            </div>

            {/* Product card — EXACT structure */}
            <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white px-3 py-2 min-w-0 overflow-hidden shrink-0">
              {/* Thumbnail */}
              <div className="w-10 h-10 rounded-xl bg-violet-100/60 flex items-center justify-center shrink-0">
                <Zap className="w-[16px] h-[16px] text-violet-500" />
              </div>
              {/* Center text */}
              <div className="flex-1 min-w-0 overflow-hidden">
                <p className="text-[11px] font-semibold text-slate-900 leading-tight truncate">
                  Dino Tee
                </p>
                <p className="text-[9px] text-slate-400 leading-tight truncate">
                  5T · Like New
                </p>
              </div>
              {/* Right price */}
              <div className="shrink-0 text-right">
                <p className="text-[12px] font-extrabold text-violet-600 leading-none truncate">
                  $12.99
                </p>
                <span className="inline-block mt-[2px] px-1.5 py-px rounded-full bg-emerald-100 text-[8px] font-bold text-emerald-700 leading-none">
                  Deal
                </span>
              </div>
            </div>

            {/* Timer row */}
            <div className="flex items-center justify-between shrink-0 min-w-0 gap-2">
              <div className="flex items-center gap-1 min-w-0 overflow-hidden">
                <Timer className="w-[11px] h-[11px] text-rose-500 animate-pulse shrink-0" />
                <span className="text-[10px] font-semibold text-slate-700 truncate">
                  45s left
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 shrink-0 truncate">
                $8.50
              </span>
            </div>

            {/* Spacer */}
            <div className="flex-1 min-h-0" />

            {/* Bottom actions */}
            <div className="flex items-center gap-2 pt-1 shrink-0">
              <button className="flex-1 h-8 rounded-full bg-[#241B5E] text-white text-[11px] font-semibold flex items-center justify-center gap-1 shadow-sm shadow-violet-500/15 active:scale-[0.97] transition-transform truncate px-2 min-w-0 overflow-hidden">
                <Zap className="w-[11px] h-[11px] shrink-0" />
                <span className="truncate">Bid $8.50</span>
              </button>
              <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 text-slate-400 hover:text-rose-400 hover:border-rose-200 transition-colors active:scale-[0.97]">
                <Heart className="w-[13px] h-[13px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Side crown + button */}
        <div className="absolute -right-[5px] top-[38%] h-[60px] w-[5px] rounded-r-full bg-[#2B216B]" />
        <div className="absolute -right-[5px] top-[56%] h-[28px] w-[5px] rounded-r-full bg-[#2B216B]" />
      </div>

      {/* Glow */}
      <div className="absolute -top-5 -left-6 w-24 h-24 bg-violet-500/[0.10] rounded-full blur-2xl animate-breathe pointer-events-none" />
      <div className="absolute -bottom-5 -right-6 w-20 h-20 bg-rose-400/[0.06] rounded-full blur-2xl animate-float-slow pointer-events-none" />
    </motion.div>
  );
}
