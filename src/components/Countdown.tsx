"use client";

import { useEffect, useState } from "react";

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
        const timer = setInterval(calculateTimeLeft, 1000 * 60 * 60); // Update every hour

        return () => clearInterval(timer);
    }, [targetDate]);

    if (daysLeft === null) return null;

    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="text-sm font-serif uppercase tracking-[0.2em] text-slate-400">Challenge Starts In</div>
            <div className="flex items-center gap-4">
                <div className="text-6xl md:text-8xl font-serif text-[#3a3a3a]">{daysLeft}</div>
                <div className="text-2xl md:text-3xl font-serif text-slate-300">Days</div>
            </div>
        </div>
    );
}
