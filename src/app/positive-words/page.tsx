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
      "오늘도 푹 자고 일어나줘서 고마워!",
      "우리 아기 냄새 맡으니까 엄마 기분이 최고다.",
      "어젯밤 꾼 꿈 중에서 제일 재미있는 부분이 뭐였어?",
      "기지개 쭉쭉! 오늘 하루도 재미있게 놀아보자.",
      "오늘 아침 햇살이 우리 OO이 웃음처럼 반짝이네!",
      "밤새 쑥쑥 크느라 고생했어, 꾹꾹 안아줄게.",
      "기분 좋게 일어나줘서 오늘 하루가 정말 기대된다.",
      "아침에 네 얼굴을 보니까 에너지가 솟아나는 것 같아.",
      "오늘 아침은 어떤 색깔 기분이야?",
      "눈 번쩍 떴네! 우리 가족의 비타민이 일어났다."
    ]
  },
  {
    category: "🍽️ 밥 먹을 때",
    color: "from-orange-500/20 to-yellow-500/5",
    words: [
      "오물오물 먹는 입술이 너무 예뻐.",
      "이 브로콜리가 뱃속에 들어가서 OO이 키를 쑥쑥 크게 해주겠대!",
      "오늘 반찬 중에 어떤 게 제일 마음에 들어?",
      "냠냠 소리를 들으니까 엄마도 배가 고파지네.",
      "꼭꼭 씹어서 먹는 모습이 아주 늠름한데?",
      "네가 맛있게 먹어주니까 요리한 보람이 난다.",
      "배부르면 그만 먹어도 괜찮아. 네 배의 크기는 네가 제일 잘 아니까.",
      "이 당근 먹고 눈이 반짝반짝 빛나나 볼까?",
      "오늘 밥상에서 제일 재미있게 생긴 반찬은 뭐야?",
      "같이 마주 보고 밥 먹는 이 시간이 엄마는 참 좋아."
    ]
  },
  {
    category: "👟 외출할 때",
    color: "from-green-500/20 to-emerald-500/5",
    words: [
      "오늘 바깥 날씨는 우리 OO이가 제일 좋아하는 바람이 부네.",
      "스스로 신발 찍찍이 붙인 거야? 혼자서도 척척이네!",
      "이 옷 입으니까 진짜 멋진 탐험대 같다!",
      "오늘 밖에서 어떤 재미있는 일이 우리를 기다릴까?",
      "준비 시간이 길어져도 괜찮아. 엄마가 기다려줄게.",
      "손 꽉 잡고 가니까 하나도 안 무섭지?",
      "네가 먼저 가볼래? 엄마가 뒤에서 든든하게 따라갈게.",
      "어디로 갈지 네가 한 번 길을 골라볼까?",
      "하늘 구름 모양이 뭐랑 닮았는지 같이 찾아보자.",
      "안전하게 엄마 옆에 딱 붙어 있어줘서 참 고마워."
    ]
  },
  {
    category: "🧩 놀이할 때",
    color: "from-purple-500/20 to-pink-500/5",
    words: [
      "우와, 이 블록으로 그렇게 높은 탑을 쌓을 생각을 했어?",
      "네가 그리는 그림은 색깔이 참 따뜻해서 기분이 좋아져.",
      "실패해도 괜찮아. 다시 한 번 해볼 수 있는 기회가 생겼네!",
      "네가 만든 규칙대로 엄마가 따라 해볼게. 알려줄래?",
      "집중해서 입술이 톡 튀어나온 모습이 너무 사랑스러워.",
      "네 상상력 덕분에 엄마도 새로운 세상에 놀러 온 기분이야.",
      "망가져도 다시 만들면 돼. 아까보다 더 멋지게 될지도 몰라.",
      "정말 재미있게 노네. 엄마도 너처럼 재밌게 놀고 싶어!",
      "이 장난감이 네 손에 들어가면 요술이라도 부리는 것 같아.",
      "놀고 난 다음엔 같이 즐겁게 치워볼까? 누가 더 빨리 치우나 대결!"
    ]
  },
  {
    category: "🌙 잠들기 직전",
    color: "from-indigo-500/20 to-blue-900/10",
    words: [
      "오늘 하루 최선을 다해 신나게 놀았으니 밤새 푹 쉬렴.",
      "네가 잠든 모습 위로 요정들이 별가루를 뿌려주고 있대.",
      "오늘 하루 중 언제 네가 제일 크게 웃었더라?",
      "엄마는 내일 아침에 너랑 눈 마주칠 시간이 벌써 기다려져.",
      "오늘은 화내지 않고 예쁘게 말해줘서 정말 고마웠어.",
      "무서운 꿈 꾸면 엄마가 마법 지팡이로 다 물리쳐 줄게. 얍!",
      "하루 종일 부지런히 움직인 발가락들한테 인사하자. 안녕, 잘 자!",
      "네 배 위에 엄마 손바닥 올려두니까 참 따뜻하지?",
      "오늘 하루도 건강하게 자라줘서 너무 너무 고맙고 사랑해.",
      "세상에서 제일 달콤한 꿈꿔. 굿나잇."
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
