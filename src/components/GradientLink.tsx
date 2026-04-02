"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface GradientLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  /** Shown after the gradient label (e.g. arrow icon) */
  icon?: ReactNode;
}

export default function GradientLink({
  href,
  children,
  className = "",
  external,
  icon,
}: GradientLinkProps) {
  const inner = (
    <>
      <span className="bg-gradient-to-r from-accent via-red-600 to-amber-700 bg-clip-text text-transparent">
        {children}
      </span>
      {icon ? (
        <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      ) : null}
      <span
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-[0.35] bg-gradient-to-r from-accent via-red-500 to-amber-600 opacity-70 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100"
        aria-hidden
      />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative inline-flex items-center gap-2 text-base font-semibold ${className}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-2 text-base font-semibold ${className}`}
    >
      {inner}
    </Link>
  );
}
