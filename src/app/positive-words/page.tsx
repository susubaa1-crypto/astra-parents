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
      "오늘도 새로운 하루가 시작되었어. 진짜 감사해.",
      "오늘은 얼마나 좋은 일이 생길까. 너무 기대된다.",
      "너의 행복한 하루를 응원하고 기도할게. 사랑해.",
      "우리가 건강하게 아침을 맞이할 수 있어서 참 다행이야.",
      "네가 기분 좋게 일어나주어서 아침 공기가 더 상쾌해.",
      "오늘 하루도 너는 네가 원하는 대로 멋지게 보낼 수 있어.",
      "네가 눈을 뜰 때 엄마는 가장 큰 벅찬 행복을 느껴.",
      "오늘도 너와 함께 보낼 수 있는 시간이 주어져서 설레.",
      "우리 가족에게 허락된 이 하루를 소중하게 꽉 채워보자.",
      "네가 가는 길마다 아주 따뜻한 일들이 기다리고 있을 거야."
    ]
  },
  {
    category: "🍽️ 밥 먹을 때",
    color: "from-orange-500/20 to-yellow-500/5",
    words: [
      "가족이 모여 함께 밥을 먹을 수 있어서 정말 감사해.",
      "이 음식이 우리에게 오기까지 애써주신 분들께 감사하자.",
      "네가 건강하게 먹는 모습을 보는 것만으로도 배가 불러.",
      "오늘 식탁에서는 어떤 즐거운 이야기를 나누게 될까 기대돼.",
      "우리가 함께 나누는 이 시간이 하루 중 가장 소중한 시간이야.",
      "이 밥을 먹고 우리는 매일 더 건강해지고 지혜로워질 거야.",
      "천천히 맛을 느끼면서 음식에 담긴 깊은 정성을 생각해 보자.",
      "네가 맛있게 먹으니 엄마의 수고가 눈 녹듯 싹 사라지고 기뻐.",
      "음식을 남기지 않고 온전하게 감사히 먹어주어서 정말 고마워.",
      "이 건강한 힘으로 우리 가족 오늘 하루도 씩씩하게 살아내자."
    ]
  },
  {
    category: "👟 외출할 때",
    color: "from-green-500/20 to-emerald-500/5",
    words: [
      "오늘 밖에서 만날 새로운 세상이 너를 반갑게 반겨줄 거야.",
      "다녀오겠습니다. 우리 집아, 오늘도 우리를 안전하게 지켜주어 고마워.",
      "네가 가는 모든 발걸음을 엄마가 뒤에서 묵묵히 응원할게.",
      "밖에서 어떤 재미있는 일들을 만나게 될지 너무너무 기대된다.",
      "세상 속으로 걸어 나가는 네 모습이 참 든든하고 자랑스러워.",
      "오늘의 따뜻한 햇살이 너의 하루를 아주 포근하게 비춰줄 거야.",
      "어떤 일을 만나도 넌 슬기롭게 잘 이겨낼 수 있을 거라 굳게 믿어.",
      "언제든 세상 밖에서 신나게 탐험하고 안전하게 돌아오렴.",
      "오늘 하루 최선을 다해 즐겁게 지내. 이따 만나서 재밌는 이야기하자.",
      "네가 안전하게 돌아올 때까지 편안한 우리 집이 널 기다릴 거야."
    ]
  },
  {
    category: "🧩 놀이할 때",
    color: "from-purple-500/20 to-pink-500/5",
    words: [
      "네가 무언가에 푹 빠져 집중하는 모습은 언제 봐도 참 단단하고 멋져.",
      "마음대로 되지 않을 때 끈기 있게 스스로 다시 해보는 널 진심으로 응원해.",
      "네 머릿속에 있는 다양하고 멋진 생각들을 이렇게 꺼내어주어서 고마워.",
      "너와 함께 크게 웃고 교감하는 이 시간이 엄마는 정말 행복하단다.",
      "망가져도 괜찮아. 우리는 실패해도 언제든 늘 새롭게 시작할 수 있어.",
      "네가 만들어내는 작은 결과물 하나하나가 세상에 하나뿐이라 참 소중해.",
      "스스로 답을 찾아가는 아름다운 과정을 지켜보는 게 엄마의 가장 큰 기쁨이야.",
      "너의 작은 시도와 도전 하나하나가 모여 널 더 굳건하고 단단하게 만들 거야.",
      "함께 놀이하면서 우리 아이의 멋진 새로운 모습을 발견할 수 있어 깊이 감사해.",
      "남들과 비교하지 않고 너만의 속도로 천천히 해나가는 널 언제나 온전히 존중해."
    ]
  },
  {
    category: "🌙 잠들기 직전",
    color: "from-indigo-500/20 to-blue-900/10",
    words: [
      "네가 내 곁에 존재한다는 사실 하나만으로 엄마는 세상 모든 걸 다 이루었어.",
      "오늘 하루 속상했던 마음이 있다면 모두 훌훌 털어버리고 지금부턴 편안하게 쉬자.",
      "오늘 하루도 정말 애썼어. 부지런히 움직여준 너의 훌륭한 몸도 푹 쉬게 해주렴.",
      "오늘도 변함없이 너의 예쁜 마음 덕분에 우리가 머문 모든 자리가 빛이 났어.",
      "우리 가족 모두가 안전하게 오늘 하루를 마무리할 수 있어서 진심으로 감사해.",
      "이제 모든 걱정은 잠시 내려놓고 푹 자자. 내일은 눈부시게 더 좋은 하루가 시작될 거야.",
      "네가 어떤 순간을 맞이하더라도 엄마는 늘 변함없이 널 있는 그대로 지지하고 사랑해.",
      "눈을 감고 오늘 하루 가장 감사했던 작고 소중한 기억 하나만 떠올리면서 편하게 자볼까.",
      "너는 무언가를 증명하지 않아도, 존재 자체만으로 충분히 사랑받아 마땅한 고귀한 사람이야.",
      "세상에서 제일 소중한 내 아이야. 가장 따뜻하고 평안하게 깊고 달콤한 잠에 들렴."
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
