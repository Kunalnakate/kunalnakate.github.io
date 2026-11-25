import Link from "next/link";
import {
  ArrowLeft,
  Github,
  CheckCircle2,
  Smartphone,
  Monitor,
  Building2,
  Sparkles,
  Trophy,
  Code2,
  ExternalLink,
  Layers,
  UtensilsCrossed,
  ChefHat,
  ShieldCheck,
  CalendarDays,
  Globe,
} from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechnicalArchitecture from "@/components/TechnicalArchitecture";
import HotelArchitecture from "@/components/HotelArchitecture";
import ProjectScreenshotGallery from "@/components/ProjectScreenshotGallery";

export async function generateStaticParams() {
  const projects = portfolioData.projects || [];
  return projects.map((project) => ({
    slug: project.slug || project.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = portfolioData.projects || [];
  const project = projects.find((p) => (p.slug || p.id) === slug);

  if (!project) {
    return (
      <div className="min-h-dvh flex flex-col justify-between bg-ice-canvas text-ocean-900">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-36 text-center">
          <div className="clean-card rounded-2xl p-12">
            <h1 className="text-3xl font-extrabold text-ocean-900 mb-3">Project Details</h1>
            <p className="text-ocean-600 mb-8 max-w-md mx-auto">
              Project not found. Return to all projects on the home page.
            </p>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-aqua text-ocean-950 font-bold text-sm shadow-aqua-pill"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
              <span>Back to Home</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isMobile = project.platformType === "mobile" || project.id === "vishedgesocial";
  const isHotelProject = project.id === "hotel-management-system";

  return (
    <div className="min-h-dvh flex flex-col justify-between bg-ice-canvas text-ocean-900">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation Breadcrumb */}
          <div className="mb-8 text-left">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-ocean-600 hover:text-ocean-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 stroke-[2.5]" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-12 text-left">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aqua/20 text-aqua-darkText text-xs font-bold uppercase tracking-wider">
                {isMobile ? (
                  <Smartphone className="w-3.5 h-3.5" />
                ) : (
                  <Monitor className="w-3.5 h-3.5" />
                )}
                <span>{project.category}</span>
              </span>

              {project.client && (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white border border-ice-border text-ocean-800">
                  <Building2 className="w-3.5 h-3.5 text-aqua-darkText" />
                  <span>Client: {project.client}</span>
                </span>
              )}

              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white border border-ice-border text-ocean-700">
                Role: {project.role}
              </span>

              {project.status && (
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-aqua/15 text-aqua-darkText border border-aqua/30">
                  {project.status}
                </span>
              )}
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold text-ocean-900 tracking-tight mb-2">
              {project.title}
            </h1>
            
            {project.subtitle && (
              <p className="text-xl sm:text-2xl text-aqua-darkText font-bold mb-4">
                {project.subtitle}
              </p>
            )}

            <p className="text-base sm:text-lg text-ocean-600 max-w-3xl leading-relaxed mb-6">
              {project.tagline}
            </p>

            {/* Achievement Callout Banner */}
            {project.achievement && (
              <div className="clean-card rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 max-w-3xl mb-8">
                <div className="w-9 h-9 rounded-xl bg-aqua/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Trophy className="w-5 h-5 text-aqua-darkText" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-aqua-darkText block mb-0.5">
                    Project Achievement
                  </span>
                  <p className="text-sm font-semibold text-ocean-900 leading-snug">
                    {project.achievement}
                  </p>
                </div>
              </div>
            )}

            {/* Action Badges / Links */}
            <div className="flex flex-wrap items-center gap-3">
              {project.playStoreUrl ? (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[44px] px-6 py-2.5 rounded-full bg-aqua hover:bg-aqua-hover text-ocean-950 font-bold text-sm shadow-aqua-pill transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center gap-2"
                >
                  <Smartphone className="w-4 h-4 stroke-[2.5]" />
                  <span>Google Play Store</span>
                </a>
              ) : isMobile ? (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-ice-border text-ocean-800 text-xs font-bold shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-aqua-darkText" />
                  Published on Google Play Store
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-ice-border text-ocean-800 text-xs font-bold shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-aqua-darkText" />
                  Production Deployed Platform
                </span>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[44px] px-6 py-2.5 rounded-full bg-aqua hover:bg-aqua-hover text-ocean-950 font-bold text-sm shadow-aqua-pill transition-all active:scale-95 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[44px] px-6 py-2.5 rounded-full bg-white hover:bg-ice-subtle border border-ice-border text-ocean-900 font-bold text-sm shadow-sm transition-all active:scale-95 flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>

          {/* APPLICATION INSIDE SCREENSHOTS / PHOTO FRAMES */}
          <div className="mb-14 text-left">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
              <div>
                <h2 className="text-2xl font-extrabold text-ocean-900 tracking-tight">
                  Application Inside Screenshots
                </h2>
                <p className="text-sm text-ocean-600">
                  {isMobile
                    ? "Screens from the live Android application interface."
                    : "Workstation and mobile portal views from the deployed Sanskriti Rajasthan platform."}
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-aqua-darkText bg-aqua/15 px-3 py-1 rounded-full w-fit">
                {project.screenshots?.length || 0} Screen Slots Ready
              </span>
            </div>

            {/* Interactive Screenshot Gallery with Full Image Modal View */}
            <ProjectScreenshotGallery
              screenshots={project.screenshots || []}
              isMobile={isMobile}
              projectTitle={project.title}
            />
          </div>

          {/* DEDICATED TECHNICAL ARCHITECTURE DIAGRAM SECTION */}
          <div className="mb-14 text-left">
            {isHotelProject ? (
              <HotelArchitecture />
            ) : (
              <TechnicalArchitecture />
            )}
          </div>

          {/* SPECIAL SECTION: HOTEL MODULES BREAKDOWN (For Hotel Management System) */}
          {project.modules && project.modules.length > 0 && (
            <div className="mb-14 text-left">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aqua/20 text-aqua-darkText text-xs font-bold uppercase tracking-wider mb-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Integrated Architecture</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ocean-900 tracking-tight">
                  Core Modules &amp; Subsystems
                </h2>
                <p className="text-sm text-ocean-600 max-w-2xl mt-1">
                  Five interconnected modules unifying hotel property reservations, restaurant dining, billing, and kitchen dispatch into one seamless ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.modules.map((mod, index) => {
                  return (
                    <div
                      key={mod.name}
                      className="clean-card rounded-[24px] sm:rounded-[36px] p-5 sm:p-6 flex flex-col justify-between group transition-all duration-200"
                    >
                      <div>
                        {/* Module Header */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono font-bold text-aqua-darkText bg-aqua/15 px-2.5 py-1 rounded-full">
                            Module 0{index + 1}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-ice-subtle border border-ice-border flex items-center justify-center text-ocean-800 group-hover:border-aqua transition-colors">
                            {index === 0 && <Globe className="w-4 h-4 text-aqua-darkText" />}
                            {index === 1 && <CalendarDays className="w-4 h-4 text-aqua-darkText" />}
                            {index === 2 && <UtensilsCrossed className="w-4 h-4 text-aqua-darkText" />}
                            {index === 3 && <ChefHat className="w-4 h-4 text-aqua-darkText" />}
                            {index === 4 && <ShieldCheck className="w-4 h-4 text-aqua-darkText" />}
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-extrabold text-ocean-900 mb-4 leading-snug">
                          {mod.name}
                        </h3>

                        {/* Module Bullet Points */}
                        <ul className="space-y-2.5">
                          {mod.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-2.5 text-xs text-ocean-700 leading-snug"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-aqua-darkText shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Deep Dive Breakdown: Overview, Responsibilities & Meta */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left mb-16">
            
            {/* Left 2 Columns: Overview, Key Features & Responsibilities */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Project Overview */}
              <div className="clean-card rounded-[28px] sm:rounded-[36px] p-5 sm:p-8">
                <h3 className="text-lg font-bold text-ocean-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-aqua" />
                  <span>Project Overview</span>
                </h3>
                <p className="text-sm sm:text-base text-ocean-700 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Key Features (When provided as standalone list) */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="clean-card rounded-[28px] sm:rounded-[36px] p-5 sm:p-8">
                  <h3 className="text-lg font-bold text-ocean-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-aqua-darkText" />
                    <span>Key Features</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ocean-800 font-medium leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-aqua-darkText shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Implementation & Responsibilities */}
              <div className="clean-card rounded-[28px] sm:rounded-[36px] p-5 sm:p-8">
                <h3 className="text-lg font-bold text-ocean-900 mb-4 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-aqua-darkText" />
                  <span>Technical Implementation &amp; Responsibilities</span>
                </h3>
                <ul className="space-y-2.5">
                  {project.responsibilities?.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-ocean-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-aqua mt-2 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Stack & Metadata */}
            <div className="space-y-6">
              
              {/* Technology Stack */}
              <div className="clean-card rounded-[28px] p-6">
                <h3 className="text-base font-bold text-ocean-900 mb-3">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-ice-subtle border border-ice-border text-ocean-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Metadata Box */}
              {project.metaDetails && project.metaDetails.length > 0 && (
                <div className="clean-card rounded-[28px] p-6 space-y-3.5 text-xs font-mono">
                  {project.metaDetails.map((meta) => (
                    <div key={meta.label}>
                      <span className="text-ocean-400 block mb-0.5 uppercase">{meta.label}</span>
                      <span className="font-bold text-ocean-900 text-sm">{meta.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Callout */}
              <div className="rounded-2xl bg-aqua/10 border border-aqua/30 p-6 text-left">
                <h4 className="text-sm font-bold text-ocean-900 mb-1">
                  Looking for custom web or mobile systems?
                </h4>
                <p className="text-xs text-ocean-700 mb-4 leading-relaxed">
                  I handle everything from architecture and database schemas to frontend polish and cloud deployment.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-aqua-darkText hover:text-ocean-900 transition-colors"
                >
                  <span>Get in touch &rarr;</span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}