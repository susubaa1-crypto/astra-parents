"use client";

import { Countdown } from "@/components/Countdown";
import { MissionIcon } from "@/components/MissionIcon";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#f8f7f4] flex flex-col items-center justify-center p-8 md:p-16 lg:p-24 overflow-hidden pt-32">
            <div className="max-w-4xl w-full flex flex-col items-center space-y-24 fade-in-section">

                {/* Quote Section */}
                <section className="text-center space-y-12 py-12">
                    <div className="w-16 h-[1px] bg-slate-200 mx-auto" />
                    <div className="space-y-8">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed text-[#3a3a3a] whitespace-pre-line font-medium">
                            "집은 가장 작은 천국이야.{"\n"}
                            우리는 집을 천국으로 만들고 있을까{"\n"}
                            지옥으로 만들고 있을까.{"\n"}
                            혹은 우리는 천국에서 살았을까{"\n"}
                            지옥에서 살았을까.{"\n"}
                            21일 뒤 우리집을 바꾸고 싶다면{"\n"}
                            매일 생각하고 행동해야 해."
                        </h2>
                        <div className="text-sm font-serif italic text-slate-400 uppercase tracking-widest">
                            긍정 언어 캠프의 진심을 담아
                        </div>
                    </div>
                    <div className="w-16 h-[1px] bg-slate-200 mx-auto" />
                </section>

                {/* Mission Icon Link */}
                <section className="py-8 text-center space-y-8">
                    <MissionIcon />
                    <div className="text-[10px] font-serif uppercase tracking-[0.4em] text-slate-400">
                        Positive Language Habit Challenge
                    </div>
                </section>

                {/* Countdown Section */}
                <section className="pb-12 text-center space-y-12">
                    <Countdown targetDate="2026-03-09T00:00:00" />

                    {/* Apply Button */}
                    <div className="pt-8">
                        <button
                            className="px-12 py-4 border border-[#3a3a3a] text-[#3a3a3a] font-serif uppercase tracking-[0.3em] text-sm transform transition-all duration-500 hover:bg-[#3a3a3a] hover:text-white hover:px-16"
                            onClick={() => alert("신청 링크는 곧 추가될 예정입니다.")}
                        >
                            신청하기
                        </button>
                    </div>
                </section>

                {/* Footer Text */}
                <footer className="pt-12 pb-8 text-center">
                    <p className="text-[10px] font-serif uppercase tracking-[0.4em] text-slate-300">
                        Positive Language Habit Challenge 2026
                    </p>
                </footer>
            </div>

            {/* Background Decorative Lines */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-5">
                <div className="absolute top-1/4 left-10 w-96 h-[1px] bg-[#3a3a3a] rotate-[30deg]" />
                <div className="absolute bottom-1/4 right-10 w-96 h-[1px] bg-[#3a3a3a] rotate-[-20deg]" />
            </div>
        </main>
    );
}
