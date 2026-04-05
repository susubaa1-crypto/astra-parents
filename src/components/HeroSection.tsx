"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <div className="flex flex-col items-center w-full">
            {/* 1. Main Hero Area */}
            <section className="relative w-full h-[100dvh] flex flex-col justify-center items-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 3.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    <Image
                        src="/astra/hero_child_new.jpg"
                        alt="Positive Village Family"
                        fill
                        className="object-cover object-center filter brightness-[0.4] transition-transform duration-1000"
                        priority
                    />
                    <div className="absolute inset-0 bg-astra-navy/50 mix-blend-multiply" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                    className="relative z-10 flex flex-col items-center w-full px-4 mt-32 md:mt-40"
                >
                    <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-serif font-light leading-[1.3] text-astra-starlight tracking-widest drop-shadow-lg text-center break-keep">
                        엄마가 없어도<br />길을 잃지 않도록
                    </h1>
                    <p className="mt-8 text-sm md:text-base font-serif tracking-[0.3em] text-white opacity-50 uppercase shadow-black/50">
                        ASTRA PARENTS
                    </p>
                </motion.div>

                {/* Scroll Down Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.0 }}
                    className="absolute bottom-12 flex flex-col items-center"
                >
                    <div className="w-[1px] h-16 bg-astra-gold/50 block shadow-[0_0_10px_var(--color-astra-glow)]" />
                </motion.div>
            </section>

            {/* 2. Story Section */}
            <section className="w-full bg-astra-navy py-32 md:py-48 flex flex-col items-center justify-center px-6 relative overflow-hidden">
                {/* Subtle Starlight Background */}
                <div className="absolute inset-0 bg-[url('/astra/north_star_banner.png')] opacity-10 bg-cover bg-center pointer-events-none mix-blend-screen" />
                
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full max-w-3xl mx-auto flex flex-col gap-16 md:gap-24 relative z-10 text-center"
                >
                    <p className="text-[17px] md:text-[22px] font-serif text-ink-light leading-[2.2] break-keep font-light">
                        대학교 4학년.<br />
                        3개월 선고 받은 엄마가 진짜 하늘의 별이 되었을 때.<br />
                        나는 길을 잃어버렸다.
                    </p>

                    <p className="text-[17px] md:text-[22px] font-serif text-ink-light leading-[2.2] break-keep font-light">
                        나의 삶을 무한히 응원해주던 존재가 사라지고 10년 뒤.<br />
                        너무 작고 여린, 그러나 결코 가볍지 않은 생명이 찾아왔다.
                    </p>

                    <p className="text-[19px] md:text-[26px] font-serif text-astra-starlight leading-[2.2] break-keep">
                        인생의 북극성을 잃어버렸던 내가,<br />
                        이젠 <span className="text-astra-gold">이 아이의 북극성</span>이 되어줘야 한다.
                    </p>

                    <p className="text-[17px] md:text-[22px] font-serif text-ink-light leading-[2.2] break-keep font-light">
                        이 아이도 언젠가 엄마가 없어질테니.
                    </p>

                    <p className="text-[20px] md:text-[28px] font-serif text-astra-starlight leading-[2.2] break-keep mt-8 relative">
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-astra-gold text-4xl opacity-50">✦</span>
                        그때 길을 잃지 않도록<br />
                        어떻게 살아가야 할지 차근차근 알려줘야 한다.
                    </p>

                    <div className="pt-12 md:pt-20">
                        <Link href="/missions" className="group relative inline-flex items-center justify-center px-12 py-5 bg-astra-starlight text-astra-navy overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(217,187,123,0.3)] hover:-translate-y-1 rounded-sm border border-astra-gold/20">
                            <div className="absolute inset-0 bg-astra-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                            <span className="relative z-10 text-[13px] font-sans transition-colors flex items-center gap-2 tracking-[0.2em] font-bold">
                                북극성 만들기 여정 시작하기 🌟
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* 3. Handwriting Wall Photo Section */}
            <section className="w-full bg-[#E5E0D8] py-24 md:py-32 flex flex-col items-center justify-center px-6 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full max-w-xl mx-auto relative group overflow-hidden rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                >
                    <Image
                        src="/astra/handwriting.jpg"
                        alt="우리가 길을 잃지 않기를"
                        width={800}
                        height={1000}
                        className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-[15px] md:text-[17px] font-serif text-ink-charcoal/80 tracking-[0.25em] font-light leading-[2.5]">
                        우리가 길을 잃지 않기를<br />
                        우리의 하루하루가 자유롭기를<br />
                        우리가 건강하기를
                    </p>
                </motion.div>
            </section>
        </div>
    );
}
