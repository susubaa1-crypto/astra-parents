"use client";

import { useState, useEffect } from "react";
import { diagnosticData } from "@/data/diagnosticData";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type ScreenState = "start" | "test" | "loading" | "result";

const CheckIcon = () => (
  <svg className="w-4 h-4 text-astra-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const SpinnerIcon = () => (
  <svg className="w-12 h-12 text-astra-gold animate-spin mb-6 mx-auto" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export default function DiagnosisPage() {
  const [screen, setScreen] = useState<ScreenState>("start");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);

  // 50문항을 10개씩 5페이지로 나눔
  const TOTAL_PAGES = 5;
  const itemsPerPage = 10;
  
  const currentItems = diagnosticData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const toggleSelection = (id: number) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleNextPage = () => {
    if (currentPage < TOTAL_PAGES - 1) {
      setCurrentPage(prev => prev + 1);
      // 리스트 상단으로 스크롤 이동
      const container = document.getElementById("test-scroll-container");
      if (container) container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      submitTest();
    }
  };

  const submitTest = () => {
    setScreen("loading");
    setTimeout(() => {
      setScreen("result");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2500);
  };

  // 분석 결과 계산
  let alertMsg = "";
  if (selectedIds.length <= 10) {
    alertMsg = "아주 훌륭합니다! 의식적으로 긍정언어를 사용하고 계십니다. 하지만 가끔 무의식적으로 튀어나온 한두 마디가 아이의 마음에 오래 남을 수 있으니 조금만 더 다듬어볼까요?";
  } else if (selectedIds.length <= 25) {
    alertMsg = "어머니가 무심코 뱉은 통제와 비교의 언어는 아이를 위축되게 만들 수 있습니다. 화낼 의도가 없었다면, 이제 언어의 '기술'이 필요할 때입니다.";
  } else {
    alertMsg = "⚠️ 위험 지수 높음! 무의식 중에 폭발하는 부정언어가 아이의 뇌에 큰 스트레스로 작용하고 있습니다. 내재된 분노를 다스리고 긍정언어로의 교정이 시급합니다!";
  }

  // 많이 쓴 부정언어 종류 파악 및 영향 도출
  const categoryAnalysis: Record<string, { title: string; impact: string }> = {
    "자율성": {
      title: "통제와 지시의 언어",
      impact: "엄마가 너무 많은 것을 억압하고 지시하면 아이는 스스로 생각하고 선택하는 힘을 잃어버리게 됩니다. 점점 수동적으로 변하거나, 반대로 강하게 엇나가며 극단적인 고집쟁이로 자랄 위험이 큽니다."
    },
    "연결": {
      title: "감정 차단의 언어",
      impact: "아이의 크고 작은 부정적 감정을 있는 그대로 수용해주지 않으면, 아이는 '내 감정은 중요하지 않구나'라고 느끼며 속으로 화를 억누릅니다. 이는 훗날 타인과 깊게 교감하고 건강하게 갈등을 푸는 공감 능력을 방해합니다."
    },
    "안전 확인": {
      title: "감정적 협박의 언어",
      impact: "규칙이 아니라 부모의 기분에 따라 감정적으로 혼내거나 협박하면, 아이는 항상 엄마의 눈치를 보며 불안감 속에 자랍니다. 내면에 올바른 원칙을 세우는 대신, 당장의 상황을 모면하려는 두려움과 거짓말만 학습하게 됩니다."
    },
    "에너지 고갈": {
      title: "죄책감 전가의 언어",
      impact: "엄마가 힘든 이유를 무의식중에 아이의 탓으로 돌리면, 아이는 '나 때문에 엄마가 불행해'라는 무거운 죄책감을 평생 떠안습니다. 이런 아이는 작은 실패나 갈등 앞에서도 쉽게 위축되고 자존감이 바닥으로 떨어지게 됩니다."
    },
    "조급함": {
      title: "비교와 재촉의 언어",
      impact: "타인과 비교하며 끊임없이 재촉하는 말은 아이가 평생 타인의 시선과 결과에만 매달리게 만듭니다. 온전히 내 속도에 맞춰 과정을 즐기는 행복이나, 넘어졌을 때 다시 일어설 수 있는 내면의 단단한 힘을 기를 수 없게 됩니다."
    }
  };

  const selectedData = diagnosticData.filter(t => selectedIds.includes(t.id));
  const categoryCounts: Record<string, number> = {
    "자율성": 0, "연결": 0, "안전 확인": 0, "에너지 고갈": 0, "조급함": 0
  };
  
  selectedData.forEach(item => {
    if (categoryCounts[item.category] !== undefined) {
      categoryCounts[item.category]++;
    }
  });

  let topCategory = "자율성";
  let maxCount = -1;
  Object.entries(categoryCounts).forEach(([cat, count]) => {
    if (count > maxCount) {
      maxCount = count;
      topCategory = cat;
    }
  });

  // 하나도 선택 안 한 경우를 대비한 기본값
  const analysisResult = maxCount > 0 ? categoryAnalysis[topCategory] : {
    title: "아주 건강한 언어",
    impact: "현재 어머니의 언어 습관은 아이를 정서적으로 매우 안정되게 만듭니다. 이 따뜻한 언어 습관을 끝까지 유지하는 것이 진정한 북극성을 찾는 길입니다."
  };

  // 사용자가 선택한 문항 중 대표 처방전 5개를 추출
  const prescribedItems = selectedData.slice(0, 5);

  return (
    <main className="min-h-[100dvh] bg-astra-navy flex flex-col items-center justify-center relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[url('/astra/north_star_banner.png')] opacity-[0.03] pointer-events-none mix-blend-screen bg-cover bg-center" />
      
      {/* Header Back Button */}
      <div className="absolute top-0 left-0 w-full p-6 z-50 pointer-events-auto flex justify-between items-center">
         <Link href="/" className="text-white/50 hover:text-white transition flex items-center gap-2 text-sm font-sans tracking-widest uppercase">
            <ArrowLeftIcon /> Home
         </Link>
      </div>

      <div className="w-full max-w-lg bg-white/5 backdrop-blur-xl border-y border-white/10 md:rounded-2xl min-h-[100dvh] md:min-h-0 md:h-[85vh] flex flex-col relative z-10 overflow-hidden shadow-2xl">
        
        <AnimatePresence mode="wait">
          
          {screen === "start" && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col p-8 md:p-12 overflow-y-auto custom-scrollbar"
            >
              <div className="text-5xl mb-6">🔍</div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight break-keep">
                내 무의식 속<br />부정언어 진단하기
              </h1>
              <p className="text-white/60 text-base leading-relaxed break-keep mb-8">
                나도 모르게 아이에게 상처 주는 말을 하고 있진 않을까요?<br/><br/>
                총 50개의 일상적인 상황 속에서 내가 무의식적으로 내뱉고 있는 부정언어를 확인해보세요.
              </p>
              
              <button 
                onClick={() => setScreen("test")}
                className="mt-auto w-full py-4 bg-astra-gold text-astra-navy font-bold text-lg rounded-xl hover:bg-astra-starlight transition shadow-[0_0_20px_rgba(217,187,123,0.3)]"
              >
                진단 시작하기
              </button>
            </motion.div>
          )}

          {screen === "test" && (
            <motion.div 
              key="test"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col h-full overflow-hidden"
            >
              <div className="p-6 md:p-8 shrink-0 border-b border-white/10 bg-white/5">
                <div className="h-1 bg-white/10 rounded-full w-full mb-6 relative overflow-hidden">
                  <motion.div 
                    key={`progress-${currentPage}`}
                    initial={{ width: `${((currentPage) / TOTAL_PAGES) * 100}%` }}
                    animate={{ width: `${((currentPage + 1) / TOTAL_PAGES) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute top-0 left-0 h-full bg-astra-gold rounded-full" 
                  />
                </div>
                <h2 className="text-xl font-bold text-white mb-2 break-keep">
                   페이지 {currentPage + 1} / {TOTAL_PAGES}
                </h2>
                <p className="text-sm text-white/50 break-keep">
                  다음 중 최근 일주일간 사용한 적 있는 문장을 솔직하게 모두 선택해주세요.
                </p>
              </div>

              <div id="test-scroll-container" className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 custom-scrollbar scroll-smooth">
                {currentItems.map(item => {
                  const isSelected = selectedIds.includes(item.id);
                  return (
                    <div 
                      key={item.id}
                      onClick={() => toggleSelection(item.id)}
                      className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                        isSelected 
                          ? "bg-astra-gold/10 border-astra-gold text-astra-gold" 
                          : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="font-medium pr-4 leading-snug break-keep">"{item.bad}"</span>
                      <div className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? "border-astra-gold bg-astra-gold" : "border-white/20"
                      }`}>
                         {isSelected && <CheckIcon />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-6 shrink-0 border-t border-white/10 bg-black/20">
                <button 
                  onClick={handleNextPage}
                  className="w-full py-4 bg-astra-gold text-astra-navy font-bold text-lg rounded-xl hover:bg-astra-starlight transition shadow-[0_0_20px_rgba(217,187,123,0.3)]"
                >
                  {currentPage < TOTAL_PAGES - 1 ? "다음 페이지로 넘어가기" : "최종 진단 결과 확인하기"}
                </button>
              </div>
            </motion.div>
          )}

          {screen === "loading" && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center p-8 text-center"
            >
              <SpinnerIcon />
              <h2 className="text-2xl font-bold text-white mb-3">무의식 언어 분석 중...</h2>
              <p className="text-white/60 break-keep">선택하신 {selectedIds.length}개의 문장이 아이에게 미치는 영향을 진단하고 있습니다.</p>
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
                
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/30 flex flex-col items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
                     <div className="text-3xl font-extrabold text-red-400">{selectedIds.length}</div>
                     <div className="text-xs text-white/50 font-medium">/ 50 문항</div>
                  </div>
                </div>

                {/* 하이라이트: 압도적으로 많이 쓰는 언어 유형 분석 */}
                <div className="mb-8">
                  <div className="text-astra-gold font-bold text-sm tracking-widest mb-3 text-center">어머니의 가장 큰 무의식적 습관은</div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 break-keep leading-tight text-center">
                    "{analysisResult.title}"
                  </h2>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left shadow-lg">
                    <h3 className="text-lg font-bold text-red-300 mb-3 flex items-center gap-2">
                       이런 말이 아이에게 미치는 영향
                    </h3>
                    <p className="text-white/80 text-[15px] leading-relaxed break-keep">
                      {analysisResult.impact}
                    </p>
                  </div>
                </div>

                <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg mb-10">
                  <p className="text-red-200 text-sm leading-relaxed break-keep">{alertMsg}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    💊 대표 맞춤형 처방전
                  </h3>
                  
                  {prescribedItems.length > 0 ? (
                    <div className="space-y-4">
                      {prescribedItems.map(item => (
                        <div key={item.id} className="bg-white/5 border border-white/10 rounded-xl p-5 shadow-lg">
                           <span className="inline-block px-2 py-1 bg-astra-starlight/20 text-astra-starlight text-xs font-bold rounded mb-3">
                             {item.category}: {item.type}
                           </span>
                           <p className="text-red-400 font-medium line-through text-sm mb-3">❌ "{item.bad}"</p>
                           <p className="text-astra-gold font-bold text-base">⭕ "{item.good}"</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center text-white/50">
                      선택하신 부정언어가 하나도 없습니다! 엄청난 부모님이시군요.
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => setShowModal(true)}
                  className="w-full inline-flex justify-center items-center py-4 bg-white text-astra-navy font-bold text-lg rounded-xl hover:bg-astra-starlight transition shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-4"
                >
                  무의식 긍정언어 배우기
                </button>
                
                <div className="text-center pb-4">
                  <button 
                    onClick={() => {
                        setSelectedIds([]);
                        setCurrentPage(0);
                        setScreen("start");
                    }}
                    className="text-white/40 text-sm font-medium hover:text-white transition underline underline-offset-4"
                  >
                    테스트 다시하기
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* 6기 모집 안내 팝업 모달 */}
        <AnimatePresence>
          {showModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={e => e.stopPropagation()}
                className="bg-astra-navy border border-astra-gold/30 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center relative"
              >
                <div className="w-16 h-16 bg-astra-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-astra-gold/20">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">6기 모집 준비 중</h3>
                <p className="text-white/70 text-[15px] leading-relaxed break-keep mb-6">
                  곧 6기를 모집 할 예정입니다.<br/>
                  조금만 기다려주시기 바랍니다.<br/>감사합니다.
                </p>
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-full py-4 bg-astra-gold text-astra-navy font-bold rounded-xl hover:bg-astra-starlight transition shadow-[0_0_15px_rgba(217,187,123,0.2)]"
                >
                  확인
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
