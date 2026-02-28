"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Flame } from "lucide-react";

export function DashboardEntrySection() {
    return (
        <section className="py-24 md:py-48 px-4 relative flex flex-col items-center justify-center min-h-[60vh] md:min-h-[80vh] bg-ink-charcoal text-paper-cream overflow-hidden">
            {/* Background abstract shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--color-bonfire-orange)] opacity-10 rounded-full blur-[80px]" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--color-bonfire-orange)] opacity-15 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 text-center space-y-12 md:space-y-16 max-w-2xl mx-auto"
            >
                <div className="space-y-4 md:space-y-6">
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8], rotate: [-2, 2, -2] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-20 h-20 mx-auto flex items-center justify-center drawing-border-sm bg-ink-charcoal border border-paper-cream/20 shadow-[0_0_30px_rgba(255,107,53,0.15)] text-[#FF6B35]"
                    >
                        <Flame className="w-8 h-8" strokeWidth={1.5} />
                    </motion.div>
                    <h2 className="text-[32px] md:text-5xl lg:text-[64px] font-serif text-paper-cream leading-[1.3] md:leading-[1.2] tracking-tight max-w-[280px] md:max-w-none mx-auto break-keep">
                        당신의 자리를 비워두었습니다
                    </h2>
                    <p className="text-[15px] md:text-[16px] font-sans font-light text-paper-cream/70 leading-[1.7] md:leading-relaxed pt-4 md:pt-2 break-keep px-4">
                        오늘 밤, 아무도 당신을 평가하지 않는 곳에서<br className="hidden md:block" />
                        따뜻한 온기를 나누세요.
                    </p>
                </div>

                <div className="space-y-8">
                    <Link href="/dashboard" className="group relative inline-flex items-center justify-center px-12 py-5 bg-paper-cream text-ink-charcoal overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,107,53,0.3)] hover:-translate-y-1 drawing-border">
                        <div className="absolute inset-0 bg-[#FF6B35] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                        <span className="relative z-10 text-[12px] font-sans font-medium transition-colors group-hover:text-white flex items-center gap-2 tracking-[0.2em] font-semibold text-ink-charcoal group-hover:text-white">
                            ⛺️ 지금 내 자리 맡으러 가기
                        </span>
                    </Link>
                    <p className="text-[12px] font-sans text-paper-cream/40 italic tracking-wider">
                        매일 밤 과제 인증과 긍정언어 나누기
                    </p>
                </div>
            </motion.div>

            {/* Exquisite Defensive Lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-paper-cream/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-paper-cream/20 to-transparent" />
        </section>
    );
}
