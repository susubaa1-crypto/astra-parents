"use client";

import { Search, X } from "lucide-react";
import { motion } from "framer-motion";

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export function SearchInput({ value, onChange, placeholder = "참가자 검색..." }: SearchInputProps) {
    return (
        <div className="relative max-w-sm w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="block w-full pl-10 pr-10 py-2.5 bg-white border-b border-slate-300 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-slate-800 transition-colors text-sm"
                placeholder={placeholder}
            />
            {value && (
                <button
                    onClick={() => onChange("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-300 hover:text-slate-500 transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}
