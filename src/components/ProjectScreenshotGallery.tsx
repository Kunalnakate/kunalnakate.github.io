"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Smartphone,
  Monitor,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
} from "lucide-react";

interface ScreenshotItem {
  label: string;
  caption: string;
  image?: string;
}

interface ProjectScreenshotGalleryProps {
  screenshots: ScreenshotItem[];
  isMobile: boolean;
  projectTitle: string;
}

export default function ProjectScreenshotGallery({
  screenshots,
  isMobile,
  projectTitle,
}: ProjectScreenshotGalleryProps) {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const closeModal = useCallback(() => {
    setActiveModalIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setActiveModalIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % screenshots.length;
    });
  }, [screenshots.length]);

  const prevImage = useCallback(() => {
    setActiveModalIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + screenshots.length) % screenshots.length;
    });
  }, [screenshots.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
    setTouchStartX(null);
  };

  // Keyboard navigation listener (Esc to close, ArrowLeft/ArrowRight to navigate)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex, closeModal, nextImage, prevImage]);

  // Prevent background page scrolling while modal is open
  useEffect(() => {
    if (activeModalIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModalIndex]);

  const currentScreen = activeModalIndex !== null ? screenshots[activeModalIndex] : null;

  return (
    <div>
      {/* Screenshots Grid Display */}
      {isMobile ? (
        /* Mobile Device Mockup Frames */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {screenshots.map((screen, index) => (
            <div
              key={screen.label}
              className="clean-card rounded-[28px] p-5 flex flex-col justify-between group transition-all duration-200"
            >
              {/* Android Phone Shell */}
              <div className="w-full max-w-[280px] mx-auto aspect-[9/17] rounded-2xl bg-white border border-ice-border shadow-sm overflow-hidden relative flex flex-col justify-between group/phone transition-all">
                {/* Top Notch Bar */}
                <div className="w-full py-1.5 px-3 bg-white border-b border-ice-border/70 flex items-center justify-between z-20 shrink-0 select-none">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean-300" />
                    <span className="text-[10px] font-mono text-ocean-500 font-semibold">Android</span>
                  </div>
                  <div className="w-12 h-1.5 rounded-full bg-ocean-200" />
                  <span className="text-[10px] font-mono text-aqua-darkText font-bold">5.0 ★</span>
                </div>

                {/* Scrollable Viewport */}
                {screen.image ? (
                  <div className="flex-1 w-full overflow-y-auto overflow-x-hidden relative scroll-smooth overscroll-contain phone-screen-scroll cursor-grab active:cursor-grabbing [scrollbar-width:thin] [scrollbar-color:#2FD3A0_transparent] group/viewport">
                    {/* Floating Controls Overlay */}
                    <div className="sticky top-2 right-2 float-right z-10 flex items-center gap-1">
                      <button
                        onClick={() => setActiveModalIndex(index)}
                        title="Click for Full Image View"
                        className="px-2 py-0.5 rounded-full bg-ocean-900/90 hover:bg-ocean-950 text-white text-[10px] font-mono font-bold flex items-center gap-1 shadow-sm transition-transform active:scale-95"
                      >
                        <Maximize2 className="w-2.5 h-2.5 text-aqua" />
                        <span>Full View</span>
                      </button>
                    </div>

                    <img
                      src={screen.image}
                      alt={screen.label}
                      onClick={() => setActiveModalIndex(index)}
                      className="w-full h-auto block select-none cursor-pointer"
                      style={{ imageRendering: "-webkit-optimize-contrast" }}
                      draggable={false}
                    />
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-ice-border shadow-sm flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <Smartphone className="w-6 h-6 text-aqua-darkText" />
                    </div>
                    <span className="text-xs font-mono font-bold text-ocean-900 mb-1">
                      {screen.label}
                    </span>
                    <span className="text-[11px] text-ocean-500 font-mono">
                      [Drop Screenshot Here]
                    </span>
                  </div>
                )}

                {/* Bottom Home Indicator */}
                <div className="w-full py-1.5 bg-white border-t border-ice-border/70 flex items-center justify-center z-20 shrink-0 select-none">
                  <div className="w-16 h-1 rounded-full bg-ocean-300" />
                </div>
              </div>

              {/* Caption & Full View Trigger */}
              <div className="mt-4 text-left">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-ocean-900">
                    {screen.label}
                  </h3>
                  {screen.image && (
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setActiveModalIndex(index)}
                        title="Open Full Image View"
                        className="p-1 rounded-lg text-ocean-500 hover:text-ocean-950 hover:bg-ice-subtle transition-colors flex items-center gap-1 text-[11px] font-mono font-semibold"
                      >
                        <ZoomIn className="w-3.5 h-3.5 text-aqua-darkText" />
                        <span>Enlarge</span>
                      </button>
                      <span className="text-[10px] font-mono font-bold text-aqua-darkText bg-aqua/15 px-2 py-0.5 rounded-full">
                        Scrollable
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-ocean-600 leading-relaxed">
                  {screen.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop / Tablet Widescreen Browser Frames */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screen, index) => (
            <div
              key={screen.label}
              className="clean-card rounded-[28px] p-5 flex flex-col justify-between group transition-all duration-200"
            >
              {/* Simulated Application Window Frame */}
              <div className="w-full aspect-[16/10] rounded-xl bg-ice-subtle border border-ice-border overflow-hidden relative flex flex-col group-hover:border-aqua/50 transition-colors">
                {/* Window Header Bar */}
                <div className="h-7 px-3 bg-white border-b border-ice-border flex items-center justify-between z-10 shrink-0 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-ocean-400 truncate max-w-[160px]">
                    sanskriti-hotel.internal
                  </span>
                  {screen.image && (
                    <button
                      onClick={() => setActiveModalIndex(index)}
                      title="Open Full View"
                      className="p-0.5 rounded text-ocean-400 hover:text-ocean-900 transition-colors"
                    >
                      <Maximize2 className="w-3 h-3 text-aqua-darkText" />
                    </button>
                  )}
                </div>

                {/* Image or Drop Slot */}
                {screen.image ? (
                  <div
                    onClick={() => setActiveModalIndex(index)}
                    className="flex-1 w-full overflow-hidden relative group/img cursor-pointer bg-white"
                  >
                    <img
                      src={screen.image}
                      alt={screen.label}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      style={{ imageRendering: "-webkit-optimize-contrast" }}
                    />
                    
                    {/* Hover Hint Overlay */}
                    <div className="absolute inset-0 bg-ocean-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-3 py-1 rounded-full bg-white text-ocean-950 text-xs font-bold font-mono shadow-lg flex items-center gap-1.5">
                        <ZoomIn className="w-3.5 h-3.5 text-aqua-darkText" />
                        <span>Click for Full View</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-ice-border shadow-sm flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <Monitor className="w-6 h-6 text-aqua-darkText" />
                    </div>
                    <span className="text-xs font-mono font-bold text-ocean-900 mb-1">
                      {screen.label}
                    </span>
                    <span className="text-[11px] text-ocean-500 font-mono">
                      [Drop Inside Photo Here]
                    </span>
                  </div>
                )}
              </div>

              {/* Caption & Full View Trigger */}
              <div className="mt-4 text-left">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-ocean-900">
                    {screen.label}
                  </h3>
                  {screen.image && (
                    <button
                      onClick={() => setActiveModalIndex(index)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-aqua-darkText hover:text-ocean-950 transition-colors"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Full View</span>
                    </button>
                  )}
                </div>
                <p className="text-xs text-ocean-600 leading-relaxed">
                  {screen.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FULL IMAGE LIGHTBOX MODAL */}
      {currentScreen && currentScreen.image && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#061222]/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 pt-safe pb-safe animate-in fade-in duration-200"
          onClick={closeModal}
        >
          {/* Modal Header Bar */}
          <div
            className="flex items-center justify-between text-white max-w-7xl mx-auto w-full z-10 select-none pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 sm:gap-3 truncate">
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-aqua/20 text-aqua font-mono font-bold text-xs shrink-0">
                {activeModalIndex! + 1} / {screenshots.length}
              </span>
              <h2 className="text-xs sm:text-base font-extrabold text-white truncate max-w-[200px] sm:max-w-md">
                {currentScreen.label}
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={currentScreen.image}
                target="_blank"
                rel="noreferrer"
                title="Open raw image in new tab"
                className="min-h-[44px] min-w-[44px] px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-colors active:scale-95"
              >
                <ExternalLink className="w-3.5 h-3.5 text-aqua" />
                <span className="hidden sm:inline">Raw File</span>
              </a>

              <button
                onClick={closeModal}
                title="Close (Esc)"
                className="min-h-[44px] min-w-[44px] rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Center Viewport (Image + Nav Arrows) */}
          <div
            className="flex-1 flex items-center justify-between gap-1.5 sm:gap-4 max-w-7xl mx-auto w-full relative my-2 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Nav Arrow */}
            {screenshots.length > 1 && (
              <button
                onClick={prevImage}
                title="Previous Screen (Left Arrow)"
                className="min-h-[44px] min-w-[44px] sm:min-h-[48px] sm:min-w-[48px] rounded-full bg-black/50 hover:bg-black/75 text-white border border-white/15 flex items-center justify-center z-20 transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </button>
            )}

            {/* Image Container with Touch Swipe support */}
            <div
              className="flex-1 h-full flex items-center justify-center p-1 sm:p-2 overflow-auto touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={currentScreen.image}
                alt={currentScreen.label}
                className="max-h-[72vh] sm:max-h-[76vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10 select-none"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
                draggable={false}
              />
            </div>

            {/* Right Nav Arrow */}
            {screenshots.length > 1 && (
              <button
                onClick={nextImage}
                title="Next Screen (Right Arrow)"
                className="min-h-[44px] min-w-[44px] sm:min-h-[48px] sm:min-w-[48px] rounded-full bg-black/50 hover:bg-black/75 text-white border border-white/15 flex items-center justify-center z-20 transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </button>
            )}
          </div>

          {/* Modal Footer Bar */}
          <div
            className="max-w-3xl mx-auto w-full text-center text-xs text-ice-200 select-none pt-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="leading-relaxed bg-black/50 px-3.5 py-1.5 sm:py-2 rounded-xl border border-white/10 inline-block max-w-full truncate text-[11px] sm:text-xs">
              {currentScreen.caption}
            </p>
            <div className="mt-1 text-[11px] text-ice-400 font-mono">
              <span className="hidden sm:inline">
                Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-bold">Esc</kbd> to close &bull; Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-bold">&larr;</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-bold">&rarr;</kbd> to navigate
              </span>
              <span className="sm:hidden">
                Swipe or tap arrows &bull; Tap ✕ to close
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}