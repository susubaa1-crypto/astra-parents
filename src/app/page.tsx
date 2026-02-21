"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { magazines } from "@/data/magazines";
import { MagazineCard } from "@/components/MagazineCard";

export default function Home() {
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } },
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-8 md:p-16 lg:p-24 overflow-x-hidden pt-36 pb-32 bg-paper-cream">
      <div className="max-w-[1000px] w-full flex flex-col space-y-40 py-16">

        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center space-y-12"
        >
          <motion.div variants={fadeInUp} className="w-24 h-[1px] bg-ink-charcoal/20 mx-auto" />
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-[72px] font-serif leading-[1.3] text-ink-charcoal tracking-tight">
            지치고 미안했던 육아가<br />
            설레고 평온한 일상으로 바뀌는<br />
            <span className="italic block mt-6 font-light text-ink-gray">마법 같은 순간들</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[14px] md:text-[16px] font-sans font-light text-ink-gray tracking-wide max-w-lg mx-auto leading-relaxed pt-6">
            수강생 85%가 경험한 '아이의 즉각적 협조'.<br />
            이제 당신과 당신 아이의 차례입니다.
          </motion.p>
          <motion.div variants={fadeInUp} className="w-24 h-[1px] bg-ink-charcoal/20 mx-auto" />
        </motion.section>

        {/* Section 2: Pain Point */}
        <section className="space-y-28 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-ink-charcoal text-center leading-[1.4] tracking-tight">
              매일 밤, 잠든 아이의 얼굴을 보며<br />
              <span className="italic text-ink-gray">죄책감에 울고 있지는 않나요?</span>
            </h2>
            <div className="h-[1px] w-full bg-ink-light relative mt-20 mb-28">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper-cream px-8 font-serif italic text-[12px] text-ink-gray uppercase tracking-[0.3em]">
                The Pain Points
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 relative">
            {/* Background Grid Lines */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-[1px] bg-ink-light" />
            <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-[1px] bg-ink-light" />

            {[
              { percentage: "42%", label: "감정적 폭발", desc: "또 욱하고 말았어... 참으려고 해도 터지는 화" },
              { percentage: "18%", label: "깊은 죄책감", desc: "나는 부족한 엄마인가, 라는 자괴감" },
              { percentage: "13%", label: "소통의 단절", desc: "등원, 식사, 목욕... 모든 순간이 기싸움" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6 flex flex-col items-center text-center group"
              >
                <div className="text-[72px] font-serif text-ink-charcoal tracking-tighter transition-smooth group-hover:-translate-y-2 group-hover:text-sage">{item.percentage}</div>
                <h3 className="text-[14px] font-sans font-semibold text-ink-charcoal uppercase tracking-[0.2em]">{item.label}</h3>
                <p className="text-[14px] font-sans font-light text-ink-gray leading-[1.8] max-w-[200px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-center font-serif text-ink-charcoal pt-24 max-w-2xl mx-auto italic hairline-bottom pb-12 relative"
          >
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl text-ink-charcoal/10 font-serif">“</span>
            <span className="text-2xl md:text-3xl leading-[1.6] relative z-10 text-ink-charcoal font-light">
              당신의 잘못이 아닙니다.<br />
              단지 '언어'라는 도구가 없었을 뿐입니다.
            </span>
          </motion.div>
        </section>

        {/* Section 3: Data & Proofs */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-20 py-20 bg-paper-white p-10 md:p-24 hairline-border no-shadow"
        >
          <div className="text-center space-y-8 relative">
            <h2 className="text-3xl md:text-[44px] font-serif text-ink-charcoal leading-[1.4] tracking-tight">
              단 153명의 기록이 증명합니다.<br />
              <span className="italic relative inline-block mt-4">
                긍정언어는 과학입니다.
                <span className="absolute bottom-1 left-0 w-full h-[1px] bg-ink-charcoal/30" />
              </span>
            </h2>
          </div>

          <div className="space-y-16 max-w-3xl mx-auto pt-8">
            {[
              { rate: "85%", title: "아이의 즉각적 협조율", color: "bg-ink-charcoal" },
              { rate: "31%", title: "엄마의 정서적 평온함", color: "bg-sage" },
              { rate: "24%", title: "부부 파트너십 강화", color: "bg-rose" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-6 group">
                <div className="flex justify-between items-end">
                  <span className="text-[12px] font-sans uppercase tracking-[0.25em] text-ink-gray transition-colors duration-500 group-hover:text-ink-charcoal">{stat.title}</span>
                  <span className="text-[40px] font-serif text-ink-charcoal italic tracking-tighter leading-none">{stat.rate}</span>
                </div>
                <div className="h-[1px] w-full bg-ink-light overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: stat.rate }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full ${stat.color} transition-smooth`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: Dream Results */}
        <section className="space-y-24 py-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-serif text-ink-charcoal text-center italic tracking-tight leading-[1.4]"
          >
            비로소 만나게 될<br />당신의 새로운 일상
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-4xl mx-auto pt-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8 group"
            >
              <h3 className="text-2xl md:text-3xl font-serif border-b border-ink-light pb-6 inline-block transition-all duration-500 group-hover:border-ink-charcoal group-hover:pl-4 text-ink-charcoal">아이의 웃음 섞인 협조</h3>
              <p className="text-[15px] font-sans font-light text-ink-gray leading-[1.8]">
                "안 돼" 대신 "대안"과 "기준"을 제시하자, 아이가 스스로 생각하고 즐겁게 움직이기 시작합니다. 기싸움 없는 등원길, 즐거운 식사 시간이 현실이 됩니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="space-y-8 group"
            >
              <h3 className="text-2xl md:text-3xl font-serif border-b border-ink-light pb-6 inline-block transition-all duration-500 group-hover:border-ink-charcoal group-hover:pl-4 text-ink-charcoal">평온해진 '나'의 내면</h3>
              <p className="text-[15px] font-sans font-light text-ink-gray leading-[1.8]">
                상황을 객관적으로 바라보는 힘이 생겨 화내는 횟수가 줄고, 육아에 대한 자신감을 회복합니다. 밤마다 눈물 짓던 시간은 사라집니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Social Proof */}
        <section className="space-y-28 py-20 relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 opacity-5 select-none pointer-events-none">
            <span className="text-[180px] md:text-[280px] font-serif italic text-ink-charcoal tracking-tighter">Voices</span>
          </div>

          <div className="grid grid-cols-1 gap-20 max-w-3xl mx-auto">
            {[
              { name: "이수영 님", text: "매일 밤 후회하며 잠들었는데... 선택권을 줬더니 등원 시간이 너무 편해졌어요. 제 마음이 편안해지니 아이에게도 미운 말을 하지 않게 됩니다." },
              { name: "박려원 님", text: "지구가 아야해, 라고 기준 있는 언어를 쓰니 아이가 바로 손 닦으러 나왔어요! 소통이 된다는 게 이런 거네요." },
              { name: "박소빈 님", text: "내 욕구가 뭔지 발견하고 남편에게 도움을 요청했을 때, 피로가 다 씻겨 나갔습니다. 이제 긍정적인 변화에 확신이 생겨요!" },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="bg-paper-white p-12 md:p-20 relative hairline-border no-shadow group transition-smooth hover:-translate-y-2 hover:border-ink-charcoal"
              >
                <span className="absolute top-8 left-8 md:top-12 md:left-12 text-[80px] text-ink-light font-serif leading-none transition-transform duration-700 group-hover:scale-110 group-hover:text-sage/30">“</span>
                <p className="text-[15px] md:text-[17px] font-sans font-light text-ink-charcoal leading-[2] italic relative z-10 text-center">
                  {review.text}
                </p>
                <div className="text-[11px] font-sans uppercase tracking-[0.3em] text-ink-gray text-right mt-12">
                  <span className="opacity-50">—</span> {review.name}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 6: Final CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-20 py-40 relative"
        >
          <div className="absolute inset-0 bg-paper-white hairline-border no-shadow -skew-y-1 z-[-1]" />
          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-serif text-ink-charcoal leading-[1.3] tracking-tight">
              이 모든 변화는 당신의<br />
              <span className="italic block mt-6">단 하나의 언어로부터 시작됩니다.</span>
            </h2>
            <p className="text-[12px] font-sans uppercase tracking-[0.4em] text-ink-gray flex items-center justify-center gap-6">
              <span className="w-12 h-[1px] bg-ink-light" />
              March 9, 2026
              <span className="w-12 h-[1px] bg-ink-light" />
            </p>
          </div>

          <button
            className="group relative px-24 py-8 overflow-hidden bg-transparent hairline-border transition-smooth"
            onClick={() => alert("신청하기 링크는 곧 추가될 예정입니다.")}
          >
            <div className="absolute inset-0 bg-ink-charcoal scale-y-0 origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
            <span className="relative z-10 text-[12px] font-sans uppercase tracking-[0.3em] text-ink-charcoal transition-colors duration-700 group-hover:text-paper-white font-medium">
              Begin Journey
            </span>
          </button>
        </motion.section>

        {/* Section 7: Monthly Magazine */}
        <section className="space-y-28 py-24 hairline-bottom pb-40">
          <div className="space-y-8 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-ink-charcoal italic tracking-tight">
              Monthly Positive
            </h2>
            <p className="text-[12px] font-sans uppercase tracking-[0.4em] text-ink-gray">
              마음을 보듬는 매달의 기록
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-16 max-w-[1200px] mx-auto w-full px-4 md:px-0">
            {magazines.map((magazine) => (
              <motion.div
                key={magazine.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <MagazineCard magazine={magazine} />
              </motion.div>
            ))}

            {/* Upcoming Magazine Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="aspect-[3/4.2] border border-ink-light flex flex-col items-center justify-center space-y-8 p-12 bg-transparent group transition-smooth hover:border-ink-charcoal"
            >
              <div className="w-16 h-16 rounded-full bg-paper-white flex items-center justify-center text-ink-gray transition-smooth group-hover:scale-110 hairline-border group-hover:border-ink-charcoal group-hover:text-ink-charcoal shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-700 group-hover:rotate-180"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <p className="text-[11px] font-sans uppercase tracking-[0.3em] text-ink-gray text-center leading-[2.5]">
                Next Issue Coming Soon<br />
                <span className="opacity-60 italic normal-case tracking-wider text-[13px] font-serif text-ink-charcoal">February 2026</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 pb-12 text-center">
          <p className="text-[11px] font-sans uppercase tracking-[0.5em] text-ink-gray/40 transition-colors duration-500 cursor-default hover:text-ink-charcoal">
            Positive Language Habit Challenge 2026
          </p>
        </footer>
      </div>

      {/* Exquisite Defensive Lines */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[1px] bg-ink-light/30 rotate-[25deg]" />
        <div className="absolute bottom-[30%] left-[-20%] w-[70%] h-[1px] bg-ink-light/20 rotate-[-15deg]" />
        <div className="absolute top-[60%] right-[10%] w-[30%] h-[1px] bg-ink-light/30 rotate-[45deg]" />
      </div>
    </main>
  );
}
