"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { magazines } from "@/data/magazines";
import { MagazineCard } from "@/components/MagazineCard";

export function MagazineSection() {
    return (
        <section className="relative py-20 md:py-48 px-4 bg-ink-charcoal text-paper-cream overflow-hidden">
            {/* Cinematic Background Image */}
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <Image
                    src="/images/real/IMG_3310.JPG"
                    alt="Positive Village Magazine"
                    fill
                    className="object-cover object-center opacity-30 mix-blend-overlay grayscale"
                />
                {/* Dark gradients to ensure text remains highly readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-charcoal via-ink-charcoal/80 to-ink-charcoal/40" />
            </motion.div>

            {/* Dark Ambient Lighting Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-sage/5 blur-[100px] pointer-events-none" />

            <div className="max-w-[1200px] mx-auto relative z-10 space-y-16 md:space-y-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center space-y-8"
                >
                    <div className="flex justify-center mb-4 md:mb-6">
                        <span className="w-[1px] h-12 md:h-16 bg-paper-cream/20" />
                    </div>
                    <span className="text-[12px] font-sans uppercase tracking-[0.5em] text-[var(--color-bonfire-orange)] font-medium">Social Proof</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-paper-cream leading-[1.3] tracking-tight">
                        나만 변한 게 아닙니다<br />
                        <span className="italic block mt-2 md:mt-4 text-paper-cream/70 font-light">기적의 증거들</span>
                    </h2>
                    <p className="text-[14px] md:text-[15px] font-sans font-light text-paper-cream/60 leading-relaxed max-w-xl mx-auto pt-6">
                        "매일 밤 자책하며 울었어요."<br />
                        "이제 아이가 실수해도 웃으며 넘길 여유가 생겼어요."<br />
                        <span className="text-[12px] italic mt-2 block">(Positive Village 참여자들의 이야기)</span>
                    </p>
                </motion.div>

                {/* Magazine Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12">
                    {magazines.map((magazine, idx) => (
                        <motion.div
                            key={magazine.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
                        >
                            {/* Inherits style from MagazineCard but overridden with dark mode contexts if needed. 
                  Since MagazineCard might have hardcoded dark text, we wrap it in a slightly brightened container or assume it uses standard globals */}
                            <div className="bg-paper-cream/5 rounded-[2px] backdrop-blur-sm border border-paper-cream/10 p-2">
                                <MagazineCard magazine={magazine} />
                            </div>
                        </motion.div>
                    ))}

                    {/* Placeholder for Next Issue */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="aspect-[3/4.2] border border-paper-cream/20 flex flex-col items-center justify-center space-y-8 p-12 bg-transparent group transition-smooth hover:border-paper-cream/40"
                    >
                        <div className="w-12 h-12 rounded-full border border-paper-cream/20 flex items-center justify-center text-paper-cream/40 transition-smooth group-hover:bg-paper-cream group-hover:text-ink-charcoal group-hover:scale-110">
                            <span className="font-serif italic text-lg opacity-50">#</span>
                        </div>
                        <p className="text-[11px] font-sans uppercase tracking-[0.3em] text-paper-cream/40 text-center leading-[2.5] group-hover:text-paper-cream/80">
                            Next Issue<br />
                            <span className="opacity-60 italic normal-case tracking-widest text-[13px] font-serif transition-colors text-paper-cream">Coming Soon</span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
