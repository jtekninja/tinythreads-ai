"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/branding/Logo";
import Link from "next/link";
import {
  Package,
  TrendingUp,
  DollarSign,
  Users,
  Sparkles,
  Plus,
  Zap,
  Settings,
  BarChart3,
} from "lucide-react";

export default function SellerDashboardPage() {
  return (
    <div className="min-h-dvh bg-brand-white">
      <div className="safe-top px-4 py-4 flex items-center justify-between">
        <Logo variant="compact" size="sm" />
        <button className="w-10 h-10 rounded-full bg-brand-purple/5 flex items-center justify-center">
          <Settings className="w-5 h-5 text-brand-purple" />
        </button>
      </div>

      <div className="px-4 pb-8">
        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-brand-indigo">
            Seller Dashboard
          </h1>
          <p className="text-brand-indigo/40 text-sm">
            Welcome back, HappyKidsCloset
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            {
              icon: DollarSign,
              label: "Revenue",
              value: "$2,450",
              color: "text-green-500",
              bg: "bg-green-50",
            },
            {
              icon: Package,
              label: "Active",
              value: "12",
              color: "text-brand-purple",
              bg: "bg-brand-purple/5",
            },
            {
              icon: TrendingUp,
              label: "Sold",
              value: "48",
              color: "text-brand-pink",
              bg: "bg-brand-pink/5",
            },
            {
              icon: Users,
              label: "Rating",
              value: "4.9★",
              color: "text-yellow-500",
              bg: "bg-yellow-50",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`p-4 rounded-2xl ${stat.bg} border border-brand-indigo/5`}
            >
              <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
              <p className={`text-2xl font-extrabold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-xs text-brand-indigo/40">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-3 mb-8">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full gradient-brand text-white font-semibold text-sm shadow-lg shadow-brand-purple/20">
            <Plus className="w-4 h-4" /> New Listing
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border-2 border-brand-purple/20 text-brand-purple font-semibold text-sm">
            <Zap className="w-4 h-4" /> Create Auction
          </button>
        </div>

        {/* AI Tips */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-purple/5 to-brand-pink/5 border border-brand-purple/10 mb-6 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-brand-purple">AI Seller Tip</p>
            <p className="text-xs text-brand-indigo/50 mt-1">
              Dinosaur tees in 5T are trending. List $12-15 for fastest sale.
              Consider lightning auction for maximum engagement.
            </p>
          </div>
        </div>

        {/* Active Listings */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-brand-indigo">
              Active Listings
            </h2>
            <span className="text-sm text-brand-purple font-semibold">
              See all
            </span>
          </div>
          <div className="space-y-3">
            {[
              {
                title: "Dino Explorer Tee",
                price: 12.99,
                views: 142,
                bids: 7,
                status: "Auction",
              },
              {
                title: "Space Set",
                price: 24.99,
                views: 89,
                bids: 0,
                status: "Buy Now",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-2xl bg-brand-purple/3 border border-brand-purple/5"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-brand-purple" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-brand-indigo truncate">
                    {item.title}
                  </p>
                  <p className="text-xs text-brand-indigo/40">
                    {item.views} views · {item.bids} bids
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-brand-purple">${item.price}</p>
                  <p className="text-xs text-brand-indigo/30">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div className="grid grid-cols-4 gap-3 mt-8 pt-6 border-t border-brand-indigo/5">
          {[
            { icon: BarChart3, label: "Analytics", href: "/seller/analytics" },
            { icon: Package, label: "Inventory", href: "/seller/inventory" },
            { icon: Zap, label: "Auctions", href: "/seller/auctions" },
            { icon: DollarSign, label: "Payouts", href: "/seller/payouts" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-brand-purple/5 transition-colors"
            >
              <item.icon className="w-6 h-6 text-brand-indigo/40" />
              <span className="text-xs text-brand-indigo/50">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
