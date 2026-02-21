"use client";

import { use } from "react";
import { getMemberDetail } from "@/lib/data-utils";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, BookOpen, Star, TreePine } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MemberPage({ params }: { params: Promise<{ name: string }> }) {
    const { name } = use(params);
    const decodedName = decodeURIComponent(name);
    const detail = getMemberDetail(decodedName);

    if (!detail) {
        return (
            <div className="min-h-screen flex items-center justify-center font-serif">
                수강생을 찾을 수 없습니다.
            </div>
        );
    }

    // Gamification level calculation
    const submissionCount = detail.details.filter(d => d.isSubmitted).length;
    const totalPossible = detail.details.length;
    const level = Math.floor((submissionCount / totalPossible) * 5); // 0 to 4 levels

    return (
        <main className="min-h-screen bg-[#f8f7f4] p-8 md:p-16 lg:p-24 max-w-6xl mx-auto space-y-16 fade-in-section">
            <header className="space-y-8">
                <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-[#3a3a3a] transition-colors font-serif text-sm uppercase tracking-widest group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    대시보드로 돌아가기
                </Link>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-12">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl text-[#3a3a3a] font-serif">
                            {decodedName}님의 기록
                        </h1>
                        <p className="text-sm text-slate-400 font-serif italic uppercase tracking-widest border-l-2 border-slate-100 pl-4 py-1">
                            보물 같은 말의 씨앗들이 하나씩 자라나고 있어요
                        </p>
                    </div>
                </div>
            </header>

            {/* Gamification Section */}
            <section className="bg-white double-border p-12 gentle-shadow grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 text-center md:text-left">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif text-[#3a3a3a] uppercase tracking-widest">성장하는 우리집 나무</h3>
                        <p className="text-slate-500 font-serif leading-relaxed">
                            긍정 언어를 사용할 때마다 우리집의 마음 나무가 자라납니다.<br />
                            지금까지 총 <span className="font-bold text-[#3a3a3a]">{submissionCount}번</span>의 정성을 쏟으셨어요.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50/50 rounded-lg space-y-1">
                            <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-serif">달성률</span>
                            <span className="text-2xl font-serif text-[#3a3a3a]">{Math.round(detail.rate)}%</span>
                        </div>
                        <div className="p-4 bg-slate-50/50 rounded-lg space-y-1">
                            <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-serif">연속 기록</span>
                            <span className="text-2xl font-serif text-[#3a3a3a]">{submissionCount}회</span>
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-center py-12">
                    <div className="relative w-64 h-64 border-2 border-dashed border-slate-100 rounded-full flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 0.8 + (level * 0.1), opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-[#3a3a3a]"
                        >
                            <TreePine className={cn(
                                "w-32 h-32 transition-colors duration-1000",
                                level >= 4 ? "text-green-800" : level >= 2 ? "text-[#3a3a3a]" : "text-slate-300"
                            )} />
                        </motion.div>
                        {/* Decorative flowers/dots based on level */}
                        {[...Array(submissionCount)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="absolute w-1.5 h-1.5 bg-slate-400 rounded-full"
                                style={{
                                    top: `${50 + 40 * Math.sin(i * 0.8)}%`,
                                    left: `${50 + 40 * Math.cos(i * 0.8)}%`,
                                }}
                            />
                        ))}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 text-center">
                        <span className="text-[10px] text-slate-300 font-serif uppercase tracking-[0.4em]">Level. {level + 1} Habit Tree</span>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="space-y-12">
                <div className="flex items-center gap-4">
                    <BookOpen className="w-5 h-5 text-slate-300" />
                    <h3 className="text-2xl font-serif text-[#3a3a3a] uppercase tracking-widest">제출한 글 갤러리</h3>
                    <div className="h-[1px] flex-1 bg-slate-100" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {detail.details.filter(d => d.isSubmitted).map((d, i) => (
                        <motion.div
                            key={d.fileName}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white double-border p-8 flex flex-col gap-6 group hover:gentle-shadow transition-all duration-500"
                        >
                            <header className="flex justify-between items-start border-b border-slate-50 pb-4">
                                <span className="text-[10px] text-slate-300 font-serif uppercase tracking-widest">
                                    Trial {i + 1}
                                </span>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <Calendar className="w-3 h-3" />
                                    <span className="text-[10px] uppercase font-serif tracking-tighter">
                                        {d.date.split('일')[0]}일
                                    </span>
                                </div>
                            </header>

                            <blockquote className="flex-1">
                                {d.contents.map((content, ci) => (
                                    <p key={ci} className="text-[#3a3a3a] font-serif leading-relaxed text-sm whitespace-pre-wrap">
                                        "{content}"
                                    </p>
                                ))}
                            </blockquote>

                            <footer className="pt-4 flex justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity">
                                <Star className="w-3 h-3 text-slate-400 fill-slate-100" />
                                <span className="text-[8px] uppercase font-serif tracking-widest text-slate-300">
                                    {d.fileName.split('_').pop()}
                                </span>
                            </footer>
                        </motion.div>
                    ))}

                    {/* Empty Slots */}
                    {detail.details.filter(d => !d.isSubmitted).map((d, i) => (
                        <div
                            key={`empty-${i}`}
                            className="border-2 border-dashed border-slate-100 p-8 flex flex-col items-center justify-center gap-4 opacity-40 grayscale"
                        >
                            <Calendar className="w-6 h-6 text-slate-200" />
                            <span className="text-[10px] text-slate-300 font-serif uppercase tracking-widest">기록 대기 중</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="pt-24 pb-12 text-center text-slate-300 font-serif text-xs uppercase tracking-widest">
                <p>&copy; 2026 긍정 언어 습관 챌린지. 당신의 성장은 이미 시작되었습니다.</p>
            </footer>
        </main>
    );
}
