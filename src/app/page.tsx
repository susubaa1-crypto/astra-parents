"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] flex flex-col items-center p-8 md:p-16 lg:p-24 overflow-x-hidden pt-32">
      <div className="max-w-3xl w-full flex flex-col space-y-32 py-16">

        {/* Hero Section */}
        <section className="text-center space-y-8 fade-in-section">
          <div className="w-16 h-[1px] bg-slate-200 mx-auto" />
          <h1 className="text-3xl md:text-5xl font-serif leading-tight text-[#3a3a3a]">
            지치고 미안했던 육아가<br />
            설레고 평온한 일상으로 바뀌는<br />
            <span className="italic">마법 같은 순간들</span>
          </h1>
          <p className="text-sm md:text-base font-serif text-slate-500 tracking-wide max-w-lg mx-auto">
            수강생 85%가 경험한 '아이의 즉각적 협조'.<br />
            이제 당신과 당신 아이의 차례입니다.
          </p>
          <div className="w-16 h-[1px] bg-slate-200 mx-auto" />
        </section>

        {/* Section 2: Pain Point */}
        <section className="space-y-16 py-12">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif text-[#3a3a3a] text-center">
              매일 밤, 잠든 아이의 얼굴을 보며<br />
              죄책감에 울고 있지는 않나요?
            </h2>
            <div className="h-[1px] w-full bg-slate-100 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f8f7f4] px-4 font-serif italic text-xs text-slate-400">
                The Pain Points
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { percentage: "42%", label: "감정적 폭발", desc: "또 욱하고 말았어... 참으려고 해도 터지는 화" },
              { percentage: "18%", label: "깊은 죄책감", desc: "나는 부족한 엄마인가, 라는 자괴감" },
              { percentage: "13%", label: "소통의 단절", desc: "등원, 식사, 목욕... 모든 순간이 기싸움" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 border-l border-slate-200 pl-6 py-2">
                <div className="text-4xl font-serif text-slate-300 italic">{item.percentage}</div>
                <h3 className="text-sm font-bold text-[#3a3a3a]">{item.label}</h3>
                <p className="text-xs text-slate-500 leading-loose">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center font-serif text-[#3a3a3a] pt-8 max-w-xl mx-auto italic border-b border-double border-slate-200 pb-4">
            "당신의 잘못이 아닙니다.<br />
            단지 '언어'라는 도구가 없었을 뿐입니다."
          </p>
        </section>

        {/* Section 3: Data & Proofs */}
        <section className="space-y-16 py-12 bg-white/30 p-12 border border-double border-slate-200">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#3a3a3a]">
              단 153명의 기록이 증명합니다.<br />
              <span className="underline decoration-slate-200 underline-offset-8">긍정언어는 과학입니다.</span>
            </h2>
          </div>

          <div className="space-y-12">
            {[
              { rate: "85%", title: "아이의 즉각적 협조율", color: "bg-slate-800" },
              { rate: "31%", title: "엄마의 정서적 평온함", color: "bg-slate-400" },
              { rate: "24%", title: "부부 파트너십 강화", color: "bg-slate-200" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-serif uppercase tracking-widest text-slate-500">{stat.title}</span>
                  <span className="text-2xl font-serif text-[#3a3a3a] italic">{stat.rate}</span>
                </div>
                <div className="h-[2px] w-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full ${stat.color} transition-all duration-1000 ease-out`}
                    style={{ width: stat.rate }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Dream Results */}
        <section className="space-y-16 py-12">
          <h2 className="text-2xl md:text-3xl font-serif text-[#3a3a3a] text-center italic">
            비로소 만나게 될<br />당신의 새로운 일상
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h3 className="text-lg font-serif border-b border-slate-800 pb-2">아이의 웃음 섞인 협조</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                "안 돼" 대신 "대안"과 "기준"을 제시하자, 아이가 스스로 생각하고 즐겁게 움직이기 시작합니다. 기싸움 없는 등원길, 즐거운 식사 시간이 현실이 됩니다.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-serif border-b border-slate-800 pb-2">평온해진 '나'의 내면</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                상황을 객관적으로 바라보는 힘이 생겨 화내는 횟수가 줄고, 육아에 대한 자신감을 회복합니다. 밤마다 눈물 짓던 시간은 사라집니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Social Proof */}
        <section className="space-y-12 py-12 relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 opacity-5 select-none pointer-events-none">
            <span className="text-[120px] font-serif italic text-[#3a3a3a]">Voices</span>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {[
              { name: "이수영 님", text: "매일 밤 후회하며 잠들었는데... 선택권을 줬더니 등원 시간이 너무 편해졌어요. 제 마음이 편안해지니 아이에게도 미운 말을 하지 않게 됩니다." },
              { name: "박려원 님", text: "지구가 아야해, 라고 기준 있는 언어를 쓰니 아이가 바로 손 닦으러 나왔어요! 소통이 된다는 게 이런 거네요. ☺️" },
              { name: "박소빈 님", text: "내 욕구가 뭔지 발견하고 남편에게 도움을 요청했을 때, 피로가 다 씻겨 나갔습니다. 이제 긍정적인 변화에 확신이 생겨요!" },
            ].map((review, idx) => (
              <div key={idx} className="border border-slate-100 p-8 space-y-4 relative">
                <span className="absolute top-4 left-4 text-4xl text-slate-100 font-serif leading-none">“</span>
                <p className="text-sm text-slate-700 leading-relaxed italic relative z-[1]">
                  {review.text}
                </p>
                <div className="text-[10px] font-serif uppercase tracking-[0.2em] text-slate-400 text-right">
                  — {review.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Final CTA */}
        <section className="text-center space-y-12 py-24">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif text-[#3a3a3a]">
              이 모든 변화는 당신의<br />
              '언어'로부터 시작됩니다.
            </h2>
            <p className="text-xs font-serif uppercase tracking-[0.3em] text-slate-400">
              3월 9일, 21일간의 여정을 시작하세요
            </p>
          </div>

          <button
            className="px-16 py-5 border border-[#3a3a3a] text-[#3a3a3a] font-serif uppercase tracking-[0.3em] text-sm transform transition-all duration-500 hover:bg-[#3a3a3a] hover:text-white hover:scale-105"
            onClick={() => alert("신청 링크는 곧 추가될 예정입니다.")}
          >
            지금 신청하기
          </button>
        </section>

        {/* Footer */}
        <footer className="pt-24 pb-8 text-center">
          <p className="text-[10px] font-serif uppercase tracking-[0.4em] text-slate-300">
            Positive Language Habit Challenge 2026
          </p>
        </footer>
      </div>

      {/* Decorative Lines */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-5">
        <div className="absolute top-1/3 right-10 w-96 h-[1px] bg-[#3a3a3a] rotate-[15deg]" />
        <div className="absolute bottom-1/3 left-10 w-96 h-[1px] bg-[#3a3a3a] rotate-[-15deg]" />
      </div>
    </main>
  );
}
