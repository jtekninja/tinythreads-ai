"use client";

import { useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/branding/Logo";
import {
  Timer,
  TrendingUp,
  Users,
  Zap,
  Sparkles,
  ArrowLeft,
  Bell,
  Gem,
} from "lucide-react";
import Link from "next/link";

export default function AuctionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolved = use(params);
  const [timeLeft, setTimeLeft] = useState(45);
  const [currentBid, setCurrentBid] = useState(8.5);
  const [bidAmount, setBidAmount] = useState(9.5);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (!isLive) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setIsLive(false);
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isLive]);

  const handleBid = () => {
    setCurrentBid(bidAmount);
    setBidAmount((p) => +(p + 1).toFixed(2));
    if (timeLeft < 10) setTimeLeft(10); // Reset to 10s if under 10
  };

  return (
    <div className="min-h-dvh bg-brand-white">
      {/* Header */}
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
          <Bell className="w-5 h-5 text-brand-purple" />
        </button>
      </div>

      {/* Product Info */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-20 h-20 rounded-2xl gradient-card flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-10 h-10 text-brand-purple" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold">
                LIGHTNING ⚡
              </span>
              <span className="px-2 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold">
                5T
              </span>
            </div>
            <h1 className="text-xl font-bold text-brand-indigo">
              Dino Explorer Tee
            </h1>
            <p className="text-sm text-brand-indigo/40">Carter's · LIKE NEW</p>
          </div>
        </div>

        {/* Deal score */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-green-50 border border-green-100 mb-6">
          <Gem className="w-6 h-6 text-green-500" />
          <div>
            <p className="text-sm font-bold text-green-700">
              Great Deal • 92/100
            </p>
            <p className="text-xs text-green-600">
              43% below average price for 5T dinosaur shirts
            </p>
          </div>
        </div>
      </div>

      {/* Timer & Bidding */}
      <div className="px-4 pb-8">
        {/* Countdown */}
        <motion.div
          className={`rounded-3xl p-6 mb-6 text-center ${
            timeLeft <= 10
              ? "bg-brand-pink/10 border-2 border-brand-pink animate-pulse"
              : "bg-brand-indigo/5 border-2 border-brand-indigo/10"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Timer
              className={`w-5 h-5 ${timeLeft <= 10 ? "text-brand-pink" : "text-brand-indigo/50"}`}
            />
            <span className="text-sm font-semibold text-brand-indigo/50">
              Auction ends in
            </span>
          </div>
          <p
            className={`text-5xl font-extrabold tracking-tight mb-1 ${timeLeft <= 10 ? "text-brand-pink" : "text-brand-indigo"}`}
          >
            {isLive ? `${timeLeft}s` : "ENDED"}
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-brand-indigo/40">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" /> 12 bidders
            </span>
            <span className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" /> {5 + Math.floor(timeLeft / 3)}{" "}
              watching
            </span>
          </div>
        </motion.div>

        {/* Current Bid */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-brand-indigo/40">Current bid</p>
            <p className="text-3xl font-extrabold text-brand-indigo">
              ${currentBid.toFixed(2)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-brand-indigo/40">Next bid</p>
            <p className="text-xl font-bold text-brand-purple">
              ${(currentBid + 1).toFixed(2)}
            </p>
          </div>
        </div>

        {/* Bid Button */}
        <button
          onClick={handleBid}
          disabled={!isLive}
          className={`w-full py-5 rounded-2xl font-extrabold text-xl shadow-xl transition-all ${
            isLive
              ? "gradient-brand text-white shadow-brand-purple/30 hover:scale-[1.02] active:scale-100"
              : "bg-brand-indigo/5 text-brand-indigo/20 cursor-not-allowed"
          }`}
        >
          {isLive ? `Bid $${bidAmount.toFixed(2)}` : "Auction Ended"}
        </button>

        {/* Recent bids */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-brand-indigo/40 mb-3">
            Recent Bids
          </h3>
          <div className="space-y-2">
            {[
              { user: "MomOf2", amount: 8.5, time: "just now" },
              { user: "DadLife", amount: 7.5, time: "5s ago" },
              { user: "SuperSaver", amount: 6.0, time: "12s ago" },
            ].map((bid, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b border-brand-indigo/5"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple text-xs font-bold">
                    {bid.user[0]}
                  </div>
                  <span className="text-sm font-semibold text-brand-indigo">
                    {bid.user}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-brand-indigo">
                    ${bid.amount}
                  </span>
                  <span className="text-xs text-brand-indigo/30 ml-2">
                    {bid.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
