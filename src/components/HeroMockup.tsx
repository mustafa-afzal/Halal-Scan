"use client";

import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, ScanLine, CircleCheck } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";

const halalCheckCards = [
  {
    icon: <AlertTriangle className="size-4 text-amber-300" />,
    title: "Doubtful",
    description: "Gelatin — source unspecified",
    date: "Mushbooh · Medium confidence",
    titleClassName: "text-amber-400",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <ScanLine className="size-4 text-blue-300" />,
    title: "Analyzing",
    description: "Natural Flavors · Mono-diglycerides",
    date: "Checking 12 ingredients...",
    titleClassName: "text-blue-400",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <CircleCheck className="size-4 text-emerald-300" />,
    title: "Halal",
    description: "Sugar, Salt, Water, Citric Acid",
    date: "All ingredients verified",
    titleClassName: "text-emerald-400",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export default function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Ambient glow behind the cards */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[250px] bg-blue-400/[0.07] rounded-full blur-[100px] glow-pulse" />
      </div>

      <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[420px]">
        <DisplayCards cards={halalCheckCards} />

        {/* Floating status chip — top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="float-fast absolute top-4 right-[5%] sm:right-[12%] z-30"
        >
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm px-3 py-1.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
            <ShieldCheck className="size-3.5 text-emerald-500" />
            <span className="text-[11px] font-medium text-slate-600">8 of 12 verified</span>
          </div>
        </motion.div>

        {/* Floating status chip — bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.4 }}
          className="float-slow absolute bottom-8 left-[2%] sm:left-[8%] z-30"
        >
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm px-3 py-1.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
            <AlertTriangle className="size-3.5 text-amber-500" />
            <span className="text-[11px] font-medium text-slate-600">2 flagged ingredients</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
