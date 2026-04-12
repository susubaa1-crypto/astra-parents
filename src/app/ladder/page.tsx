"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ───
const situations = [
  { emoji: "😤", label: "아이가 장난감 정리를 안 해요", owner: "child", ladder: 0,
    bad: "\"당장 정리 안 하면 다 버린다!\"",
    good: "\"장난감을 바구니에 넣을까, 상자에 넣을까? 네가 골라봐!\"",
    why: "아이가 '자율성'을 원할 때 → 선택지를 주면 스스로 움직입니다."
  },
  { emoji: "😭", label: "아이가 갑자기 징징대며 안겨요", owner: "child", ladder: 1,
    bad: "\"또 왜 그래, 뚝 그쳐!\"",
    good: "\"엄마가 안 봐줘서 속상했구나. 이리와, 안아줄게.\"",
    why: "아이가 '연결(사랑)'을 원할 때 → 감정을 먼저 수용하면 아이가 안정됩니다."
  },
  { emoji: "👊", label: "아이가 동생을 때렸어요", owner: "child", ladder: 2,
    bad: "\"너 왜 때려! 너도 맞아볼래?!\"",
    good: "\"화나는 마음은 이해해. 하지만 사람을 때리는 건 절대 안 돼.\"",
    why: "아이가 '안전 확인(한계 테스트)' 중일 때 → 감정은 인정, 행동은 단호하게."
  },
  { emoji: "😩", label: "오늘 하루 너무 지쳐서 짜증이 나요", owner: "mom", ladder: 3,
    bad: "\"시끄러워! 좀 조용히 해!\"",
    good: "\"엄마가 오늘 너무 지쳐서 예민해졌어. 10분만 쉬고 올게.\"",
    why: "엄마의 '에너지가 고갈'되었을 때 → 내 상태를 솔직하게 전달합니다."
  },
  { emoji: "😠", label: "옆집 아이는 벌써 한글을 뗐대요", owner: "mom", ladder: 4,
    bad: "\"너는 왜 이렇게 느려? 다른 애들은 다 하는데!\"",
    good: "\"네가 어제보다 한 글자 더 읽었네! 너만의 속도로 잘 가고 있어.\"",
    why: "엄마가 '조급함'을 느낄 때 → 비교 대신, 아이의 과정을 존중합니다."
  },
  { emoji: "🍽️", label: "밥을 안 먹고 돌아다녀요", owner: "child", ladder: 0,
    bad: "\"앉아서 밥 먹어! 몇 번을 말해!\"",
    good: "\"의자에 앉아서 먹을래, 아니면 5분 뒤에 먹을래?\"",
    why: "아이에게 선택권을 주면 → 기싸움 없이 자발적으로 행동합니다."
  },
  { emoji: "🧸", label: "놀이터에서 친구 장난감을 뺏었어요", owner: "child", ladder: 2,
    bad: "\"남의 거 왜 빼앗어! 창피하게!\"",
    good: "\"이건 친구 물건이야. '빌려줘'라고 말해보는 건 어때?\"",
    why: "사회적 규칙을 알려줄 때 → 비난 없이 기준과 대안을 함께 제시합니다."
  },
  { emoji: "💤", label: "아이 재우고 나니 죄책감이 밀려와요", owner: "mom", ladder: 3,
    bad: "\"또 화냈네... 나는 왜 이 모양이지\"",
    good: "\"오늘 힘들었지만, 그래도 애쓴 내 자신에게 수고했다고 말해줄게.\"",
    why: "자기 비난 대신 → 나의 감정을 솔직하게 인정하고 토닥여줍니다."
  },
];
const ladderData = [
  { id: 0, owner: "child", name: "선택과 질문 언어", emoji: "🎯", need: "자율성", colorClass: "text-teal-400 border-teal-400", bgClass: "bg-teal-400", glowClass: "shadow-[0_0_20px_rgba(20,184,166,0.3)]", resultBg: "bg-teal-400/10 border-teal-400/40" },
  { id: 1, owner: "child", name: "공감 수용 언어", emoji: "🫂", need: "연결", colorClass: "text-blue-400 border-blue-400", bgClass: "bg-blue-400", glowClass: "shadow-[0_0_20px_rgba(59,130,246,0.3)]", resultBg: "bg-blue-400/10 border-blue-400/40" },
  { id: 2, owner: "child", name: "기준이 있는 언어", emoji: "⚖️", need: "안전 확인", colorClass: "text-violet-400 border-violet-400", bgClass: "bg-violet-400", glowClass: "shadow-[0_0_20px_rgba(139,92,246,0.3)]", resultBg: "bg-violet-400/10 border-violet-400/40" },
  { id: 3, owner: "mom", name: "솔직한 언어", emoji: "🔋", need: "에너지 고갈", colorClass: "text-pink-400 border-pink-400", bgClass: "bg-pink-400", glowClass: "shadow-[0_0_20px_rgba(236,72,153,0.3)]", resultBg: "bg-pink-400/10 border-pink-400/40" },
  { id: 4, owner: "mom", name: "과정 존중 언어", emoji: "⏳", need: "조급함", colorClass: "text-amber-400 border-amber-400", bgClass: "bg-amber-400", glowClass: "shadow-[0_0_20px_rgba(245,158,11,0.3)]", resultBg: "bg-amber-400/10 border-amber-400/40" },
];
type Phase = "situation" | "owner" | "ladder";

