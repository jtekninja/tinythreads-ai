"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { Logo } from "@/components/branding/Logo";
import { SmartWatchPreview } from "@/components/marketing/SmartWatchPreview";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  Heart,
  ShoppingBag,
  Brain,
  Timer,
  TrendingUp,
  Shield,
  ArrowRight,
  Package,
  MessageCircle,
  Bell,
  Wand2,
  Layers,
  Eye,
  BarChart3,
  Gift,
  Cpu,
  BadgeCheck,
  DollarSign,
  Camera,
  Share2,
  type LucideIcon,
} from "lucide-react";

// ── Animation variants ──
const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// ── Stat component ──
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center px-4 py-3">
      <p className="text-2xl md:text-3xl font-extrabold text-brand-indigo tracking-tight">
        {value}
      </p>
      <p className="text-xs md:text-sm text-brand-indigo/35 mt-0.5">{label}</p>
    </div>
  );
}

// ── AI Feature card (premium) ──
function AIFeatureCard({
  icon: Icon,
  title,
  desc,
  accent = "purple",
  stat,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  accent?: "purple" | "pink" | "green" | "amber";
  stat?: string;
}) {
  const accentStyles = {
    purple:
      "from-violet-50 to-violet-100/40 border-violet-200/50 hover:border-violet-300/60",
    pink: "from-rose-50 to-rose-100/40 border-rose-200/50 hover:border-rose-300/60",
    green:
      "from-emerald-50 to-emerald-100/40 border-emerald-200/50 hover:border-emerald-300/60",
    amber:
      "from-amber-50 to-amber-100/40 border-amber-200/50 hover:border-amber-300/60",
  };

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className={`relative rounded-2xl border bg-gradient-to-br ${accentStyles[accent]} p-5 md:p-6 transition-all duration-300 group overflow-visible`}
    >
      <div className="w-11 h-11 rounded-xl bg-white/80 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-[22px] h-[22px] text-brand-purple" />
      </div>
      <h3 className="font-bold text-brand-indigo text-base md:text-lg mb-1.5">
        {title}
      </h3>
      <p className="text-sm text-brand-indigo/45 leading-relaxed">{desc}</p>
      {stat && (
        <div className="mt-4 pt-3 border-t border-brand-indigo/5 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
          <span className="text-xs font-semibold text-brand-purple">
            {stat}
          </span>
        </div>
      )}
    </motion.div>
  );
}

// ── "Pack My Kid" quick prompts ──
const PACK_PROMPTS = [
  { emoji: "🏰", label: "Pack for Disney", result: "3 outfits, $47" },
  { emoji: "📚", label: "School week bundle", result: "5 outfits, $62" },
  { emoji: "⚽", label: "Soccer weekend", result: "2 kits, $31" },
  { emoji: "🌧️", label: "Rainy day outfit", result: "1 set, $19" },
  { emoji: "✈️", label: "Vacation capsule", result: "4 outfits, $55" },
  { emoji: "🎂", label: "Birthday party look", result: "1 outfit, $22" },
];

// ── Social proof cards ──
const SOCIAL_PROOF = [
  { emoji: "⏱️", stat: "3 hrs", label: "Saved per week" },
  { emoji: "💰", stat: "38%", label: "Below retail avg" },
  { emoji: "🧠", stat: "AI", label: "Remembers sizes" },
  { emoji: "📦", stat: "1-tap", label: "Checkout" },
];

// ══════════════════════════════════════════════════════════════════

