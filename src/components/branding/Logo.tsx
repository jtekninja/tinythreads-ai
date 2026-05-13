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
  const textCls =
    variant === "compact"
      ? size === "xl"
        ? "text-3xl"
        : "text-sm"
      : "text-2xl lg:text-3xl";

  if (variant === "icon") {
    return (
      <div className={cn("relative shrink-0", className)}>
        <Image
          src={LOGO_PATH}
          alt="TinyThreads AI"
          width={800}
          height={260}
          className="h-full w-auto object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3 shrink-0", className)}
    >
      <div className="relative h-20 lg:h-24 w-auto aspect-[3/2] overflow-hidden shrink-0">
        <Image
          src={LOGO_PATH}
          alt="TinyThreads AI"
          width={1536}
          height={1024}
          className="h-full w-full object-cover scale-[1.15]"
          priority
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
