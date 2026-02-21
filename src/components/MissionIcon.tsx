"use client";

import { Home } from "lucide-react";
import Link from "next/link";

export function MissionIcon() {
    return (
        <Link
            href="/dashboard"
            className="group flex flex-col items-center space-y-6 transition-transform duration-500 hover:scale-105"
        >
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white double-border gentle-shadow group-hover:bg-[#fcfbf9] transition-colors duration-500">
                <Home className="w-12 h-12 md:w-16 md:h-16 text-[#3a3a3a] stroke-[1.5px]" />
                {/* Subtle decorative corners */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-slate-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-slate-300" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-slate-300" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-slate-300" />
            </div>
            <div className="text-center space-y-2">
                <span className="block text-lg md:text-xl font-serif text-[#3a3a3a] tracking-wider group-hover:text-slate-600 transition-colors">
                    우리집을 천국으로 만들기
                </span>
                <span className="block text-xs text-slate-400 font-serif italic uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    오늘의 미션 확인하기 →
                </span>
            </div>
        </Link>
    );
}
