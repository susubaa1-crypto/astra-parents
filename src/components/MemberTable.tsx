"use client";

import { motion } from "framer-motion";
import { MemberStatus } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MemberTableProps {
    members: MemberStatus[];
    files: string[];
}

export function MemberTable({ members, files }: MemberTableProps) {
    return (
        <div className="w-full overflow-x-auto px-4 md:px-0 scrollbar-hide flex flex-col items-center">
            <table className="w-full max-w-5xl border-collapse">
                <thead>
                    <tr className="border-b border-ink-charcoal">
                        <th className="px-6 py-6 text-left text-[12px] font-semibold text-ink-charcoal font-sans uppercase tracking-[0.25em]">
                            참가자 이름
                        </th>
                        {files.map((file) => (
                            <th key={file} className="px-6 py-6 text-center text-[11px] font-light text-ink-gray font-sans uppercase tracking-[0.1em] min-w-[120px]">
                                {file.split('_').pop()?.replace('.xlsx', '') || file}
                            </th>
                        ))}
                        <th className="px-6 py-6 text-center text-[12px] font-semibold text-ink-charcoal font-sans uppercase tracking-[0.25em]">
                            참여도
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-ink-light">
                    {members.map((member, idx) => (
                        <motion.tr
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="hover:bg-paper-white transition-colors duration-500 group"
                        >
                            <td className="px-6 py-6 whitespace-nowrap">
                                <Link
                                    href={`/member/${encodeURIComponent(member.name)}`}
                                    className="text-[14px] font-sans font-medium text-ink-charcoal hover:text-ink-charcoal transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-ink-charcoal after:origin-bottom-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-bottom-left"
                                >
                                    {member.name}
                                </Link>
                            </td>
                            {files.map((file) => (
                                <td key={file} className="px-6 py-6 whitespace-nowrap text-center">
                                    <div className="flex justify-center">
                                        <div className={cn(
                                            "w-2.5 h-2.5 rounded-full transition-all duration-500",
                                            member.submissions[file]
                                                ? "bg-ink-charcoal scale-100"
                                                : "bg-paper-cream border border-ink-light scale-90 opacity-60"
                                        )} />
                                    </div>
                                </td>
                            ))}
                            <td className="px-6 py-6 whitespace-nowrap text-center">
                                <span className="text-[16px] text-ink-gray font-serif italic tracking-tight group-hover:text-ink-charcoal transition-colors duration-500">
                                    {Math.round(member.rate)}%
                                </span>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
