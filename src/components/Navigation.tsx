"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show nav at the very top, or when scrolling up. Hide when scrolling down past 50px
            if (currentScrollY < 50) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { name: "ASTRA PARENTS", href: "/" },
        { name: "About", href: "/about" },
        { name: "결핍일기", href: "/magazine" },
        { name: "Missions", href: "/missions" },
        { name: "Dashboard", href: "/dashboard" },
    ];

    return (
        <nav className={`fixed left-0 right-0 z-50 bg-astra-navy/80 backdrop-blur-md border-b border-white/5 transition-all duration-300 ease-in-out ${isVisible ? "top-0" : "-top-20"}`}>
            <div className="flex items-center justify-between md:justify-center overflow-x-auto no-scrollbar gap-6 md:gap-12 px-4 md:px-10 py-3 md:py-4 w-full max-w-7xl mx-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`group relative px-4 py-2 text-[11px] font-sans uppercase tracking-[0.25em] transition-colors duration-500 ${isActive ? "text-astra-gold font-semibold" : "text-ink-light hover:text-astra-gold"
                                }`}
                        >
                            <span className="relative z-10 transition-transform duration-500 md:group-hover:tracking-[0.3em] md:group-hover:block transition-all whitespace-nowrap">
                                {item.name}
                            </span>

                            {/* Active Indicator Underline */}
                            {isActive && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-astra-gold opacity-80"
                                    style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", boxShadow: '0 0 10px var(--color-astra-glow)' }}
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
