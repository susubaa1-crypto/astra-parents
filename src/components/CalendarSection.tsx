"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export function CalendarSection() {
    return (
        <section className="py-16 md:py-32 px-4 max-w-[1200px] mx-auto overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">

                {/* Story Text Area */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 space-y-8 md:space-y-12"
                >
                    <div className="space-y-4">
                        <span className="text-[12px] font-sans uppercase tracking-[0.4em] text-[var(--color-bonfire-orange)] font-medium">The Miracle Evidence</span>
                        <h2 className="text-3xl md:text-[44px] font-serif text-ink-charcoal leading-[1.35] tracking-tight">
                            기적은 거창한 것이<br />
                            <span className="italic block mt-2 font-light text-ink-charcoal/80">아닙니다</span>
                        </h2>
                    </div>

                    <div className="space-y-4 md:space-y-6 text-ink-gray font-sans text-[14px] md:text-[15px] font-light leading-[1.7] md:leading-[1.8]">
                        <p>
                            1억의 빚 앞에서도, 매일 밤 무너진 자존감 앞에서도 저를 다시 일으켜 세운 것은 엄청난 자본도 기적적인 인맥도 아니었습니다. 그저 매일 밤 잠들기 전 꾹꾹 눌러 쓴 '감사일기' 였습니다.
                        </p>
                        <p>
                            그때 일기장에 적었던 날것의 문장들, 저 스스로를 토닥였던 진짜 언어들을 모아 365개의 긍정 확언 캘린더를 만들었습니다. 하루 1분의 긍정 언어가 당신의 식탁 위에서 잔잔한 기적을 만들어냅니다.
                        </p>
                    </div>

                    <div className="pt-4">
                        <button className="group relative inline-flex items-center gap-4 px-8 py-5 transition-smooth cursor-not-allowed drawing-border hover:-translate-y-1">
                            <BookOpen className="w-5 h-5 text-[var(--color-bonfire-orange)] transition-colors" />
                            <span className="text-[11px] font-sans uppercase tracking-[0.2em] font-medium text-ink-charcoal group-hover:text-[var(--color-bonfire-orange)] transition-colors">2026 캘린더 보기 (준비중)</span>
                        </button>
                    </div>
                </motion.div>

                {/* Visual Product Mockup Area */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 relative w-full aspect-square max-w-lg mx-auto"
                >
                    {/* Decorative background circle */}
                    <div className="absolute inset-0 bg-[var(--color-bonfire-orange)] opacity-5 rounded-full blur-[80px]" />

                    <div className="relative z-10 w-full h-full bg-paper-white p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] drawing-border flex flex-col justify-between transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                        <div className="space-y-6 text-center">
                            <p className="text-[12px] font-sans uppercase tracking-[0.3em] text-ink-charcoal/40 font-semibold">2026 KIKIMOM Calendar</p>
                            <h3 className="text-3xl font-serif text-ink-charcoal italic leading-snug break-keep">
                                "나는 내 삶의 <br />가장 든든한 조력자입니다."
                            </h3>
                        </div>

                        <div className="text-center space-y-4 mt-8 md:mt-0">
                            <div className="w-12 h-[1px] bg-ink-charcoal/20 mx-auto mb-6 md:mb-8" />
                            <p className="font-serif text-[64px] leading-none text-ink-charcoal tracking-tighter">03</p>
                            <p className="text-[14px] font-sans tracking-[0.2em] text-ink-gray uppercase">March</p>
                        </div>
                    </div>

                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-rose/10 blur-[50px] rounded-full" />
                </motion.div>

            </div>
        </section>
    );
}
