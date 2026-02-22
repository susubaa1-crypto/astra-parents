"use client";

import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-12 relative px-4">
            {/* Background soft glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/40 blur-3xl rounded-full z-0 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col items-center space-y-8"
            >
                <span className="text-[12px] font-sans uppercase tracking-[0.3em] text-ink-gray">Daily Positive Affirmation</span>

                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                        className="text-3xl md:text-5xl lg:text-[64px] font-serif leading-[1.4] text-ink-charcoal tracking-tight"
                    >
                        "오늘 하루도 치열하게 살아낸 당신,<br className="hidden md:block" />
                        <span className="italic mt-4 inline-block text-ink-charcoal/90">잘 버텨주어 고맙습니다."</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="text-[14px] font-sans font-light text-ink-gray/60 italic mt-6"
                    >
                        - 긍정언어캘린더 오늘의 문장 -
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 60 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="w-[1px] bg-ink-light mt-16"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.2 }}
                    className="text-[13px] font-sans font-light text-ink-gray tracking-widest uppercase mt-4"
                >
                    따뜻한 모닥불 곁으로 오세요
                </motion.p>
            </motion.div>
        </section>
    );
}
