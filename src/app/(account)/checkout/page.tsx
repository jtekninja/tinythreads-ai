"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/branding/Logo";
import Link from "next/link";
import {
  CreditCard,
  Shield,
  ArrowLeft,
  Check,
  Smartphone,
  Wallet,
} from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="min-h-dvh bg-brand-white flex flex-col">
      <div className="safe-top px-4 py-3 flex items-center justify-between border-b border-brand-indigo/5">
        <Link
          href="/cart"
          className="flex items-center gap-2 text-brand-indigo/50 hover:text-brand-purple"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-semibold">Cart</span>
        </Link>
        <h1 className="text-lg font-bold text-brand-indigo">Checkout</h1>
        <div className="w-10" />
      </div>

      <div className="flex-1 px-4 py-6 space-y-6">
        {/* Shipping */}
        <div>
          <h2 className="text-sm font-bold text-brand-indigo mb-3 flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            Shipping
          </h2>
          <div className="p-4 rounded-2xl bg-brand-purple/3 border border-brand-purple/10 text-sm text-brand-indigo/60">
            <p className="font-semibold text-brand-indigo">
              123 Main St, Austin TX 78701
            </p>
            <p className="mt-1">Sarah Mitchell · (512) 555-0142</p>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h2 className="text-sm font-bold text-brand-indigo mb-3">Payment</h2>
          <div className="space-y-3">
            <button className="w-full p-4 rounded-2xl border-2 border-brand-purple bg-brand-purple/3 text-brand-purple font-semibold flex items-center gap-3">
              <Wallet className="w-5 h-5" /> Apple Pay
              <Check className="w-5 h-5 ml-auto" />
            </button>
            <button className="w-full p-4 rounded-2xl border-2 border-brand-indigo/10 text-brand-indigo/50 font-semibold flex items-center gap-3 hover:border-brand-purple/30 transition-all">
              <Smartphone className="w-5 h-5" /> Google Pay
            </button>
            <button className="w-full p-4 rounded-2xl border-2 border-brand-indigo/10 text-brand-indigo/50 font-semibold flex items-center gap-3 hover:border-brand-purple/30 transition-all">
              <CreditCard className="w-5 h-5" /> Credit Card
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-sm font-bold text-brand-indigo mb-3">
            Order Summary
          </h2>
          <div className="space-y-3">
            {[
              { name: "Dino Explorer Tee", price: 12.99 },
              { name: "Space Adventure Tee", price: 9.99 },
              { name: "Blue Shorts", price: 7.5 },
            ].map((item) => (
              <div key={item.name} className="flex justify-between text-sm">
                <span className="text-brand-indigo/60">{item.name}</span>
                <span className="text-brand-indigo font-medium">
                  ${item.price}
                </span>
              </div>
            ))}
            <div className="pt-3 border-t border-brand-indigo/5 space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-brand-indigo/50">Subtotal</span>
                <span className="text-brand-indigo">$30.48</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-brand-indigo/50">Shipping</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-lg font-extrabold text-brand-indigo pt-2 border-t border-brand-indigo/5">
                <span>Total</span>
                <span>$30.48</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="safe-bottom px-4 py-4 border-t border-brand-indigo/5 space-y-3">
        <button className="w-full py-4 rounded-2xl gradient-brand text-white font-extrabold text-lg shadow-xl shadow-brand-purple/30 flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform">
          <Wallet className="w-5 h-5" /> Pay $30.48 with Apple Pay
        </button>
        <div className="flex items-center justify-center gap-1.5 text-xs text-brand-indigo/30">
          <Shield className="w-3 h-3" />
          Protected by Stripe · Encrypted · Cancel anytime
        </div>
      </div>
    </div>
  );
}