export default function LadderGamePage() {
  const [phase, setPhase] = useState<Phase>("situation");
  const [current, setCurrent] = useState<typeof situations[0] | null>(null);
  const [selectedLadder, setSelectedLadder] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const selectSituation = (idx: number) => {
    setCurrent(situations[idx]);
    setPhase("owner");
    setSelectedLadder(null);
    setShowResult(false);
  };

  const chooseOwner = () => {
    setPhase("ladder");
  };

  const selectLadder = (idx: number) => {
    if (selectedLadder !== null) return;
    setSelectedLadder(idx);
    setTimeout(() => setShowResult(true), 1200);
  };

  const reset = () => {
    setPhase("situation");
    setCurrent(null);
    setSelectedLadder(null);
    setShowResult(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-[100dvh] bg-astra-navy flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/astra/north_star_banner.png')] opacity-[0.03] pointer-events-none mix-blend-screen bg-cover bg-center" />

      {/* Header */}
      <div className="absolute top-0 left-0 w-full p-5 z-50 flex justify-between items-center">
        <Link href="/" className="text-white/40 hover:text-white transition flex items-center gap-2 text-sm font-sans tracking-widest uppercase">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Home
        </Link>
      </div>

      <div className="w-full max-w-3xl px-4 pt-20 pb-16 relative z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-astra-starlight mb-2">
            🪜 긍정언어 사다리 타기
          </h1>
          <p className="text-ink-gray text-sm md:text-base">자극이 왔을 때, 어떤 사다리를 타야 할까요?</p>
        </div>

        <AnimatePresence mode="wait">

          {/* ─── Phase 1: Situation Select ─── */}
          {phase === "situation" && (
            <motion.div
              key="situation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-5">
                <span className="text-astra-gold text-sm font-bold tracking-widest uppercase">⚡ 자극 상황을 선택하세요</span>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {situations.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => selectSituation(i)}
                    className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 md:p-6 text-center cursor-pointer transition-all hover:border-astra-gold/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] active:scale-95"
                  >
                    <div className="text-3xl mb-2">{s.emoji}</div>
                    <div className="text-[0.95rem] font-semibold text-astra-starlight leading-snug break-keep">{s.label}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ─── Phase 2: Pause & Owner ─── */}
          {phase === "owner" && current && (
            <motion.div
              key="owner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-5"
            >
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 text-center font-semibold text-astra-starlight w-full max-w-md break-keep text-lg">
                ⚡ &ldquo;{current.label}&rdquo;
              </div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-gradient-to-br from-yellow-500/[0.12] to-yellow-500/[0.04] border border-yellow-500/30 rounded-xl p-5 text-center w-full max-w-md animate-pulse"
                style={{ animationDuration: "3s" }}
              >
                <div className="text-xl font-extrabold text-yellow-400">🌬️ 멈춤 (Pause)</div>
                <div className="text-sm text-white/50 mt-1">&ldquo;잠깐. 있는 그대로 관찰하자. 이건 누구의 문제일까?&rdquo;</div>
              </motion.div>

              <div className="text-astra-gold text-sm font-bold tracking-widest text-center">이 감정과 문제는 누구의 것인가요?</div>

              <div className="flex gap-4 w-full max-w-md">
                <button
                  onClick={chooseOwner}
                  className="flex-1 bg-white/[0.04] border-2 border-white/10 rounded-xl p-5 text-center transition-all hover:border-astra-gold/50 hover:scale-[1.03] active:scale-95"
                >
                  <div className="text-3xl mb-1">👦</div>
                  <div className="font-bold text-astra-starlight">아이의 행동</div>
                  <div className="text-xs text-white/40 mt-1 break-keep">아이가 행동의 선을 넘거나 욕구를 표출할 때</div>
                </button>
                <button
                  onClick={chooseOwner}
                  className="flex-1 bg-white/[0.04] border-2 border-white/10 rounded-xl p-5 text-center transition-all hover:border-astra-gold/50 hover:scale-[1.03] active:scale-95"
                >
                  <div className="text-3xl mb-1">👩</div>
                  <div className="font-bold text-astra-starlight">엄마의 내면</div>
                  <div className="text-xs text-white/40 mt-1 break-keep">내 마음의 여유가 없어서 더 예민한 건 아닌지</div>
                </button>
              </div>
            </motion.div>
          )}

          {/* ─── Phase 3: Ladder ─── */}
          {phase === "ladder" && current && (
            <motion.div
              key="ladder"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-5"
            >
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-4 text-center font-semibold text-astra-starlight w-full max-w-md break-keep">
                ⚡ &ldquo;{current.label}&rdquo;
              </div>

              <div className="text-astra-gold text-sm font-bold tracking-widest text-center">
                {current.owner === "child"
                  ? "👦 아이의 행동이 원인 → 어떤 욕구가 숨어 있을까?"
                  : "👩 엄마의 내면이 원인 → 나의 상태는 어떤가?"}
              </div>

              {selectedLadder === null && (
                <p className="text-astra-starlight text-base font-medium">어떤 사다리를 타볼까요? 클릭하세요!</p>
              )}

              {/* Ladder Tracks */}
              <div className="flex justify-center w-full gap-2 md:gap-4 max-w-2xl mx-auto mb-10">
                {ladderData.filter(ld => ld.owner === current.owner).map((ld) => {
                  const isActive = selectedLadder === ld.id;
                  const isDimmed = selectedLadder !== null && selectedLadder !== ld.id;

                  return (
                    <button
                      key={ld.id}
                      onClick={() => selectLadder(ld.id)}
                      disabled={selectedLadder !== null}
                      className={`flex flex-col items-center flex-1 max-w-[130px] md:max-w-[150px] transition-all duration-500 ${isDimmed ? "opacity-[0.12] pointer-events-none" : ""}`}
                    >
                      {/* Top: Need */}
                      <div className={`w-full py-2 md:py-4 px-1 rounded-xl text-center text-[0.75rem] md:text-sm font-bold border-2 bg-astra-navy transition-all break-keep min-h-[50px] flex items-center justify-center ${ld.colorClass} ${isActive ? ld.glowClass : ""} ${!isDimmed && selectedLadder === null ? "hover:scale-105" : ""}`}>
                        {ld.emoji} {ld.need}
                      </div>

                      {/* Line */}
                      <div className="w-[4px] h-24 md:h-32 relative my-2">
                        <div className={`w-full h-full ${ld.bgClass} opacity-20 rounded`} />
                        <div
                          className={`absolute top-0 left-0 w-full rounded ${ld.bgClass} transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]`}
                          style={{ height: isActive ? "100%" : "0%" }}
                        />
                      </div>

                      {/* Bottom: Language */}
                      <div className={`w-full py-2 md:py-3 px-1 rounded-xl text-center text-[0.7rem] md:text-xs font-semibold bg-white/[0.04] border-2 break-keep min-h-[50px] flex items-center justify-center transition-all duration-500 ${isActive ? `${ld.colorClass} opacity-100` : "border-transparent opacity-30"}`}>
                        {ld.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Result Card */}
              <AnimatePresence>
                {showResult && selectedLadder !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full max-w-lg rounded-2xl p-6 md:p-8 text-center border-2 ${ladderData[selectedLadder].resultBg}`}
                  >
                    {selectedLadder === current.ladder ? (
                      <div className={`text-sm font-bold tracking-wider mb-1 ${ladderData[selectedLadder].colorClass.split(" ")[0]}`}>✨ 정확합니다!</div>
                    ) : (
                      <div className="text-sm font-bold tracking-wider mb-1 text-white/60">
                        💡 이 상황에서는 「{ladderData[current.ladder].name}」가 더 잘 맞아요
                      </div>
                    )}

                    <div className={`text-2xl md:text-3xl font-extrabold mb-3 ${ladderData[selectedLadder].colorClass.split(" ")[0]}`}>
                      {ladderData[selectedLadder].name}
                    </div>

                    <div className={`w-10 h-0.5 mx-auto mb-4 ${ladderData[selectedLadder].bgClass} opacity-40`} />

                    <div className="text-red-400 line-through text-sm mb-2 opacity-80">
                      ❌ {current.bad}
                    </div>
                    <div className={`text-base md:text-lg font-bold leading-relaxed break-keep ${ladderData[current.ladder].colorClass.split(" ")[0]}`}>
                      ⭕ {current.good}
                    </div>
                    <div className="text-white/50 text-sm mt-4 leading-relaxed break-keep">
                      {current.why}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Reset Button */}
              <button
                onClick={reset}
                className="mt-4 px-6 py-3 rounded-xl border border-white/10 text-white/40 hover:text-astra-gold hover:border-astra-gold/40 transition-all text-sm font-medium"
              >
                🔄 다른 상황으로 다시 해보기
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
