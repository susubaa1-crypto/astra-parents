"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import calendarData from "@/data/calendar.json"; // 365일 확언 데이터

export function HeroSection() {
    const [todayAffirmation, setTodayAffirmation] = useState("오늘 하루도 치열하게 살아낸 당신, 잘 버텨주어 고맙습니다.");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // 클라이언트 로컬 시간이 아닌, 한국 시간(KST, Asia/Seoul)을 강제 기준으로 가져오기
        const kstDateString = new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" });
        const kstDate = new Date(kstDateString);
        const month = kstDate.getMonth() + 1;
        const day = kstDate.getDate();

        // 날짜에 맞는 긍정 확언 데이터 찾기 (동일한 월, 일 매칭)
        const matchingData = calendarData.find(d => d.month === month && d.day === day);
        if (matchingData && matchingData.affirmation) {
            setTodayAffirmation(matchingData.affirmation);
        }
    }, []);

    // 긴 문장은 쉼표나 어미를 기준으로 자연스럽게 엔터를 치기 위한 간단한 헬퍼
    const formattedText = todayAffirmation.replace(/(당신,|않아도)/g, "$1<br className='hidden md:block' />");

    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center space-y-12 relative px-4 overflow-hidden">
            {/* Cinematic Background Image */}
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <Image
                    src="/images/candle-hero.png"
                    alt="Glowing elegant candle in the dark"
                    fill
                    className="object-cover object-center opacity-30 mix-blend-multiply"
                    priority
                />
                {/* Gradient mask to fade out the image at the bottom into the cream background */}
                <div className="absolute inset-0 bg-gradient-to-b from-paper-cream/30 via-paper-cream/60 to-paper-cream" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="relative z-10 flex flex-col items-center space-y-8 mt-20"
            >
                <span className="text-[12px] font-sans uppercase tracking-[0.3em] text-[var(--color-bonfire-orange)] font-medium">Daily Positive Affirmation</span>

                <div className="space-y-6 flex flex-col items-center">
                    <AnimatePresence mode="wait">
                        {mounted && (
                            <motion.h1
                                key={todayAffirmation}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="text-3xl md:text-5xl lg:text-[56px] font-serif leading-[1.5] text-ink-charcoal tracking-tight drop-shadow-sm max-w-4xl mx-auto px-4"
                            >
                                "{todayAffirmation}"
                            </motion.h1>
                        )}
                    </AnimatePresence>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-[14px] font-sans font-light text-ink-gray/80 italic mt-8 relative inline-block group"
                    >
                        - 긍정언어캘린더 오늘의 문장 -
                        <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-[var(--color-bonfire-orange)] opacity-0 group-hover:opacity-50 transition-opacity"></span>
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 75 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="w-[1.5px] bg-gradient-to-b from-[var(--color-bonfire-orange)] to-transparent mt-16 opacity-70"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="text-[13px] font-sans font-light text-[var(--color-bonfire-orange)] tracking-widest uppercase mt-4 italic"
                >
                    따뜻한 모닥불 곁으로 오세요
                </motion.p>
            </motion.div>
        </section>
    );
}
