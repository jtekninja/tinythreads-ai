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

const LOGO_PATH = "/branding/tt_tinythreads_logo.png";

export function Logo({
  variant = "full",
  size = "md",
  className,
  showText = true,
}: LogoProps) {
  // Simple, clean sizes — navbar gets a big logo, footer gets compact
  const iconPx =
    variant === "compact" || variant === "icon"
      ? size === "xl"
        ? 64
        : 28
      : 56;
  const textCls =
    variant === "compact"
      ? size === "xl"
        ? "text-3xl"
        : "text-sm"
      : "text-xl lg:text-2xl";

  if (variant === "icon") {
    return (
      <div
        className={cn("relative shrink-0", className)}
        style={{ width: iconPx, height: iconPx }}
      >
        <Image
          src={LOGO_PATH}
          alt="TinyThreads AI"
          width={iconPx}
          height={iconPx}
          className="object-contain"
          priority
          style={{ width: iconPx, height: iconPx }}
        />
      </div>
    );
  }

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3 group shrink-0", className)}
    >
      <div
        className="relative shrink-0"
        style={{ width: iconPx, height: iconPx }}
      >
        <Image
          src={LOGO_PATH}
          alt="TinyThreads AI"
          width={iconPx}
          height={iconPx}
          className="object-contain"
          priority
          style={{ width: iconPx, height: iconPx }}
        />
      </div>
      {showText && variant === "full" && (
        <span
          className={cn(
            "font-extrabold tracking-tight gradient-brand-text whitespace-nowrap",
            textCls,
          )}
        >
          TinyThreads AI
        </span>
      )}
      {showText && variant === "compact" && (
        <span
          className={cn(
            "font-bold tracking-tight text-brand-indigo whitespace-nowrap",
            textCls,
          )}
        >
          TinyThreads
        </span>
      )}
    </Link>
  );
}
