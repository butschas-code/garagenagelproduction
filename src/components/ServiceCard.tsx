"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
}: ServiceCardProps) {
  const reduce = useReducedMotion();

  const cardInner = (
    <motion.div
      className="group relative flex h-full min-h-[27rem] flex-col rounded-2xl p-[1px] transition-shadow duration-500 sm:min-h-[28rem]"
      style={{
        background:
          "linear-gradient(135deg, rgb(200 16 46 / 0.45), rgb(212 165 116 / 0.35), rgb(12 12 15 / 0.12))",
      }}
      whileHover={
        reduce
          ? undefined
          : { y: -6, transition: { type: "spring", stiffness: 400, damping: 25 } }
      }
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgb(12_12_15/0.06)] transition-shadow duration-500 group-hover:shadow-[0_20px_48px_rgb(200_16_46/0.12)]">
        <div className="relative min-h-[11rem] w-full flex-1 overflow-hidden bg-neutral-100">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent opacity-80"
            aria-hidden
          />
        </div>
        <div className="flex shrink-0 flex-col p-6 sm:p-7">
          <h3 className="font-display text-lg font-semibold leading-snug text-primary">
            {title}
          </h3>
          <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-neutral-500">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {cardInner}
      </Link>
    );
  }

  return cardInner;
}
