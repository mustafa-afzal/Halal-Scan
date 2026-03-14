"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  className?: string;
  variant?: "default" | "hero";
}

export default function WaitlistForm({ className = "", variant = "default" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    try {
      // Replace with Supabase or your backend
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const isHero = variant === "hero";

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35 }}
            className={cn(
              "flex items-center justify-center gap-3 rounded-xl border bg-emerald-50 border-emerald-200",
              isHero ? "px-6 py-5" : "px-5 py-4"
            )}
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0 text-emerald-600">
              <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className={cn("font-medium text-emerald-700", isHero ? "text-[15px]" : "text-sm")}>
              You&apos;re on the list. We&apos;ll be in touch.
            </p>
          </motion.div>
        ) : (
          <motion.div key="form" exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.15 }}>
            <form onSubmit={handleSubmit} noValidate>
              <div className={cn(
                "flex items-center gap-2 rounded-xl border bg-white transition-all duration-200",
                isHero
                  ? "p-1.5 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.03)]"
                  : "p-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]",
                status === "error" ? "border-red-300" : "border-slate-200/80",
                "focus-within:border-blue-300 focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]"
              )}>
                <label htmlFor={isHero ? "hero-email" : "footer-email"} className="sr-only">
                  Email address
                </label>
                <input
                  id={isHero ? "hero-email" : "footer-email"}
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  aria-invalid={status === "error"}
                  aria-describedby={status === "error" ? "waitlist-error" : undefined}
                  className={cn(
                    "flex-1 bg-transparent border-0 text-slate-900 placeholder:text-slate-400 focus:outline-none min-w-0",
                    isHero ? "h-11 px-4 text-[15px]" : "h-10 px-3 text-[14px]"
                  )}
                />
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileTap={{ scale: 0.96 }}
                  className={cn(
                    "shrink-0 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
                    isHero ? "h-11 px-6 text-[14px]" : "h-10 px-5 text-[13px]"
                  )}
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    "Join the waitlist"
                  )}
                </motion.button>
              </div>
            </form>

            <AnimatePresence>
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  id="waitlist-error"
                  className="mt-2 text-[13px] text-red-500"
                  role="alert"
                >
                  {errorMessage}
                </motion.p>
              )}
            </AnimatePresence>

            <p className={cn("mt-3 text-[12px] text-slate-400", isHero && "text-center")}>
              No spam, ever. Early access only.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
