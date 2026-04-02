"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "service", label: "Service" },
  { id: "reparaturen", label: "Reparaturen" },
  { id: "reifen", label: "Reifen" },
  { id: "mfk", label: "MFK" },
  { id: "unfall", label: "Unfall" },
  { id: "scheiben", label: "Scheiben" },
  { id: "zubehoer", label: "Zubehör" },
  { id: "ersatzwagen", label: "Ersatzwagen" },
] as const;

export default function LeistungenJumpNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      className="sticky top-[4.5rem] z-30 border-b border-neutral-200/80 bg-[rgb(250_250_249/0.92)] backdrop-blur-md"
      aria-label="Leistungen Schnellnavigation"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-neutral-600 shadow-sm ring-1 ring-neutral-200/90 hover:text-accent"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
