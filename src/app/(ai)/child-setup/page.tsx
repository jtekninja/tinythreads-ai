"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/branding/Logo";
import {
  Baby,
  Sparkles,
  CloudSun,
  Palette,
  CircleDot,
  ArrowRight,
  Check,
  Shirt,
} from "lucide-react";

const STEPS = [
  { id: "name", title: "Your Child", subtitle: "Who are we shopping for?" },
  { id: "size", title: "Current Size", subtitle: "What fits right now?" },
  { id: "growth", title: "Growth Speed", subtitle: "How fast do they grow?" },
  {
    id: "interests",
    title: "What They Love",
    subtitle: "Favorites help TT find the best picks",
  },
  {
    id: "done",
    title: "All Set!",
    subtitle: "TT is ready to find great deals",
  },
];

const SIZES = ["2T", "3T", "4T", "5T", "XS (5-6)", "S (7-8)", "M (10-12)"];
const THEMES = [
  "🦕 Dinosaurs",
  "🚀 Space",
  "🦄 Unicorns",
  "⚽ Sports",
  "🌈 Rainbows",
  "🏗️ Construction",
  "🐱 Animals",
  "👑 Princess",
  "🎨 Art",
  "🧩 STEM",
];
const COLORS = [
  "Blue",
  "Pink",
  "Purple",
  "Green",
  "Red",
  "Yellow",
  "Orange",
  "Black",
  "White",
  "Rainbow",
];
const GROWTH_SPEEDS = [
  { id: "slow", label: "Slow Grower", desc: "Wears sizes longer than typical" },
  { id: "average", label: "Average", desc: "Typical growth for their age" },
  { id: "fast", label: "Fast Grower", desc: "Frequently needs next size up" },
];

