"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/branding/Logo";
import { AppIcon } from "@/components/branding/AppIcon";
import {
  Sparkles,
  Send,
  Brain,
  ShoppingBag,
  Search,
  Check,
  Shirt,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
  actions?: { label: string; icon: React.ReactNode }[];
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      role: "ai",
      text: "Hi! I'm TT, your shopping assistant 👋 I know your child Emma loves dinosaurs and wears size 5T. What can I help you find today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: input,
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      const aiResponses: Record<string, Message> = {
        default: {
          id: (Date.now() + 1).toString(),
          role: "ai",
          text: "Great question! I've found a few items that match. Would you like me to show you the best deals or create a bundle?",
          actions: [
            { label: "Show deals", icon: <Search className="w-4 h-4" /> },
            {
              label: "Build a bundle",
              icon: <ShoppingBag className="w-4 h-4" />,
            },
          ],
        },
      };

      if (
        input.toLowerCase().includes("dinosaur") ||
        input.toLowerCase().includes("shirt")
      ) {
        setMessages((m) => [
          ...m,
          {
            id: (Date.now() + 1).toString(),
            role: "ai",
            text: "I found 4 dinosaur shirts in 5T! 🦕 The best deal is a Carter's tee at $8 (60% off retail). Two are in lightning auctions ending soon. Want me to show them or build a dino outfit bundle?",
            actions: [
              { label: "Show all 4", icon: <Search className="w-4 h-4" /> },
              { label: "Build bundle", icon: <Shirt className="w-4 h-4" /> },
              {
                label: "Auctions only",
                icon: <Sparkles className="w-4 h-4" />,
              },
            ],
          },
        ]);
      } else if (
        input.toLowerCase().includes("bundle") ||
        input.toLowerCase().includes("school")
      ) {
        setMessages((m) => [
          ...m,
          {
            id: (Date.now() + 1).toString(),
            role: "ai",
            text: "I've put together a 'School Week Bundle' for Emma: 5 tops + 2 bottoms for $42 — that's 35% less than buying separately! All in 5T and in her favorite colors (blue and space themes!). Would you like to see it?",
            actions: [
              {
                label: "View bundle",
                icon: <ShoppingBag className="w-4 h-4" />,
              },
              { label: "Customize", icon: <Check className="w-4 h-4" /> },
            ],
          },
        ]);
      } else {
        setMessages((m) => [...m, aiResponses.default]);
      }
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-dvh bg-brand-cream flex flex-col">
      {/* Header */}
      <div className="safe-top px-4 py-3 bg-white border-b border-brand-indigo/5 flex items-center gap-3">
        <AppIcon size={36} />
        <div>
          <p className="font-bold text-brand-indigo text-sm">TT Assistant</p>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-brand-indigo/40">
              Online · Knows Emma's style
            </span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] ${msg.role === "user" ? "" : "flex items-start gap-2"}`}
            >
              {msg.role === "ai" && <AppIcon size={24} />}
              <div>
                <div
                  className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-brand-purple text-white rounded-br-md"
                      : "bg-white text-brand-indigo rounded-bl-md shadow-sm border border-brand-purple/5"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.actions && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {msg.actions.map((action) => (
                      <button
                        key={action.label}
                        className="px-4 py-2 rounded-full bg-white border border-brand-purple/20 text-brand-purple text-sm font-semibold hover:bg-brand-purple/5 transition-colors flex items-center gap-1.5"
                      >
                        {action.icon}
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-start gap-2"
          >
            <AppIcon size={24} />
            <div className="px-4 py-3 rounded-2xl bg-white rounded-bl-md shadow-sm border border-brand-purple/5">
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-brand-purple"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="safe-bottom px-4 py-3 bg-white border-t border-brand-indigo/5">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask TT anything..."
            className="flex-1 px-4 py-3 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-sm text-brand-indigo placeholder:text-brand-indigo/30 focus:outline-none focus:ring-2 focus:ring-brand-purple/30"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-12 h-12 rounded-full gradient-brand text-white flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
