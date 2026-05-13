"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/branding/Logo";
import {
  Settings,
  CreditCard,
  Package,
  Bell,
  LogOut,
  ChevronRight,
  Baby,
  Plus,
  Sparkles,
  Heart,
  Search,
} from "lucide-react";

const MENU_ITEMS = [
  { icon: Package, label: "My Orders", href: "/orders" },
  { icon: Heart, label: "Watchlist", href: "/watchlist" },
  { icon: Search, label: "Saved Searches", href: "/saved-searches" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: CreditCard, label: "Payment Methods", href: "/payment" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-dvh bg-brand-white">
      <div className="safe-top px-4 py-4 flex items-center justify-between">
        <Logo variant="compact" size="sm" />
        <button className="w-10 h-10 rounded-full bg-brand-purple/5 flex items-center justify-center">
          <Settings className="w-5 h-5 text-brand-purple" />
        </button>
      </div>

      <div className="px-4">
        <div className="text-center py-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-brand flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-brand-purple/20">
            S
          </div>
          <h1 className="text-xl font-bold text-brand-indigo">
            Sarah Mitchell
          </h1>
          <p className="text-sm text-brand-indigo/40">
            Mom of 3 · Joined March 2026
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-brand-indigo flex items-center gap-2">
              <Baby className="w-4 h-4 text-brand-purple" /> My Children
            </h2>
            <button className="w-8 h-8 rounded-full bg-brand-purple/5 flex items-center justify-center">
              <Plus className="w-4 h-4 text-brand-purple" />
            </button>
          </div>
          <div className="space-y-2">
            {[
              { name: "Emma", age: 4, size: "5T", theme: "🦕 Dinosaurs" },
              { name: "Noah", age: 7, size: "S", theme: "⚽ Sports" },
            ].map((child) => (
              <div
                key={child.name}
                className="flex items-center gap-3 p-3 rounded-2xl bg-brand-purple/3 border border-brand-purple/5"
              >
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple font-bold text-sm">
                  {child.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-brand-indigo text-sm">
                    {child.name}, {child.age}
                  </p>
                  <p className="text-xs text-brand-indigo/40">
                    Size {child.size} · {child.theme}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-brand-purple/5 border border-brand-purple/10 mb-6 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-brand-purple">
              AI Closet Memory
            </p>
            <p className="text-xs text-brand-indigo/50 mt-1">
              TT remembers Emma loves blue, space themes, and sensory-friendly
              fabrics. 12 purchases tracked. Growth prediction: size 6 by
              November.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-brand-purple/3 transition-colors"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-brand-indigo/40" />
                <span className="text-sm font-semibold text-brand-indigo">
                  {item.label}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-brand-indigo/20" />
            </button>
          ))}
        </div>

        <button className="w-full flex items-center justify-center gap-2 p-4 mt-4 rounded-2xl text-brand-pink font-semibold text-sm hover:bg-brand-pink/5 transition-colors">
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </div>
  );
}
