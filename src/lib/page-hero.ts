/**
 * Shared full-width image hero: same min-height on all pages; at least full viewport
 * plus a rem floor on larger breakpoints so photos read bigger under `object-cover`.
 */
export const pageHeroSectionClassName =
  "relative flex min-h-[max(100dvh,44rem)] sm:min-h-[max(100dvh,48rem)] lg:min-h-[max(100dvh,56rem)] items-center justify-center overflow-hidden pt-[4.5rem] pb-16 sm:pb-20";