export default function ChildSetupPage() {
  const [step, setStep] = useState(0);
  const [childName, setChildName] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedGrowth, setSelectedGrowth] = useState("");
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const isStepValid = () => {
    switch (STEPS[step].id) {
      case "name":
        return childName.trim().length > 0;
      case "size":
        return selectedSize !== "";
      case "growth":
        return selectedGrowth !== "";
      case "interests":
        return selectedThemes.length > 0;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) setStep((s) => s + 1);
  };

  return (
    <div className="min-h-dvh bg-brand-white flex flex-col">
      {/* Header */}
      <div className="safe-top px-4 py-4 flex items-center justify-between border-b border-brand-indigo/5">
        <Logo variant="compact" size="sm" />
        <div className="flex items-center gap-1">
          {STEPS.map((s, i) => (
            <div
              key={s.id}
              className={`w-2 h-2 rounded-full transition-all ${
                i <= step ? "bg-brand-purple w-6" : "bg-brand-indigo/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="w-full max-w-md"
          >
            <div className="text-center mb-10">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl gradient-brand flex items-center justify-center text-white shadow-lg shadow-brand-purple/20">
                {step === 4 ? (
                  <Sparkles className="w-8 h-8" />
                ) : (
                  <Baby className="w-8 h-8" />
                )}
              </div>
              <h1
                className="text-2xl font-extrabold text-brand-indigo mb-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {STEPS[step].title}
              </h1>
              <p className="text-brand-indigo/50">{STEPS[step].subtitle}</p>
            </div>

            {/* Step 0: Name */}
            {STEPS[step].id === "name" && (
              <div className="space-y-4">
                <input
                  type="text"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  placeholder="e.g. Emma, Noah..."
                  autoFocus
                  className="w-full px-5 py-4 rounded-2xl bg-brand-purple/5 border-2 border-brand-purple/10 text-xl text-brand-indigo font-semibold text-center placeholder:text-brand-indigo/20 focus:outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all"
                />
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-brand-pink/5 border border-brand-pink/10">
                  <CloudSun className="w-5 h-5 text-brand-pink" />
                  <p className="text-sm text-brand-indigo/50">
                    TT will remember {childName || "their"} preferences forever
                  </p>
                </div>
              </div>
            )}

            {/* Step 1: Size */}
            {STEPS[step].id === "size" && (
              <div className="grid grid-cols-2 gap-3">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`p-4 rounded-2xl border-2 text-center font-semibold transition-all ${
                      selectedSize === size
                        ? "border-brand-purple bg-brand-purple/5 text-brand-purple shadow-lg shadow-brand-purple/10"
                        : "border-brand-indigo/10 text-brand-indigo/50 hover:border-brand-purple/30"
                    }`}
                  >
                    <Shirt className="w-6 h-6 mx-auto mb-2" />
                    {size}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Growth */}
            {STEPS[step].id === "growth" && (
              <div className="space-y-3">
                {GROWTH_SPEEDS.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGrowth(g.id)}
                    className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                      selectedGrowth === g.id
                        ? "border-brand-purple bg-brand-purple/5 shadow-lg shadow-brand-purple/10"
                        : "border-brand-indigo/10 hover:border-brand-purple/30"
                    }`}
                  >
                    <p
                      className={`font-bold ${selectedGrowth === g.id ? "text-brand-purple" : "text-brand-indigo"}`}
                    >
                      {g.label}
                      {selectedGrowth === g.id && (
                        <Check className="inline w-4 h-4 ml-2 text-brand-purple" />
                      )}
                    </p>
                    <p className="text-sm text-brand-indigo/40 mt-1">
                      {g.desc}
                    </p>
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Themes & Colors */}
            {STEPS[step].id === "interests" && (
              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Palette className="w-4 h-4 text-brand-pink" />
                    <span className="text-sm font-semibold text-brand-indigo">
                      Favorite Themes
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {THEMES.map((theme) => (
                      <button
                        key={theme}
                        onClick={() =>
                          setSelectedThemes((t) =>
                            t.includes(theme)
                              ? t.filter((x) => x !== theme)
                              : [...t, theme],
                          )
                        }
                        className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                          selectedThemes.includes(theme)
                            ? "border-brand-purple bg-brand-purple/5 text-brand-purple"
                            : "border-brand-indigo/10 text-brand-indigo/50 hover:border-brand-purple/30"
                        }`}
                      >
                        {theme}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CircleDot className="w-4 h-4 text-brand-purple" />
                    <span className="text-sm font-semibold text-brand-indigo">
                      Favorite Colors
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {COLORS.map((color) => (
                      <button
                        key={color}
                        onClick={() =>
                          setSelectedColors((c) =>
                            c.includes(color)
                              ? c.filter((x) => x !== color)
                              : [...c, color],
                          )
                        }
                        className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                          selectedColors.includes(color)
                            ? "border-brand-purple bg-brand-purple/5 text-brand-purple"
                            : "border-brand-indigo/10 text-brand-indigo/50 hover:border-brand-purple/30"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Done */}
            {STEPS[step].id === "done" && (
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                  <Check className="w-12 h-12 text-green-500" />
                </div>
                <p className="text-lg text-brand-indigo/70 mb-6">
                  {childName} is all set up! TT will now personalize everything
                  for them.
                </p>
                <div className="space-y-2 text-left bg-brand-purple/5 rounded-2xl p-4 border border-brand-purple/10 text-sm text-brand-indigo/60">
                  <p>
                    👶 <strong className="text-brand-indigo">Name:</strong>{" "}
                    {childName}
                  </p>
                  <p>
                    📏 <strong className="text-brand-indigo">Size:</strong>{" "}
                    {selectedSize}
                  </p>
                  <p>
                    📈 <strong className="text-brand-indigo">Growth:</strong>{" "}
                    {GROWTH_SPEEDS.find((g) => g.id === selectedGrowth)?.label}
                  </p>
                  <p>
                    ❤️ <strong className="text-brand-indigo">Likes:</strong>{" "}
                    {selectedThemes.join(", ")}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom */}
      <div className="safe-bottom px-6 py-4 border-t border-brand-indigo/5">
        {STEPS[step].id !== "done" ? (
          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
              isStepValid()
                ? "gradient-brand text-white shadow-xl shadow-brand-purple/30 hover:scale-[1.02]"
                : "bg-brand-indigo/5 text-brand-indigo/20 cursor-not-allowed"
            }`}
          >
            Continue <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <a
            href="/feed"
            className="w-full py-4 rounded-2xl font-bold text-lg gradient-brand text-white shadow-xl shadow-brand-purple/30 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" /> Start Shopping
          </a>
        )}
      </div>
    </div>
  );
}
