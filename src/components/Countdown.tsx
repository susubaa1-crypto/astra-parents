"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
    targetDate: string;
}

export function Countdown({ targetDate }: CountdownProps) {
    const [daysLeft, setDaysLeft] = useState<number | null>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            if (difference > 0) {
                setDaysLeft(Math.ceil(difference / (1000 * 60 * 60 * 24)));
            } else {
                setDaysLeft(0);
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000 * 60 * 60);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (daysLeft === null) return null;

    return (
        <div className="flex flex-col items-center space-y-4 group">
            <div className="text-[11px] font-serif uppercase tracking-[0.4em] text-ink-light transition-colors duration-500 group-hover:text-ink">
                Challenge Starts In
            </div>
            <div className="flex items-baseline gap-4 overflow-hidden py-2 px-6">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={daysLeft}
                        initial={{ y: 60, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -60, opacity: 0, scale: 1.1 }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                        className="text-7xl md:text-9xl font-serif text-ink tracking-tighter"
                    >
                        {daysLeft}
                    </motion.div>
                </AnimatePresence>
                <div className="text-xl md:text-2xl font-serif text-ink-light/50 italic tracking-widest pl-2 transition-colors duration-500 group-hover:text-ink/60">
                    Days
                </div>
            </div>
            <div className="h-[0.5px] w-12 bg-ink/20 mt-4 transition-all duration-700 group-hover:w-32 group-hover:bg-ink/40" />
        </div>
    );
}
