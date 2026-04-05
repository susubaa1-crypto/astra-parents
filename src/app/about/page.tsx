"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-astra-navy flex flex-col items-center pt-48 md:pt-64 pb-24 overflow-x-hidden selection:bg-astra-gold selection:text-astra-navy relative">
        {/* Subtle Starlight Background */}
        <div className="absolute inset-0 bg-[url('/astra/north_star_banner.png')] opacity-10 bg-cover bg-center pointer-events-none mix-blend-screen" />

        <div className="w-full flex flex-col items-center space-y-24 fade-in-section relative z-10 px-6">
            
            {/* Header */}
            <section className="text-center space-y-6 max-w-4xl mx-auto">
                <span className="text-astra-gold text-4xl opacity-80">✧</span>
                <h1 className="text-3xl md:text-5xl font-serif leading-tight text-astra-starlight font-light tracking-widest uppercase">
                    Our Journey
                </h1>
                <p className="text-lg md:text-xl font-serif leading-relaxed text-ink-light mt-6 font-light">
                    엄마가 없어도 아이가 길을 잃지 않도록,<br />
                    우리집만의 '북극성'을 만들어가는 3주간의 여정
                </p>
            </section>

            {/* 3-Week Curriculum */}
            <section className="w-full max-w-3xl space-y-16">
                
                {/* Week 1 */}
                <div className="flex flex-col md:flex-row gap-8 items-start group">
                    <div className="md:w-1/3 flex flex-col items-center text-center space-y-4">
                        <div className="w-24 h-24 rounded-full border border-astra-gold/30 flex items-center justify-center bg-astra-blue/50 text-astra-starlight text-3xl shadow-[0_0_15px_rgba(217,187,123,0.1)] transition-transform group-hover:scale-105">
                            🪞
                        </div>
                        <div>
                            <span className="text-astra-gold text-sm tracking-widest font-bold font-sans uppercase">Week 1</span>
                            <h3 className="text-xl text-astra-starlight font-serif mt-1">나를 마주하다</h3>
                        </div>
                    </div>
                    <div className="md:w-2/3 bg-astra-blue/20 backdrop-blur-sm border border-white/5 p-8 rounded-2xl transition hover:bg-astra-blue/40">
                        <h4 className="text-astra-starlight font-semibold text-lg mb-2">결핍 해소와 정확</h4>
                        <p className="text-ink-light font-light leading-relaxed mb-4">
                            나의 어린 시절 결핍과 감정을 마주합니다. 무의식에 쌓여있는 감정을 나열하고 자유로워짐으로써, 아이를 온전히 있는 그대로 바라볼 수 있는 준비를 합니다.
                        </p>
                        <ul className="text-sm text-ink-gray space-y-2 font-serif list-disc list-inside">
                            <li>어린 시절 감정 데이터 돌아보기</li>
                            <li>사랑의 초감정 탐색</li>
                            <li>결핍 맺음짓기 편지</li>
                        </ul>
                    </div>
                </div>

                {/* Week 2 */}
                <div className="flex flex-col md:flex-row gap-8 items-start group">
                    <div className="md:w-1/3 flex flex-col items-center text-center space-y-4">
                        <div className="w-24 h-24 rounded-full border border-astra-gold/30 flex items-center justify-center bg-astra-blue/50 text-astra-starlight text-3xl shadow-[0_0_15px_rgba(217,187,123,0.1)] transition-transform group-hover:scale-105">
                            👁️
                        </div>
                        <div>
                            <span className="text-astra-gold text-sm tracking-widest font-bold font-sans uppercase">Week 2</span>
                            <h3 className="text-xl text-astra-starlight font-serif mt-1">아이를 바라보다</h3>
                        </div>
                    </div>
                    <div className="md:w-2/3 bg-astra-blue/20 backdrop-blur-sm border border-white/5 p-8 rounded-2xl transition hover:bg-astra-blue/40">
                        <h4 className="text-astra-starlight font-semibold text-lg mb-2">긍정언어와 관찰</h4>
                        <p className="text-ink-light font-light leading-relaxed mb-4">
                            내 마음대로 생각하고 해석하는 것을 멈추고 '있는 그대로 관찰'하는 연습을 합니다. 부정어를 긍정어로 전환하며 일상을 바꿉니다.
                        </p>
                        <ul className="text-sm text-ink-gray space-y-2 font-serif list-disc list-inside">
                            <li>아이의 행동을 해석 없이 묘사하는 모닝 관찰 일기</li>
                            <li>우리가 무심코 쓰는 부정어 4유형 수집 및 전환</li>
                            <li>판단 대신 공감하는 소통 훈련</li>
                        </ul>
                    </div>
                </div>

                {/* Week 3 */}
                <div className="flex flex-col md:flex-row gap-8 items-start group">
                    <div className="md:w-1/3 flex flex-col items-center text-center space-y-4">
                        <div className="w-24 h-24 rounded-full border border-astra-gold/30 flex items-center justify-center bg-astra-blue/50 text-astra-starlight text-3xl shadow-[0_0_15px_rgba(217,187,123,0.1)] transition-transform group-hover:scale-105">
                            ⭐
                        </div>
                        <div>
                            <span className="text-astra-gold text-sm tracking-widest font-bold font-sans uppercase">Week 3</span>
                            <h3 className="text-xl text-astra-starlight font-serif mt-1">별을 세우다</h3>
                        </div>
                    </div>
                    <div className="md:w-2/3 bg-astra-blue/20 backdrop-blur-sm border border-white/5 p-8 rounded-2xl transition hover:bg-astra-blue/40">
                        <h4 className="text-astra-starlight font-semibold text-lg mb-2">우리집 북극성과 가족 문화</h4>
                        <p className="text-ink-light font-light leading-relaxed mb-4">
                            아이가 자라서 엄마가 없어도 길을 잃지 않도록 든든한 등대(Body, Mind, Soul)를 세워줍니다. 우리 가족만의 확실한 기준과 문화를 설계합니다.
                        </p>
                        <ul className="text-sm text-ink-gray space-y-2 font-serif list-disc list-inside">
                            <li>BMS 자기를 먼저 점검하기</li>
                            <li>가족과 함께 '우리집 가훈' 도출</li>
                            <li>감정이 축적되는 우리집만의 5분 몰입 문화 설계</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Footer Content */}
            <section className="pt-24 pb-12 text-center space-y-6">
                <p className="text-[14px] font-sans text-ink-light/70 tracking-[0.2em] uppercase">
                    ASTRA PARENTS
                </p>
                <div className="w-16 h-[1px] bg-astra-gold/30 mx-auto" />
            </section>

        </div>
    </main>
  );
}
