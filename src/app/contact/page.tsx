"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Send,
  Mail,
  Sparkles,
  Check,
  CheckCircle2,
  Clock,
  ExternalLink,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");

    const recipient = "kunalnakate0123@gmail.com";
    const subjectLine = formData.subject.trim()
      ? `[Portfolio Contact] ${formData.subject.trim()} — ${formData.name.trim()}`
      : `Portfolio Inquiry from ${formData.name.trim()}`;

    const bodyContent = `Hi Kunal,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n${
      formData.subject.trim() ? `Subject / Scope: ${formData.subject.trim()}\n` : ""
    }\nProject Brief & Details:\n${formData.message.trim()}\n\n---\nSent via Portfolio Contact Form`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyContent)}`;

    // Trigger email client with Kunal's email as recipient
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setFormStatus("success");
    }, 400);
  };

  const getDirectMailto = () => {
    const recipient = "kunalnakate0123@gmail.com";
    const subjectLine = formData.subject.trim()
      ? `[Portfolio Contact] ${formData.subject.trim()} — ${formData.name.trim()}`
      : `Portfolio Inquiry from ${formData.name.trim() || "Visitor"}`;

    const bodyContent = `Hi Kunal,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n${
      formData.subject.trim() ? `Subject / Scope: ${formData.subject.trim()}\n` : ""
    }\nProject Brief & Details:\n${formData.message.trim()}\n\n---\nSent via Portfolio Contact Form`;

    return `mailto:${recipient}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyContent)}`;
  };

  return (
    <div className="min-h-dvh flex flex-col justify-between bg-ice-canvas text-ocean-900">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 sm:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation Breadcrumb */}
          <div className="mb-8 text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-ocean-600 hover:text-ocean-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 stroke-[2.5]" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Section Header */}
          <div className="flex flex-col items-start text-left mb-12">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aqua/20 text-aqua-darkText text-xs font-bold uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>Contact &bull; Send Message</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-ice-border text-ocean-800 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
                <span>{personal.status || "Available for new projects"}</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-ocean-900 tracking-tight mb-3">
              Initiate Collaboration
            </h1>
            <p className="text-base sm:text-lg text-ocean-600 max-w-2xl leading-relaxed">
              Have an engineering project, mobile app, or systems architecture you want to bring to life? Fill in your details below to connect directly with Kunal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {/* Left 2 Columns: Contact Form */}
            <div className="lg:col-span-2">
              <div className="clean-card rounded-[28px] sm:rounded-[40px] p-5 sm:p-9">
                <h2 className="text-xl font-bold text-ocean-900 mb-1">
                  Send a Message
                </h2>
                <p className="text-xs sm:text-sm text-ocean-600 mb-6 leading-relaxed">
                  Enter your project brief or inquiry below. When you click <strong>Send Message</strong>, your email client will open with your details ready to send.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase tracking-wider text-ocean-800 mb-1.5"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ color: "#091B2C" }}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-ice-subtle border border-ice-border text-ocean-950 placeholder:text-ocean-400 text-base sm:text-sm focus:outline-none focus:border-aqua focus:bg-white focus:text-ocean-950 caret-ocean-950 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase tracking-wider text-ocean-800 mb-1.5"
                    >
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ color: "#091B2C" }}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-ice-subtle border border-ice-border text-ocean-950 placeholder:text-ocean-400 text-base sm:text-sm focus:outline-none focus:border-aqua focus:bg-white focus:text-ocean-950 caret-ocean-950 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-bold uppercase tracking-wider text-ocean-800 mb-1.5"
                    >
                      Subject / Project Scope <span className="text-ocean-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="e.g. Web App Development, Android System, Consultation"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{ color: "#091B2C" }}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-ice-subtle border border-ice-border text-ocean-950 placeholder:text-ocean-400 text-base sm:text-sm focus:outline-none focus:border-aqua focus:bg-white focus:text-ocean-950 caret-ocean-950 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold uppercase tracking-wider text-ocean-800 mb-1.5"
                    >
                      Message / Project Brief <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Share your goals, technical requirements, platform, timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ color: "#091B2C" }}
                      className="w-full p-4 rounded-xl bg-ice-subtle border border-ice-border text-ocean-950 placeholder:text-ocean-400 text-base sm:text-sm focus:outline-none focus:border-aqua focus:bg-white focus:text-ocean-950 caret-ocean-950 transition-all resize-none font-medium leading-relaxed"
                    />
                  </div>

                  {formStatus === "success" && (
                    <div className="p-4 rounded-2xl bg-aqua/20 border border-aqua text-aqua-darkText text-xs font-bold animate-in fade-in space-y-2">
                      <div className="flex items-center gap-2 text-sm font-extrabold text-ocean-950">
                        <Check className="w-4 h-4 text-aqua-darkText stroke-[2.5]" />
                        <span>Opening your email client...</span>
                      </div>
                      <p className="font-medium text-ocean-800 leading-relaxed">
                        An email addressed to <strong>kunalnakate0123@gmail.com</strong> has been initiated with your message details.
                      </p>
                      <a
                        href={getDirectMailto()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-aqua hover:bg-aqua-hover text-ocean-950 font-bold text-xs transition-colors"
                      >
                        <span>Click here if email didn&apos;t open automatically</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                      </a>
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold animate-in fade-in">
                      Please provide your name, email, and message.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full min-h-[48px] py-3 rounded-full bg-aqua hover:bg-aqua-hover text-ocean-950 font-extrabold text-sm shadow-aqua-pill flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? (
                      <span>Opening email client...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Engineering Scope & Available Domains */}
            <div className="space-y-6">
              {/* LinkedIn Professional Profile Card */}
              {personal.linkedin && (
                <div className="clean-card rounded-[28px] p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-ocean-400">
                      Professional Network
                    </span>
                    <span className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
                  </div>
                  <h3 className="text-base font-bold text-ocean-900 mb-1.5 flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn Profile</span>
                  </h3>
                  <p className="text-xs text-ocean-600 mb-4 leading-relaxed">
                    Connect directly with Kunal for career opportunities, engineering inquiries, and professional collaboration.
                  </p>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] w-full px-4 py-2.5 rounded-full bg-ice-subtle hover:bg-white border border-ice-border hover:border-aqua/50 text-ocean-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all group shadow-sm active:scale-[0.98]"
                  >
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-4 h-4 text-aqua-darkText transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
                  </a>
                </div>
              )}

              {/* Engineering Scope Card */}
              <div className="clean-card rounded-[28px] p-6 sm:p-7">
                <h3 className="text-base font-bold text-ocean-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-aqua-darkText" />
                  <span>Available For</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm font-medium text-ocean-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-aqua-darkText shrink-0 mt-0.5" />
                    <span>Full-Stack Web Applications (React, Next.js)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-aqua-darkText shrink-0 mt-0.5" />
                    <span>Native Android Applications (Java, Android Studio)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-aqua-darkText shrink-0 mt-0.5" />
                    <span>Backend Microservices (Python, FastAPI, REST)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-aqua-darkText shrink-0 mt-0.5" />
                    <span>Spatial Data Analysis &amp; GIS Systems</span>
                  </li>
                </ul>

                <div className="pt-5 border-t border-ice-border mt-6 flex items-center justify-between text-xs font-mono text-ocean-600">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-aqua-darkText" />
                    <span>Turnaround</span>
                  </span>
                  <span className="text-aqua-darkText font-bold">&lt; 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
