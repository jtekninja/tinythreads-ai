"use client";

import { motion } from "framer-motion";
import { Sparkles, Timer, Heart, Zap } from "lucide-react";

export function SmartWatchPreview() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
      className="relative mx-auto w-[260px] sm:w-[320px] lg:w-[360px] xl:w-[400px] max-w-full"
    >
      {/* Outer bezel shell — glossy metallic black */}
      <div className="relative aspect-square rounded-[4rem] bg-[#0F0B1A] p-[16px] shadow-[0_40px_100px_rgba(15,11,26,0.5)] ring-1 ring-white/[0.08]">
        {/* Glass surface highlight */}
        <div className="absolute inset-0 rounded-[4rem] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none z-10" />

        {/* Inner screen */}
        <div className="relative h-full w-full rounded-[3.5rem] overflow-hidden bg-[#FAFAFC] flex flex-col">
          {/* Top glass reflection */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-white/60 pointer-events-none z-10" />

          {/* ══ SAFE CONTENT ZONE — nothing escapes ══ */}
          <div className="flex h-full flex-col px-6 pt-6 pb-6 overflow-hidden gap-y-2.5 sm:gap-y-3">
            {/* Status bar */}
            <div className="flex items-center justify-between h-5 shrink-0 min-w-0">
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400">
                9:41
              </span>
              <div className="flex items-center gap-[3px] shrink-0">
                <div className="w-[5px] h-[5px] rounded-full bg-violet-500/60" />
                <div className="w-[5px] h-[5px] rounded-full bg-violet-500/40" />
                <div className="w-[5px] h-[5px] rounded-full bg-violet-500/20" />
              </div>
            </div>

            {/* Assistant header */}
            <div className="flex items-center gap-2.5 shrink-0 min-w-0">
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
            <div className="rounded-3xl bg-violet-50/80 px-3.5 sm:px-4 py-2.5 sm:py-3 shrink-0 min-w-0 overflow-hidden">
              <p className="text-[11px] sm:text-[12px] text-slate-800 leading-snug font-medium truncate">
                4 dinosaur shirts found
              </p>
              <p className="text-[11px] sm:text-[12px] text-violet-600 leading-snug font-semibold mt-0.5 truncate">
                Best price: $8
              </p>
            </div>

            {/* Product card — overflow-proof */}
            <div className="flex items-center gap-3 sm:gap-4 rounded-3xl border border-slate-200/80 bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 min-w-0 overflow-hidden shrink-0">
              {/* Thumbnail */}
              <div className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-2xl bg-violet-100/60 flex items-center justify-center shrink-0">
                <Zap className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] text-violet-500" />
              </div>
              {/* Info — constrained */}
              <div className="flex-1 min-w-0 overflow-hidden">
                <p className="text-[12px] sm:text-[13px] font-semibold text-slate-900 leading-tight truncate">
                  Dino Tee
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight truncate">
                  5T · Like New
                </p>
              </div>
              {/* Price — stick right */}
              <div className="shrink-0 text-right">
                <p className="text-[13px] sm:text-[15px] font-extrabold text-violet-600 leading-none truncate">
                  $12.99
                </p>
                <span className="inline-block mt-[2px] px-2 py-px rounded-full bg-emerald-100 text-[9px] sm:text-[10px] font-bold text-emerald-700 leading-none">
                  Deal
                </span>
              </div>
            </div>

            {/* Timer row */}
            <div className="flex items-center justify-between shrink-0 min-w-0 gap-2">
              <div className="flex items-center gap-1.5 min-w-0 overflow-hidden">
                <Timer className="w-[13px] h-[13px] sm:w-[15px] sm:h-[15px] text-rose-500 animate-pulse shrink-0" />
                <span className="text-[11px] sm:text-[12px] font-semibold text-slate-700 truncate">
                  45s left
                </span>
              </div>
              <span className="text-[11px] sm:text-[12px] font-semibold text-slate-500 shrink-0 truncate">
                $8.50
              </span>
            </div>

            {/* Spacer */}
            <div className="flex-1 min-h-0" />

            {/* Bottom actions */}
            <div className="flex items-center gap-2.5 pt-1 sm:pt-2 shrink-0">
              <button className="flex-1 h-9 sm:h-10 rounded-full bg-[#0F0B1A] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-sm shadow-violet-500/15 active:scale-[0.97] transition-transform truncate px-3 min-w-0 overflow-hidden">
                <Zap className="w-[13px] h-[13px] sm:w-[15px] sm:h-[15px] shrink-0" />
                <span className="truncate">Bid $8.50</span>
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-slate-200 flex items-center justify-center shrink-0 text-slate-400 hover:text-rose-400 hover:border-rose-200 transition-colors active:scale-[0.97]">
                <Heart className="w-[15px] h-[15px] sm:w-[17px] sm:h-[17px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Side crown + button */}
        <div className="absolute -right-[6px] top-[38%] h-[70px] w-[6px] rounded-r-full bg-[#1C1640]" />
        <div className="absolute -right-[6px] top-[56%] h-[32px] w-[6px] rounded-r-full bg-[#1C1640]" />
      </div>

      {/* Soft purple glow behind watch */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-500/[0.12] rounded-full blur-3xl animate-breathe pointer-events-none" />
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-rose-400/[0.06] rounded-full blur-2xl animate-float-slow pointer-events-none" />
    </motion.div>
  );
}
