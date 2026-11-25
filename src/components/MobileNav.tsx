"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  LayoutGrid,
  Layers,
  Briefcase,
  Zap,
  Mail,
} from "lucide-react";

export default function MobileNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 30) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
        setIsVisible(false);
      } else if (lastScrollY - currentScrollY > 8) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const items = [
    { label: "Home", href: "/#overview", icon: Home },
    { label: "Projects", href: "/#projects", icon: Layers },
    { label: "Experience", href: "/#experience", icon: Briefcase },
    { label: "Skills", href: "/#skills", icon: Zap },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <nav
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-200 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      } bg-white/95 backdrop-blur-md border-t border-ice-border px-4 py-2 pb-safe shadow-lg`}
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="min-h-[44px] min-w-[44px] flex flex-col items-center justify-center text-ocean-600 hover:text-aqua-darkText active:scale-95 transition-colors group"
            >
              <Icon className="w-5 h-5 mb-0.5 group-hover:text-aqua-darkText transition-colors" />
              <span className="text-[10px] font-semibold tracking-tight text-ocean-700 group-hover:text-aqua-darkText transition-colors">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
