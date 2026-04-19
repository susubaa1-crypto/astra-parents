"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const WordIcon = () => (
    <svg className="w-5 h-5 text-astra-gold opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const positiveData = [
  {
    category: "🌅 기상 직후",
    color: "from-blue-500/20 to-cyan-500/5",
    words: [
      "너의 하루는 매일매일 끝없는 호기심과 즐거움으로 꽉 채워질 거야.",
      "네가 짓는 아침 미소는 온 집안을 눈부시게 밝히는 빛이란다.",
      "너는 아침에 눈을 뜨는 것만으로도 사람들에게 행복을 주는 소중한 사람이야.",
      "오늘 넌 하루 종일 씩씩하고 건강한 에너지로 가득 차 있을 거야.",
      "오늘도 넌 새로운 걸 훌륭하게 배워내는 멋진 탐험가가 될 거야.",
      "너의 아침은 언제나 활기차고, 너의 마음은 새들처럼 맑고 가볍단다.",
      "네가 시작하는 모든 하루는 기적과 축복이 늘 함께 간단다.",
      "네가 곁에 살아 숨 쉬고 있다는 사실 하나만으로도 엄마 세상은 완벽해.",
      "네가 지닌 밝은 에너지는 엄마에게 매일 새로운 삶의 희망을 준단다.",
      "너는 맑은 샘물처럼 언제나 주변을 기분 좋고 상쾌하게 만드는 아이야."
    ]
  },
  {
    category: "🍽️ 밥 먹을 때",
    color: "from-orange-500/20 to-yellow-500/5",
    words: [
      "우리가 눈 마주치며 앉은 이 식탁은 언제나 감사와 사랑으로 가득 차 있어.",
      "너는 매일 네게 주어진 작은 것들에도 깊이 감사할 줄 아는 멋진 지혜를 가졌어.",
      "네가 몸 안으로 받아들이는 모든 음식이 널 더 단단하고 지혜롭게 만들어줄 거야.",
      "우리 가족이 함께 나누는 대화는 언제나 마음을 따뜻하고 평화롭게 해준단다.",
      "너와 눈을 맞추며 교감하는 이 순간, 엄마는 세상에서 가장 부유한 사람이야.",
      "이 맛있는 음식이 너의 세포 하나하나에 깊게 스며들어 널 최고의 방패로 지켜줄 거야.",
      "너는 내 몸이 진짜로 필요로 하는 좋은 기운을 알아채는 탁월한 감각이 있어.",
      "너는 매 순간의 맛과 향기를 온전히 느끼고 현재에 머무를 줄 아는 지혜로운 아이야.",
      "네가 맛있게 먹으며 짓는 표정은 엄마를 춤추게 하는 가장 강력한 요술이야.",
      "우리의 매일매일은 식탁의 온기처럼 갈수록 더 건강해지고 활기가 넘칠 거야."
    ]
  },
  {
    category: "👟 외출할 때",
    color: "from-green-500/20 to-emerald-500/5",
    words: [
      "바깥 세상의 모든 아름다운 꽃들과 구름이 널 축복하고 환영하며 기다리고 있어.",
      "우리는 어디에 있든 완전하게 안전하고, 우리 집은 언제나 우릴 따뜻하게 품어줄 거야.",
      "네가 자라며 내딛는 너의 발걸음마다 언제나 눈부신 행운이 따라다닐 거야.",
      "세상은 호기심 많고 사랑스러운 너를 위해 매일 놀라운 선물을 준비해 두었단다.",
      "너는 언제 어디서나 당당하고 흔들림 없이 세상과 교감하는 훌륭한 우주야.",
      "오늘 쏟아지는 찬란한 밝은 햇살처럼 맑고 힘찬 에너지가 널 가득 채울 거야.",
      "네가 무엇을 도전하든, 넘어져도 엄마는 영원히 네 뒤에서 무너지지 않는 울타리가 되어줄게.",
      "문 밖으로 나서는 너는 한계를 긋지 않고 매일매일 쑥쑥 성장하는 용기 있는 탐험가야.",
      "네가 세상 밖에서 만들어갈 오늘의 모든 경험과 이야기는 우주에서 가장 빛나고 소중해.",
      "너는 늘 위기 상황에서 지혜롭게 대처하고 네 몸을 안전하게 지켜낼 수 있는 힘을 가졌어."
    ]
  },
  {
    category: "🧩 놀이할 때",
    color: "from-purple-500/20 to-pink-500/5",
    words: [
      "스스로 생각하고 끝까지 몰입하는 넌, 너만의 우주를 지을 수 있는 돋보이는 창조자야.",
      "실패 속에서 스스로 방법을 찾아내고 일어나는 너의 그 회복 탄력성이 정말 자랑스러워.",
      "틀에 갇히지 않고 늘 새로운 아이디어를 내놓는 네 머릿속은 수천 개의 무지개 빛 보석 상자 같아.",
      "너와 함께 웃는 시간은 엄마 인생을 가장 풍성하고 의미 있게 만드는 완벽한 축복이야.",
      "무너져도 언제든 다시 시작하고, 이전보다 훨씬 더 견고하게 지을 수 있는 회복의 힘이 네 안에 있어.",
      "끝없이 흘러나오는 너의 상상력과 창의성은 먼 훗날 세상을 더 아름답게 변화시킬 거야.",
      "매일 거침없이 눈부시게 폭발적으로 자라는 너를 보며 엄마는 감히 말로 다 못할 벅찬 경이로움을 느껴.",
      "아주 작고 사소한 것 하나도 깊이 파고들어 관찰하는 너의 빛나는 호기심을 엄마는 열렬히 찬양해.",
      "너는 아무리 재미없어 보이는 것도 결국엔 너무나 즐겁게 바꿔놓아 버리는 강력하고 주도적인 에너지를 가졌어.",
      "누구와 비교할 필요 없어. 넌 남의 시선과 무관하게 언제나 너만의 속도대로 위대하게 성장하고 있으니까."
    ]
  },
  {
    category: "🌙 잠들기 직전",
    color: "from-indigo-500/20 to-blue-900/10",
    words: [
      "네가 이 세상에 몸을 입고 찾아온 사실 그 자체가 엄마 인생의 가장 크고 완전한 최고의 성취야.",
      "하루의 끝, 네 마음속의 아주 작은 상처나 미움까지 모두 눈 녹듯 사라지고 오직 사랑과 평온만이 남아 너를 감쌀 시간이야.",
      "세상에서 제일 열심히 살아준 네 몸의 작은 세포 하나하나가 밤새도록 부드럽고 온전하게 회복되고 재충전될 거야.",
      "오늘 하루 동안 네가 발을 딛고 머문 자리는 어디든, 네 맑은 기운 덕분에 밝고 평화롭게 정화되었단다. 애썼어.",
      "오늘 하늘이 감싸주고 우주의 따뜻한 보호막이 널 완벽하게 안전하게 지켜주었어. 살아있음에 깊이 감사해.",
      "이제 깊은 무의식의 세계, 장대한 꿈의 나라로 가볼까. 수많은 지혜를 흡수하고 내일 더 강인하고 깊이 있는 아이로 깨어날 거야.",
      "세상이 변하고 네가 어떤 거대한 실수를 치르더라도, 엄마는 우주가 소멸할 때까지 너의 고유한 존엄성을 무조건적으로 믿고 사랑해.",
      "편안히 눈을 감아봐. 너의 마음 가장 깊은 곳엔 세상의 밝음과 지혜로움만 쏙쏙 골라 받아들이는 단단한 긍정의 뿌리가 굵게 자리 잡았어.",
      "이제 모든 부담과 해야 할 긴장을 내려놓아도 완벽히 괜찮아. 너는 너무나 안전하고 부족함 하나 없이 온전하게 사랑받는 눈부시게 고귀한 존재야.",
      "우주를 통틀어 단 하나뿐인 위대한 너. 엄마 품 가장 크고 진정한 안식 속에서 세상 제일 달콤하게 영혼까지 푹 쉬렴."
    ]
  }
];

