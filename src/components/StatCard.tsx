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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white double-border p-8 gentle-shadow flex flex-col items-center text-center space-y-4"
        >
            <div className="text-slate-400">
                {icon}
            </div>
            <div className="space-y-1">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest leading-loose">
                    {title}
                </p>
                <p className="text-4xl font-extrabold text-[#3a3a3a] font-serif">
                    {value}
                </p>
            </div>
            {description && (
                <p className="text-xs text-slate-400 italic font-serif">{description}</p>
            )}
        </motion.div>
    );
}
