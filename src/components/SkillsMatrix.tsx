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
        <svg viewBox="0 0 128 128" className="w-10 h-10">
          <path
            fill="#0074BD"
            d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
          />
          <path
            fill="#EA2D2E"
            d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
          />
          <path
            fill="#0074BD"
            d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
          />
          <path
            fill="#EA2D2E"
            d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
          />
          <path
            fill="#0074BD"
            d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
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
