"use client";

import { Calendar, MapPin, Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import MaskReveal from "@/components/MaskReveal";

export default function Experience() {
  const experience = portfolioData.experience || [];

  return (
    <section id="experience" className="py-24 relative bg-ice-canvas border-t border-ice-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <MaskReveal>
          <div className="flex flex-col items-start text-left mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aqua/20 text-aqua-darkText text-xs font-bold uppercase tracking-wider mb-2">
              <span>02 // Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-ocean-900 tracking-tight mb-3">
              Experience &amp; Journey
            </h2>
            <p className="text-ocean-600 text-base sm:text-lg max-w-xl">
              Hands-on industry roles, apprenticeships, and engineering contributions.
            </p>
          </div>
        </MaskReveal>

        {experience.length > 0 ? (
          <div className="relative border-l-2 border-ice-border ml-2 sm:ml-4 pl-5 sm:pl-8 space-y-7 sm:space-y-10 text-left">
            {experience.map((item, idx) => (
              <MaskReveal key={`${item.company}-${item.period}`} delay={idx * 0.1}>
                <div className="relative">
                  <div className="absolute -left-[27px] sm:-left-[39px] top-6 sm:top-8 w-4 h-4 rounded-full bg-aqua border-2 border-white shadow-sm" />

                  <div className="rounded-[28px] sm:rounded-[40px] clean-card p-5 sm:p-9">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                      <div>
                        <h3 className="text-lg sm:text-2xl font-black text-ocean-900 leading-snug">
                          {item.role}
                        </h3>
                        <div className="text-aqua-darkText font-bold text-xs sm:text-sm mt-0.5">
                          {item.company}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-ocean-600">
                        <span className="flex items-center gap-1 bg-ice-subtle px-2.5 sm:px-3 py-1 rounded-full border border-ice-border">
                          <Calendar className="w-3 h-3 text-aqua-darkText" />
                          {item.period}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1 bg-ice-subtle px-2.5 sm:px-3 py-1 rounded-full border border-ice-border">
                            <MapPin className="w-3 h-3 text-aqua-darkText" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2 sm:space-y-2.5 my-3.5 sm:my-4 text-xs sm:text-sm text-ocean-700">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-aqua mt-1.5 sm:mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-ice-border">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] sm:text-xs font-semibold rounded-full bg-ice-subtle border border-ice-border text-ocean-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </MaskReveal>
            ))}
          </div>
        ) : (
          <div className="rounded-[40px] clean-card p-12 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-ice-subtle border border-ice-border flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-aqua-darkText" />
            </div>
            <h3 className="text-xl font-bold text-ocean-900 mb-2">
              Ready for Your Experience &amp; Journey
            </h3>
            <p className="text-sm text-ocean-600 max-w-md mx-auto">
              Share your current/previous roles, companies, dates, or education, and I will format them into this interactive milestone timeline.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
