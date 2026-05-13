"use client";

import { motion } from "framer-motion";
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
  Smartphone,
  Bell,
  Package,
  MessageCircle,
  Gem,
  type LucideIcon,
} from "lucide-react";

// ── Animation Variants ──
const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const fadeUpDelay = (delay: number) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: easeOut },
  },
});

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

// ── Feature Card ──
function FeatureCard({
  icon: Icon,
  title,
  desc,
  accent = "purple",
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  accent?: "purple" | "pink" | "green";
}) {
  const accentColors = {
    purple:
      "from-brand-purple/10 to-brand-purple/5 border-brand-purple/10 hover:border-brand-purple/25",
    pink: "from-brand-pink/8 to-brand-pink/4 border-brand-pink/10 hover:border-brand-pink/20",
    green:
      "from-green-500/8 to-green-500/4 border-green-500/10 hover:border-green-500/20",
  };

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      className={`card-premium bg-gradient-to-br ${accentColors[accent]} flex flex-col items-start gap-4 group`}
    >
      <div className="w-12 h-12 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-brand-purple" />
      </div>
      <div>
        <h3 className="card-headline text-brand-indigo mb-1.5">{title}</h3>
        <p className="body-small text-brand-indigo/45">{desc}</p>
      </div>
    </motion.div>
  );
}

// ── Stat Item ──
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center px-4 py-3">
      <p className="text-2xl md:text-3xl font-extrabold text-brand-indigo tracking-tight">
        {value}
      </p>
      <p className="body-small text-brand-indigo/35 mt-0.5">{label}</p>
    </div>
  );
}

