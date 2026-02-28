"use client";

import { Countdown } from "@/components/Countdown";
import { MissionIcon } from "@/components/MissionIcon";
import { CalendarSection } from "@/components/CalendarSection";
import { RoadmapSection } from "@/components/RoadmapSection";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-paper-cream flex flex-col items-center pt-24 pb-12 overflow-x-hidden selection:bg-sage selection:text-white">
            <div className="w-full flex flex-col items-center space-y-24 fade-in-section">

                {/* Quote Section (Old About content, preserved as Prologue but styled to fit paper-cream theme) */}
                <section className="text-center space-y-12 py-12 px-4 max-w-4xl mx-auto">
                    <div className="w-16 h-[1px] bg-ink-light mx-auto" />
                    <div className="space-y-8">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed text-ink-charcoal whitespace-pre-line break-keep font-medium">
                            "집은 가장 작은 천국이야.{"\n"}
                            우리는 집을 천국으로 만들고 있을까{"\n"}
                            지옥으로 만들고 있을까.{"\n"}
                            혹은 우리는 천국에서 살았을까{"\n"}
                            지옥에서 살았을까.{"\n"}
                            21일 뒤 우리집을 바꾸고 싶다면{"\n"}
                            매일 생각하고 행동해야 해."
                        </h2>
                        <div className="text-sm font-serif italic text-ink-gray uppercase tracking-widest">
                            긍정 언어 캠프의 진심을 담아
                        </div>
                    </div>
                    <div className="w-16 h-[1px] bg-ink-light mx-auto" />
                </section>

                {/* Mission Icon Link */}
                <section className="py-8 text-center space-y-8 max-w-4xl mx-auto">
                    <MissionIcon />
                    <div className="text-[10px] font-serif uppercase tracking-[0.4em] text-ink-gray">
                        Positive Village Habit Challenge
                    </div>
                </section>

                {/* Countdown Section */}
                <section className="pb-12 text-center space-y-12 max-w-4xl mx-auto">
                    <Countdown targetDate="2026-03-09T00:00:00" />

                    {/* Apply Button */}
                    <div className="pt-8">
                        <button
                            className="px-12 py-4 border border-ink-charcoal text-ink-charcoal font-serif uppercase tracking-[0.3em] text-[12px] font-medium transition-smooth hover:bg-[var(--color-bonfire-orange)] hover:text-white hover:border-[var(--color-bonfire-orange)] hover:px-16"
                            onClick={() => alert("신청 링크는 곧 추가될 예정입니다.")}
                        >
                            신청하기
                        </button>
                    </div>
                </section>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-ink-light/50 to-transparent max-w-4xl mx-auto" />

                {/* Calendar Story Section */}
                <div className="w-full border-t border-b border-transparent">
                    <CalendarSection />
                </div>

                {/* Roadmap Vision Section */}
                <div className="w-full">
                    <RoadmapSection />
                </div>

                {/* Footer Text */}
                <footer className="pt-12 pb-8 text-center">
                    <p className="text-[10px] font-serif uppercase tracking-[0.4em] text-ink-gray/40">
                        Positive Village Habit Challenge 2026
                    </p>
                </footer>
            </div >

            {/* Background Decorative Lines */}
            < div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-5" >
                <div className="absolute top-1/4 left-10 w-96 h-[1px] bg-ink-charcoal rotate-[30deg]" />
                <div className="absolute bottom-1/4 right-10 w-96 h-[1px] bg-ink-charcoal rotate-[-20deg]" />
            </div >
        </main >
    );
}
