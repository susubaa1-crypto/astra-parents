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
      "우리 오늘 하루도 정말 재미있는 일들로 가득 채워보자.",
      "네 예쁜 미소로 시작하는 아침이라 엄마 기분이 우주만큼 좋아.",
      "오늘 눈을 뜨자마자 네 생각에 혼자 몰래 웃었단다.",
      "우리 강아지 잘 잤어? 오늘 밤까지 마음껏 행복하자.",
      "오늘은 또 어떤 신나는 탐험이 우리를 기다리고 있을까?",
      "새가 짹짹 노래하는 것처럼 맑게 일어나줘서 참 고마워.",
      "마법 같은 하루가 시작됐네! 우리 기분 좋게 안아볼까?",
      "오늘 기분은 어때? 네가 웃으니까 온 세상이 밝아지는 것 같아.",
      "너와 함께 또 하루를 보낼 수 있다니 엄마는 참 행운아야.",
      "오늘도 엄마 옆에서 따뜻하게 아침을 맞아줘서 무척 든든해."
    ]
  },
  {
    category: "🍽️ 밥 먹을 때",
    color: "from-orange-500/20 to-yellow-500/5",
    words: [
      "맛있는 밥을 우리 가족이 다 함께 먹을 수 있어서 정말 감사해.",
      "이 당근이 식탁까지 오게 해 주신 농부 아저씨께 고맙지?",
      "네가 맛있게 먹는 모습만 봐도 엄만 가장 맛있는 걸 먹은 기분이야.",
      "오늘 밥 먹으면서 제일 재미있었던 이야기 하나씩 해볼까?",
      "이렇게 마주 앉아서 따뜻하게 밥 먹는 이 시간이 엄만 젤 행복해.",
      "이 맛있는 버섯이 뱃속에 들어가서 튼튼한 다리를 만들어주겠대!",
      "한 그릇 싹 비웠네! 네 몸이 건강해지는 소리가 들리는 것 같아.",
      "눈으로 보고 꼭꼭 씹는 맛을 느껴보며 우리 천천히 먹어볼까?",
      "맛이 어때? 이런 즐거운 표정으로 먹어주니 엄마 요리가 최고네.",
      "오늘 반찬 중에 어느 게 제일 마음에 들어? 다음에도 맛있게 해줄게."
    ]
  },
  {
    category: "👟 외출할 때",
    color: "from-green-500/20 to-emerald-500/5",
    words: [
      "오늘 밖에서 만날 예쁜 꽃들과 구름은 우릴 얼마나 반겨줄까?",
      "다녀오겠습니다! 우리 따뜻하고 아늑한 집아, 조금 이따가 만나.",
      "너의 하루가 반짝반짝 빛나길 엄마가 마음속으로 힘껏 응원할게.",
      "오늘 나가는 길에는 어떤 재미있는 일이 기다리고 있을지 기대돼!",
      "세상 속으로 씩씩하게 걸어 나가는 네 발걸음이 참 든든해.",
      "햇살이 너의 기분 좋은 하루를 응원하려고 따뜻하게 비춰주나 봐.",
      "실컷 탐험하고 와. 네가 넘어져도 엄마가 힘껏 안아줄 테니까.",
      "우리 집 문을 열고 나가는 순간, 오늘은 거대한 모험이 펼쳐질 거야.",
      "조심해서 즐겁게 놀고, 나중에 모이면 멋진 이야기 꼭 들려줘!",
      "안전하게 돌아오자. 우리 편안한 집이 여기서 기다리고 있어!"
    ]
  },
  {
    category: "🧩 놀이할 때",
    color: "from-purple-500/20 to-pink-500/5",
    words: [
      "네가 그릴 땐 세상에 없던 멋진 우주가 만들어지는 것 같아!",
      "안 맞아서 속상했지? 그래도 포기하지 않고 끝까지 해낸 게 대단해.",
      "너만의 새로운 규칙을 만들었구나. 천재적인 생각인데? 같이 하자.",
      "엄마랑 이렇게 웃으며 뒹굴뒹굴 노는 이 순간이 세상에서 제일 짜릿해.",
      "무너뜨려도 괜찮아. 우리 다시 쌓으면 아까보다 훨씬 튼튼해질 거야.",
      "네 상상 속 친구는 정말 특별해. 어디서 그런 재미있는 생각이 났어?",
      "이번엔 엄마가 질 거 같네. 네가 이렇게 멋지게 성장하다니!",
      "집중해서 관찰하는 그 눈빛 하나하나가 참 멋있고 기특하단다.",
      "엄만 원래 이 놀이를 안 좋아했는데, 네가 하니까 왜 이렇게 재밌지?",
      "조금 느려도 괜찮아. 너만의 속도로 찾아가는 게 가장 확실한 길이야."
    ]
  },
  {
    category: "🌙 잠들기 직전",
    color: "from-indigo-500/20 to-blue-900/10",
    words: [
      "네가 이 세상에 태어난 것만으로도 엄만 이미 가장 큰 선물을 받았어.",
      "혹시 오늘 엄마한테 속상한 일 있었어? 남은 서운함은 다 털고 푹 자자.",
      "오늘 최선을 다해 논 너의 예쁜 두 발에게도 수고했다고 토닥토닥 해주자.",
      "네가 해낸 일들 모두 잠자는 동안 반짝이는 별자리가 되어서 널 지켜줄 거야.",
      "오늘도 무사히 하루를 마칠 수 있어서, 그리고 네가 옆에 있어서 정말 감사해.",
      "마법 같은 꿈의 나라로 가볼까. 내일 일어날 땐 오늘보다 더 큰 아이가 될 거야.",
      "어떤 큰 실수를 하더라도 엄마는 우주가 끝날 때까지 널 믿고 널 사랑해.",
      "네가 웃을 때 세상도 행복했고, 네가 슬플 때 요정들도 같이 널 안아줬을 거야.",
      "휴~ 모든 걱정은 뱉어내자. 이제 따뜻하고 편안한 밤의 요정이 널 지켜줄 시간이야.",
      "너는 세상에 단 한 명뿐인 빛나고 소중한 존재야. 내일 아침 기쁜 마음으로 만나자."
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
