"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/branding/Logo";
import Link from "next/link";
import { Mail, Chrome, Apple, User, Sparkles } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4 bg-brand-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <Logo variant="compact" size="xl" />
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/8 text-sm font-semibold text-brand-purple mb-4">
            <Sparkles className="w-4 h-4" /> AI-Powered Shopping
          </div>
          <h1
            className="text-2xl font-extrabold text-brand-indigo mb-2"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Join TinyThreads AI
          </h1>
          <p className="text-brand-indigo/50 text-sm">
            Start saving hours on kids clothing
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-brand-indigo mb-1.5">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-2xl bg-brand-purple/5 border border-brand-purple/10 text-brand-indigo placeholder:text-brand-indigo/30 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-indigo mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="parent@email.com"
              className="w-full px-4 py-3 rounded-2xl bg-brand-purple/5 border border-brand-purple/10 text-brand-indigo placeholder:text-brand-indigo/30 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition-all"
            />
          </div>
          <button className="w-full px-5 py-3.5 rounded-2xl gradient-brand text-white font-bold shadow-lg shadow-brand-purple/25 hover:shadow-xl transition-all flex items-center justify-center gap-2">
            <User className="w-5 h-5" /> Create Account
          </button>

          <div className="flex items-center gap-3 py-2">
            <div className="flex-1 h-px bg-brand-indigo/10" />
            <span className="text-xs text-brand-indigo/30 font-medium">or</span>
            <div className="flex-1 h-px bg-brand-indigo/10" />
          </div>

          <button className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl border-2 border-brand-indigo/10 bg-white text-brand-indigo font-semibold hover:bg-brand-purple/5 hover:border-brand-purple/20 transition-all">
            <Chrome className="w-5 h-5" /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl border-2 border-brand-indigo/10 bg-white text-brand-indigo font-semibold hover:bg-brand-purple/5 hover:border-brand-purple/20 transition-all">
            <Apple className="w-5 h-5" /> Continue with Apple
          </button>
        </div>

        <p className="text-center text-xs text-brand-indigo/30 mt-6 leading-relaxed">
          By creating an account, you agree to our Terms of Service and Privacy
          Policy.
        </p>

        <p className="text-center text-sm text-brand-indigo/50 mt-4">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-brand-purple font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
