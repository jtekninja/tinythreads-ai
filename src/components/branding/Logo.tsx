"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  variant?: "full" | "compact" | "icon";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showText?: boolean;
}

const sizeMap = {
  sm: { icon: 26, text: "text-xs" },
  md: { icon: 52, text: "text-xl" },
  lg: { icon: 60, text: "text-2xl" },
  xl: { icon: 68, text: "text-3xl" },
};

const LOGO_PATH = "/branding/tt_tinythreads_logo.png";

export function Logo({
  variant = "full",
  size = "md",
  className,
  showText = true,
}: LogoProps) {
  const dims = sizeMap[size];

  if (variant === "icon") {
    return (
      <div
        className={cn("relative flex-shrink-0", className)}
        style={{ width: dims.icon, height: dims.icon }}
      >
        <Image
          src={LOGO_PATH}
          alt="TinyThreads AI"
          width={dims.icon}
          height={dims.icon}
          className="object-contain"
          style={{ width: dims.icon, height: dims.icon }}
        />
      </div>
    );
  }

  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <div
        className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: dims.icon, height: dims.icon }}
      >
        <Image
          src={LOGO_PATH}
          alt="TinyThreads AI"
          width={dims.icon}
          height={dims.icon}
          className="object-contain"
          style={{ width: dims.icon, height: dims.icon }}
        />
      </div>
      {showText && variant === "full" && (
        <span
          className={cn(
            "font-bold tracking-tight gradient-brand-text whitespace-nowrap",
            dims.text,
          )}
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          TinyThreads AI
        </span>
      )}
      {showText && variant === "compact" && (
        <span
          className={cn(
            "font-bold tracking-tight text-brand-indigo whitespace-nowrap",
            dims.text,
          )}
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          TinyThreads
        </span>
      )}
    </Link>
  );
}
