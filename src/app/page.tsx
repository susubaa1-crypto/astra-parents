"use client";

import { HeroSection } from "@/components/HeroSection";
import { DashboardEntrySection } from "@/components/DashboardEntrySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-astra-navy overflow-x-hidden selection:bg-astra-gold selection:text-astra-navy">
      <HeroSection />

      {/* Footer */}
      <footer className="py-12 text-center bg-astra-navy border-t border-white/5 relative z-10">
        <p className="text-[11px] font-sans uppercase tracking-[0.5em] text-ink-light/40">
          ASTRA PARENTS © 2026 Kikimom
        </p>
      </footer>
    </main>
  );
}
