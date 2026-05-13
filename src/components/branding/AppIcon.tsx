"use client";

import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Suspense } from "react";

interface AppIconProps {
  size?: number;
  className?: string;
  variant?: "default" | "dark" | "monochrome";
}

export function AppIcon({
  size = 64,
  className,
  variant = "default",
}: AppIconProps) {
  return (
    <div
      className={cn(
        "relative flex-shrink-0 rounded-2xl overflow-hidden",
        variant === "dark" && "bg-brand-indigo",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/branding/tt_tinythreads_logo.png"
        alt="TinyThreads AI"
        width={size}
        height={size}
        className={cn(
          "object-contain p-1",
          variant === "monochrome" && "grayscale brightness-0",
        )}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
