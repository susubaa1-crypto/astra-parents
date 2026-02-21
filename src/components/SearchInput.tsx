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
        <div className="relative max-w-sm w-full group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-smooth group-focus-within:text-ink-charcoal">
                <Search className="h-4 w-4 text-ink-gray" />
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="block w-full pl-10 pr-10 py-3 bg-transparent border-b border-ink-light text-ink-charcoal placeholder-ink-gray/50 focus:outline-none focus:border-ink-charcoal transition-colors font-sans text-[14px]"
                placeholder={placeholder}
            />
            {value && (
                <button
                    onClick={() => onChange("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-ink-gray hover:text-ink-charcoal transition-smooth"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}
