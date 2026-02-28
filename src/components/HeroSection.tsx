"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="min-h-[90vh] md:min-h-[95vh] flex flex-col justify-center items-center relative px-4 overflow-hidden pt-12 md:pt-20 pb-20 md:pb-32 bg-paper-cream">
            {/* Cinematic Background Image */}
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <Image
                    src="/images/real/IMG_2856.JPG"
                    alt="Positive Village Background"
                    fill
                    className="object-cover object-center opacity-40 mix-blend-multiply"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-paper-cream/20 via-paper-cream/70 to-paper-cream" />
            </motion.div>

            {/* Subtle light ambient glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-paper-white/50 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="relative z-10 flex flex-col items-center w-full max-w-[1000px] mx-auto space-y-12 md:space-y-20 mt-8 md:mt-10"
            >
                {/* 1. Strong Pain Point Hook */}
                <div className="text-center space-y-5 md:space-y-8">
                    <span className="text-[11px] font-sans uppercase tracking-[0.4em] text-[var(--color-bonfire-orange)] font-medium drawing-border-sm px-4 py-1.5 inline-block">
                        Prologue
                    </span>
                    <h1 className="text-[36px] md:text-[44px] lg:text-[56px] font-serif leading-[1.3] md:leading-[1.4] text-ink-charcoal tracking-tight drop-shadow-sm break-keep break-words w-full px-2 md:px-4">
                        "집은 가장 작은 천국이야.<br />
                        <span className="italic font-light text-[22px] md:text-[32px] lg:text-[40px] mt-4 md:mt-6 block">우리는 집을 천국으로 만들고 있을까, 지옥으로 만들고 있을까?"</span>
                    </h1>
                    <p className="text-[15px] md:text-[17px] font-sans font-light text-ink-gray/90 leading-[1.8] max-w-2xl mx-auto pt-4 md:pt-6 relative break-keep px-4">
                        혹은 우리는 천국에서 살았을까, 지옥에서 살았을까.<br className="hidden md:block" />
                        <span className="font-medium text-ink-charcoal border-b border-[var(--color-bonfire-orange)]/40 pb-[2px]">한 아이를 긍정적인 아이로 키워내는 온라인 마을</span>
                    </p>
                </div>

                {/* 2. Introduction of the 3 Pillars */}
                <div className="w-full">
                    <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12">
                        <div className="h-[1px] w-8 md:w-12 bg-ink-charcoal/20"></div>
                        <p className="text-[10px] md:text-[12px] font-sans uppercase tracking-[0.3em] text-ink-gray/60">우리가 불씨를 지피는 3가지 방법</p>
                        <div className="h-[1px] w-8 md:w-12 bg-ink-charcoal/20"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-14">
                        {/* Pillar 1: Camp */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="flex flex-col items-center text-center space-y-3 md:space-y-5 p-6 md:p-8 drawing-border bg-paper-white/50 backdrop-blur-sm transition-smooth hover:bg-paper-white"
                        >
                            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[var(--color-bonfire-orange)]">Theme Camp</span>
                            <h3 className="font-serif text-xl md:text-2xl text-ink-charcoal">긍정언어캠프</h3>
                            <p className="text-[13px] font-sans font-light text-ink-gray leading-[1.6] md:leading-relaxed break-keep">
                                이 마을에는 밤마다 캠프가 열려요.<br />3~5월 테마는<br />'긍정언어캠프'
                            </p>
                        </motion.div>

                        {/* Pillar 2: Calendar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.0 }}
                            className="flex flex-col items-center text-center space-y-3 md:space-y-5 p-6 md:p-8 drawing-border bg-paper-white/50 backdrop-blur-sm transition-smooth hover:bg-paper-white"
                        >
                            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[var(--color-bonfire-orange)]">Mindset Tool</span>
                            <h3 className="font-serif text-xl md:text-2xl text-ink-charcoal">긍정 캘린더</h3>
                            <p className="text-[13px] font-sans font-light text-ink-gray leading-[1.6] md:leading-relaxed break-keep">
                                1억의 빚 앞에서도<br />나를 지켜낸 기적의 증거,<br />365일 긍정 확언 문장들
                            </p>
                        </motion.div>

                        {/* Pillar 3: Magazine */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="flex flex-col items-center text-center space-y-3 md:space-y-5 p-6 md:p-8 drawing-border bg-paper-white/50 backdrop-blur-sm transition-smooth hover:bg-paper-white"
                        >
                            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[var(--color-bonfire-orange)]">Deficiency Diary</span>
                            <h3 className="font-serif text-xl md:text-2xl text-ink-charcoal">결핍일기</h3>
                            <p className="text-[13px] font-sans font-light text-ink-gray leading-[1.6] md:leading-relaxed break-keep">
                                완벽하지 않아도 괜찮다는 위로,<br />생각할 거리를 던져주는<br />'결핍일기'가 매달 올라와요.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* 3. CTA Anchor to scroll down */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="flex flex-col items-center pt-4 md:pt-8"
                >
                    <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-[var(--color-bonfire-orange)] to-transparent opacity-80 block mb-4 md:mb-6" />
                    <p className="text-[11px] font-sans font-light text-[var(--color-bonfire-orange)] tracking-widest uppercase italic font-medium">
                        모닥불 곁으로 초대합니다
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
