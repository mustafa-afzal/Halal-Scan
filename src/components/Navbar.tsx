"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ease, duration, tapScale } from "@/lib/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: duration.normal, ease }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/75 backdrop-blur-2xl border-b border-slate-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className={`mx-auto max-w-[1120px] px-6 flex items-center justify-between transition-all duration-500 ${
        scrolled ? "h-12" : "h-14"
      }`}>
        {/* Wordmark */}
        <motion.a
          href="#"
          className="flex items-center gap-2 group"
          whileHover={{ x: 1 }}
          transition={{ duration: 0.15 }}
        >
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-[0_1px_3px_rgba(59,130,246,0.3)] transition-shadow duration-200 group-hover:shadow-[0_2px_6px_rgba(59,130,246,0.4)]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="M22 4 12 14.01l-3-3" />
            </svg>
          </div>
          <span className="text-[14px] font-semibold tracking-[-0.02em] text-slate-900">
            HalalCheck
          </span>
        </motion.a>

        {/* Nav links — desktop */}
        <div className="hidden sm:flex items-center gap-7">
          {[
            { href: "#how-it-works", label: "How it works" },
            { href: "#why", label: "Why it matters" },
          ].map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative text-[13px] text-slate-500 hover:text-slate-900 transition-colors duration-200 py-1"
              whileHover="hover"
            >
              {link.label}
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-px bg-slate-900 origin-left"
                initial={{ scaleX: 0, opacity: 0 }}
                variants={{
                  hover: { scaleX: 1, opacity: 1 },
                }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.a>
          ))}
          <motion.a
            href="#waitlist"
            {...tapScale}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center justify-center h-[34px] px-4 text-[13px] font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.12)]"
          >
            Join waitlist
          </motion.a>
        </div>

        {/* Mobile CTA */}
        <motion.a
          href="#waitlist"
          {...tapScale}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="sm:hidden inline-flex items-center justify-center h-[34px] px-4 text-[13px] font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all duration-200"
        >
          Join waitlist
        </motion.a>
      </div>
    </motion.nav>
  );
}
