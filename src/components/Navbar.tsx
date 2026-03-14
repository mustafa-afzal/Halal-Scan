"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-2xl border-b border-slate-200/50 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1120px] px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-[0_1px_3px_rgba(59,130,246,0.3)]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="M22 4 12 14.01l-3-3" />
            </svg>
          </div>
          <span className="text-[14px] font-semibold tracking-[-0.02em] text-slate-900">
            HalalCheck
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-7">
          <a href="#how-it-works" className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors duration-200">
            How it works
          </a>
          <a href="#why" className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors duration-200">
            Why it matters
          </a>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center h-[34px] px-4 text-[13px] font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
          >
            Join waitlist
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href="#waitlist"
          className="sm:hidden inline-flex items-center justify-center h-[34px] px-4 text-[13px] font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all duration-200"
        >
          Join waitlist
        </a>
      </div>
    </motion.nav>
  );
}