export default function LandingPage() {
  const [packMode, setPackMode] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [aiThinking, setAiThinking] = useState(false);

  const handlePackPrompt = useCallback((label: string) => {
    setSelectedPrompt(label);
    setAiThinking(true);
    setTimeout(() => {
      setAiThinking(false);
    }, 1800);
  }, []);

  return (
    <div className="min-h-dvh bg-brand-white overflow-x-clip selection:bg-brand-purple/15 selection:text-brand-purple">
      {/* ══════════════════════ NAVBAR ══════════════════════ */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="navbar-glass safe-top"
      >
        <div className="container-page h-16 flex items-center justify-between">
          <Logo variant="full" size="md" />
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-indigo/45">
            <span className="hover:text-brand-purple transition-colors cursor-pointer">
              AI Features
            </span>
            <span className="hover:text-brand-purple transition-colors cursor-pointer">
              How It Works
            </span>
            <span className="hover:text-brand-purple transition-colors cursor-pointer">
              For Sellers
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="btn-secondary text-sm !px-5 !py-2.5">
              Sign In
            </Link>
            <Link
              href="/register"
              className="btn-primary text-sm !px-5 !py-2.5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative min-h-[100svh] flex items-start lg:items-center safe-top overflow-visible">
        {/* Atmosphere */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-brand-purple/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-brand-pink/4 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[200px] bg-brand-glow/4 rounded-full blur-3xl" />
        </div>

        <div className="container-page relative w-full pt-28 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* LEFT: Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="flex-shrink-0 min-w-0 overflow-visible"
            >
              {/* Badge */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/6 border border-brand-purple/10 mb-8"
              >
                <Sparkles className="w-4 h-4 text-brand-purple" />
                <span className="text-sm font-semibold text-brand-purple">
                  Your AI Closet Assistant
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="hero-headline text-brand-indigo mb-6 overflow-visible"
              >
                <span className="block lg:inline">AI Shopping</span>{" "}
                <span className="block lg:inline">for </span>
                <span className="gradient-brand-text block lg:inline">
                  Growing Kids
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg text-brand-indigo/50 max-w-[44ch] mb-10 leading-relaxed"
              >
                The AI that remembers every size, predicts growth, and finds the
                best deals — so you never waste hours shopping again.
              </motion.p>

              {/* CTA row */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <Link href="/register" className="btn-primary text-base">
                  Try TinyThreads Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/feed" className="btn-secondary text-base">
                  Browse the Feed
                </Link>
              </motion.div>

              {/* Social proof row */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-6 md:gap-10 pt-10 mt-10 border-t border-brand-indigo/5"
              >
                {SOCIAL_PROOF.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="text-lg">{item.emoji}</span>
                    <div>
                      <p className="text-sm font-extrabold text-brand-indigo leading-tight">
                        {item.stat}
                      </p>
                      <p className="text-[10px] text-brand-indigo/35 leading-tight">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: SmartWatch */}
            <motion.div
              variants={fadeInScale}
              initial="hidden"
              animate="visible"
              className="flex justify-center lg:justify-end flex-shrink-0"
            >
              <SmartWatchPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PACK MY KID — AI MAGIC ══════════════════════ */}
      <section className="relative section-py bg-brand-cream/30 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,0.06)_0%,transparent_70%)]" />
        <div className="container-page relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerChildren}
            className="text-center mb-14 md:mb-18 max-w-2xl mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100/70 border border-violet-200/60 mb-6"
            >
              <Wand2 className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-semibold text-violet-700">
                TikTok Viral Feature
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="section-headline text-brand-indigo mb-4 max-w-[16ch] mx-auto"
            >
              &ldquo;Pack My Kid&rdquo; — AI Wardrobe Builder
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base text-brand-indigo/45 max-w-[44ch] mx-auto"
            >
              Tell the AI where you're going and your budget. TT instantly
              builds complete outfits — color-matched, size-perfect, and
              budget-optimized.
            </motion.p>
          </motion.div>

          {/* Prompt grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-4xl mx-auto mb-10">
            {PACK_PROMPTS.map((prompt) => (
              <motion.button
                key={prompt.label}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handlePackPrompt(prompt.label)}
                className={`relative rounded-2xl border p-4 text-center transition-all duration-300 cursor-pointer ${
                  selectedPrompt === prompt.label
                    ? "border-brand-purple/40 bg-brand-purple/5 shadow-[0_0_24px_rgba(139,92,246,0.12)]"
                    : "border-brand-indigo/6 bg-white hover:border-brand-purple/20 hover:shadow-md"
                }`}
              >
                <span className="text-2xl block mb-1.5">{prompt.emoji}</span>
                <p className="text-xs font-semibold text-brand-indigo leading-tight">
                  {prompt.label}
                </p>
                <p className="text-[10px] text-brand-indigo/30 mt-1">
                  {prompt.result}
                </p>
              </motion.button>
            ))}
          </div>

          {/* AI Response card */}
          <AnimatePresence mode="wait">
            {selectedPrompt && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-xl mx-auto"
              >
                <div className="rounded-2xl border-2 border-brand-purple/15 bg-white p-5 md:p-6 shadow-lg shadow-brand-purple/5">
                  {aiThinking ? (
                    <div className="flex items-center gap-3 py-4">
                      <div className="flex items-center gap-1">
                        <div
                          className="w-2 h-2 rounded-full bg-brand-purple animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-2 h-2 rounded-full bg-brand-purple animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-2 h-2 rounded-full bg-brand-purple animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                      <span className="text-sm text-brand-indigo/50 font-medium">
                        AI is building your kid's wardrobe...
                      </span>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-brand-purple" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-brand-purple">
                            TT Assistant
                          </p>
                          <p className="text-[10px] text-brand-indigo/35">
                            Emma · 5T
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-sm text-brand-indigo/70">
                          <BadgeCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>
                            Found the perfect {selectedPrompt.toLowerCase()}{" "}
                            look
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-brand-indigo/70">
                          <DollarSign className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>
                            Budget optimized — 38% below retail average
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-brand-indigo/70">
                          <Camera className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>Matches Emma's favorite colors & style</span>
                        </div>
                      </div>
                      <div className="mt-5 pt-4 border-t border-brand-indigo/5 flex items-center gap-3">
                        <Link
                          href="/register"
                          className="btn-primary text-sm !py-2 !px-5"
                        >
                          See Full Wardrobe
                        </Link>
                        <button
                          className="btn-secondary text-sm !py-2 !px-4"
                          onClick={() => setSelectedPrompt(null)}
                        >
                          Try Another
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════ AI CLOSET BRAIN ══════════════════════ */}
      <section className="section-py">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Visual */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Closet visualization */}
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-brand-purple/5 via-brand-cream to-brand-pink/3 border border-brand-purple/8 p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-brand-purple/10 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-brand-purple" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-indigo">
                        Emma's Closet AI
                      </p>
                      <p className="text-[10px] text-brand-indigo/35">
                        Last synced: Just now
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-3 gap-2">
                    {[
                      {
                        label: "👕 Tops",
                        count: "12",
                        color: "bg-blue-50 border-blue-200/50",
                      },
                      {
                        label: "👖 Bottoms",
                        count: "7",
                        color: "bg-amber-50 border-amber-200/50",
                      },
                      {
                        label: "🧥 Outer",
                        count: "3 ⚠️",
                        color: "bg-rose-50 border-rose-200/50",
                      },
                      {
                        label: "👟 Shoes",
                        count: "5",
                        color: "bg-emerald-50 border-emerald-200/50",
                      },
                      {
                        label: "🧢 Accs",
                        count: "4",
                        color: "bg-purple-50 border-purple-200/50",
                      },
                      {
                        label: "👗 Dresses",
                        count: "2",
                        color: "bg-pink-50 border-pink-200/50",
                      },
                    ].map((cat) => (
                      <div
                        key={cat.label}
                        className={`rounded-xl border p-2 ${cat.color} flex flex-col items-center justify-center`}
                      >
                        <span className="text-xs font-bold text-brand-indigo">
                          {cat.count}
                        </span>
                        <span className="text-[9px] text-brand-indigo/40">
                          {cat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-brand-purple/6 rounded-xl p-3 mt-auto">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
                      <p className="text-[10px] text-brand-purple font-semibold">
                        Low on hoodies — fall is 2 months away
                      </p>
                    </div>
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute -inset-8 bg-brand-purple/3 rounded-full blur-3xl -z-10" />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerChildren}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100/70 border border-violet-200/60 mb-6"
              >
                <Layers className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-semibold text-violet-700">
                  AI Closet Twin
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="section-headline text-brand-indigo mb-4 max-w-[16ch]"
              >
                Your Kid's Closet, Remembered Forever
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-base text-brand-indigo/45 max-w-[42ch] mb-6 leading-relaxed"
              >
                TT builds a living AI memory of every size, color, and theme
                your child loves. It tracks what you own, predicts what you'll
                need, and alerts you before growth spurts hit.
              </motion.p>
              <motion.div variants={fadeUp} className="space-y-3 mb-8">
                {[
                  {
                    icon: Brain,
                    text: "Learns your child's size, colors & favorite themes",
                  },
                  {
                    icon: TrendingUp,
                    text: "Predicts next size before the growth spurt hits",
                  },
                  {
                    icon: Bell,
                    text: "Alerts when wardrobe gaps appear (low on hoodies!)",
                  },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-purple/6 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-brand-purple" />
                    </div>
                    <span className="text-sm text-brand-indigo/60">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link href="/register" className="btn-primary text-sm">
                  Build Your Closet Twin
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ AI FEATURES — NEXT GEN ══════════════════════ */}
      <section className="relative section-py bg-brand-indigo overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[600px] bg-brand-purple/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-brand-pink/5 rounded-full blur-3xl" />
        </div>

        <div className="container-page relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerChildren}
            className="text-center mb-16 md:mb-20 max-w-2xl mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6"
            >
              <Cpu className="w-4 h-4 text-brand-purple-light" />
              <span className="text-sm font-semibold text-brand-purple-light">
                AI-Native Shopping
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="section-headline text-white mb-4 max-w-[18ch] mx-auto"
            >
              Not a Store. Your AI Closet Copilot.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base text-white/40 max-w-[44ch] mx-auto"
            >
              Every feature is AI-native. TT learns, predicts, searches, and
              optimizes — so you just approve.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerChildren}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto"
          >
            <AIFeatureCard
              icon={Wand2}
              title="Pack My Kid AI"
              desc="Type any scenario. TT builds complete outfits in seconds. &ldquo;Pack for Disney&rdquo; — done."
              accent="purple"
              stat="Viral TikTok feature"
            />
            <AIFeatureCard
              icon={Brain}
              title="AI Closet Twin"
              desc="Virtual memory of everything your child owns. Tracks sizes, gaps, and favorites."
              accent="amber"
              stat="Remembers forever"
            />
            <AIFeatureCard
              icon={Timer}
              title="AI Deal Hunter"
              desc="Auto-searches, auto-alerts, auto-bids. TT finds steals 24/7 while you parent."
              accent="pink"
              stat="Avg 38% below retail"
            />
            <AIFeatureCard
              icon={TrendingUp}
              title="Growth Timeline"
              desc="Interactive prediction of size changes. TT tells you when to buy the next size."
              accent="green"
              stat="±2 weeks accuracy"
            />
            <AIFeatureCard
              icon={Layers}
              title="One-Tap Wardrobe"
              desc="&ldquo;Build Spring Wardrobe&rdquo; — AI creates a complete, budget-optimized clothing system."
              accent="amber"
              stat="Saves 3+ hours"
            />
            <AIFeatureCard
              icon={BarChart3}
              title="Emotional Savings"
              desc="TT shows money saved, time saved, and stress avoided — dopamine for parents."
              accent="green"
              stat="Retention psychology"
            />
            <AIFeatureCard
              icon={Zap}
              title="Swipe Shopping 2.0"
              desc="TikTok-speed vertical cards. Swipe to save, bid, or buy — pure dopamine flow."
              accent="pink"
              stat="50% faster decisions"
            />
            <AIFeatureCard
              icon={DollarSign}
              title="Resell Value AI"
              desc="See predicted resale value, durability score, and brand popularity before buying."
              accent="purple"
              stat="Smarter spending"
            />
            <AIFeatureCard
              icon={Camera}
              title="Visual Search AI"
              desc="Snap a photo or upload a Pinterest look. AI finds matching items instantly."
              accent="amber"
              stat="Coming soon"
            />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ ZERO EFFORT SHOPPING ══════════════════════ */}
      <section className="section-py">
        <div className="container-page">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/70 border border-emerald-200/60 mb-6"
            >
              <Eye className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-700">
                The Ultimate Goal
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="section-headline text-brand-indigo mb-4 max-w-[18ch] mx-auto"
            >
              Shopping That Happens{" "}
              <span className="gradient-brand-text">For You</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base text-brand-indigo/45 max-w-[44ch] mx-auto leading-relaxed"
            >
              The AI knows what your child needs, when they'll need it, and what
              fits their style. You just approve. That's Zero Effort Shopping™.
            </motion.p>
          </motion.div>

          {/* Timeline visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative pl-8 border-l-2 border-brand-purple/15 space-y-8">
              {[
                {
                  step: "01",
                  icon: MessageCircle,
                  title: "TT Learns Your Child",
                  desc: "Add sizes, colors, favorite animals. TT builds a living AI profile.",
                  active: true,
                },
                {
                  step: "02",
                  icon: Brain,
                  title: "AI Predicts & Searches",
                  desc: "TT hunts deals, predicts growth, finds gaps. All silently — 24/7.",
                },
                {
                  step: "03",
                  icon: Bell,
                  title: "You Get Smart Alerts",
                  desc: "Wearable notifications. One-tap approve. Done.",
                },
                {
                  step: "04",
                  icon: Gift,
                  title: "Wardrobe Arrives",
                  desc: "Complete outfits, perfect fit, under budget. TT handles the rest.",
                },
                {
                  step: "05",
                  icon: Share2,
                  title: "Share & Repeat",
                  desc: "Share your AI-built wardrobe on TikTok. TT keeps learning.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative"
                >
                  <div
                    className={`absolute -left-[37px] w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-extrabold text-white ${
                      item.active
                        ? "bg-gradient-to-br from-brand-purple to-brand-pink shadow-md shadow-brand-purple/20"
                        : "bg-brand-indigo/15 text-brand-indigo/60"
                    }`}
                  >
                    {item.step}
                  </div>
                  <div className="pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon
                        className={`w-4 h-4 ${item.active ? "text-brand-purple" : "text-brand-indigo/40"}`}
                      />
                      <h3
                        className={`text-base font-bold ${item.active ? "text-brand-indigo" : "text-brand-indigo/40"}`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-brand-indigo/40 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
      <section className="section-py-sm bg-brand-cream/50">
        <div className="container-page">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pink/6 border border-brand-pink/8 mb-6"
            >
              <Heart className="w-4 h-4 text-brand-pink" />
              <span className="text-sm font-semibold text-brand-pink">
                Loved by 50K+ Parents
              </span>
            </motion.div>
            <motion.blockquote
              variants={fadeUp}
              className="text-lg md:text-2xl font-medium text-brand-indigo italic mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              &ldquo;Finally — an app that understands how busy parents shop. TT
              found my daughter a week of school outfits in two minutes. I
              didn't even have to scroll.&rdquo;
            </motion.blockquote>
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-brand-purple/15 flex items-center justify-center text-brand-purple font-bold text-sm">
                S
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-brand-indigo">
                  Sarah M.
                </p>
                <p className="text-xs text-brand-indigo/35">
                  Mom of 3 · Chicago
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ BOTTOM CTA ══════════════════════ */}
      <section className="section-py">
        <div className="container-page">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="section-headline text-brand-indigo mb-4 max-w-[18ch] mx-auto"
            >
              Your AI Closet Assistant Is{" "}
              <span className="gradient-brand-text">Ready</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base text-brand-indigo/45 max-w-[42ch] mx-auto mb-10"
            >
              Join 50,000+ parents who save 3+ hours every week. TT remembers
              everything so you don't have to.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href="/register"
                className="btn-primary text-lg !px-10 !py-4"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/feed"
                className="btn-secondary text-lg !px-8 !py-3.5"
              >
                Try the Feed
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ FOOTER ══════════════════════ */}
      <footer className="py-10 border-t border-brand-indigo/4">
        <div className="container-page">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo variant="compact" size="sm" />
            <p className="text-xs text-brand-indigo/30">
              &copy; 2026 TinyThreads AI &middot; JTekNinja AI Systems
            </p>
            <div className="flex items-center gap-6 text-sm text-brand-indigo/35">
              <span className="cursor-pointer hover:text-brand-purple transition-colors">
                Privacy
              </span>
              <span className="cursor-pointer hover:text-brand-purple transition-colors">
                Terms
              </span>
              <span className="cursor-pointer hover:text-brand-purple transition-colors">
                Contact
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
