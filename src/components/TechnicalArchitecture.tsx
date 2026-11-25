"use client";

import { useState } from "react";
import {
  Smartphone,
  Server,
  Database,
  Cloud,
  Brain,
  ArrowUpDown,
  ImageIcon,
  Code2,
} from "lucide-react";

export default function TechnicalArchitecture() {
  const [viewMode, setViewMode] = useState<"interactive" | "image">("interactive");

  return (
    <div className="rounded-2xl bg-[#061222] border border-[#142C48] p-6 sm:p-8 text-white shadow-xl">
      {/* Header with Mode Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#142C48]">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Technical architecture
          </h2>
          <p className="text-xs text-ice-300 font-mono mt-0.5">
            End-to-end data flow and service integration model
          </p>
        </div>

        {/* View Switcher: Interactive Component vs Original Diagram */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#030914] border border-[#142C48] w-fit">
          <button
            onClick={() => setViewMode("interactive")}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === "interactive"
                ? "bg-aqua text-ocean-950 shadow-sm"
                : "text-ice-300 hover:text-white"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Interactive</span>
          </button>
          <button
            onClick={() => setViewMode("image")}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === "image"
                ? "bg-aqua text-ocean-950 shadow-sm"
                : "text-ice-300 hover:text-white"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Diagram View</span>
          </button>
        </div>
      </div>

      {viewMode === "interactive" ? (
        <div className="max-w-xl mx-auto space-y-3 pt-2">
          
          {/* Block 1: Android Application */}
          <div className="rounded-2xl bg-[#0B1E38] border border-[#183E6F] p-5 sm:p-6 flex flex-col items-center justify-center text-center transition-all duration-200 hover:border-aqua hover:scale-[1.01] group">
            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Smartphone className="w-5 h-5 text-aqua" />
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              Android Application
            </div>
            <div className="text-xs text-ice-200 font-medium mt-1">
              Java &bull; Android Studio
            </div>
          </div>

          {/* Vertical Bi-Directional Connector */}
          <div className="flex justify-center items-center py-0.5 text-ice-300">
            <ArrowUpDown className="w-4 h-4 text-aqua stroke-[2.5]" />
          </div>

          {/* Block 2: Backend API */}
          <div className="rounded-2xl bg-[#07221E] border border-[#104840] p-5 sm:p-6 flex flex-col items-center justify-center text-center transition-all duration-200 hover:border-aqua hover:scale-[1.01] group">
            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Server className="w-5 h-5 text-aqua" />
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              Backend API
            </div>
            <div className="text-xs text-ice-200 font-medium mt-1">
              Python &bull; FastAPI &bull; REST APIs
            </div>
          </div>

          {/* Vertical Bi-Directional Connector */}
          <div className="flex justify-center items-center py-0.5 text-ice-300">
            <ArrowUpDown className="w-4 h-4 text-aqua stroke-[2.5]" />
          </div>

          {/* Split Row: MongoDB & Google APIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Left: MongoDB */}
            <div className="rounded-2xl bg-[#07221E] border border-[#104840] p-5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:border-aqua hover:scale-[1.01] group">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                <Database className="w-5 h-5 text-aqua" />
              </div>
              <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                MongoDB
              </div>
              <div className="text-xs text-ice-200 font-medium mt-1">
                Data storage
              </div>
            </div>

            {/* Right: Google APIs */}
            <div className="rounded-2xl bg-[#0B1E38] border border-[#183E6F] p-5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:border-aqua hover:scale-[1.01] group">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                <Cloud className="w-5 h-5 text-aqua" />
              </div>
              <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                Google APIs
              </div>
              <div className="text-xs text-ice-200 font-medium mt-1">
                Business integration
              </div>
            </div>
          </div>

          {/* Block 4: AI Integration */}
          <div className="rounded-2xl bg-[#17122A] border border-[#32245C] p-5 sm:p-6 flex flex-col items-center justify-center text-center transition-all duration-200 hover:border-aqua hover:scale-[1.01] group mt-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Brain className="w-5 h-5 text-purple-300" />
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              AI Integration
            </div>
            <div className="text-xs text-purple-200/90 font-medium mt-1">
              AI-assisted review responses
            </div>
          </div>

        </div>
      ) : (
        <div className="max-w-md mx-auto p-2 bg-black rounded-2xl overflow-hidden border border-[#142C48] shadow-2xl">
          <img
            src="/images/vishedge-architecture.jpg"
            alt="Technical Architecture Diagram"
            className="w-full h-auto rounded-xl object-contain"
          />
        </div>
      )}
    </div>
  );
}
