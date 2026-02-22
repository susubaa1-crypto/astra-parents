"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
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
                    src="/images/bw-bonfire.png"
                    alt="Black and white bonfire"
                    fill
                    className="object-cover object-center opacity-20 mix-blend-multiply"
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
                <span className="text-[12px] font-sans uppercase tracking-[0.3em] text-ink-gray">Daily Positive Affirmation</span>

                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                        className="text-3xl md:text-5xl lg:text-[64px] font-serif leading-[1.4] text-ink-charcoal tracking-tight drop-shadow-sm"
                    >
                        "오늘 하루도 치열하게 살아낸 당신,<br className="hidden md:block" />
                        <span className="italic mt-4 inline-block text-ink-charcoal/90">잘 버텨주어 고맙습니다."</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.7 }}
                        className="text-[14px] font-sans font-light text-ink-gray/80 italic mt-6"
                    >
                        - 긍정언어캘린더 오늘의 문장 -
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 60 }}
                    transition={{ duration: 1, delay: 2.2 }}
                    className="w-[1px] bg-ink-charcoal/30 mt-16"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.4 }}
                    className="text-[13px] font-sans font-light text-ink-charcoal/70 tracking-widest uppercase mt-4"
                >
                    따뜻한 모닥불 곁으로 오세요
                </motion.p>
            </motion.div>
        </section>
    );
}
