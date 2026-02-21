"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function Navigation() {
    const pathname = usePathname();

    const navItems = [
        { name: "Report", href: "/" },
        { name: "About", href: "/about" },
        { name: "Dashboard", href: "/dashboard" },
    ];

    return (
        <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none fade-in-section">
            <div className="flex items-center gap-12 px-10 py-4 glass-panel rounded-full border border-ink-light no-shadow pointer-events-auto transition-smooth hover:border-ink-charcoal">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`group relative px-4 py-2 text-[11px] font-sans uppercase tracking-[0.25em] transition-colors duration-500 ${isActive ? "text-ink-charcoal font-semibold" : "text-ink-gray hover:text-ink-charcoal"
                                }`}
                        >
                            <span className="relative z-10 transition-transform duration-500 group-hover:tracking-[0.3em]">
                                {item.name}
                            </span>

                            {/* Active Indicator Underline */}
                            {isActive && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute bottom-0 left-4 right-4 h-[1px] bg-ink-charcoal"
                                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
