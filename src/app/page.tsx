"use client";

import { HeroSection } from "@/components/HeroSection";
import { DashboardEntrySection } from "@/components/DashboardEntrySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper-cream overflow-x-hidden selection:bg-sage selection:text-white">
      {/* 
        전체 플로우:
        1. 도입 (Hero - 공감과 훅)
        2. 제안 (Dashboard Entry - 최종 CTA)
        (세부 정보는 About, Magazine 페이지로 분리)
      */}
      <HeroSection />

      <DashboardEntrySection />

      {/* Footer */}
      <footer className="py-12 text-center bg-paper-cream hairline-top border-t border-ink-light/30">
        <p className="text-[11px] font-sans uppercase tracking-[0.5em] text-ink-gray/40">
          Positive Village © 2026 Kikimom
        </p>
      </footer>
    </main>
  );
}
