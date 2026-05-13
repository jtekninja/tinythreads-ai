"use client";

import { motion } from "framer-motion";
import { Sparkles, Timer, Heart, Zap } from "lucide-react";

export function SmartWatchPreview() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
      className="relative mx-auto w-[250px] sm:w-[320px] lg:w-[360px] xl:w-[400px] max-w-full"
    >
      {/* Outer bezel shell */}
      <div className="relative aspect-square rounded-[4rem] bg-[#0F0B1A] p-[16px] shadow-[0_40px_100px_rgba(15,11,26,0.5)] ring-1 ring-white/[0.08]">
        <div className="absolute inset-0 rounded-[4rem] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none z-10" />

        {/* Inner screen — ONLY outer mask clips */}
        <div className="relative h-full w-full rounded-[3.5rem] overflow-hidden bg-[#FAFAFC] flex flex-col">
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-white/60 pointer-events-none z-10" />

          {/* Safe content zone — NO overflow clip; screen handles it */}
          <div className="flex h-full flex-col px-5 pt-5 pb-5 gap-y-2.5 sm:gap-y-3">
            {/* Status bar */}
            <div className="flex items-center justify-between h-5 shrink-0">
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400">
                9:41
              </span>
              <div className="flex items-center gap-[3px]">
                <div className="w-[5px] h-[5px] rounded-full bg-violet-500/60" />
                <div className="w-[5px] h-[5px] rounded-full bg-violet-500/40" />
                <div className="w-[5px] h-[5px] rounded-full bg-violet-500/20" />
              </div>
            </div>

            {/* Assistant header */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-xl bg-violet-100/70 flex items-center justify-center shrink-0">
                <Sparkles className="w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] text-violet-600" />
              </div>
              <div className="min-w-0 overflow-hidden flex-1">
                <p className="text-[13px] sm:text-[14px] font-semibold text-slate-900 leading-tight truncate">
                  TT Assistant
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight truncate">
                  Emma · 5T
                </p>
              </div>
            </div>

            {/* Alert card */}
            <div className="rounded-3xl bg-violet-50/80 px-3.5 sm:px-4 py-2.5 sm:py-3 shrink-0">
              <p className="text-[11px] sm:text-[12px] text-slate-800 leading-snug font-medium truncate">
                4 dinosaur shirts found
              </p>
              <p className="text-[11px] sm:text-[12px] text-violet-600 leading-snug font-semibold mt-0.5 truncate">
                Best price: $8
              </p>
            </div>

            {/* Product card — price column gets dedicated 56px */}
            <div className="flex items-center gap-2 sm:gap-3 rounded-3xl border border-slate-200/80 bg-white px-3 sm:px-4 py-2 sm:py-2.5 shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-violet-100/60 flex items-center justify-center shrink-0">
                <Zap className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-violet-500" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <p className="text-[11px] sm:text-[12px] font-semibold text-slate-900 leading-tight truncate">
                  Dino Tee
                </p>
                <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight truncate">
                  5T · Like New
                </p>
              </div>
              <div className="w-[56px] shrink-0 text-right pr-2">
                <p className="whitespace-nowrap text-[11px] sm:text-[12px] font-extrabold text-violet-600 leading-none">
                  $12.99
                </p>
                <span className="inline-block mt-[2px] px-1.5 py-px rounded-full bg-emerald-100 text-[8px] sm:text-[9px] font-bold text-emerald-700 leading-none">
                  Deal
                </span>
              </div>
            </div>

            {/* Timer row */}
            <div className="flex items-center justify-between shrink-0 gap-2">
              <div className="flex items-center gap-1.5 min-w-0 overflow-hidden">
                <Timer className="w-[13px] h-[13px] sm:w-[15px] sm:h-[15px] text-rose-500 animate-pulse shrink-0" />
                <span className="text-[11px] sm:text-[12px] font-semibold text-slate-700 truncate">
                  45s left
                </span>
              </div>
              <span className="text-[11px] sm:text-[12px] font-semibold text-slate-500 shrink-0">
                $8.50
              </span>
            </div>

            <div className="flex-1 min-h-0" />

            {/* Bottom CTA — Bid button centered, heart inset from right edge */}
            <div className="flex items-center gap-2.5 pt-1 sm:pt-2 shrink-0 px-1">
              <button className="flex-1 h-8 sm:h-9 rounded-full bg-[#0F0B1A] text-white text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1 shadow-sm shadow-violet-500/15 active:scale-[0.97] transition-transform">
                <Zap className="w-3 h-3 sm:w-[13px] sm:h-[13px] shrink-0" />
                Bid $8.50
              </button>
              <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-slate-200 flex items-center justify-center shrink-0 text-slate-400 hover:text-rose-400 hover:border-rose-200 transition-colors active:scale-[0.97] mr-1">
                <Heart className="w-[13px] h-[13px] sm:w-[15px] sm:h-[15px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Side crown */}
        <div className="absolute -right-[6px] top-[38%] h-[70px] w-[6px] rounded-r-full bg-[#1C1640]" />
        <div className="absolute -right-[6px] top-[56%] h-[32px] w-[6px] rounded-r-full bg-[#1C1640]" />
      </div>

      {/* Glow */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-500/[0.12] rounded-full blur-3xl animate-breathe pointer-events-none" />
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-rose-400/[0.06] rounded-full blur-2xl animate-float-slow pointer-events-none" />
    </motion.div>
  );
}
