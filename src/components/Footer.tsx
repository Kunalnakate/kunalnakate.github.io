"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-ice-border bg-white py-12 relative pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Status */}
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-lg text-ocean-900 tracking-tight">
              {portfolioData.personal.name.toUpperCase()}
            </span>
            <span className="w-2 h-2 rounded-full bg-aqua" />
          </div>

          {/* Quick nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-ocean-600 font-semibold">
            <Link href="/#overview" className="hover:text-ocean-900 transition-colors">
              Overview
            </Link>
            <Link href="/#projects" className="hover:text-ocean-900 transition-colors">
              Projects
            </Link>
            <Link href="/#experience" className="hover:text-ocean-900 transition-colors">
              Experience
            </Link>
            <Link href="/#skills" className="hover:text-ocean-900 transition-colors">
              Skills
            </Link>
            <Link href="/contact" className="hover:text-ocean-900 transition-colors">
              Contact
            </Link>
            {portfolioData.personal.linkedin && (
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ocean-900 text-ocean-700 transition-colors inline-flex items-center gap-1 font-bold text-aqua-darkText"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            )}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="min-h-[40px] px-4 py-2 rounded-full bg-ice-subtle hover:bg-ice-canvas border border-ice-border text-ocean-800 transition-all flex items-center justify-center gap-2 text-xs font-bold"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-aqua-darkText" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-ice-border text-center text-xs text-ocean-400 font-medium">
          &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
