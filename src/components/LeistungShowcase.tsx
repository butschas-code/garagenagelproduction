import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import type { LeistungEntry } from "@/data/leistungen";

interface LeistungShowcaseProps {
  entry: LeistungEntry;
  reverse: boolean;
}

export default function LeistungShowcase({
  entry,
  reverse,
}: LeistungShowcaseProps) {
  return (
    <section id={entry.id} className="scroll-mt-[6.5rem] py-8 sm:py-12 lg:py-16">
      <ScrollReveal scale={false}>
        <article className="group overflow-hidden rounded-[1.75rem] border border-neutral-200/90 bg-white shadow-[0_8px_40px_rgb(12_12_15/0.07)] transition-shadow duration-500 hover:shadow-[0_20px_56px_rgb(200_16_46/0.1)] sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div
              className={`relative min-h-[240px] sm:min-h-[300px] lg:min-h-[min(100%,420px)] ${
                reverse ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <Image
                src={entry.imageSrc}
                alt={entry.imageAlt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent lg:bg-gradient-to-r ${
                  reverse
                    ? "lg:from-transparent lg:via-primary/5 lg:to-primary/35"
                    : "lg:from-primary/35 lg:via-primary/5 lg:to-transparent"
                }`}
                aria-hidden
              />
            </div>

            <div
              className={`flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-16 ${
                reverse ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {entry.tagline}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:text-[2rem] lg:leading-tight">
                {entry.title}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {entry.paragraphs.map((p, i) => (
                  <p key={`${entry.id}-p-${i}`}>{p}</p>
                ))}
                {entry.bullets && (
                  <ul className="list-inside list-disc space-y-2 marker:text-accent">
                    {entry.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {entry.tailParagraphs?.map((p, i) => (
                  <p key={`${entry.id}-t-${i}`}>{p}</p>
                ))}
                {entry.callout && (
                  <div className="rounded-xl border border-amber-200/80 bg-gradient-to-br from-amber-50/90 to-neutral-50/80 p-4 text-base text-neutral-600">
                    <strong className="text-primary">{entry.callout.title}:</strong>{" "}
                    {entry.callout.body}
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
}
