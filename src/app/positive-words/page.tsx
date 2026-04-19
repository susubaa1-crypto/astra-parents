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
      "우리 강아지, 오늘도 신나게 놀 준비 다 됐구나!",
      "네가 웃으면서 깨어나니까, 우리 집 전체가 환해지네.",
      "눈을 뜨자마자 네 예쁜 얼굴을 보니까 엄마는 벌써 행복해.",
      "오늘 하루도 우리 진짜 재미있게, 꽉 안아주며 보내자.",
      "오늘은 또 어떤 신기하고 재밌는 일을 해볼까? 넌 뭐든 잘할 거야.",
      "새가 짹짹 우는 아침처럼, 네 목소리를 들으니 엄마 마음도 사르르 녹아.",
      "오늘도 마법 같은 하루가 시작됐어. 기분 좋게 안아볼까?",
      "네가 숨 쉬고 내 옆에 있다는 것만으로도 엄만 세상을 다 가진 것 같아.",
      "네 곁에 있으면 엄마도 매일매일 호랑이 기운이 솟아나.",
      "맑은 샘물처럼 깨끗한 우리 아가, 오늘 아침도 상쾌하게 시작하자."
    ]
  },
  {
    category: "🍽️ 밥 먹을 때",
    color: "from-orange-500/20 to-yellow-500/5",
    words: [
      "맛있는 밥을 마주 앉아서 먹을 수 있어서 참 감사한 시간이야.",
      "이 작은 당근 당근 하나에도 고마운 마음을 아는 넌, 참 예쁜 마음을 가졌어.",
      "네가 오물오물 잘 먹는 것만 봐도 엄마는 배가 빵빵하게 부르네.",
      "오늘 밥상에서 제일 재미있는 이야기 한 바탕 해볼까?",
      "이렇게 눈 마주치며 따뜻하게 밥 먹는 이 순간이 엄마는 제일 좋아.",
      "이 맛있는 고기가 뱃속에 들어가서 코끼리처럼 튼튼한 다리를 만들어줄 거야!",
      "꼭꼭 씹어 먹으니까 몸도 마음도 쑥쑥 크는 소리가 들려.",
      "천천히 맛을 느끼면서 먹는 넌 참 멋쟁이야.",
      "음식을 맛있게 먹어주는 네 표정이 엄마한테는 최고의 상이야.",
      "맛있게 밥 싹싹 비우고, 우리 가족 모두 아프지 말고 건강하자."
    ]
  },
  {
    category: "👟 외출할 때",
    color: "from-green-500/20 to-emerald-500/5",
    words: [
      "우와, 바깥에 있는 예쁜 꽃이랑 나무들이 다 널 기다리고 있었나 봐!",
      "다녀오겠습니다~ 우리 포근한 집아, 조금 이따가 만나자.",
      "네가 가는 길에는 언제나 반짝반짝 좋은 일들만 가득할 거야.",
      "오늘 밖에서는 또 얼마나 재밌는 일이 널 짠! 하고 기다릴까?",
      "당당하고 씩씩하게 걸어 나가는 네 발걸음, 진짜 멋진 대장님 같아.",
      "햇살이 널 비춰주는 걸 보니, 오늘 하루도 엄청 신날 것 같아.",
      "넘어져도 툭툭 털고 일어날 수 있어. 엄마가 언제나 안아줄 거니까.",
      "현관문을 열면 넌 탐험가야. 마음껏 구경하고 신나게 놀다 오자.",
      "오늘 하루 최고로 재밌게 놀고 와! 이따가 엄청난 이야기 꼭 들려줘.",
      "안전하게 길 잘 찾고 걷는 걸 보니 엄마가 마음이 참 든든해."
    ]
  },
  {
    category: "🧩 놀이할 때",
    color: "from-purple-500/20 to-pink-500/5",
    words: [
      "스스로 해보려고 입술 꼭 깨물고 집중하는 모습이 정말 멋지다!",
      "마음대로 안 될 때도 포기하지 않고 지혜롭게 척척 해내는 넌 진짜 최고야.",
      "어떻게 이런 생각을 했어? 네 머릿속에는 재미있는 엉뚱 상자가 있나 봐.",
      "엄마랑 이렇게 바닥에서 뒹굴거리면서 웃는 이 시간이 세상에서 젤 행복해.",
      "공들여 쌓은 탑이 무너져도 괜찮아. 넌 더 튼튼하게 다시 쌓을 힘이 있어.",
      "네가 만든 거 진짜 기발하다. 다음엔 또 어떤 멋진 걸 만들어낼지 기대돼.",
      "이런 것도 똑 부러지게 해내는 걸 보면 엄마는 매일매일 깜짝 놀라.",
      "작은 블록 조각 하나도 꼼꼼히 살피는 네 눈빛이 너무 기특해.",
      "재미없을 뻔한 놀이도 네가 같이하니까 갑자기 엄청 신나지네.",
      "남들보다 빨라도 느려도 너무 괜찮아. 네가 하고 싶은 속도대로 즐겁게 하면 돼."
    ]
  },
  {
    category: "🌙 잠들기 직전",
    color: "from-indigo-500/20 to-blue-900/10",
    words: [
      "네가 우리 아이로 태어나줘서 엄마는 내 인생 최고의 선물을 받았어.",
      "혹시 오늘 속상한 일 있었어? 엄마 품에서 툭툭 털어버리고 우리 예쁘게 자자.",
      "하루 종일 다람쥐처럼 뛰어논 우리 애기 두 발아, 푹 쉬렴~ 토닥토닥.",
      "오늘도 넌 네가 다녀간 모든 자리를 기분 좋게, 반짝반짝 빛나게 만들어 주었단다.",
      "오늘 하루도 재밌게 보내고 다치지 않아서 참 고맙고, 사랑해.",
      "꿈나라로 슝~ 여행 다녀와! 아침에 눈 뜨면 넌 더 쑥쑥 큰 씩씩한 아이가 돼 있을 거야.",
      "네가 크게 실수를 한다 해도, 엄마는 온 세상 끝나는 날까지 너만 찰떡같이 믿고 사랑해.",
      "오늘 우리 배꼽 잡고 낄낄 웃었던 일 생각하면서, 기분 좋 게 눈 감아볼까?",
      "이제 모든 짜증이랑 생각 다 내려놓고 푹 쉬어. 여긴 제일 푹신하고 안전한 엄마 품이야.",
      "넌 세상 무엇과도 바꿀 수 없이 귀하고 소중해. 예쁜 꿈 꿔, 사랑한다."
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
