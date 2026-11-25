import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsMatrix from "@/components/SkillsMatrix";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <div className="relative min-h-dvh flex flex-col bg-ice-canvas text-ocean-900 overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Experience />
        <SkillsMatrix />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
