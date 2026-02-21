"use client";

import Link from "next/link";
import { Magazine } from "@/data/magazines";

interface MagazineCardProps {
    magazine: Magazine;
}

export function MagazineCard({ magazine }: MagazineCardProps) {
    return (
        <Link href={`/magazine/${magazine.id}`} className="group block">
            <div className="relative overflow-hidden aspect-[3/4.2] bg-paper-white p-8 transition-smooth hairline-border no-shadow hover:-translate-y-2 hover:border-ink-charcoal flex flex-col justify-between">

                {/* Decorative Inner Border that slowly draws in on hover */}
                <div className="absolute inset-3 border border-ink-light pointer-events-none transition-all duration-700 group-hover:inset-4 group-hover:border-ink-charcoal/30" />

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="space-y-6">
                        <div className="flex justify-between items-start">
                            <span className="text-[11px] font-sans uppercase tracking-[0.4em] text-ink-gray">
                                {magazine.month}
                            </span>
                            <div className="w-10 h-10 rounded-full border border-ink-light flex items-center justify-center text-ink-gray group-hover:text-paper-white group-hover:bg-ink-charcoal group-hover:border-ink-charcoal transition-smooth overflow-hidden relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                                >
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h5z" />
                                </svg>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {/* Premium Typography for Title */}
                            <h3 className="text-3xl lg:text-[32px] font-serif text-ink-charcoal leading-[1.25] tracking-tight line-clamp-3 transition-colors duration-500 font-light">
                                {magazine.title}
                            </h3>
                            <div className="h-[1px] w-16 bg-ink-light transition-smooth group-hover:w-full group-hover:bg-ink-charcoal/40" />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <p className="text-[14px] text-ink-gray leading-[1.8] font-sans font-light italic line-clamp-3">
                            "{magazine.description}"
                        </p>
                        <div className="flex items-center gap-4 transition-smooth group-hover:gap-6">
                            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-ink-charcoal font-medium">
                                Read Issue
                            </span>
                            <div className="h-[1px] w-12 bg-ink-charcoal" />
                        </div>
                    </div>
                </div>

                {/* Giant Typographic Month Background */}
                <div className="absolute -bottom-8 -right-4 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-smooth group-hover:scale-105 pointer-events-none select-none text-ink-charcoal">
                    <span className="text-[16rem] leading-none font-serif italic tracking-tighter">
                        {magazine.month.split(' ')[0][0]}
                    </span>
                </div>
            </div>
        </Link>
    );
}
