"use client";

import { motion } from "framer-motion";
import { Sparkles, Timer, Heart, Zap } from "lucide-react";

// ══════════════════════════════════════════════════════════════════
// SmartWatchPreview — Apple Watch / Galaxy Watch wearable mockup
// Glanceable compact UI: alerts, product card, fast-action buttons
// ══════════════════════════════════════════════════════════════════

export function SmartWatchPreview() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      }}
      className="relative mx-auto w-[280px] sm:w-[300px] lg:w-[320px] xl:w-[340px]"
    >
      {/* ══ Outer watch body / bezel ══ */}
      <div className="relative aspect-square rounded-[5rem] bg-[#1A1540] p-[14px] shadow-[0_30px_80px_rgba(37,24,99,0.35)] ring-1 ring-white/[0.10]">
        {/* ══ Inner screen ══ */}
        <div className="relative h-full w-full rounded-[4rem] overflow-hidden bg-[#FAFAFC] flex flex-col">
          {/* Subtle top highlight for glass effect */}
          <div className="absolute top-0 left-4 right-4 h-px bg-white/60 pointer-events-none z-10" />

          {/* ══ Screen safe area ══ */}
          <div className="flex flex-col h-full min-h-0 px-[18px] pt-[16px] pb-[18px] gap-3">
            {/* ── Status bar ── */}
            <div className="flex items-center justify-between h-[22px] shrink-0">
              <span className="text-[10px] font-semibold text-slate-400 tracking-tight">
                9:41
              </span>
              <div className="flex items-center gap-[3px]">
                <div className="w-[5px] h-[5px] rounded-full bg-violet-500/60" />
                <div className="w-[5px] h-[5px] rounded-full bg-violet-500/40" />
                <div className="w-[5px] h-[5px] rounded-full bg-violet-500/20" />
              </div>
            </div>

            {/* ── Assistant header ── */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-[26px] h-[26px] rounded-lg bg-violet-100/70 flex items-center justify-center shrink-0">
                <Sparkles className="w-[14px] h-[14px] text-violet-600" />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-slate-900 leading-tight">
                  TT Assistant
                </p>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Emma · 5T
                </p>
              </div>
            </div>

            {/* ── Alert card ── */}
            <div className="rounded-2xl bg-violet-50/80 px-3 py-2 shrink-0">
              <p className="text-[11px] text-slate-800 leading-snug font-medium">
                4 dinosaur shirts found
              </p>
              <p className="text-[11px] text-violet-600 leading-snug font-semibold mt-0.5">
                Best price $8
              </p>
            </div>

            {/* ── Product mini card ── */}
            <div className="rounded-2xl border border-slate-200/80 bg-white px-3 py-2 flex items-center gap-2.5 shrink-0">
              {/* Thumbnail */}
              <div className="w-9 h-9 rounded-xl bg-violet-100/60 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-violet-500" />
              </div>
              {/* Info */}
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold text-slate-900 leading-tight truncate">
                  Dino Explorer Tee
                </p>
                <p className="text-[9px] text-slate-400 leading-tight">
                  5T · Like New
                </p>
              </div>
              {/* Price + badge */}
              <div className="text-right shrink-0">
                <p className="text-[13px] font-extrabold text-violet-600 leading-none">
                  $12.99
                </p>
                <span className="inline-block mt-0.5 px-1.5 py-px rounded-full bg-emerald-100 text-[8px] font-bold text-emerald-700 leading-tight">
                  Great Deal
                </span>
              </div>
            </div>

            {/* ── Timer / info row ── */}
            <div className="flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1">
                <Timer className="w-3 h-3 text-rose-500 animate-pulse" />
                <span className="text-[10px] font-semibold text-slate-700">
                  45s left
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-500">
                Current $8.50
              </span>
            </div>

            {/* Spacer pushes buttons to bottom */}
            <div className="flex-1 min-h-0" />

            {/* ── Bottom actions ── */}
            <div className="flex items-center gap-2 shrink-0">
              <button className="flex-1 h-[34px] rounded-full bg-[#241B5E] text-white text-[12px] font-semibold flex items-center justify-center gap-1.5 shadow-sm shadow-violet-500/15 active:scale-[0.97] transition-transform">
                <Zap className="w-3 h-3" />
                Bid
              </button>
              <button className="w-[34px] h-[34px] rounded-full border border-slate-200 flex items-center justify-center shrink-0 text-slate-400 hover:text-rose-400 hover:border-rose-200 transition-colors active:scale-[0.97]">
                <Heart className="w-[15px] h-[15px]" />
              </button>
            </div>
          </div>
        </div>

        {/* ══ Side crown ══ */}
        <div className="absolute -right-[5px] top-[38%] h-[60px] w-[5px] rounded-r-full bg-[#2B216B]" />
        {/* ══ Side button ══ */}
        <div className="absolute -right-[5px] top-[58%] h-[28px] w-[5px] rounded-r-full bg-[#2B216B]" />
      </div>

      {/* ══ Ambient glow blobs ══ */}
      <div className="absolute -top-6 -left-8 w-[100px] h-[100px] bg-violet-500/[0.10] rounded-full blur-2xl animate-breathe pointer-events-none" />
      <div className="absolute -bottom-6 -right-8 w-[90px] h-[90px] bg-rose-400/[0.07] rounded-full blur-2xl animate-float-slow pointer-events-none" />
    </motion.div>
  );
}
