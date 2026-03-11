"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
    return (
        <div className="flex flex-col items-center w-full">
            {/* 1. Main Hero Area */}
            <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.55 }} // Increased for even tighter crop
                    animate={{ opacity: 1, scale: 1.5 }} // Increased significantly to crop even more
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    <Image
                        src="/images/real/family_main.jpg"
                        alt="Positive Village Family"
                        fill
                        className="object-cover object-[70%_35%] filter brightness-75 scale-[1.75] md:scale-[1.45]" // Maximum crop
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="relative z-10 flex flex-col items-center w-full px-4"
                >
                    <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-serif font-medium leading-[1.2] text-white tracking-tight drop-shadow-md text-center break-keep">
                        집은 가장 작은 천국
                    </h1>
                </motion.div>

                {/* Scroll Down Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-12 flex flex-col items-center"
                >
                    <div className="w-[1px] h-16 bg-white/50 block" />
                </motion.div>
            </section>

            {/* 2. Orange Section */}
            <section className="w-full bg-[var(--color-bonfire-orange)] py-32 md:py-40 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-[32px] md:text-[48px] font-serif text-white text-center leading-[1.4] break-keep">
                        우리는 집을 천국으로<br className="md:hidden" /> 만들고 있을까요?
                    </h2>
                </motion.div>
            </section>

            {/* 3. Dark Section */}
            <section className="w-full bg-ink-charcoal text-paper-white py-32 md:py-40 px-4 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-5xl mx-auto flex flex-col items-center text-center"
                >
                    <div className="mb-16 md:mb-24 space-y-6">
                        <h2 className="text-[28px] md:text-[40px] font-serif leading-[1.4] break-keep">
                            키키맘과 3가지 불씨를 지펴보세요.
                        </h2>
                        <p className="text-[15px] md:text-[17px] font-sans font-light text-paper-white/80 leading-[1.8] max-w-2xl mx-auto break-keep">
                            매일 밤, 잠든 아이 옆에서 후회로 뒤척이던 날들이 있었어요.<br />
                            하지만 이제는 알아요. 완벽한 엄마는 없어도, 긍정의 힘을 믿는 엄마는 있다는 걸요.<br className="hidden md:block" />
                            저와 함께 아주 작은 불씨부터 지펴볼까요?
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full">
                        {/* Pillar 1: Camp */}
                        <div className="flex flex-col items-center space-y-6 md:space-y-8 p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500">
                            <span className="text-[12px] font-sans uppercase tracking-[0.2em] text-[var(--color-bonfire-orange)] font-medium">01</span>
                            <h3 className="font-serif text-2xl md:text-3xl text-white">긍정언어캠프</h3>
                        </div>

                        {/* Pillar 2: Calendar */}
                        <div className="flex flex-col items-center space-y-6 md:space-y-8 p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500">
                            <span className="text-[12px] font-sans uppercase tracking-[0.2em] text-[var(--color-bonfire-orange)] font-medium">02</span>
                            <h3 className="font-serif text-2xl md:text-3xl text-white">자기긍정 캘린더</h3>
                        </div>

                        {/* Pillar 3: Diary */}
                        <div className="flex flex-col items-center space-y-6 md:space-y-8 p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500">
                            <span className="text-[12px] font-sans uppercase tracking-[0.2em] text-[var(--color-bonfire-orange)] font-medium">03</span>
                            <h3 className="font-serif text-2xl md:text-3xl text-white">결핍 일기</h3>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
