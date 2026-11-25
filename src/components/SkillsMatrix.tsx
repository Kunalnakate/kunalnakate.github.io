"use client";

import { portfolioData } from "@/data/portfolioData";
import MaskReveal from "@/components/MaskReveal";

// Crisp, lightweight inline SVG symbols for exact tech stack
function TechIcon({ symbol }: { symbol: string }) {
  switch (symbol) {
    case "python":
      return (
        <svg viewBox="0 0 128 128" className="w-10 h-10" fill="currentColor">
          <path
            fill="#3776AB"
            d="M63.5 8c-28.7 0-26.8 12.4-26.8 12.4l.1 12.9h27.4v3.9H26.3S8 35.1 8 64c0 29 16 28 16 28h9.5v-13.4s-.5-16 15.8-16h27.2s15.2.2 15.2-14.7V23.2S93 8 63.5 8zm-14.9 8.2c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9z"
          />
          <path
            fill="#FFD43B"
            d="M64.5 120c28.7 0 26.8-12.4 26.8-12.4l-.1-12.9H63.8v-3.9h37.9s18.3 2.1 18.3-26.8c0-29-16-28-16-28h-9.5v13.4s.5 16-15.8 16H51.5s-15.2-.2-15.2 14.7v24.7s-1.3 15.2 28.2 15.2zm14.9-8.2c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z"
          />
        </svg>
      );
    case "java":
      return (
        <svg viewBox="0 0 128 128" className="w-10 h-10" fill="currentColor">
          <path
            fill="#5382A1"
            d="M48.2 92.4c-8.9 2.4-15 1.5-15 1.5s5.2-2.1 12.8-3.4c8.4-1.4 17.5-1.1 27.4.4 7.6 1.1 15.6 3.1 23.4 3 0 0-4.6 1.4-14.7 1.4-11.2.1-23.9-1.3-33.9-2.9z"
          />
          <path
            fill="#E76F00"
            d="M42.2 79.5c-7.9 2.2-13.3 1.4-13.3 1.4s4.7-2 11.4-3.1c7.4-1.3 15.5-1 24.3.4 6.7 1 13.9 2.8 20.8 2.7 0 0-4.1 1.3-13.1 1.3-9.9.1-21.2-1.2-30.1-2.7zm28.9-38.3s4.6 4.3-4.2 11.9c-10.8 9.3-4.6 14.5-4.6 14.5s-6.3-5.7 3.3-13.6c8-6.6 5.5-12.8 5.5-12.8zm11 11.4s5.7 5.2-3.1 13.7c-10.7 10.3-3 15.7-3 15.7s-7.8-6.8 3.5-16.1c9.4-7.7 2.6-13.3 2.6-13.3zM54 105.8c-12.3 3.3-20.8 2.1-20.8 2.1s6.6-2.9 17.9-4.7c11.7-1.9 24.4-1.5 38.2.6 10.6 1.6 21.8 4.3 32.7 4.2 0 0-6.4 2-20.5 2-15.6.1-33.3-1.8-47.5-4.2z"
          />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 128 128" className="w-10 h-10" fill="none">
          <circle cx="64" cy="64" r="11" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="6" fill="none">
            <ellipse cx="64" cy="64" rx="54" ry="21" />
            <ellipse cx="64" cy="64" rx="54" ry="21" transform="rotate(60 64 64)" />
            <ellipse cx="64" cy="64" rx="54" ry="21" transform="rotate(120 64 64)" />
          </g>
        </svg>
      );
    case "html":
      return (
        <svg viewBox="0 0 128 128" className="w-10 h-10" fill="currentColor">
          <path
            fill="#E34F26"
            d="M19 113.8L9 2h110l-10 111.8L64 126l-45-12.2z"
          />
          <path
            fill="#EF652A"
            d="M64 116.5l36.3-9.8L108 12H64v104.5z"
          />
          <path
            fill="#ECECEC"
            d="M64 54.4H47.6l-1.2-13.3H64V28H33.4l3.5 39.5H64v-13.1zm0 37.3l-.2.1-16.4-4.4-1-11.7H33.1l2 23.3 28.8 8 .1-.3v-15z"
          />
          <path
            fill="#FFFFFF"
            d="M64 54.4h16.4l-1.5 17.3L64 76.1v13.6l28.8-8 3.5-39.7H64v12.4zm0-26.4h32.6l1-12H64V28z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function SkillsMatrix() {
  const techStack = portfolioData.techStack || [];

  return (
    <section id="skills" className="py-20 relative bg-ice-subtle border-t border-ice-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MaskReveal>
          <div className="flex flex-col items-start text-left mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aqua/20 text-aqua-darkText text-xs font-bold uppercase tracking-wider mb-2">
              <span>03 // Tech Stack</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-ocean-900 tracking-tight mb-2">
              Technologies &amp; Core Tools
            </h2>
            <p className="text-ocean-600 text-base sm:text-lg max-w-xl">
              Languages and frontend/backend tools I work with daily.
            </p>
          </div>
        </MaskReveal>

        {/* Simplified, Authentic Symbols Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
          {techStack.map((tech, idx) => (
            <MaskReveal key={tech.name} delay={idx * 0.08}>
              <div className="clean-card rounded-[24px] sm:rounded-[32px] p-4 sm:p-7 flex flex-col items-center text-center group hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                {/* Tech Symbol */}
                <div className="w-13 h-13 sm:w-16 sm:h-16 p-2 rounded-2xl bg-ice-canvas/60 border border-ice-border flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-white group-hover:shadow-sm transition-all duration-200">
                  <TechIcon symbol={tech.symbol} />
                </div>

                {/* Name */}
                <h3 className="text-base sm:text-lg font-extrabold text-ocean-900 mb-0.5 sm:mb-1 group-hover:text-aqua-darkText transition-colors">
                  {tech.name}
                </h3>

                {/* Simplified Role */}
                <span className="text-[11px] sm:text-xs font-medium text-ocean-600 line-clamp-1">
                  {tech.role}
                </span>
              </div>
            </MaskReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
