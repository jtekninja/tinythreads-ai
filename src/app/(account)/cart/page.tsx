"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/branding/Logo";
import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  Sparkles,
  ArrowLeft,
  CreditCard,
  Shield,
  Gem,
} from "lucide-react";

const MOCK_CART = [
  {
    id: "1",
    title: "Dino Explorer Tee",
    size: "5T",
    price: 12.99,
    image: null,
  },
  {
    id: "2",
    title: "Space Adventure Tee",
    size: "5T",
    price: 9.99,
    image: null,
  },
  { id: "3", title: "Blue Shorts", size: "5T", price: 7.5, image: null },
];

export default function CartPage() {
  const subtotal = MOCK_CART.reduce((s, i) => s + i.price, 0);
  const shipping = subtotal > 25 ? 0 : 4.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-dvh bg-brand-white flex flex-col">
      <div className="safe-top px-4 py-3 flex items-center justify-between border-b border-brand-indigo/5">
        <Link
          href="/feed"
          className="flex items-center gap-2 text-brand-indigo/50 hover:text-brand-purple"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-semibold">Back</span>
        </Link>
        <h1 className="text-lg font-bold text-brand-indigo">
          Cart ({MOCK_CART.length})
        </h1>
        <div className="w-10" />
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {MOCK_CART.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 text-brand-indigo/10 mx-auto mb-4" />
            <p className="text-brand-indigo/50">Your cart is empty</p>
            <Link
              href="/feed"
              className="text-brand-purple font-semibold text-sm mt-2 inline-block"
            >
              Start shopping
            </Link>
          </div>
        ) : (
          MOCK_CART.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3 rounded-2xl bg-brand-purple/3 border border-brand-purple/5"
            >
              <div className="w-16 h-16 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-brand-indigo text-sm truncate">
                  {item.title}
                </p>
                <p className="text-xs text-brand-indigo/40">Size {item.size}</p>
                <p className="font-bold text-brand-purple text-sm mt-1">
                  ${item.price}
                </p>
              </div>
              <button className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink">
                <Trash2 className="w-4 h-4" />
              </button>
            </motion.div>
          ))
        )}

        {MOCK_CART.length > 0 && (
          <div className="mt-4 p-4 rounded-2xl bg-green-50 border border-green-100 flex items-start gap-3">
            <Gem className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-green-700">
                Great bundle savings!
              </p>
              <p className="text-xs text-green-600">
                These items work well together for summer 2026.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="safe-bottom px-4 py-4 border-t border-brand-indigo/5 space-y-3">
        <div className="space-y-1.5 text-sm">
          <div className="flex justify-between text-brand-indigo/50">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-brand-indigo/50">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between text-brand-indigo font-bold text-lg pt-2 border-t border-brand-indigo/5">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <Link
          href="/checkout"
          className="w-full py-4 rounded-2xl gradient-brand text-white font-extrabold text-lg shadow-xl shadow-brand-purple/30 flex items-center justify-center gap-2"
        >
          <CreditCard className="w-5 h-5" /> Checkout
        </Link>
        <div className="flex items-center justify-center gap-1.5 text-xs text-brand-indigo/30">
          <Shield className="w-3 h-3" />
          Secure checkout · Apple Pay · Google Pay
        </div>
      </div>
    </div>
  );
}
