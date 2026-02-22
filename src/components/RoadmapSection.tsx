"use client";

import { motion } from "framer-motion";
import { Lock, Map, Sparkles } from "lucide-react";

const steps = [
    {
        num: "1.0",
        title: "긍정언어캠프",
        desc: "지금 시행중인 첫걸음",
        status: "active",
        icon: <Sparkles className="w-5 h-5 text-[var(--color-bonfire-orange)]" />,
    },
    {
        num: "2.0",
        title: "부부언어캠프",
        desc: "1.0 수료자 1000명 달성 시 오픈",
        status: "locked",
        icon: <Lock className="w-5 h-5 text-ink-light" />,
    },
    {
        num: "3.0",
        title: "가족문화캠프",
        desc: "우리 가족만의 고유한 유산 만들기",
        status: "locked",
        icon: <Map className="w-5 h-5 text-ink-light" />,
    },
];

export function RoadmapSection() {
    return (
        <section className="py-24 md:py-32 px-4 relative">
            <div className="max-w-[1000px] mx-auto space-y-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center space-y-6"
                >
                    <span className="text-[12px] font-sans uppercase tracking-[0.4em] text-[var(--color-bonfire-orange)] font-medium">Vision Roadmap</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-ink-charcoal leading-[1.3] tracking-tight">
                        나와 우리 가족의<br />
                        <span className="italic block mt-2 text-ink-charcoal/80">성장 지도</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical connecting line */}
                    <div className="absolute top-10 left-[2.5rem] md:left-1/2 bottom-10 w-[1px] bg-ink-light -translate-x-1/2" />

                    <div className="space-y-16">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                    } ${step.status === "locked" ? "opacity-60" : "opacity-100"}`}
                            >
                                {/* Visual Node */}
                                <div className="absolute left-[2.5rem] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-paper-cream drawing-border-sm z-10 transition-transform duration-500 hover:scale-110">
                                    {step.icon}
                                </div>

                                {/* Content Box */}
                                <div className="w-full md:w-1/2 pl-20 md:pl-0 flex flex-col justify-center">
                                    <div className={`p-8 hairline-border bg-paper-white transition-smooth ${step.status === 'active' ? 'border-sage shadow-sm' : ''} ${idx % 2 === 0 ? "md:mr-16" : "md:ml-16"}`}>
                                        <div className="flex items-baseline gap-3 mb-4">
                                            <span className="font-serif text-2xl italic text-ink-charcoal opacity-50">{step.num}</span>
                                            <h3 className="font-serif text-2xl text-ink-charcoal">{step.title}</h3>
                                        </div>
                                        <p className="font-sans text-[14px] font-light text-ink-gray leading-relaxed">
                                            {step.desc}
                                        </p>
                                        {step.status === "active" && (
                                            <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.2em] text-[var(--color-bonfire-orange)] border border-[var(--color-bonfire-orange)]/30 px-3 py-1 rounded-full bg-[var(--color-bonfire-orange)]/5">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-bonfire-orange)] opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-bonfire-orange)]"></span>
                                                </span>
                                                모집 중 / 진행 중
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
