"use client";

import { motion } from "framer-motion";
import { Upload, Search, ShieldCheck, AlertTriangle, FileText, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitlistForm";
import HeroMockup from "@/components/HeroMockup";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-4 sm:pt-36 sm:pb-8 overflow-hidden">
        {/* Background: subtle grid + ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hero-grid absolute inset-0 opacity-40" />
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[120px] glow-pulse" />
          <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-indigo-400/[0.03] rounded-full blur-[80px] glow-pulse-delayed" />
        </div>

        <div className="relative mx-auto max-w-[1120px] px-6">
          {/* Hero copy stack — centered, tight */}
          <div className="max-w-2xl mx-auto text-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-[12px] font-medium text-blue-600">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                </span>
                Launching soon
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease }}
              className="mt-6 text-[36px] sm:text-[48px] lg:text-[56px] font-bold tracking-[-0.04em] leading-[1.06] text-slate-900"
            >
              Know what&apos;s in your food.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Before you buy it.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease }}
              className="mt-5 text-[16px] sm:text-[18px] text-slate-500 leading-[1.6] max-w-md mx-auto"
            >
              Upload a food label. Get a clear halal, haram, or doubtful verdict
              with transparent ingredient explanations.
            </motion.p>

            {/* Waitlist form — the star */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease }}
            >
              <WaitlistForm className="mt-8 max-w-[440px] mx-auto" variant="hero" />
            </motion.div>
          </div>

          {/* Product preview composition */}
          <div className="mt-14 sm:mt-20">
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <ScrollReveal>
            <SectionHeading
              label="How it works"
              title="Three steps. Real answers."
            />
          </ScrollReveal>

          {/* Horizontal step flow */}
          <div className="mt-16 relative">
            {/* Connecting line — desktop only */}
            <div className="hidden sm:block absolute top-[44px] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200" />

            <div className="grid sm:grid-cols-3 gap-12 sm:gap-0">
              {([
                {
                  icon: Upload,
                  title: "Upload a label",
                  desc: "Snap a photo of the ingredient list or paste the text directly.",
                  step: "01",
                },
                {
                  icon: Search,
                  title: "Ingredients analyzed",
                  desc: "Each ingredient is checked and categorized with source-level detail.",
                  step: "02",
                },
                {
                  icon: ShieldCheck,
                  title: "Clear verdict",
                  desc: "Halal, haram, or doubtful — with an explanation you can understand.",
                  step: "03",
                },
              ] as const).map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 0.08} className="text-center px-4 sm:px-8">
                  {/* Step circle */}
                  <div className="relative mx-auto mb-6">
                    <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] hover:border-blue-200 group">
                      <item.icon className="size-6 text-slate-400 transition-colors duration-300 group-hover:text-blue-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Step {item.step}
                  </span>
                  <h3 className="mt-2 text-[16px] font-semibold tracking-[-0.01em] text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-slate-500 max-w-[260px] mx-auto">
                    {item.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WHY IT MATTERS
      ════════════════════════════════════════════ */}
      <section id="why" className="py-24 sm:py-32 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-[1120px] px-6">
          <ScrollReveal>
            <SectionHeading
              label="Why it matters"
              title="Shopping shouldn't require guesswork."
              description="Ingredient labels are confusing. Doubtful additives are everywhere. You deserve better than Googling each one."
            />
          </ScrollReveal>

          <div className="mt-16 grid sm:grid-cols-3 gap-5">
            {([
              {
                icon: Search,
                title: "No more Googling in the aisle",
                desc: "Get answers in seconds, not minutes of searching ingredient-by-ingredient.",
                accent: "blue" as const,
              },
              {
                icon: AlertTriangle,
                title: "Understand doubtful additives",
                desc: "Gelatin, enzymes, mono-diglycerides, natural flavors — know what to look for and why.",
                accent: "amber" as const,
              },
              {
                icon: Eye,
                title: "Transparent explanations",
                desc: "Every result tells you why an ingredient is flagged. You make the final call.",
                accent: "slate" as const,
              },
            ] as const).map((item, i) => {
              const accentColors = {
                blue: "bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
                amber: "bg-amber-50 text-amber-500 group-hover:bg-amber-500 group-hover:text-white",
                slate: "bg-slate-100 text-slate-500 group-hover:bg-slate-800 group-hover:text-white",
              };
              return (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25 }}
                    className="group relative rounded-2xl border border-slate-200/80 bg-white p-7 h-full transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                  >
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${accentColors[item.accent]}`}>
                      <item.icon className="size-[18px]" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-5 text-[15px] font-semibold tracking-[-0.01em] text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-[1.65] text-slate-500">
                      {item.desc}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TRUST
      ════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1120px] px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-lg text-center">
              <SectionHeading
                label="Our approach"
                title="Built with trust in mind."
              />

              <p className="mt-6 text-[15px] text-slate-500 leading-[1.7]">
                This tool assists with ingredient interpretation — it does not
                replace halal certification or personal guidance. When an
                ingredient is ambiguous, it says so. Transparency is the default.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
                {([
                  { icon: FileText, label: "Transparent reasoning" },
                  { icon: Search, label: "Source-aware analysis" },
                  { icon: ShieldCheck, label: "No black boxes" },
                ] as const).map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[12px] font-medium text-slate-500 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  >
                    <tag.icon className="size-3 text-blue-500" strokeWidth={2} />
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════ */}
      <section id="waitlist" className="py-24 sm:py-32 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1120px] px-6">
          <ScrollReveal>
            <div className="relative mx-auto max-w-md text-center">
              {/* Subtle ambient */}
              <div className="absolute -inset-16 bg-blue-500/[0.015] rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <h2 className="text-[26px] sm:text-[34px] font-semibold tracking-[-0.03em] leading-[1.15] text-slate-900">
                  Be among the first.
                </h2>
                <p className="mt-3 text-[15px] text-slate-500 leading-[1.6]">
                  We&apos;re building something thoughtful. Join the waitlist and
                  we&apos;ll reach out when it&apos;s ready.
                </p>
                <WaitlistForm className="mt-7 max-w-[400px] mx-auto" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
