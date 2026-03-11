"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Quote } from "lucide-react";

export function RecruitDetailsSection() {
    return (
        <article className="min-h-screen bg-ink-charcoal text-paper-cream selection:bg-sage selection:text-white pb-24 md:pb-32 overflow-hidden">
            {/* 1. Hero Section */}
            <section className="relative pt-40 pb-32 px-4 md:px-8 flex flex-col items-center justify-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-b from-[var(--color-bonfire-orange)]/10 to-transparent pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-[1000px] mx-auto space-y-12 relative z-10"
                >
                    <div className="flex justify-center mb-8">
                        <span className="w-[1px] h-16 bg-[var(--color-bonfire-orange)]/40" />
                    </div>
                    <span className="text-[12px] font-sans uppercase tracking-[0.5em] text-[var(--color-bonfire-orange)] font-medium">
                        The Miracle of 10 Minutes
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif leading-[1.3] tracking-tight break-keep text-paper-cream pt-4">
                        "오늘도 화내고 잠든 아이 얼굴을 보며<br className="hidden md:block" /> 미안해하셨나요?"
                    </h1>
                    <p className="text-[16px] md:text-[18px] font-sans font-light text-paper-cream/70 leading-[1.8] break-keep pt-4 max-w-2xl mx-auto">
                        지치고 미안했던 육아가 설레고 평온한 일상으로 바뀌는 마법 같은 순간들.<br />
                        수강생 85%가 경험한 '아이의 즉각적 협조',<br className="hidden md:block" />
                        이제 당신과 당신 아이의 차례입니다.
                    </p>
                </motion.div>
            </section>

            {/* 2. Pain Point */}
            <section className="py-24 md:py-40 px-4 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-[var(--color-paper-cream)]/5 blur-[120px] w-[500px] h-[500px] bg-[var(--color-paper-cream)]/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="max-w-4xl mx-auto space-y-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="text-center space-y-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif break-keep text-[var(--color-bonfire-orange)] leading-[1.4]">
                            "매일 밤, 잠든 아이의 얼굴을 보며<br className="hidden md:block" /> 죄책감에 울고 있지는 않나요?"
                        </h2>
                    </motion.div>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="space-y-10 md:space-y-12 font-sans font-light text-[16px] md:text-[18px] text-paper-cream/80 leading-[2.0] break-keep bg-paper-cream/5 p-10 md:p-16 border border-paper-cream/10"
                    >
                        <li className="flex gap-6 items-start">
                            <span className="text-[var(--color-bonfire-orange)] select-none font-serif text-2xl mt-1">"</span>
                            <p>또 욱하고 말았어... 참으려고 해도 터져 나오는 화. 늘 다짐하지만 마음처럼 되지 않는 하루.</p>
                        </li>
                        <li className="flex gap-6 items-start">
                            <span className="text-[var(--color-bonfire-orange)] select-none font-serif text-2xl mt-1">"</span>
                            <p>나는 부족한 엄마인가 봐... 나만 빼고 다들 평온하게 육아하는 것 같은 자괴감.</p>
                        </li>
                        <li className="flex gap-6 items-start">
                            <span className="text-[var(--color-bonfire-orange)] select-none font-serif text-2xl mt-1">"</span>
                            <p>등원, 식사, 목욕... 모든 일상이 기싸움이자 전쟁터가 되어버린 현실.</p>
                        </li>
                        <li className="flex gap-6 items-start">
                            <span className="text-[var(--color-bonfire-orange)] select-none font-serif text-2xl mt-1">"</span>
                            <p>나 혼자 다 하는 것 같고 남편은 알아주지도 않는 고독한 '독박 육아'의 늪.</p>
                        </li>
                    </motion.ul>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-center pt-16"
                    >
                        <div className="w-[1px] h-16 bg-paper-cream/20 mx-auto mb-12" />
                        <p className="font-serif italic text-xl md:text-3xl text-paper-cream leading-[1.6]">
                            당신의 잘못이 아닙니다.<br />
                            단지 사랑하는 마음을 어떻게 전해야 하는지<br className="hidden md:block" />
                            <span className="text-[var(--color-bonfire-orange)] not-italic font-medium">'언어의 도구'</span>가 없었을 뿐입니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. Solution */}
            <section className="py-24 md:py-40 px-4 relative bg-paper-cream/5 text-paper-cream border-t border-paper-cream/10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[600px] bg-[var(--color-bonfire-orange)]/10 blur-[150px] rounded-full pointer-events-none" />
                <div className="max-w-[1000px] mx-auto space-y-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="text-center space-y-10"
                    >
                        <span className="text-[12px] font-sans uppercase tracking-[0.5em] text-[var(--color-bonfire-orange)] font-medium">
                            The Solution
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-[56px] font-serif break-keep leading-[1.3] text-paper-cream">
                            단 하루 10분, 엄마의 '언어'가 바뀌면<br className="hidden md:block" />아이의 '우주'가 바뀝니다.
                        </h2>
                        <p className="font-sans font-light text-paper-cream/70 leading-[2.2] text-[16px] md:text-[18px] pt-8 break-keep max-w-3xl mx-auto">
                            긍정언어캠프는 단순한 육아 꿀팁이나 무조건 참으라는 인내심 테스트가 아닙니다.<br className="hidden md:block" />
                            우리는 엄마의 내면부터 단단하게 채우고, 가족 간의 연결을 회복하는 실질적인 방법을 배웁니다.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="grid md:grid-cols-3 gap-8 lg:gap-12"
                    >
                        <div className="bg-ink-charcoal/80 border border-paper-cream/10 p-10 md:p-14 transition-all duration-500 hover:border-[var(--color-bonfire-orange)]/50 hover:-translate-y-2 drawing-border">
                            <span className="font-sans font-medium text-[var(--color-bonfire-orange)] tracking-widest text-[12px] opacity-70 mb-4 block">STEP 1</span>
                            <h3 className="font-serif text-2xl md:text-3xl text-paper-cream mb-6 leading-[1.4]">감정 분리 및 수용</h3>
                            <p className="font-sans font-light text-paper-cream/60 leading-[1.8] text-[15px] break-keep">
                                내 안의 화와 불안을 마주하고, 통제할 수 없는 상황을 부드럽게 수용하는 멘탈 관리법
                            </p>
                        </div>
                        <div className="bg-ink-charcoal/80 border border-paper-cream/10 p-10 md:p-14 transition-all duration-500 hover:border-[var(--color-bonfire-orange)]/50 hover:-translate-y-2 drawing-border">
                            <span className="font-sans font-medium text-[var(--color-bonfire-orange)] tracking-widest text-[12px] opacity-70 mb-4 block">STEP 2</span>
                            <h3 className="font-serif text-2xl md:text-3xl text-paper-cream mb-6 leading-[1.4]">존중과 협력의 대화법</h3>
                            <p className="font-sans font-light text-paper-cream/60 leading-[1.8] text-[15px] break-keep">
                                "안 돼!", "빨리 해!" 대신 아이의 마음을 열고 스스로 행동하게 만드는 마법의 '부가형/긍정형 언어'
                            </p>
                        </div>
                        <div className="bg-ink-charcoal/80 border border-paper-cream/10 p-10 md:p-14 transition-all duration-500 hover:border-[var(--color-bonfire-orange)]/50 hover:-translate-y-2 drawing-border">
                            <span className="font-sans font-medium text-[var(--color-bonfire-orange)] tracking-widest text-[12px] opacity-70 mb-4 block">STEP 3</span>
                            <h3 className="font-serif text-2xl md:text-3xl text-paper-cream mb-6 leading-[1.4]">진정한 나 전달법</h3>
                            <p className="font-sans font-light text-paper-cream/60 leading-[1.8] text-[15px] break-keep">
                                섭섭함을 분노로 표출하는 대신, 남편을 든든한 육아 동지로 만드는 현명한 소통법
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Transformation */}
            <section className="py-24 md:py-40 px-4 relative border-t border-paper-cream/10">
                <div className="max-w-[1000px] mx-auto space-y-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="text-center space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-[56px] font-serif text-paper-cream break-keep leading-[1.3]">
                            단 10분의 언어 연습이 가져온<br />우리 집의 기적
                        </h2>
                        <div className="flex justify-center items-center gap-6 pt-4">
                            <div className="w-12 h-[1px] bg-paper-cream/20" />
                            <p className="text-[12px] font-sans font-medium uppercase text-[var(--color-bonfire-orange)] tracking-widest">
                                실제 4기 수강생들의 과제 데이터 기록
                            </p>
                            <div className="w-12 h-[1px] bg-paper-cream/20" />
                        </div>
                    </motion.div>

                    <div className="space-y-20">
                        {[
                            { title: "🌪 감정의 소용돌이에서 🧘‍♀️ 심리적 평온으로", before: "아이가 떼를 쓰면 당황스럽고 화부터 났어요.", after: "상황을 모두 통제할 수 없다는 걸 인정하니, 화내지 않고 차분히 해결하는 제 자신을 발견했어요!" },
                            { title: "🗣 '지시/명령'에서 🤝 '존중과 자발적 협조'로", before: "빨리 밥 안 먹으면 다 치운다!", after: "안 돼 대신 선택지를 줬더니, 기싸움하던 등원 시간과 식사 시간이 너무나 평화로워졌어요." },
                            { title: "🌧 자기 자책에서 ☀️ '건강한 자존감'으로", before: "완벽하지 못한 내 모습에 매일 우울하고 죄책감이 들었어요.", after: "미안함 대신 애쓰는 나 자신을 칭찬하게 되었습니다. 육아의 내일이 속상하지 않고 즐겁게 기대가 돼요!" },
                            { title: "🔗 고독한 독박육아에서 💬 '서로 지지하는 원팀'으로", before: "나 혼자 다 하는 것 같아 억울하고 남편에게 툭툭 한숨만 나왔어요.", after: "솔직하게 도움을 요청하고 고마움을 표현했더니, 눈치만 보던 남편이 든든한 파트너가 되었어요." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.15 }}
                                className="bg-[var(--color-ink-charcoal)] border border-paper-cream/10 p-8 md:p-14 transition-all hover:border-[var(--color-bonfire-orange)]/30 drawing-border flex flex-col gap-8"
                            >
                                <h4 className="text-xl md:text-3xl font-serif font-medium text-paper-cream border-b border-paper-cream/10 pb-6 mb-2">{item.title}</h4>
                                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-4">
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-paper-cream/40">Before</span>
                                        <p className="text-[15px] md:text-[16px] font-sans font-light text-paper-cream/60 break-keep leading-[2.0] bg-paper-cream/5 p-6 rounded-sm border border-paper-cream/5">"{item.before}"</p>
                                    </div>
                                    <div className="space-y-4">
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-bonfire-orange)]">After</span>
                                        <p className="text-[15px] md:text-[16px] font-sans font-medium text-paper-cream break-keep leading-[2.0] bg-[var(--color-bonfire-orange)]/10 p-6 rounded-sm border border-[var(--color-bonfire-orange)]/20">"{item.after}"</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1 }}
                            className="bg-[var(--color-bonfire-orange)] text-paper-white p-8 md:p-12 text-center drawing-border space-y-8 border-none"
                        >
                            <h4 className="text-xl md:text-3xl font-serif">🌱 아이의 정서가 마법처럼 달라집니다.</h4>
                            <div className="space-y-6 pt-4 font-sans font-light text-[15px] md:text-[17px] leading-[2.0] break-keep">
                                <p>"아침에 긍정 확언을 외치니 아이가 싱글벙글 웃으며 함께 따라 외쳐요!"</p>
                                <p>"잠자리에서 오늘 하루를 긍정적으로 마무리하니, 자기 싫어 징징대던 아이가 스르르 평안하게 잠듭니다."</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. Social Proof */}
            <section className="py-24 px-4 bg-paper-cream/5 relative border-y border-paper-cream/10">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <Quote className="w-12 h-12 text-[var(--color-bonfire-orange)]/30 mb-12" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="space-y-12 md:space-y-16"
                    >
                        <blockquote className="text-center">
                            <p className="font-serif italic text-[18px] md:text-[22px] text-paper-cream/90 leading-[1.6] break-keep">
                                "매일 밤 후회하며 잠들었는데... 선택권을 줬더니 등원 시간이 너무 편해졌어요."
                            </p>
                        </blockquote>
                        <blockquote className="text-center">
                            <p className="font-serif italic text-[18px] md:text-[22px] text-paper-cream/90 leading-[1.6] break-keep">
                                "내 욕구가 뭔지 발견하고 남편에게 도움을 요청했을 때, 피로가 다 씻겨 나갔습니다."
                            </p>
                        </blockquote>
                        <blockquote className="text-center">
                            <p className="font-serif italic text-[18px] md:text-[22px] text-paper-cream/90 leading-[1.6] break-keep">
                                "말 한마디 바꿨을 뿐인데, 아이의 웃음이 많아지고 남편과의 대화가 부드러워졌어요."
                            </p>
                        </blockquote>
                    </motion.div>
                </div>
            </section>

            {/* 6. Final CTA */}
            <section className="py-40 px-4 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-[var(--color-bonfire-orange)]/10 blur-[150px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2 }}
                    className="max-w-[1000px] mx-auto space-y-16 relative z-10"
                >
                    <div className="space-y-10">
                        <div className="w-[1px] h-16 bg-[var(--color-bonfire-orange)]/40 mx-auto" />
                        <h2 className="text-4xl md:text-6xl lg:text-[72px] font-serif text-paper-cream break-keep leading-[1.2] tracking-tight">
                            이 모든 놀라운 변화는<br />
                            당신의 <span className="italic text-[var(--color-bonfire-orange)]">'입술'</span>에서<br className="md:hidden" /> 시작됩니다.
                        </h2>
                        <p className="text-[16px] md:text-[20px] font-sans font-light text-paper-cream/70 leading-[2.0] break-keep max-w-2xl mx-auto pt-4">
                            단 하루 10분, 긍정언어캠프로 아이에게 행복을,<br className="hidden md:block" />
                            남편에게 여유를, 그리고 당신 자신에게 평안을 선물하세요.
                        </p>
                    </div>

                    <div className="pt-12">
                        <Link
                            href="#"
                            className="group relative inline-flex items-center justify-center px-14 py-6 md:px-16 md:py-8 bg-[var(--color-bonfire-orange)] text-paper-white overflow-hidden transition-all shadow-xl hover:shadow-[0_0_50px_rgba(242,92,5,0.4)] hover:-translate-y-2 drawing-border border-[var(--color-bonfire-orange)]/50"
                        >
                            <div className="absolute inset-0 bg-[#E05200] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                            <span className="relative z-10 text-[14px] md:text-[16px] font-sans font-medium tracking-[0.2em] transition-colors flex items-center justify-center gap-3">
                                ✨ 지금 긍정언어캠프 합류하고 기적 경험하기
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </section>
        </article>
    );
}
