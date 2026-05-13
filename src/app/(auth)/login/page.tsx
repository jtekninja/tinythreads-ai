"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/branding/Logo";
import Link from "next/link";
import { Mail, Chrome, Apple } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4 bg-brand-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6">
            <Logo variant="compact" size="xl" />
          </Link>
          <h1
            className="text-2xl font-extrabold text-brand-indigo mb-2"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Welcome back
          </h1>
          <p className="text-brand-indigo/50 text-sm">
            Sign in to continue with TinyThreads AI
          </p>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl border-2 border-brand-indigo/10 bg-white text-brand-indigo font-semibold hover:bg-brand-purple/5 hover:border-brand-purple/20 transition-all">
            <Chrome className="w-5 h-5" /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl border-2 border-brand-indigo/10 bg-white text-brand-indigo font-semibold hover:bg-brand-purple/5 hover:border-brand-purple/20 transition-all">
            <Apple className="w-5 h-5" /> Continue with Apple
          </button>

          <div className="flex items-center gap-3 py-2">
            <div className="flex-1 h-px bg-brand-indigo/10" />
            <span className="text-xs text-brand-indigo/30 font-medium">OR</span>
            <div className="flex-1 h-px bg-brand-indigo/10" />
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
            <Mail className="w-5 h-5" /> Sign In with Email
          </button>
        </div>

        <p className="text-center text-sm text-brand-indigo/50 mt-8">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-brand-purple font-semibold hover:underline"
          >
            Create one
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
