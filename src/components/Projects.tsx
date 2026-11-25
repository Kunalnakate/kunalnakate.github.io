"use client";

import Link from "next/link";
import {
  ArrowRight,
  FolderCode,
  Smartphone,
  Monitor,
  Trophy,
  Building2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import MaskReveal from "@/components/MaskReveal";

export default function Projects() {
  const projects = portfolioData.projects || [];

  return (
    <section id="projects" className="py-20 sm:py-24 relative bg-ice-canvas border-t border-ice-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consistent Section Header */}
        <MaskReveal>
          <div className="flex flex-col items-start text-left mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aqua/20 text-aqua-darkText text-xs font-bold uppercase tracking-wider mb-3">
              <span>01 // Selected Projects</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-ocean-900 tracking-tight mb-3">
              Projects
            </h2>
            <p className="text-base sm:text-lg text-ocean-600 max-w-2xl leading-relaxed">
              Explore in-depth technical breakdowns, system architecture diagrams, and application interfaces.
            </p>
          </div>
        </MaskReveal>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {projects.map((project, idx) => {
              const isMobile = project.platformType === "mobile" || project.id === "vishedgesocial";

              return (
                <MaskReveal key={project.id || project.slug} delay={idx * 0.08}>
                  <Link
                    href={`/projects/${project.slug || project.id}`}
                    className="group clean-card rounded-[32px] sm:rounded-[40px] overflow-hidden flex flex-col justify-between h-full text-left transition-all duration-200 hover:-translate-y-1 active:scale-[0.99]"
                  >
                    <div>
                      {/* Visual Preview / Thumbnail Frame */}
                      <div className="aspect-[16/10] w-full bg-ice-subtle border-b border-ice-border overflow-hidden relative flex items-center justify-center p-3">
                        {project.image ? (
                          <div className="w-full h-full flex items-center justify-center relative">
                            {/* Realistic Phone Shell Framing for Mobile Screen */}
                            {isMobile ? (
                              <div className="h-[92%] aspect-[9/19] rounded-xl bg-white border border-ocean-900/15 shadow-sm overflow-hidden relative group-hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
                                {/* Top micro notch bar */}
                                <div className="w-10 h-1.5 rounded-full bg-ocean-200 mx-auto mt-1 z-10 shrink-0" />
                                <div className="flex-1 w-full overflow-hidden relative my-0.5">
                                  <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top"
                                  />
                                </div>
                                {/* Bottom micro indicator */}
                                <div className="w-12 h-1 rounded-full bg-ocean-200 mx-auto mb-1 z-10 shrink-0" />
                              </div>
                            ) : (
                              <div className="w-[92%] h-[92%] rounded-xl overflow-hidden border border-ice-border shadow-sm group-hover:scale-105 transition-transform duration-300">
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-14 h-14 rounded-2xl bg-white border border-ice-border shadow-sm flex items-center justify-center mb-3 group-hover:border-aqua group-hover:scale-105 transition-all">
                              {isMobile ? (
                                <Smartphone className="w-7 h-7 text-aqua-darkText" />
                              ) : (
                                <Monitor className="w-7 h-7 text-aqua-darkText" />
                              )}
                            </div>
                            <span className="text-xs font-mono font-bold text-ocean-800">
                              {isMobile ? "Native Android Application" : "Full Stack Enterprise Platform"}
                            </span>
                            <span className="text-[11px] text-ocean-500 font-mono mt-0.5">
                              {isMobile ? "Play Store Deployed" : "Client Project // Sanskriti Rajasthan"}
                            </span>
                          </div>
                        )}

                        {/* Floating Category Tag */}
                        <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full bg-white/95 border border-ice-border text-ocean-900 shadow-sm z-20">
                          {project.category}
                        </span>

                        {project.client && (
                          <span className="absolute top-3 right-3 text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-aqua/20 text-aqua-darkText border border-aqua/30 shadow-sm z-20">
                            {project.client}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-7">
                        <div className="mb-2">
                          <h3 className="text-2xl font-extrabold text-ocean-900 group-hover:text-aqua-darkText transition-colors mb-1">
                            {project.title}
                          </h3>
                          {project.subtitle && (
                            <p className="text-xs font-bold text-aqua-darkText">
                              {project.subtitle}
                            </p>
                          )}
                        </div>

                        <p className="text-sm text-ocean-700 leading-relaxed line-clamp-3 mb-6">
                          {project.shortDescription || project.fullDescription}
                        </p>

                        {/* Achievement Pill */}
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-ice-subtle border border-ice-border text-xs text-ocean-800 font-semibold mb-6">
                          {project.client ? (
                            <>
                              <Building2 className="w-4 h-4 text-aqua-darkText shrink-0" />
                              <span className="truncate">Client Project &bull; Sanskriti Rajasthan</span>
                            </>
                          ) : (
                            <>
                              <Trophy className="w-4 h-4 text-aqua-darkText shrink-0" />
                              <span className="truncate">Published on Google Play Store</span>
                            </>
                          )}
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags?.slice(0, 5).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-xs font-semibold rounded-full bg-ice-subtle border border-ice-border text-ocean-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom CTA Link */}
                    <div className="px-6 sm:px-7 py-4 bg-ice-subtle border-t border-ice-border flex items-center justify-between text-xs font-bold text-aqua-darkText group-hover:text-ocean-900 transition-colors">
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
                    </div>
                  </Link>
                </MaskReveal>
              );
            })}
          </div>
        ) : (
          <div className="clean-card rounded-[40px] p-12 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-ice-subtle border border-ice-border flex items-center justify-center mx-auto mb-4">
              <FolderCode className="w-8 h-8 text-aqua-darkText" />
            </div>
            <h3 className="text-xl font-bold text-ocean-900 mb-2">
              Ready for Your Real Projects
            </h3>
            <p className="text-sm text-ocean-600 max-w-md mx-auto">
              Give me your project details one by one! Each card on this page will feature a short intro, and clicking it will open a dedicated page with full details, architecture, and photos.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}