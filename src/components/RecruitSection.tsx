"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function RecruitSection() {
    return (
        <section className="min-h-screen py-24 md:py-32 px-4 md:px-8 bg-ink-charcoal flex flex-col items-center justify-center relative overflow-hidden">
            {/* Subtle light ambient glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--color-bonfire-orange)]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-2xl w-full mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-24 md:space-y-32"
                >
                    {/* Header */}
                    <div className="text-center space-y-8">
                        <div className="flex justify-center mb-6">
                            <span className="w-[1px] h-16 bg-[var(--color-bonfire-orange)]/30" />
                        </div>
                        <span className="text-[12px] font-sans uppercase tracking-[0.5em] text-[var(--color-bonfire-orange)] font-medium">
                            Invitation
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-[56px] font-serif leading-[1.3] text-paper-cream tracking-tight break-keep pt-4">
                            &lt;4번의 긍정언어 챌린지, 그리고 1년 뒤.&gt;
                        </h1>
                    </div>

                    {/* Body Text */}
                    <div className="space-y-20 md:space-y-28 text-center text-paper-cream/80 font-sans font-light text-[15px] md:text-[17px] leading-[2.2] break-keep max-w-[800px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1 }}
                            className="space-y-10"
                        >
                            <p className="text-[16px] md:text-[18px]">저는 여러분들을 이렇게 생각해요.</p>
                            <p className="font-serif italic text-xl md:text-2xl text-[var(--color-bonfire-orange)] leading-[1.8]">
                                &lsquo;나의 육아 러닝메이트들&rsquo;<br />
                                &lsquo;나의 학습 친구들&rsquo;<br />
                                &lsquo;나와 생각의 결이 같은 사람들&rsquo;
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1 }}
                            className="space-y-6"
                        >
                            <p>
                                저도 다른 육아 인플루언서처럼<br className="hidden md:block" />
                                공구도 진행합니다만,
                            </p>
                            <p>
                                제품을 합리적인 가격에 소개해주는 것이<br className="hidden md:block" />
                                과연 내가 할 수 있는 최선일까? 라는 고민을<br className="hidden md:block" />
                                자주 했습니다.
                            </p>
                            <p>
                                그래서 인스타 5개월 만에<br className="hidden md:block" />
                                (지금 생각해보면 순수해서 용감했던&hellip;)<br />
                                &lt;긍정 언어 챌린지&gt;를 시작했고,
                            </p>
                            <p>
                                그 해 여름에는 &lt;집밥 영양학개론&gt;, &lt;편식코칭&gt;을<br className="hidden md:block" />
                                연이어 오픈했습니다.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1 }}
                            className="space-y-8 py-8"
                        >
                            <div className="w-12 h-[1px] bg-paper-cream/20 mx-auto" />
                            <p className="font-medium text-[16px] md:text-[18px] text-paper-cream">
                                누군가 저에게 인스타에서 뭘 해? 라고 물으면<br />
                                <span className="text-[var(--color-bonfire-orange)] font-bold">우리 엄마들이 안전하게 학습할 수 있는<br />
                                    아카데미를 운영해, 라고 대답하고 싶습니다.</span>
                            </p>
                            <div className="w-12 h-[1px] bg-paper-cream/20 mx-auto" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1 }}
                            className="space-y-6"
                        >
                            <p>
                                저의 육아 가치관을 좋아해주시고,<br className="hidden md:block" />
                                오히려 저보다 더 열심히 참여하셔서<br className="hidden md:block" />
                                삶을 바꾸신 여러분들에게 존경심을 느낍니다.<br />
                                진심으로 감사합니다.
                            </p>
                            <p>
                                여러분들에게 무엇을 드리면 좋을까,<br className="hidden md:block" />
                                내가 더 드릴 수 있는게 뭐가 있을까,<br className="hidden md:block" />
                                늘 고민이 많습니다.
                            </p>
                            <p className="font-medium text-paper-cream pt-4">
                                고민 끝에 거의 1년 만에 돌아온<br className="hidden md:block" />
                                &lt;긍정 언어 챌린지&gt;에 대한 안내를 드립니다.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1 }}
                            className="space-y-6"
                        >
                            <p>
                                우선 1년 동안 업데이트를 3번 정도 했습니다.
                            </p>
                            <p>
                                21일이라는 시간 동안<br className="hidden md:block" />
                                집중해야 할 목표가 무엇인지<br className="hidden md:block" />
                                설정하고, 수정하고, 설정하고, 수정하고&hellip;
                            </p>
                            <p>
                                이제는 더는 미룰 수 없어<br className="hidden md:block" />
                                부족한 점이 많겠지만<br className="hidden md:block" />
                                다시 문을 열어 보려 합니다.
                            </p>
                        </motion.div>

                        <div className="w-full max-w-[100px] h-[1px] bg-[var(--color-bonfire-orange)]/40 mx-auto my-16"></div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1 }}
                            className="space-y-6"
                        >
                            <p>
                                인스타에 공지하지 않고<br className="hidden md:block" />
                                여러분들에게 먼저 소식 전하는 이유는<br className="hidden md:block" />
                                선물을 드리려 하기 때문입니다.
                            </p>
                            <p className="text-[16px] md:text-[18px] font-medium text-paper-cream py-4 border-y border-[var(--color-bonfire-orange)]/30 inline-block px-8 bg-[var(--color-bonfire-orange)]/5">
                                여러분들께 챌린지 60% 할인가<br className="hidden md:block" />
                                얼리버드 혜택을 드리고자 합니다.
                            </p>
                            <p className="pt-4">
                                항상 저를 응원해주시고,<br className="hidden md:block" />
                                저와 함께 육아해주시는 모든 분들께<br className="hidden md:block" />
                                진심으로 감사합니다.
                            </p>
                        </motion.div>
                    </div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-col items-center gap-6 pt-12 md:pt-16 pb-12"
                    >
                        <Link
                            href="/recruit/details"
                            className="group relative inline-flex items-center justify-center px-10 py-5 w-full md:w-auto min-w-[280px] drawing-border bg-transparent text-paper-cream overflow-hidden transition-all hover:border-[var(--color-bonfire-orange)]"
                        >
                            <div className="absolute inset-0 bg-[var(--color-bonfire-orange)]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                            <span className="relative z-10 text-[13px] font-sans font-medium tracking-[0.2em] transition-colors hover:text-paper-white text-paper-cream">
                                📖 긍정 언어 챌린지란?
                            </span>
                        </Link>

                        <Link
                            href="#"
                            className="group relative inline-flex items-center justify-center px-10 py-5 w-full md:w-auto min-w-[280px] drawing-border border-[var(--color-bonfire-orange)]/50 bg-[var(--color-bonfire-orange)] text-paper-cream overflow-hidden transition-all shadow-md hover:shadow-[0_0_30px_rgba(242,92,5,0.3)] hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-[#E05200] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                            <span className="relative z-10 text-[13px] font-sans font-medium tracking-[0.2em] transition-colors flex items-center justify-center gap-2">
                                🔥 신청하기
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
