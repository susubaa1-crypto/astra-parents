"use client";

import { motion } from "framer-motion";

interface MissingListProps {
    names: string[];
}

export function MissingList({ names }: MissingListProps) {
    return (
        <div className="flex flex-col space-y-6 pt-4">
            {names.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center group">
                    <p className="text-[28px] font-serif text-ink-charcoal italic opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                        모두가 과제를 제출했습니다.
                    </p>
                    <div className="w-16 h-[1px] bg-ink-light mt-8 transition-smooth group-hover:w-32 group-hover:bg-ink-charcoal" />
                </div>
            ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
                    {names.map((name, idx) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center space-x-6 border-b border-ink-light pb-4 pt-2 group cursor-default"
                        >
                            <div className="w-1.5 h-1.5 bg-ink-charcoal/20 rounded-full shrink-0 transition-smooth group-hover:bg-ink-charcoal group-hover:scale-150" />
                            <span className="text-[15px] font-sans font-medium text-ink-gray tracking-wide transition-colors duration-300 group-hover:text-ink-charcoal">
                                {name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}
