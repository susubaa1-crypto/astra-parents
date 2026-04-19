"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

type ScreenState = "start" | "quiz" | "result";

const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const questions = [
  // Body (1-10)
  { t: "나는 하루 6시간 이상 방해받지 않는 질 좋은 수면을 취한다.", c: "BODY" },
  { t: "아침에 일어날 때 피곤함보다는 개운함을 느낀다.", c: "BODY" },
  { t: "스트레스를 받을 때 단것(야식/카페인)에 크게 의존하지 않는다.", c: "BODY" },
  { t: "일주일에 3회 이상 가벼운 운동이나 땀이 나는 활동을 한다.", c: "BODY" },
  { t: "식사 시 휴대폰을 보지 않고 음식의 맛을 오롯이 느끼며 먹는다.", c: "BODY" },
  { t: "낮 시간에 무기력함 없이 활발하게 돌아다닐 에너지가 유지된다.", c: "BODY" },
  { t: "평소 내 몸의 자세(거북목, 둥근 어깨 등)가 바르다고 생각한다.", c: "BODY" },
  { t: "아이를 힘껏 안아주거나 놀아줄 때 체력적인 한계를 크게 느끼지 않는다.", c: "BODY" },
  { t: "몸이 아프거나 뻐근할 때 참지 않고 즉시 휴식을 취하거나 치료를 받는다.", c: "BODY" },
  { t: "영양가 있는 진짜 음식(Real Food) 위주로 나만을 위한 식단을 차려본 적이 있다.", c: "BODY" },
  
  // Mind (11-20)
  { t: "예기치 못한 짜증 나는 상황이 발생해도 감정적으로 쉽게 폭발하지 않는다.", c: "MIND" },
  { t: "완벽한 엄마가 되기보다는, 실수해도 훌훌 털고 일어나는 유연성이 있다.", c: "MIND" },
  { t: "다른 아이나 SNS의 육아 모습과 내 아이를 비교하며 조급해하지 않는다.", c: "MIND" },
  { t: "하루 동안 자조나 부정(못하겠어, 짜증나)보다 긍정적인 단어(괜찮아, 할 수 있어)를 훨씬 많이 쓴다.", c: "MIND" },
  { t: "아이의 떼쓰는 행동 이면에 숨은 진짜 이유(결핍, 욕구)를 먼저 생각하려 애쓴다.", c: "MIND" },
  { t: "치우기 힘든 물을 엎질렀을 때 등 이미 벌어진 일에 대해 남을 탓하기보다 빠르게 마음을 비운다.", c: "MIND" },
  { t: "밤에 눈을 감기 전, 반성이나 후회보다는 오늘 하루 동안 감사했던 일을 먼저 떠올린다.", c: "MIND" },
  { t: "남편(배우자)의 서툰 점을 비난하기보다 우리가 같은 팀이라는 걸 다잡으려 애쓴다.", c: "MIND" },
  { t: "나 자신에게 거울을 보며 '오늘 이 정도면 충분히 훌륭했어'라고 자주 칭찬해준다.", c: "MIND" },
  { t: "욱하고 화가 치밀 때 즉각 반응하지 않고 최소 5초 동안 숨을 고르는 틈(Pause)을 둘 줄 안다.", c: "MIND" },

  // Soul (21-30)
  { t: "'누구의 엄마'라는 역할을 넘어, 나라는 사람을 가슴 뛰게 하는 개인적인 목표나 꿈이 있다.", c: "SOUL" },
  { t: "하루에 단 10분이라도 이어폰을 빼고, 문을 닫고 나만의 침묵 시간을 가지며 에너지를 충전한다.", c: "SOUL" },
  { t: "삶의 큰 우선순위가 명확하고, 우리 가족이 앞으로 나아가야 할 방향(북극성)을 알고 있다.", c: "SOUL" },
  { t: "육아에 치여 잊지 않았고 여전히 내가 즐기고 소비하는 나만의 확실한 취향(음악, 책, 취미)이 있다.", c: "SOUL" },
  { t: "아이가 독립하고 난 뒤 텅 빈 집이 아니라, 펼쳐질 나의 2막 삶에 대해 설레는 마음이 있다.", c: "SOUL" },
  { t: "주변 엄마들의 평가나 사회적 잣대에 얽매이지 않고 나만의 확고한 소신대로 육아를 밀고 나간다.", c: "SOUL" },
  { t: "지금 내 통장 잔고나 집 평수와 무관하게, 내 존재 자체만으로 충분히 가치 있고 근사하다고 느낀다.", c: "SOUL" },
  { t: "아이가 내 결핍을 채워주기를 바라지 않고, 나와 완벽히 분리된 독립적인 인격체로 존중한다.", c: "SOUL" },
  { t: "밥 짓고 치우느라 바빠도, 문득 창밖 구름을 보거나 바람을 느끼며 미소 지을 마음의 여유가 있다.", c: "SOUL" },
  { t: "내가 살아가는 내 삶의 궤적과 삶을 대하는 태도가 아이에게 남길 가장 훌륭한 유산이 될 거라 확신한다.", c: "SOUL" }
];

