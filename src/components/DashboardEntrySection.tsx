"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BonfireLogo } from "@/components/BonfireLogo";

export function DashboardEntrySection() {
    return (
        <section className="py-32 md:py-48 px-4 relative flex flex-col items-center justify-center min-h-[80vh] bg-paper-cream overflow-hidden">
            {/* Background abstract shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--color-bonfire-orange)] opacity-5 rounded-full blur-[80px]" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--color-bonfire-orange)] opacity-10 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 text-center space-y-16 max-w-2xl mx-auto"
            >
                <div className="space-y-6">
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8], rotate: [-2, 2, -2] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-20 h-20 mx-auto flex items-center justify-center drawing-border-sm bg-paper-white shadow-sm text-[#FF6B35]"
                    >
                        <BonfireLogo className="w-10 h-10" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-[64px] font-serif text-ink-charcoal leading-[1.3] tracking-tight">
                        Community Bonfire
                    </h2>
                    <p className="text-[14px] md:text-[16px] font-sans font-light text-ink-gray leading-relaxed pt-2">
                        치열했던 하루의 끝, 나와 비슷한 고민을 가진 사람들과<br className="hidden md:block" />
                        함께 모여 온기를 나누는 곳.
                    </p>
                </div>

                <div className="space-y-8">
                    <Link href="/dashboard" className="group relative inline-flex items-center justify-center px-12 py-5 bg-ink-charcoal text-paper-cream overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 drawing-border">
                        <div className="absolute inset-0 bg-[#FF6B35] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                        <span className="relative z-10 text-[12px] font-sans uppercase tracking-[0.3em] font-medium transition-colors group-hover:text-white">
                            캠프장 입장하기
                        </span>
                    </Link>
                    <p className="text-[12px] font-sans text-ink-gray/60 italic tracking-wider">
                        매일 밤 과제 인증과 긍정언어 나누기
                    </p>
                </div>
            </motion.div>

            {/* Exquisite Defensive Lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ink-light/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ink-light/50 to-transparent" />
        </section>
    );
}
