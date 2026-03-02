"use client";

import { Countdown } from "@/components/Countdown";
import { MissionIcon } from "@/components/MissionIcon";
import { CalendarSection } from "@/components/CalendarSection";
import { RoadmapSection } from "@/components/RoadmapSection";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-paper-cream flex flex-col items-center pt-24 pb-12 overflow-x-hidden selection:bg-sage selection:text-white">
            <div className="w-full flex flex-col items-center space-y-24 fade-in-section">

                {/* Hero Section */}
                <section className="text-center space-y-8 py-12 px-4 max-w-4xl mx-auto">
                    <div className="w-16 h-[1px] bg-ink-light mx-auto" />
                    <h1 className="text-3xl md:text-5xl font-serif leading-tight text-ink-charcoal font-medium">
                        "오늘도 화내고 잠든 아이 얼굴을 보며<br className="hidden md:block" /> 미안해하셨나요?"
                    </h1>
                    <p className="text-lg md:text-xl font-serif leading-relaxed text-ink-gray mt-6">
                        지치고 미안했던 육아가 설레고 평온한 일상으로 바뀌는 마법 같은 순간들.<br />
                        수강생 85%가 경험한 '아이의 즉각적 협조', 이제 당신과 당신 아이의 차례입니다.
                    </p>
                    <div className="w-16 h-[1px] bg-ink-light mx-auto mt-8" />
                </section>

                {/* Pain Point Section */}
                <section className="space-y-8 px-6 max-w-3xl mx-auto fade-in-section w-full">
                    <h2 className="text-2xl md:text-3xl font-serif text-center text-ink-charcoal font-medium mb-12">
                        "매일 밤, 잠든 아이의 얼굴을 보며<br className="hidden md:block" /> 죄책감에 울고 있지는 않나요?"
                    </h2>

                    <ul className="space-y-6 text-[15px] md:text-base font-serif text-ink-gray leading-loose border-l border-ink-light/50 pl-6">
                        <li><span className="text-ink-charcoal font-medium">"또 욱하고 말았어..."</span> 참으려고 해도 터져 나오는 화. 늘 다짐하지만 마음처럼 되지 않는 하루.</li>
                        <li><span className="text-ink-charcoal font-medium">"나는 부족한 엄마인가 봐..."</span> 나만 빼고 다들 평온하게 육아하는 것 같은 자괴감.</li>
                        <li>등원, 식사, 목욕... 모든 일상이 기싸움이자 전쟁터가 되어버린 현실.</li>
                        <li>나 혼자 다 하는 것 같고 남편은 알아주지도 않는 고독한 '독박 육아'의 늪.</li>
                    </ul>
                    <p className="text-center font-serif text-ink-charcoal italic mt-12 text-lg">
                        "당신의 잘못이 아닙니다. 단지 사랑하는 마음을 어떻게 전해야 하는지<br className="hidden md:block" /> '언어의 도구'가 없었을 뿐입니다."
                    </p>
                </section>

                {/* Solution Section */}
                <section className="space-y-12 px-6 py-12 max-w-3xl mx-auto fade-in-section bg-ink-charcoal/5 rounded-3xl w-full">
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl md:text-3xl font-serif text-ink-charcoal font-medium">
                            단 하루 10분, 엄마의 '언어'가 바뀌면<br /> 아이의 '우주'가 바뀝니다.
                        </h2>
                        <p className="text-ink-gray font-serif">
                            긍정언어캠프는 단순한 육아 꿀팁이나 무조건 참으라는 인내심 테스트가 아닙니다.
                            우리는 엄마의 내면부터 단단하게 채우고, 가족 간의 연결을 회복하는 실질적인 방법을 배웁니다.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <span className="text-2xl">🧘‍♀️</span>
                            <div>
                                <h3 className="font-serif font-medium text-ink-charcoal text-lg">감정 분리 및 수용</h3>
                                <p className="text-ink-gray text-sm mt-1 leading-relaxed font-serif">내 안의 화와 불안을 마주하고, 통제할 수 없는 상황을 부드럽게 수용하는 멘탈 관리법</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">🤝</span>
                            <div>
                                <h3 className="font-serif font-medium text-ink-charcoal text-lg">존중과 협력의 대화법</h3>
                                <p className="text-ink-gray text-sm mt-1 leading-relaxed font-serif">"안 돼!", "빨리 해!" 대신 아이의 마음을 열고 스스로 행동하게 만드는 마법의 '부가형/긍정형 언어'</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">💬</span>
                            <div>
                                <h3 className="font-serif font-medium text-ink-charcoal text-lg">진정한 나 전달법</h3>
                                <p className="text-ink-gray text-sm mt-1 leading-relaxed font-serif">섭섭함을 분노로 표출하는 대신, 남편을 든든한 육아 동지로 만드는 현명한 소통법</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Transformation Section */}
                <section className="space-y-12 px-6 max-w-4xl mx-auto fade-in-section w-full">
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl md:text-3xl font-serif text-ink-charcoal font-medium">
                            "단 10분의 언어 연습이 가져온 우리 집의 기적"
                        </h2>
                        <p className="text-ink-gray font-serif text-sm">실제 4기 수강생들의 과제 데이터 기록</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 border border-ink-light/30 rounded-2xl bg-white/30 space-y-4">
                            <h3 className="font-serif font-medium text-ink-charcoal flex items-center gap-2">
                                <span>🌪</span> 감정의 소용돌이에서 🧘‍♀️ 심리적 평온으로
                            </h3>
                            <div className="text-[13px] font-serif space-y-2">
                                <p className="text-ink-gray line-through">"아이가 떼를 쓰면 화부터 났어요."</p>
                                <p className="text-ink-charcoal">"상황을 모두 통제할 수 없다는 걸 인정하니, 화내지 않고 차분히 해결하는 제 자신을 발견했어요!"</p>
                            </div>
                        </div>

                        <div className="p-6 border border-ink-light/30 rounded-2xl bg-white/30 space-y-4">
                            <h3 className="font-serif font-medium text-ink-charcoal flex items-center gap-2">
                                <span>🗣</span> '명령'에서 🤝 '자발적 협조'로
                            </h3>
                            <div className="text-[13px] font-serif space-y-2">
                                <p className="text-ink-gray line-through">"빨리 밥 안 먹으면 다 치운다!"</p>
                                <p className="text-ink-charcoal">"안 돼 대신 선택지를 줬더니, 기싸움하던 등원 시간과 식사 시간이 너무나 평화로워졌어요."</p>
                            </div>
                        </div>

                        <div className="p-6 border border-ink-light/30 rounded-2xl bg-white/30 space-y-4">
                            <h3 className="font-serif font-medium text-ink-charcoal flex items-center gap-2">
                                <span>🌧</span> 자책에서 ☀️ '건강한 자존감'으로
                            </h3>
                            <div className="text-[13px] font-serif space-y-2">
                                <p className="text-ink-gray line-through">"완벽하지 못한 모습에 우울했어요."</p>
                                <p className="text-ink-charcoal">"미안함 대신 애쓰는 나를 칭찬하게 되었습니다. 육아의 내일이 속상하지 않고 즐겁게 기대가 돼요!"</p>
                            </div>
                        </div>

                        <div className="p-6 border border-ink-light/30 rounded-2xl bg-white/30 space-y-4">
                            <h3 className="font-serif font-medium text-ink-charcoal flex items-center gap-2">
                                <span>🔗</span> 독박육아에서 💬 '지지하는 원팀'으로
                            </h3>
                            <div className="text-[13px] font-serif space-y-2">
                                <p className="text-ink-gray line-through">"나 혼자 다 하는 것 같아 한숨만 나왔어요."</p>
                                <p className="text-ink-charcoal">"솔직하게 도움을 요청하고 고마움을 표현했더니, 남편이 든든한 파트너가 되었어요."</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border border-ink-light/30 rounded-2xl bg-[#E8EAE6]/50 space-y-4 text-center">
                        <h3 className="font-serif font-medium text-ink-charcoal mb-4">
                            🌱 아이의 정서가 마법처럼 달라집니다.
                        </h3>
                        <p className="text-[14px] font-serif text-ink-charcoal italic">"아침에 긍정 확언을 외치니 아이가 싱글벙글 웃으며 함께 따라 외쳐요!"</p>
                        <p className="text-[14px] font-serif text-ink-charcoal italic">"하루를 긍정적으로 마무리하니, 징징대던 아이가 스르르 평안하게 잠듭니다."</p>
                    </div>
                </section>

                {/* Social Proof Section */}
                <section className="space-y-12 py-12 px-4 max-w-4xl mx-auto fade-in-section">
                    <div className="w-16 h-[1px] bg-ink-light mx-auto" />
                    <div className="space-y-8 flex flex-col items-center">
                        <blockquote className="text-lg md:text-xl font-serif text-center text-ink-charcoal italic">
                            "매일 밤 후회하며 잠들었는데...<br className="hidden md:block" /> 선택권을 줬더니 등원 시간이 너무 편해졌어요."
                        </blockquote>
                        <blockquote className="text-lg md:text-xl font-serif text-center text-ink-charcoal italic">
                            "내 욕구가 뭔지 발견하고 남편에게 도움을 요청했을 때,<br className="hidden md:block" /> 피로가 다 씻겨 나갔습니다."
                        </blockquote>
                        <blockquote className="text-lg md:text-xl font-serif text-center text-ink-charcoal italic">
                            "말 한마디 바꿨을 뿐인데,<br className="hidden md:block" /> 아이의 웃음이 많아지고 남편과의 대화가 부드러워졌어요."
                        </blockquote>
                    </div>
                </section>

                {/* Final CTA & Countdown Section */}
                <section className="pb-24 pt-12 text-center space-y-12 max-w-4xl mx-auto fade-in-section">
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-serif text-ink-charcoal font-medium">
                            당신의 가정을 천국으로 만드세요
                        </h2>
                        <p className="text-ink-gray font-serif text-lg">
                            이 모든 놀라운 변화는 당신의 '입술'에서 시작됩니다.<br />
                            단 하루 10분, 긍정언어캠프로 아이에게 행복을, 남편에게 여유를, 그리고 당신 자신에게 평안을 선물하세요.
                        </p>
                    </div>

                    <Countdown targetDate="2026-03-09T00:00:00" />

                    {/* Apply Button */}
                    <div className="pt-8">
                        <button
                            className="px-12 py-5 border border-ink-charcoal text-ink-charcoal font-serif uppercase tracking-[0.2em] text-[14px] font-medium transition-smooth hover:bg-[var(--color-bonfire-orange)] hover:text-white hover:border-[var(--color-bonfire-orange)] hover:px-14 shadow-sm"
                            onClick={() => alert("신청 링크는 곧 추가될 예정입니다.")}
                        >
                            천국으로 만들기
                        </button>
                    </div>
                </section>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-ink-light/50 to-transparent max-w-4xl mx-auto" />

                {/* Calendar Story Section */}
                <div className="w-full border-t border-b border-transparent fade-in-section">
                    <CalendarSection />
                </div>

                {/* Roadmap Vision Section */}
                <div className="w-full fade-in-section">
                    <RoadmapSection />
                </div>

                {/* Mission Icon Link */}
                <section className="py-8 text-center space-y-8 max-w-4xl mx-auto">
                    <MissionIcon />
                    <div className="text-[10px] font-serif uppercase tracking-[0.4em] text-ink-gray">
                        Positive Village Habit Challenge
                    </div>
                </section>

                {/* Footer Text */}
                <footer className="pt-12 pb-8 text-center">
                    <p className="text-[10px] font-serif uppercase tracking-[0.4em] text-ink-gray/40">
                        Positive Village Habit Challenge 2026
                    </p>
                </footer>
            </div>

            {/* Background Decorative Lines */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-5">
                <div className="absolute top-1/4 left-10 w-96 h-[1px] bg-ink-charcoal rotate-[30deg]" />
                <div className="absolute bottom-1/4 right-10 w-96 h-[1px] bg-ink-charcoal rotate-[-20deg]" />
            </div>
        </main>
    );
}
