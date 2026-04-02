"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  date: string;
  source: string;
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`h-4 w-4 ${filled ? "text-accent drop-shadow-[0_0_6px_rgb(200_16_46/0.45)]" : "text-neutral-300"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function ReviewCard({
  name,
  rating,
  text,
  date,
  source,
}: ReviewCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50/90 p-8 shadow-[0_4px_24px_rgb(12_12_15/0.04)]"
      whileHover={
        reduce
          ? undefined
          : {
              y: -4,
              boxShadow: "0 24px 48px -12px rgb(200 16 46 / 0.15)",
            }
      }
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-amber-600 opacity-80"
        aria-hidden
      />
      <span
        className="absolute top-6 right-8 font-display text-6xl leading-none text-neutral-200/90 select-none transition-colors group-hover:text-neutral-300/90"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <div className="relative">
        <div className="mb-4 flex gap-0.5" aria-label={`${rating} von 5 Sternen`}>
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} filled={i < rating} />
          ))}
        </div>

        <p className="mb-6 text-base leading-relaxed text-neutral-700">{text}</p>

        <div className="flex items-center justify-between border-t border-neutral-100/80 pt-4">
          <div>
            <p className="font-display text-sm font-semibold text-primary">{name}</p>
            <p className="text-xs text-neutral-400">{source}</p>
          </div>
          <time className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-500">
            {date}
          </time>
        </div>
      </div>
    </motion.div>
  );
}
