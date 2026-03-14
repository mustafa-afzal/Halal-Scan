// ─── Shared motion system ─────────────────────────────────
// Consistent easing, durations, and variant patterns
// used across every component on the page.

// Primary entrance easing — smooth deceleration with slight overshoot
export const ease = [0.22, 1, 0.36, 1] as const;

// Snappier easing for hover/press micro-interactions
export const snapEase = [0.25, 0.46, 0.45, 0.94] as const;

// ─── Durations ────────────────────────────────────────────
export const duration = {
  fast: 0.15, // micro-interactions, hovers
  normal: 0.4, // standard transitions
  entrance: 0.6, // element entrances
  slow: 0.8, // hero-level reveals
} as const;

// ─── Stagger container ───────────────────────────────────
// Wrap children in this to get staggered reveals
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// ─── Fade-up variant (for stagger children) ──────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.entrance, ease: [...ease] },
  },
};

// Variant with scale (for pills, chips, eyebrows)
export const fadeUpScale = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: duration.entrance, ease: [...ease] },
  },
};

// Larger offset for hero headline
export const fadeUpHero = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [...ease] },
  },
};

// ─── Scroll-triggered reveal props ───────────────────────
// Pass these directly to motion.div for viewport-based reveals
export function scrollRevealProps(delay = 0, y = 24) {
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" as const },
    transition: { duration: duration.entrance, delay, ease: [...ease] },
  };
}

// ─── Hover presets ───────────────────────────────────────
export const hoverLift = {
  whileHover: { y: -3 },
  transition: { duration: duration.fast, ease: [...snapEase] },
};

export const hoverScale = {
  whileHover: { scale: 1.03 },
  transition: { duration: duration.fast, ease: [...snapEase] },
};

export const tapScale = {
  whileTap: { scale: 0.97 },
};

// ─── Spring preset for buttons ──────────────────────────
export const buttonSpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
};
