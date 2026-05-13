"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-dvh bg-brand-white flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand-purple/10 flex items-center justify-center">
          <span className="text-3xl">⚡</span>
        </div>
        <h1 className="text-2xl font-extrabold text-brand-indigo mb-3 font-heading">
          Something went wrong
        </h1>
        <p className="text-brand-indigo/50 text-sm mb-8 leading-relaxed">
          TT encountered an unexpected issue. This usually fixes itself on
          reload.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo-light transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand-indigo/10 text-brand-indigo font-semibold text-sm hover:border-brand-purple/30 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