export default function PositiveWordsPage() {
  const [activeCategory, setActiveCategory] = useState<number | null>(0);
  const [highlightedWord, setHighlightedWord] = useState<string | null>(null);

  return (
    <main className="min-h-[100dvh] bg-astra-navy flex flex-col items-center relative overflow-x-hidden font-sans pb-20">
      <div className="absolute inset-0 bg-[url('/astra/north_star_banner.png')] opacity-[0.03] pointer-events-none mix-blend-screen bg-cover bg-fixed bg-center" />
      
      <div className="w-full max-w-2xl px-6 pt-12 pb-8 z-10 sticky top-0 bg-astra-navy/80 backdrop-blur-md border-b border-white/5">
         <Link href="/missions" className="text-white/50 hover:text-white transition flex items-center gap-2 text-sm font-sans tracking-widest uppercase mb-6">
            <ArrowLeftIcon /> 미션으로 돌아가기
         </Link>
         <div className="text-astra-gold text-sm font-bold uppercase tracking-widest mb-2">Astra Parents</div>
         <h1 className="text-3xl font-bold text-white mb-2 leading-tight break-keep">
           우리집 긍정 리추얼<br/>컨닝페이퍼 📝
         </h1>
         <p className="text-white/60 text-sm leading-relaxed break-keep mt-4">
           일상 속 5가지 상황에서 아이에게 해줄 수 있는 긍정어 50개 샘플입니다.<br/>
           이 중에서 마음에 드는 문장을 골라 우리 집만의 언어로 만들어 보세요. 문장을 터치!
         </p>
      </div>

      <div className="w-full max-w-2xl px-4 mt-6 z-10 flex flex-col gap-4">
        {positiveData.map((section, idx) => {
            const isActive = activeCategory === idx;
            
            return (
                <div key={idx} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isActive ? 'border-astra-gold/40 shadow-[0_0_30px_rgba(217,187,123,0.1)]' : 'border-white/10 hover:border-white/30'}`}>
                    <button 
                        onClick={() => setActiveCategory(isActive ? null : idx)}
                        className={`w-full text-left p-5 flex justify-between items-center bg-gradient-to-r ${section.color} backdrop-blur-sm`}
                    >
                        <h2 className="text-xl font-bold text-white tracking-wide">{section.category}</h2>
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isActive ? 'bg-astra-gold border-astra-gold text-astra-navy rotate-180' : 'border-white/20 text-white/50'}`}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>

                    <AnimatePresence>
                        {isActive && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/5"
                            >
                                <div className="p-4 flex flex-col gap-2">
                                    {section.words.map((word, wIdx) => {
                                        const isHighlighted = highlightedWord === word;
                                        return (
                                            <div 
                                                key={wIdx}
                                                onClick={() => setHighlightedWord(word)}
                                                className={`group flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                                                    isHighlighted 
                                                    ? 'bg-astra-gold/15 border border-astra-gold text-white shadow-inner scale-[1.02]' 
                                                    : 'bg-transparent border border-transparent text-white/70 hover:bg-white/5 hover:text-white'
                                                }`}
                                            >
                                                <div className="shrink-0 mt-0.5">
                                                    <WordIcon />
                                                </div>
                                                <p className={`text-base leading-relaxed break-keep font-medium ${isHighlighted ? 'text-astra-gold' : ''}`}>
                                                    "{word}"
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )
        })}
      </div>
      
      {/* Toast Notification for Selection */}
      <AnimatePresence>
          {highlightedWord && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-astra-gold text-astra-navy px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(217,187,123,0.4)] z-50 text-center"
              >
                  <div className="font-bold mb-1 text-sm opacity-60">오늘의 픽!</div>
                  <div className="font-bold text-base leading-snug break-keep">"{highlightedWord}"</div>
              </motion.div>
          )}
      </AnimatePresence>
    </main>
  );
}