export default function BMSPage() {
  const [screen, setScreen] = useState<ScreenState>("start");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState({ BODY: 0, MIND: 0, SOUL: 0 });
  const [currentSelection, setCurrentSelection] = useState<number | null>(null);

  const startTest = () => {
    setScores({ BODY: 0, MIND: 0, SOUL: 0 });
    setCurrentIdx(0);
    setCurrentSelection(null);
    setScreen("quiz");
  };

  const handleNext = () => {
    if (currentSelection === null) return;
    
    const q = questions[currentIdx];
    setScores(prev => ({ ...prev, [q.c]: prev[q.c as keyof typeof prev] + currentSelection }));
    
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setCurrentSelection(null);
    } else {
      setScreen("result");
    }
  };

  const q = questions[currentIdx];
  const tagColorClass = q?.c === "BODY" ? "text-teal-400" : q?.c === "MIND" ? "text-blue-400" : "text-purple-400";

  const total = scores.BODY + scores.MIND + scores.SOUL;
  let resultDesc = "";
  if (total >= 130) resultDesc = "가장 이상적이고 생기 넘치는 엄마입니다! 이미 아이가 마음껏 성장할 북극성 그 자체네요. 빛나는 지금을 즐기세요!";
  else if (total >= 100) resultDesc = "조금씩 지칠 때도 있지만, 자신을 사랑할 줄 아는 멋진 리더입니다. 결핍된 에너지가 B/M/S 중 어디인지 도표를 한번 확인해보세요!";
  else if (total >= 70) resultDesc = "무언가 단단히 당신의 에너지를 뺏어가고 있습니다. 아이보다 엄마 본인을 먼저 챙겨야 할 때예요. 죄책감을 버리고 휴식을 선언하세요.";
  else resultDesc = "에너지가 고갈 직전입니다! 하루하루 견디기 벅찰 수 있습니다. 가장 시급하게 채워야 하는 에너지를 찾아 작은 것 하나부터 시작해 보아요.";

  const chartData = [
    { subject: "🏋️ Body", value: scores.BODY, fullMark: 50 },
    { subject: "🧠 Mind", value: scores.MIND, fullMark: 50 },
    { subject: "✨ Soul", value: scores.SOUL, fullMark: 50 },
  ];

  return (
    <main className="min-h-[100dvh] bg-astra-navy flex flex-col items-center justify-center relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[url('/astra/north_star_banner.png')] opacity-[0.03] pointer-events-none mix-blend-screen bg-cover bg-center" />
      
      <div className="absolute top-0 left-0 w-full p-6 z-50 pointer-events-auto flex justify-between items-center">
         <Link href="/" className="text-white/50 hover:text-white transition flex items-center gap-2 text-sm font-sans tracking-widest uppercase">
            <ArrowLeftIcon /> Home
         </Link>
      </div>

      <div className="w-full max-w-lg bg-white/5 backdrop-blur-xl border-y border-white/10 md:rounded-3xl min-h-[100dvh] md:min-h-0 md:h-[85vh] flex flex-col relative z-10 overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          
          {screen === "start" && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col p-8 md:p-12 overflow-y-auto custom-scrollbar"
            >
              <div className="text-astra-gold text-sm font-bold uppercase tracking-widest mb-2">Astra Parents</div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight break-keep">
                BMS 긍정 에너지<br/>자가진단
              </h1>
              <p className="text-white/60 text-sm md:text-base leading-relaxed break-keep mb-8">
                현재 내면에 있는 진짜 에너지를 점검합니다.<br/>Body(몸), Mind(마음), Soul(영혼) 3가지 차원에 대해 총 30개의 질문이 준비되어 있습니다.<br/><br/>
                솔직하게 현재 느낌을 1점부터 5점까지 점수를 매겨주세요.
              </p>
              
              <button 
                onClick={startTest}
                className="mt-auto w-full py-4 bg-astra-gold text-astra-navy font-bold text-lg rounded-xl hover:bg-astra-starlight transition shadow-[0_0_20px_rgba(217,187,123,0.3)]"
              >
                진단 시작하기 🚀
              </button>
            </motion.div>
          )}

          {screen === "quiz" && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col h-full overflow-hidden"
            >
              <div className="p-6 md:p-8 shrink-0 border-b border-white/10 bg-white/5">
                <div className="h-1.5 bg-white/10 rounded-full w-full mb-6 relative overflow-hidden">
                  <motion.div 
                    key={`progress-${currentIdx}`}
                    initial={{ width: `${(currentIdx / questions.length) * 100}%` }}
                    animate={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-0 left-0 h-full bg-astra-gold rounded-full" 
                  />
                </div>
                <div className={`text-xs md:text-sm font-bold uppercase tracking-widest mb-2 ${tagColorClass}`}>
                    {q.c} 에너지 점검
                </div>
                <h2 className="text-xs md:text-sm font-bold text-white/50 mb-4">
                   Question {currentIdx + 1} / 30
                </h2>
                <div className="text-lg md:text-2xl font-bold text-white leading-relaxed break-keep min-h-[5rem]">
                   {q.t}
                </div>
              </div>

              <div className="flex-1 p-6 md:p-8 flex flex-col justify-end pb-8">
                <div className="flex justify-between items-end gap-1 mb-10 w-full px-2">
                   {[
                     { val: 1, emoji: "☹️", label: "전혀" },
                     { val: 2, emoji: "😕", label: "" },
                     { val: 3, emoji: "😐", label: "보통" },
                     { val: 4, emoji: "🙂", label: "" },
                     { val: 5, emoji: "😍", label: "매우" }
                   ].map((opt) => {
                     // Dynamic circles size calculation to match original demo
                     const baseSizeClass = opt.val === 1 ? 'w-10 h-10' : opt.val === 2 ? 'w-11 h-11' : opt.val === 3 ? 'w-12 h-12' : opt.val === 4 ? 'w-[52px] h-[52px]' : 'w-14 h-14';
                     
                     return (
                     <button
                        key={opt.val}
                        onClick={() => setCurrentSelection(opt.val)}
                        className="flex flex-col items-center flex-1 cursor-pointer focus:outline-none group"
                     >
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`${baseSizeClass} rounded-full border-2 flex items-center justify-center text-xl md:text-2xl transition-all duration-200 mb-3
                             ${currentSelection === opt.val 
                                ? "bg-astra-gold border-astra-gold shadow-[0_0_15px_rgba(217,187,123,0.5)] transform scale-110" 
                                : "bg-white/10 border-white/20 hover:border-white/50 hover:bg-white/20"
                             }`}
                        >
                           <span className={currentSelection === opt.val ? "" : "opacity-80 grayscale group-hover:grayscale-0 transition-all"}>
                             {opt.emoji}
                           </span>
                        </motion.div>
                        <div className={`text-[11px] md:text-xs transition-colors ${currentSelection === opt.val ? "text-astra-gold font-bold" : "text-white/50 font-medium"}`}>
                           {opt.label || "\u00A0"}
                        </div>
                     </button>
                   )})}
                </div>

                <button 
                  onClick={handleNext}
                  disabled={currentSelection === null}
                  className={`w-full py-4 font-bold text-base md:text-lg rounded-xl transition ${
                    currentSelection !== null 
                      ? "bg-astra-gold text-astra-navy hover:bg-astra-starlight shadow-[0_0_20px_rgba(217,187,123,0.3)]"
                      : "bg-white/10 text-white/30 cursor-not-allowed"
                  }`}
                >
                  {currentIdx < questions.length - 1 ? "다음 문항 →" : "결과 확인하기"}
                </button>
              </div>
            </motion.div>
          )}

          {screen === "result" && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 flex flex-col h-full overflow-hidden"
            >
              <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                
                <div className="text-center mb-8 pt-4">
                  <div className="text-astra-gold font-bold text-sm tracking-widest mb-3">진단 결과</div>
                  <h2 className="text-2xl font-bold text-white mb-4">당신의 에너지 점수</h2>
                  <div className="text-6xl font-extrabold text-astra-gold mb-2 drop-shadow-[0_0_15px_rgba(217,187,123,0.5)]">
                     {total} <span className="text-2xl text-white/30">/ 150</span>
                  </div>
                  <p className="text-white/80 text-[14px] leading-relaxed break-keep mt-6 p-5 bg-white/5 rounded-xl border border-white/10 text-center shadow-lg">
                     {resultDesc}
                  </p>
                </div>

                <div className="flex justify-between gap-2 mb-8 bg-black/20 p-4 rounded-xl border border-white/5">
                   <div className="text-center flex-1">
                      <div className="text-[10px] font-bold text-teal-400/80 mb-1 uppercase tracking-wider">🏋️ Body</div>
                      <div className="text-2xl font-bold text-white">{scores.BODY}</div>
                   </div>
                   <div className="text-center flex-1 border-x border-white/5">
                      <div className="text-[10px] font-bold text-blue-400/80 mb-1 uppercase tracking-wider">🧠 Mind</div>
                      <div className="text-2xl font-bold text-white">{scores.MIND}</div>
                   </div>
                   <div className="text-center flex-1">
                      <div className="text-[10px] font-bold text-purple-400/80 mb-1 uppercase tracking-wider">✨ Soul</div>
                      <div className="text-2xl font-bold text-white">{scores.SOUL}</div>
                   </div>
                </div>

                <div className="h-[250px] w-full mb-8 relative z-0 pointer-events-none">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                      <PolarGrid stroke="rgba(255,255,255,0.1)" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 'bold' }} />
                      <Radar
                        name="BMS"
                        dataKey="value"
                        stroke="#d9bb7b"
                        strokeWidth={2}
                        fill="#d9bb7b"
                        fillOpacity={0.4}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="text-center space-y-3 pb-8">
                  <Link 
                    href="/missions"
                    className="block w-full py-4 bg-astra-gold text-astra-navy font-bold rounded-xl hover:bg-astra-starlight transition shadow-[0_0_15px_rgba(217,187,123,0.3)]"
                  >
                    13일차 과제 소감 작성하러 가기 📝
                  </Link>
                  <button 
                    onClick={startTest}
                    className="w-full py-3 text-white/50 text-sm font-medium hover:text-white transition underline underline-offset-4"
                  >
                    테스트 다시하기
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
