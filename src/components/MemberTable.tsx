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
        <div className="w-full overflow-x-auto px-4 md:px-0">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b-2 border-[#3a3a3a]">
                        <th className="px-6 py-6 text-left text-sm font-bold text-slate-800 font-serif uppercase tracking-widest">
                            참가자 이름
                        </th>
                        {files.map((file) => (
                            <th key={file} className="px-6 py-6 text-center text-sm font-bold text-slate-800 font-serif uppercase tracking-widest min-w-[140px]">
                                {file.split('_').pop()?.replace('.xlsx', '') || file}
                            </th>
                        ))}
                        <th className="px-6 py-6 text-center text-sm font-bold text-slate-800 font-serif uppercase tracking-widest">
                            참여도
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {members.map((member, idx) => (
                        <motion.tr
                            key={member.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.02, duration: 0.5 }}
                            className="hover:bg-slate-50/50 transition-colors group"
                        >
                            <td className="px-6 py-6 whitespace-nowrap">
                                <Link
                                    href={`/member/${encodeURIComponent(member.name)}`}
                                    className="text-sm font-medium text-slate-700 hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4 transition-colors"
                                >
                                    {member.name}
                                </Link>
                            </td>
                            {files.map((file) => (
                                <td key={file} className="px-6 py-6 whitespace-nowrap text-center">
                                    <div className={cn(
                                        "inline-block w-2.5 h-2.5 rounded-full",
                                        member.submissions[file] ? "bg-slate-800" : "bg-slate-100 border border-slate-200"
                                    )} />
                                </td>
                            ))}
                            <td className="px-6 py-6 whitespace-nowrap text-center">
                                <span className="text-sm font-medium text-slate-500 font-serif italic">
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
