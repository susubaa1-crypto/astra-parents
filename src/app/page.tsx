"use client";

import { HeroSection } from "@/components/HeroSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { MagazineSection } from "@/components/MagazineSection";
import { CalendarSection } from "@/components/CalendarSection";
import { DashboardEntrySection } from "@/components/DashboardEntrySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper-cream overflow-x-hidden selection:bg-sage selection:text-white">
      {/* 
        전체 플로우:
        1. 오늘의 확언 (Hero)
        2. 성장 지도 (Roadmap)
        3. 결핍 매거진 (Magazine)
        4. 기적의 캘린더 (Calendar - Story)
        5. 불멍 캠프장 (Dashboard Entry)
      */}
      <HeroSection />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-ink-light/50 to-transparent max-w-4xl mx-auto" />

      <RoadmapSection />

      <MagazineSection />

      <CalendarSection />

      <DashboardEntrySection />

      {/* Footer */}
      <footer className="py-12 text-center bg-paper-cream hairline-top border-t border-ink-light/30">
        <p className="text-[11px] font-sans uppercase tracking-[0.5em] text-ink-gray/40">
          Positive Language Camp © 2026 Kikimom
        </p>
      </footer>
    </main>
  );
}
