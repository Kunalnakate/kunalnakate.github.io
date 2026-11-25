"use client";

import {
  Globe,
  LayoutDashboard,
  Server,
  Database,
  ShieldCheck,
  ArrowUpDown,
  UtensilsCrossed,
  ChefHat,
  Users,
} from "lucide-react";

export default function HotelArchitecture() {
  return (
    <div className="rounded-2xl bg-[#061222] border border-[#142C48] p-6 sm:p-8 text-white shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#142C48]">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Technical architecture
          </h2>
          <p className="text-xs text-ice-300 font-mono mt-0.5">
            Interconnected PMS, POS, KDS &amp; customer booking architecture for Sanskriti Rajasthan
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#030914] border border-[#142C48] text-xs font-mono text-aqua">
          <span className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
          <span>Full Stack &bull; Deployed</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-3 pt-2">
        
        {/* Tier 1: Dual Frontend Applications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          
          {/* Card 1A: Customer Facing */}
          <div className="rounded-2xl bg-[#0B1E38] border border-[#183E6F] p-5 flex flex-col justify-between text-left transition-all duration-200 hover:border-aqua hover:scale-[1.01] group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5 text-aqua" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-ice-200">
                Public Web
              </span>
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                Customer-Facing Website
              </div>
              <div className="text-xs text-aqua font-medium mt-0.5">
                React 19 &bull; Vite &bull; Tailwind CSS v4
              </div>
              <p className="text-xs text-ice-300 mt-2 leading-relaxed">
                Dynamic accommodation showcase, amenities, room availability, and direct booking experience.
              </p>
            </div>
          </div>

          {/* Card 1B: Staff Management Platform */}
          <div className="rounded-2xl bg-[#0B1E38] border border-[#183E6F] p-5 flex flex-col justify-between text-left transition-all duration-200 hover:border-aqua hover:scale-[1.01] group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LayoutDashboard className="w-5 h-5 text-aqua" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-ice-200">
                Staff Operations
              </span>
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                Operations Platform
              </div>
              <div className="text-xs text-aqua font-medium mt-0.5">
                PMS &bull; POS &bull; KDS Integrated Console
              </div>
              <p className="text-xs text-ice-300 mt-2 leading-relaxed">
                Front desk reservations, restaurant table ordering, automated billing, and live kitchen orders.
              </p>
            </div>
          </div>

        </div>

        {/* Vertical Bi-Directional Connector */}
        <div className="flex justify-center items-center py-0.5 text-ice-300">
          <ArrowUpDown className="w-4 h-4 text-aqua stroke-[2.5]" />
        </div>

        {/* Tier 2: Backend API & Business Logic */}
        <div className="rounded-2xl bg-[#07221E] border border-[#104840] p-5 sm:p-6 text-left transition-all duration-200 hover:border-aqua hover:scale-[1.01] group">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Server className="w-5 h-5 text-aqua" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  Backend API &amp; Orchestration Engine
                </div>
                <div className="text-xs text-aqua font-medium">
                  Python &bull; FastAPI &bull; RESTful Endpoints
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-aqua/15 text-aqua hidden sm:inline-block">
              Async Microservice
            </span>
          </div>

          <p className="text-xs sm:text-sm text-ice-200 leading-relaxed mb-3">
            Centralized business logic coordinating room reservations, restaurant ordering cycles, GST calculations, and kitchen dispatch triggers.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-[#104840] text-center text-[11px] font-mono text-ice-200">
            <div className="p-1.5 rounded-lg bg-black/20">Booking Engine</div>
            <div className="p-1.5 rounded-lg bg-black/20">GST / Invoicing</div>
            <div className="p-1.5 rounded-lg bg-black/20">KDS Dispatch</div>
            <div className="p-1.5 rounded-lg bg-black/20">RBAC Guards</div>
          </div>
        </div>

        {/* Vertical Bi-Directional Connector */}
        <div className="flex justify-center items-center py-0.5 text-ice-300">
          <ArrowUpDown className="w-4 h-4 text-aqua stroke-[2.5]" />
        </div>

        {/* Tier 3: Relational Storage & Security Split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          
          {/* Card 3A: Database */}
          <div className="rounded-2xl bg-[#07221E] border border-[#104840] p-5 text-left transition-all duration-200 hover:border-aqua hover:scale-[1.01] group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Database className="w-5 h-5 text-aqua" />
              </div>
              <span className="text-[10px] font-mono font-bold text-ice-300">
                PostgreSQL
              </span>
            </div>
            <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">
              Supabase &amp; PostgreSQL
            </div>
            <div className="text-xs text-ice-200 font-medium mt-0.5">
              Relational DB &bull; Row Level Security
            </div>
            <p className="text-xs text-ice-300 mt-2 leading-relaxed">
              Stores room inventory, folios, guest history, menu items, table states, and order records with ACID compliance.
            </p>
          </div>

          {/* Card 3B: Role-Based Access Control */}
          <div className="rounded-2xl bg-[#17122A] border border-[#32245C] p-5 text-left transition-all duration-200 hover:border-aqua hover:scale-[1.01] group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5 text-purple-300" />
              </div>
              <span className="text-[10px] font-mono font-bold text-purple-300">
                4 Access Tiers
              </span>
            </div>
            <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">
              Role-Based Access (RBAC)
            </div>
            <div className="text-xs text-purple-200/90 font-medium mt-0.5">
              Secure Staff Permissions
            </div>
            <div className="grid grid-cols-2 gap-1.5 mt-2.5 text-[11px] font-mono text-purple-200/90">
              <div className="flex items-center gap-1.5 p-1 rounded bg-white/5">
                <Users className="w-3 h-3 text-purple-300" />
                <span>Admin</span>
              </div>
              <div className="flex items-center gap-1.5 p-1 rounded bg-white/5">
                <LayoutDashboard className="w-3 h-3 text-purple-300" />
                <span>Receptionist</span>
              </div>
              <div className="flex items-center gap-1.5 p-1 rounded bg-white/5">
                <UtensilsCrossed className="w-3 h-3 text-purple-300" />
                <span>Waiter</span>
              </div>
              <div className="flex items-center gap-1.5 p-1 rounded bg-white/5">
                <ChefHat className="w-3 h-3 text-purple-300" />
                <span>Cook</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}