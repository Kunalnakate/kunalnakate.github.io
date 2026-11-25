"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Overview", href: "/#overview" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ice-canvas/90 backdrop-blur-md border-b border-ice-border py-3.5 sm:py-4 pt-safe transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-ocean-900 hover:text-ocean-800 transition-colors"
        >
          <span className="font-extrabold text-xl tracking-tight text-ocean-900">
            {portfolioData.personal.name.toUpperCase()}
          </span>
          <span className="w-2 h-2 rounded-full bg-aqua" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ocean-600 hover:text-ocean-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button (Pill button like the reference) */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 rounded-full bg-aqua hover:bg-aqua-hover text-ocean-950 shadow-aqua-pill transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-white border border-ice-border text-ocean-900 active:scale-95 transition-transform"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-ocean-900" /> : <Menu className="w-5 h-5 text-ocean-900" />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white border-b border-ice-border shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 min-h-[44px] text-sm font-semibold text-ocean-800 hover:text-ocean-900 hover:bg-ice-subtle rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-aqua-darkText" />
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-ice-border flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[48px] flex items-center justify-center py-3 text-center text-sm font-bold rounded-full bg-aqua text-ocean-950 shadow-aqua-pill active:scale-[0.98] transition-transform"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
