"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
    title: string;
    value: string | number;
    icon: ReactNode;
    description?: string;
    color?: string;
    delay?: number;
}

export function StatCard({ title, value, icon, description, color, delay = 0 }: StatCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group relative bg-paper-white p-10 hairline-border no-shadow transition-smooth hover:border-ink-charcoal flex flex-col items-center text-center space-y-6 overflow-hidden"
        >
            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink-charcoal/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

            <motion.div
                className="text-ink-gray transition-smooth group-hover:scale-110 group-hover:text-ink-charcoal"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {icon}
            </motion.div>

            <div className="space-y-4 relative z-10">
                <p className="text-[12px] font-sans text-ink-gray uppercase tracking-[0.25em] leading-loose">
                    {title}
                </p>
                <p className="text-[52px] font-normal text-ink-charcoal font-serif tracking-tighter leading-none">
                    {value}
                </p>
            </div>

            {description && (
                <p className="text-[14px] text-ink-gray font-sans font-light relative z-10 pt-2">{description}</p>
            )}

            {/* Decorative Corner Marks */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-ink-light transition-smooth group-hover:border-ink-charcoal" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-ink-light transition-smooth group-hover:border-ink-charcoal" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-ink-light transition-smooth group-hover:border-ink-charcoal" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-ink-light transition-smooth group-hover:border-ink-charcoal" />
        </motion.div>
    );
}
