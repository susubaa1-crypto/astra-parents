"use client";

import Link from "next/link";
import { Magazine } from "@/data/magazines";

interface MagazineCardProps {
    magazine: Magazine;
}

export function MagazineCard({ magazine }: MagazineCardProps) {
    return (
        <Link 
            href={magazine.link || `/magazine/${magazine.id}`} 
            target={magazine.link ? "_blank" : undefined}
            rel={magazine.link ? "noopener noreferrer" : undefined}
            className="group block"
        >
            <div className="relative overflow-hidden aspect-[3/4.2] bg-astra-navy transition-smooth hairline-border no-shadow hover:-translate-y-2 hover:border-astra-gold/50 flex flex-col justify-between">

                {/* Full Image Background */}
                {magazine.thumbnail && (
                    <div className="absolute inset-0 z-0 transition-transform duration-1000 ease-out group-hover:scale-105 pointer-events-none">
                        <img src={magazine.thumbnail} alt={magazine.title} className="w-full h-full object-cover" />
                    </div>
                )}

                {/* Subtle Gradient Overlay for hover effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none z-10" />

                {/* Extremely Subtle Hover Icon */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
}
