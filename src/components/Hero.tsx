"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import MaskReveal from "@/components/MaskReveal";

export default function Hero() {
  const { personal, techStack, stats } = portfolioData;

  return (
    <section
      id="overview"
      className="relative min-h-[90dvh] flex flex-col justify-center pt-32 pb-16 bg-clean-grid overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Two-Column Grid: Left Intro + Right Photo Slot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Kunal's Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge */}
            <MaskReveal delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aqua text-ocean-950 font-bold text-xs tracking-tight shadow-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean-950" />
                <span>{personal.status}</span>
              </div>
            </MaskReveal>

            {/* Main Headline */}
            <MaskReveal delay={0.1}>
              <div className="space-y-2.5 sm:space-y-3 mb-6">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-ocean-900 leading-[1.08]">
                  Hi, I&apos;m {personal.name}.
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-ocean-800 leading-snug">
                  {personal.title}
                </p>
              </div>
            </MaskReveal>

            {/* Kunal's Exact Introduction */}
            <MaskReveal delay={0.15}>
              <div className="space-y-4 mb-8 max-w-xl">
                <p className="text-sm sm:text-base lg:text-lg text-ocean-700 leading-relaxed font-normal">
                  {personal.bio}
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-bold text-ocean-900">
                  {personal.tagline}
                </p>
              </div>
            </MaskReveal>

            {/* Dual CTAs (Stack on mobile with comfortable touch targets) */}
            <MaskReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 w-full sm:w-auto mb-10">
                <Link
                  href="#projects"
                  className="min-h-[48px] px-8 py-3 rounded-full bg-aqua hover:bg-aqua-hover text-ocean-950 font-extrabold text-sm sm:text-base shadow-aqua-pill transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>

                <Link
                  href="/contact"
                  className="min-h-[44px] px-6 py-2.5 rounded-full border border-ice-border hover:border-aqua/50 bg-white sm:bg-transparent text-ocean-900 hover:text-aqua-darkText font-bold text-sm sm:text-base flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] group shadow-sm sm:shadow-none"
                >
                  <span>Get in touch</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </MaskReveal>

            {/* Simplified Stack Badges */}
            <MaskReveal delay={0.25}>
              <div className="space-y-3 max-w-xl">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ocean-400 mr-1">
                    Tech Stack:
                  </span>
                  {techStack?.map((t) => (
                    <span
                      key={t.name}
                      className="px-3.5 py-1 text-xs font-bold rounded-full bg-white border border-ice-border text-ocean-900 shadow-sm"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>

                {/* Focus Domains */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ocean-400 mr-1">
                    Domains:
                  </span>
                  {personal.domains?.map((domain) => (
                    <span
                      key={domain}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-ice-subtle border border-ice-border text-ocean-700"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </MaskReveal>

            {/* Optional Stats */}
            {stats && stats.length > 0 && (
              <MaskReveal delay={0.3}>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mt-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="clean-card rounded-[24px] p-4 text-left"
                    >
                      <div className="text-2xl font-black text-ocean-900 mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-medium text-ocean-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </MaskReveal>
            )}
          </div>

          {/* RIGHT COLUMN: Profile Photo Frame with Section-Wise 3D Lift */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-4 lg:mt-0">
            <MaskReveal delay={0.2} className="w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-[32px] sm:rounded-[40px] clean-card p-4 sm:p-6 flex flex-col justify-between aspect-[4/5] overflow-hidden group transition-all duration-500 ease-out hover:-translate-y-2.5 hover:scale-[1.015] hover:shadow-[0_24px_50px_-12px_rgba(16,42,69,0.16),0_0_24px_rgba(47,211,160,0.22)] hover:border-aqua/60">
                
                {/* SECTION 1: Top Status Header (Lifts on hover) */}
                <div className="flex items-center justify-end border-b border-ice-border pb-3.5 px-1 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ice-subtle border border-ice-border text-ocean-800 text-xs font-mono font-semibold transition-all duration-300 group-hover:border-aqua/50 group-hover:bg-white group-hover:shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
                    <span>Open to Work</span>
                  </span>
                </div>

                {/* SECTION 2: Center Photo Frame (Pops up, scales & floats off the card) */}
                <div className="flex-1 w-full my-4 rounded-[28px] overflow-hidden relative border border-ice-border shadow-sm bg-ocean-950 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03] group-hover:shadow-[0_20px_40px_-10px_rgba(16,42,69,0.25)] group-hover:border-aqua/70">
                  <img
                    src={personal.avatar || "/images/kunal-profile.jpg"}
                    alt="Kunal - Full-Stack & Systems Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle inner ambient gradient that clears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/20 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* SECTION 3: Bottom Meta Bar (Lifts on hover) */}
                <div className="border-t border-ice-border pt-3.5 px-1 flex items-center justify-between text-xs transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <div className="font-extrabold text-ocean-900 text-base leading-tight tracking-tight transition-colors group-hover:text-ocean-950">
                    {personal.name}
                  </div>
                </div>
              </div>
            </MaskReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
