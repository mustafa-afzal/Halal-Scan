"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { scrollRevealProps } from "@/lib/motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 24,
}: ScrollRevealProps) {
  return (
    <motion.div {...scrollRevealProps(delay, y)} className={className}>
      {children}
    </motion.div>
  );
}
