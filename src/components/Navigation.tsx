"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
    const pathname = usePathname();

    const navItems = [
        { name: "Report", href: "/" },
        { name: "About", href: "/about" },
        { name: "Dashboard", href: "/dashboard" },
    ];

    return (
        <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="flex items-center gap-12 px-12 py-4 bg-white/40 backdrop-blur-md rounded-full border border-white/20 shadow-sm pointer-events-auto">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`text-[10px] font-serif uppercase tracking-[0.4em] transition-all hover:tracking-[0.6em] ${pathname === item.href
                                ? "text-[#3a3a3a] border-b border-[#3a3a3a] pb-1"
                                : "text-slate-400 hover:text-[#3a3a3a]"
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
