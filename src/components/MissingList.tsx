"use client";

import { motion } from "framer-motion";
import { UserX } from "lucide-react";

interface MissingListProps {
    names: string[];
}

export function MissingList({ names }: MissingListProps) {
    return (
        <div className="flex flex-col space-y-3 p-2">
            {names.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 text-center">
                    <p className="text-xl font-serif text-slate-800 italic">모두가 과제를 제출했습니다.</p>
                    <div className="w-8 h-[1px] bg-slate-200 mt-4" />
                </div>
            ) : (
                names.map((name, idx) => (
                    <motion.div
                        key={name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center space-x-4 border-b border-slate-50 pb-3"
                    >
                        <div className="w-1.5 h-1.5 bg-slate-800 rounded-full shrink-0" />
                        <span className="text-sm font-medium text-slate-600 tracking-tight">{name}</span>
                    </motion.div>
                ))
            )}
        </div>
    );
}