// ── PAGE ──
export default function LandingPage() {
  return (
    <div className="min-h-dvh bg-brand-white overflow-x-clip selection:bg-brand-purple/15 selection:text-brand-purple">
      {/* ═══════════════ NAVBAR ═══════════════ */}
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
              Features
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

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[100svh] flex items-center safe-top overflow-visible">
        {/* Background atmosphere */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-purple/6 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] bg-brand-pink/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-brand-glow/6 rounded-full blur-3xl" />
        </div>

        <div className="container-page relative w-full pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20">
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
                <span className="body-small font-semibold text-brand-purple">
                  Powered by JTekNinja AI
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="hero-headline text-brand-indigo mb-6"
              >
                AI Shopping for{" "}
                <span className="gradient-brand-text">Growing Kids</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeUp}
                className="body-large max-w-[42ch] mb-8 leading-relaxed"
              >
                Stop wasting hours shopping for kids clothes. TinyThreads AI
                learns your child's sizes, style, and needs — then finds the
                best deals automatically. Like a smart parent friend who never
                sleeps.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8"
              >
                <Link href="/register" className="btn-primary text-base">
                  Start Shopping Smarter
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/feed" className="btn-secondary text-base">
                  Try the Feed
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-6 md:gap-10 pt-8 mt-8 border-t border-brand-indigo/5"
              >
                <Stat value="90%" label="Time Saved" />
                <Stat value="4.9★" label="Parent Rating" />
                <Stat value="50K+" label="Items Sold" />
                <Stat value="30s" label="Avg. Purchase" />
              </motion.div>
            </motion.div>

            {/* RIGHT: SmartWatch Preview */}
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

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="relative section-py bg-brand-cream/30">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.04)_0%,transparent_70%)]" />
        <div className="container-page relative">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerChildren}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/6 border border-brand-purple/8 mb-6"
            >
              <Smartphone className="w-4 h-4 text-brand-purple" />
              <span className="body-small font-semibold text-brand-purple">
                How It Works
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="section-headline text-brand-indigo mb-4 max-w-[20ch] mx-auto"
            >
              Your AI Closet Assistant in Three Steps
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="body-base max-w-[50ch] mx-auto"
            >
              Set up once, then swipe, bid, and buy. TT handles the rest.
            </motion.p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                icon: MessageCircle,
                title: "Tell TT About Your Child",
                desc: "Add your child's size, favorite colors, and themes. TT remembers everything.",
              },
              {
                step: "2",
                icon: Sparkles,
                title: "AI Finds The Best Deals",
                desc: "Swipe through personalized picks, bid in lightning auctions, or buy AI bundles.",
              },
              {
                step: "3",
                icon: Package,
                title: "One-Tap Checkout",
                desc: "Secure checkout with Apple Pay, Google Pay, or saved cards. Done in seconds.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-brand flex items-center justify-center text-white text-2xl font-extrabold shadow-glow group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <div className="w-10 h-10 mx-auto mb-4 rounded-xl bg-brand-purple/6 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-brand-purple" />
                </div>
                <h3 className="card-headline text-brand-indigo mb-2">
                  {item.title}
                </h3>
                <p className="body-small text-brand-indigo/45 max-w-[28ch] mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURES BENTO ═══════════════ */}
      <section className="section-py">
        <div className="container-page">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerChildren}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pink/6 border border-brand-pink/8 mb-6"
            >
              <Zap className="w-4 h-4 text-brand-pink" />
              <span className="body-small font-semibold text-brand-pink">
                Powerful Features
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="section-headline text-brand-indigo mb-4 max-w-[18ch] mx-auto"
            >
              Everything Busy Parents Need
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="body-base max-w-[48ch] mx-auto"
            >
              AI-powered tools that reduce decision fatigue and save real time.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerChildren}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto"
          >
            <FeatureCard
              icon={Brain}
              title="AI Recommendations"
              desc="Personalized picks based on your child's size, style, and needs."
              accent="purple"
            />
            <FeatureCard
              icon={Timer}
              title="Lightning Auctions"
              desc="60-second bidding thrills. Win amazing deals faster than scrolling TikTok."
              accent="pink"
            />
            <FeatureCard
              icon={ShoppingBag}
              title="Smart Bundles"
              desc="AI creates complete outfits. One tap to buy the whole matching set."
              accent="green"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Growth Prediction"
              desc="Know when your child needs the next size before the growth spurt hits."
              accent="green"
            />
            <FeatureCard
              icon={Bell}
              title="Smart Alerts"
              desc="New items in your child's size? Price drops? TT tells you instantly."
              accent="purple"
            />
            <FeatureCard
              icon={Shield}
              title="Trust & Safety"
              desc="Verified sellers, AI deal scores, and secure encrypted checkout."
              accent="pink"
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ AI ASSISTANT SHOWCASE ═══════════════ */}
      <section className="relative section-py overflow-hidden bg-brand-indigo">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-pink/8 rounded-full blur-3xl" />
        </div>

        <div className="container-page relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerChildren}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6"
              >
                <Brain className="w-4 h-4 text-brand-purple-light" />
                <span className="body-small font-semibold text-brand-purple-light">
                  AI Shopping Copilot
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="section-headline text-white mb-4 max-w-[18ch]"
              >
                Meet TT, Your AI Shopping Partner
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="body-large !text-white/55 max-w-[42ch] mb-8"
              >
                Just tell TT what you need — like you'd text a friend. TT
                understands, searches, recommends, and even builds bundles. All
                in seconds.
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-3">
                {[
                  "Understands natural language like a parent friend",
                  "Remembers every child's size, colors, and themes",
                  "Builds bundles, finds deals, and predicts sizes",
                  "Explains why each recommendation makes sense",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3 h-3 text-brand-purple-light" />
                    </div>
                    <span className="body-small text-white/55">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: SmartWatch Preview */}
            <motion.div
              variants={fadeInScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <SmartWatchPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
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
              <span className="body-small font-semibold text-brand-pink">
                Loved by Parents
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
                <p className="body-small text-brand-indigo/35">
                  Mom of 3 · Chicago
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
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
              Ready to Shop{" "}
              <span className="gradient-brand-text">Smarter?</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="body-large max-w-[42ch] mx-auto mb-10"
            >
              Join thousands of parents who save hours every week. Your AI
              closet assistant is ready.
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

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="py-10 border-t border-brand-indigo/4">
        <div className="container-page">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo variant="compact" size="sm" />
            <p className="body-small text-brand-indigo/30">
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
