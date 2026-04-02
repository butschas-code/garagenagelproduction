"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useContactDrawer } from "@/contexts/ContactDrawerContext";

type ContactTriggerProps = {
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick">;

export default function ContactTrigger({
  className,
  children,
  ...rest
}: ContactTriggerProps) {
  const { open } = useContactDrawer();

  return (
    <button type="button" onClick={open} className={className} {...rest}>
      {children}
    </button>
  );
}
