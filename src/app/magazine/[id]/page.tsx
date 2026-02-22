"use client";

import { use } from "react";
import Link from "next/link";
import { magazines } from "@/data/magazines";
import { notFound } from "next/navigation";

export default function MagazineDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const magazine = magazines.find((m) => m.id === id);

    if (!magazine) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#f8f7f4] pt-32 pb-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-3xl mx-auto space-y-24">
                {/* Header */}
                <div className="space-y-8 text-center animate-fade-in">
                    <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-serif uppercase tracking-[0.3em] text-slate-400 hover:text-[#3a3a3a] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        Back to Home
                    </Link>

                    <div className="space-y-4">
                        <span className="text-xs font-serif uppercase tracking-[0.4em] text-slate-400">
                            {magazine.month} ISSUE
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif text-[#3a3a3a] leading-tight italic">
                            {magazine.content.title}
                        </h1>
                        <p className="text-sm md:text-base font-serif text-slate-500 tracking-wide max-w-xl mx-auto italic">
                            {magazine.content.subtitle}
                        </p>
                    </div>

                    <div className="w-16 h-[1px] bg-slate-200 mx-auto" />
                </div>

                {/* Cover Image */}
                {magazine.thumbnail && (
                    <div className="relative w-full max-w-2xl mx-auto animate-fade-in-up">
                        <img
                            src={magazine.thumbnail}
                            alt={`${magazine.title} Cover`}
                            className="w-full h-auto object-cover rounded-[2px]"
                        />
                    </div>
                )}

                {/* Content Sections */}
                <div className="space-y-12">
                    {magazine.content.sections.map((section, idx) => (
                        <section key={idx} className="space-y-8 animate-fade-in-up">
                            {section.heading !== "Full Article" && (
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-serif text-slate-300">0{idx + 1}</span>
                                    <div className="h-[1px] flex-1 bg-slate-100" />
                                    <h2 className="text-xl font-serif text-[#3a3a3a]">
                                        {section.heading}
                                    </h2>
                                </div>
                            )}
                            <p className="text-base md:text-[17px] text-slate-700 leading-[1.8] font-serif whitespace-pre-wrap tracking-normal">
                                {section.body}
                            </p>
                        </section>
                    ))}
                </div>

                {/* Footer */}
                <div className="pt-24 border-t border-slate-100 text-center">
                    <p className="text-[10px] font-serif uppercase tracking-[0.4em] text-slate-300">
                        Positive Language Habit Challenge &copy; 2026
                    </p>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-[0.02] flex items-center justify-center select-none">
                <span className="text-[40vw] font-serif italic text-[#3a3a3a]">{magazine.month.split(' ')[0][0]}</span>
            </div>
        </main>
    );
}
