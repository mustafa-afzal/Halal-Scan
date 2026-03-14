"use client";

import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, ScanLine, CircleCheck } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";
import { ease } from "@/lib/motion";

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
    <div className="relative">
      {/* Ambient glow — fades in slowly */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      >
        <div className="w-[450px] h-[280px] bg-blue-400/[0.06] rounded-full blur-[100px] glow-pulse" />
        <div className="absolute w-[200px] h-[200px] bg-indigo-300/[0.04] rounded-full blur-[80px] translate-x-32 -translate-y-8 glow-pulse-delayed" />
      </motion.div>

      {/* Main cards composition */}
      <motion.div
        className="relative flex items-center justify-center min-h-[380px] sm:min-h-[420px]"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.9, ease }}
      >
        <DisplayCards cards={halalCheckCards} />

        {/* Floating chip — top right: verified count */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5, ease }}
          className="float-fast absolute top-4 right-[5%] sm:right-[12%] z-30"
        >
          <motion.div
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm px-3 py-1.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
            whileHover={{ scale: 1.04, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            transition={{ duration: 0.15 }}
          >
            <ShieldCheck className="size-3.5 text-emerald-500" />
            <span className="text-[11px] font-medium text-slate-600">8 of 12 verified</span>
          </motion.div>
        </motion.div>

        {/* Floating chip — bottom left: flagged count */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.5, ease }}
          className="float-slow absolute bottom-8 left-[2%] sm:left-[8%] z-30"
        >
          <motion.div
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm px-3 py-1.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
            whileHover={{ scale: 1.04, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            transition={{ duration: 0.15 }}
          >
            <AlertTriangle className="size-3.5 text-amber-500" />
            <span className="text-[11px] font-medium text-slate-600">2 flagged ingredients</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
