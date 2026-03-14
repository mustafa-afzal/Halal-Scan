"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
  return (
    <ScrollReveal y={12}>
      <footer className="border-t border-slate-200/60">
        <div className="mx-auto max-w-[1120px] px-6 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
              <span className="text-[13px] font-semibold tracking-[-0.01em] text-slate-900">HalalCheck</span>
              <span className="hidden sm:block h-3 w-px bg-slate-200" />
              <span className="text-[11px] text-slate-400 leading-relaxed max-w-xs">
                An ingredient interpretation tool. Does not replace halal certification or personal guidance.
              </span>
            </div>
            <div className="flex items-center gap-5 text-[12px] text-slate-400">
              {[
                { href: "mailto:hello@halalcheck.app", label: "Contact" },
                { href: "#", label: "Privacy" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="hover:text-slate-700 transition-colors duration-200"
                  whileHover={{ x: 1 }}
                  transition={{ duration: 0.12 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
}
