"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Server,
  Zap,
  Globe,
  GitBranch,
  ShieldCheck,
  ArrowUpRight,
  FolderPlus,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import MaskReveal from "@/components/MaskReveal";

export default function BentoGrid() {
  const [activeTab, setActiveTab] = useState<"arch" | "stack" | "metrics">("arch");
  const [projectIdx, setProjectIdx] = useState<number>(0);

  const projects = portfolioData.projects || [];
  const featured = projects[projectIdx] || projects[0];

  return (
    <section id="bento" className="py-20 sm:py-24 relative bg-ice-subtle border-t border-ice-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MaskReveal>
          <div className="flex flex-col items-start text-left mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aqua/20 text-aqua-darkText text-xs font-bold uppercase tracking-wider mb-3">
              <span>01 // System Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-ocean-900 tracking-tight mb-3">
              Engineering Matrix
            </h2>
            <p className="text-base sm:text-lg text-ocean-600 max-w-2xl leading-relaxed">
              Concrete architectural patterns, production infrastructure, and real-time reliability telemetry.
            </p>
          </div>
        </MaskReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Featured Project (Col span 2, Row span 2) */}
          <div className="md:col-span-2 md:row-span-2">
            <MaskReveal className="h-full">
              <div className="h-full rounded-[32px] clean-card p-6 sm:p-8 flex flex-col justify-between">
                {featured ? (
                  <div>
                    {/* Project Switcher Pills */}
                    {projects.length > 1 && (
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="text-[11px] font-mono text-ocean-400 font-bold uppercase">
                          Featured:
                        </span>
                        {projects.map((p, i) => (
                          <button
                            key={p.id}
                            onClick={() => setProjectIdx(i)}
                            className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                              projectIdx === i
                                ? "bg-ocean-900 text-white shadow-sm"
                                : "bg-white border border-ice-border text-ocean-700 hover:text-ocean-950"
                            }`}
                          >
                            {p.title}
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-ice-subtle text-ocean-800 text-xs font-bold border border-ice-border">
                        {featured.category}
                      </span>
                      <span className="text-xs font-bold text-aqua-darkText flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-aqua" />
                        {featured.status || "Published App"}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-ocean-900 mb-1">
                      {featured.title}
                    </h3>
                    {featured.subtitle && (
                      <p className="text-xs font-bold text-aqua-darkText mb-3">
                        {featured.subtitle}
                      </p>
                    )}
                    <p className="text-sm text-ocean-700 leading-relaxed mb-6">
                      {featured.shortDescription || featured.tagline}
                    </p>

                    {/* Clean Tab Pills */}
                    <div className="flex gap-1.5 p-1 bg-ice-subtle rounded-full border border-ice-border w-fit mb-6">
                      <button
                        onClick={() => setActiveTab("arch")}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                          activeTab === "arch"
                            ? "bg-aqua text-ocean-950 shadow-aqua-pill"
                            : "text-ocean-600 hover:text-ocean-900"
                        }`}
                      >
                        Architecture
                      </button>
                      <button
                        onClick={() => setActiveTab("stack")}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                          activeTab === "stack"
                            ? "bg-aqua text-ocean-950 shadow-aqua-pill"
                            : "text-ocean-600 hover:text-ocean-900"
                        }`}
                      >
                        Tech Stack
                      </button>
                      <button
                        onClick={() => setActiveTab("metrics")}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                          activeTab === "metrics"
                            ? "bg-aqua text-ocean-950 shadow-aqua-pill"
                            : "text-ocean-600 hover:text-ocean-900"
                        }`}
                      >
                        Achievement
                      </button>
                    </div>

                    <div className="rounded-xl bg-ice-subtle border border-ice-border p-5 text-xs text-ocean-800 mb-6">
                      {activeTab === "arch" && (
                        <div className="space-y-2 animate-in fade-in duration-150">
                          <p className="text-ocean-800 leading-relaxed text-xs sm:text-sm font-mono">
                            {featured.architectureHighlight || "Architecture details will be showcased here."}
                          </p>
                        </div>
                      )}
                      {activeTab === "stack" && (
                        <div className="flex flex-wrap gap-1.5 animate-in fade-in duration-150">
                          {featured.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-full bg-white border border-ice-border text-ocean-900 text-xs font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {activeTab === "metrics" && (
                        <div className="animate-in fade-in duration-150 space-y-1">
                          <p className="text-xs sm:text-sm font-bold text-ocean-900 leading-snug">
                            {featured.achievement || "Independently developed & published on Google Play Store."}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-ice-subtle border border-ice-border flex items-center justify-center mb-4 text-ocean-400">
                      <FolderPlus className="w-8 h-8 text-aqua-darkText" />
                    </div>
                    <h3 className="text-xl font-bold text-ocean-900 mb-2">
                      Awaiting Flagship Project
                    </h3>
                  </div>
                )}

                {featured && (
                  <div className="pt-4 border-t border-ice-border flex items-center justify-between">
                    <Link
                      href={`/projects/${featured.slug || featured.id}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-aqua-darkText hover:text-ocean-900 transition-colors"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </Link>
                  </div>
                )}
              </div>
            </MaskReveal>
          </div>

          {/* Card 2: Current Focus */}
          <MaskReveal delay={0.1}>
            <div className="rounded-[28px] clean-card p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-ocean-400 uppercase tracking-wider">
                    Current Focus
                  </span>
                  <GitBranch className="w-4 h-4 text-aqua-darkText" />
                </div>
                <h4 className="text-lg font-bold text-ocean-900 mb-2">
                  What I&apos;m Building
                </h4>
                <p className="text-xs sm:text-sm text-ocean-600 leading-relaxed">
                  Focusing on full-stack web and native Android applications with clean API integrations.
                </p>
              </div>
              <div className="pt-4 border-t border-ice-border mt-6 flex items-center justify-between text-xs font-mono text-ocean-600">
                <span>Status</span>
                <span className="text-aqua-darkText font-bold">Active</span>
              </div>
            </div>
          </MaskReveal>

          {/* Card 3: Performance & SLA */}
          <MaskReveal delay={0.15}>
            <div className="rounded-[28px] clean-card p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-aqua-darkText uppercase tracking-wider">
                    Performance
                  </span>
                  <Zap className="w-4 h-4 text-aqua-darkText" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-ocean-900 mb-1">
                  Modern &amp; Robust
                </div>
                <p className="text-xs text-ocean-600 leading-relaxed">
                  Clean state management, low-latency API architecture, and reliable databases.
                </p>
              </div>
              <div className="pt-4 border-t border-ice-border mt-6 flex items-center justify-between text-xs font-mono text-ocean-600">
                <span className="flex items-center gap-1.5 text-ocean-800 font-semibold">
                  <Globe className="w-3.5 h-3.5 text-aqua-darkText" /> Web &amp; Mobile
                </span>
                <span className="text-aqua-darkText font-bold">Tested</span>
              </div>
            </div>
          </MaskReveal>

          {/* Card 4: Architecture Standards (Col span 2) */}
          <div className="md:col-span-2">
            <MaskReveal delay={0.2}>
              <div className="rounded-[28px] clean-card p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-4 h-4 text-aqua-darkText" />
                    <span className="text-xs font-mono font-bold text-ocean-400 uppercase tracking-wider">
                      Engineering Standards
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-ocean-900 mb-2">
                    Clean Code, Modern Standards &amp; Accessibility
                  </h4>
                  <p className="text-xs sm:text-sm text-ocean-600 leading-relaxed mb-4">
                    Strict TypeScript, component hygiene, responsive mobile-first ergonomics, and WCAG accessibility standards.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-ice-border text-center">
                  <div className="p-2.5 rounded-xl bg-ice-subtle border border-ice-border">
                    <div className="text-xs font-bold text-ocean-900">TypeScript</div>
                    <div className="text-[10px] text-ocean-500 font-mono">Strict Types</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-ice-subtle border border-ice-border">
                    <div className="text-xs font-bold text-ocean-900">WCAG 2.1</div>
                    <div className="text-[10px] text-aqua-darkText font-bold">Accessible</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-ice-subtle border border-ice-border">
                    <div className="text-xs font-bold text-ocean-900">Next.js</div>
                    <div className="text-[10px] text-ocean-500 font-mono">App Router</div>
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
