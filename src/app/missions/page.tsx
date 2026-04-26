"use client";

import React, { useState, useEffect } from 'react';
import MissionForm from '../../components/MissionForm';
import MissionFeed from '../../components/MissionFeed';
import { Navigation } from '../../components/Navigation';
import { Mission } from '../api/missions/route';
import { cohorts } from '../../data/participants';
import { Lock, LogOut, Star, ClipboardList } from 'lucide-react';
import Link from 'next/link';
import MyPortfolioModal from '../../components/MyPortfolioModal';

// 시작일로부터 며칠차 과제인지 계산하는 헬퍼 함수 (라이브 강의 휴식일 고려)
const calculateMissionDay = (startDate: string) => {
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime = today.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  
  if (diffDays <= 0) return 1;
  
  let missionDay = diffDays;
  if (diffDays === 7) {
    // 4월 12일 (휴식일) -> 6일차 문제 노출
    missionDay = 6;
  } else if (diffDays > 7 && diffDays <= 13) {
    // 4월 13일 ~ 4월 18일 -> 7일차 ~ 12일차
    missionDay = diffDays - 1;
  } else if (diffDays === 14) {
    // 4월 19일 (휴식일) -> 12일차 문제 노출
    missionDay = 12;
  } else if (diffDays > 14) {
    // 4월 20일 이후 -> 13일차 ~ 18일차
    missionDay = diffDays - 2;
  }
  
  return missionDay > 18 ? 18 : missionDay;
};

// 며칠차인지 기반으로 해당 날짜 텍스트를 반환하는 헬퍼 함수
const getDateStringForDay = (day: number, startDateStr?: string) => {
  if (!startDateStr) return '';
  
  // 강제로 KST 시간 기준으로 생성하여 오차 방지
  const safeDateStr = startDateStr.includes('T') ? startDateStr : `${startDateStr}T00:00:00+09:00`;
  const date = new Date(safeDateStr);
  
  let offset = day - 1;
  if (day >= 7) offset += 1; // 4/12 휴식
  if (day >= 13) offset += 1; // 4/19 휴식
  
  date.setDate(date.getDate() + offset);
  
  const month = date.getMonth() + 1;
  const dateNum = date.getDate();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = days[date.getDay()];
  
  return `${month}/${dateNum}(${dayName})`;
};

export default function MissionsPage() {
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [missions, setMissions] = useState<Mission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentCohort, setCurrentCohort] = useState<number>(5);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const savedCohort = localStorage.getItem('astra_cohort');
    if (savedCohort && cohorts[parseInt(savedCohort, 10)]) {
      const cohortId = parseInt(savedCohort, 10);
      setCurrentCohort(cohortId);
      setIsAuthenticated(true);
      
      const cohortData = cohorts[cohortId];
      if (cohortData.startDate) {
        setCurrentDay(calculateMissionDay(cohortData.startDate));
      }
    }
  }, []);

  const fetchMissions = async (day: number, cohortId: number) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/missions?day=${day}&cohort=${cohortId}`, {
        cache: 'no-store',
        headers: {
          'Pragma': 'no-cache'
        }
      });
      if (res.ok) {
        const data = await res.json();
        setMissions(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchMissions(currentDay, currentCohort);
    }
  }, [currentDay, isAuthenticated, currentCohort]);

  const handleDaySelect = (day: number) => {
    setCurrentDay(day);
  };

  const onMissionSubmit = () => {
    fetchMissions(currentDay, currentCohort);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const matchedCohort = Object.values(cohorts).find(c => c.password === password);
    if (matchedCohort) {
      setCurrentCohort(matchedCohort.id);
      localStorage.setItem('astra_cohort', matchedCohort.id.toString());
      setIsAuthenticated(true);
      
      if (matchedCohort.startDate) {
        setCurrentDay(calculateMissionDay(matchedCohort.startDate));
      } else {
        setCurrentDay(1);
      }
    } else {
      setAuthError('참여하신 기수의 비밀번호가 올바르지 않습니다.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('astra_cohort');
    setIsAuthenticated(false);
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-astra-navy text-astra-starlight font-sans pb-20 relative overflow-hidden">
      {/* Background Starry Image */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: "url('/astra/north_star_banner.png')", backgroundSize: "cover", backgroundPosition: "center top", backgroundAttachment: "fixed" }}></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-astra-navy pointer-events-none"></div>

      <Navigation />
      
      {!isAuthenticated ? (
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4">
          <div className="bg-astra-navy/60 backdrop-blur-md p-10 rounded-2xl border border-astra-gold/20 shadow-[0_0_40px_rgba(217,187,123,0.1)] max-w-md w-full text-center">
            <div className="w-16 h-16 bg-astra-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="text-astra-gold w-8 h-8" />
            </div>
            <h1 className="text-2xl md:text-3xl font-serif text-astra-glow mb-2 tracking-[0.2em] uppercase">
              MISSIONS
            </h1>
            <p className="text-ink-light text-sm mb-8 tracking-wide font-light">
              진행 중인 기수 채널의 비밀번호를 입력해주세요.
            </p>
            
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호 입력"
                className="w-full px-4 py-3 bg-astra-navy/50 border border-white/10 rounded-xl focus:outline-none focus:border-astra-gold focus:ring-1 focus:ring-astra-gold text-center tracking-widest text-astra-starlight"
              />
              {authError && <p className="text-red-400 text-xs">{authError}</p>}
              <button 
                type="submit"
                className="w-full mt-2 bg-astra-gold hover:bg-astra-glow text-astra-navy font-bold py-3.5 rounded-xl transition-all tracking-widest uppercase shadow-[0_0_15px_rgba(217,187,123,0.2)]"
              >
                입장하기
              </button>
            </form>
          </div>

          {/* Survey CTA */}
          <Link 
            href="/survey"
            className="mt-6 flex items-center gap-3 px-6 py-4 rounded-2xl border border-astra-gold/20 bg-astra-navy/40 backdrop-blur-sm text-astra-gold hover:bg-astra-gold/10 hover:border-astra-gold/40 transition-all duration-300 group max-w-md w-full"
          >
            <ClipboardList size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="text-left">
              <p className="text-sm font-serif tracking-wider">강의 만족도 설문하기</p>
              <p className="text-[11px] text-ink-gray font-sans">3분이면 충분해요 💛</p>
            </div>
          </Link>
        </main>
      ) : (
        <>
          <div className="absolute top-24 right-4 md:right-8 z-50">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 p-2 md:px-4 rounded-full bg-astra-navy/40 border border-white/10 text-ink-gray hover:text-astra-white hover:border-white/30 transition-colors text-[11px] md:text-xs font-sans tracking-widest backdrop-blur-md"
            >
              <LogOut size={14} /> <span className="hidden md:inline">로그아웃</span>
            </button>
          </div>
          
          {/* Header */}
          <header className="relative z-10 pt-[30vh] md:pt-[40vh] pb-[15vh] px-6 text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-serif text-astra-glow mb-4 tracking-[0.3em] uppercase drop-shadow-[0_0_15px_rgba(217,187,123,0.5)]">
              ASTRA PARENTS
            </h1>
            <div className="bg-astra-gold/10 text-astra-gold border border-astra-gold/30 px-4 py-1 rounded-full text-xs tracking-widest mb-6 font-bold">
              {cohorts[currentCohort]?.title} 채널
            </div>
            <p className="text-ink-light font-light text-[17px] md:text-xl tracking-wide max-w-2xl mx-auto leading-relaxed">
              우리 아이들이 엄마가 없어도 세상 속에서 길을 잃지 않도록,<br />단단한 북극성을 세워가는 21일 여정 🌟
            </p>
          </header>

          {/* Tabs */}
          <div className="relative z-10 w-full max-w-3xl mx-auto px-4 mb-10">
            <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-4 px-2">
              {Array.from({ length: 18 }, (_, i) => i + 1).map((day) => {
                const dateStr = getDateStringForDay(day, cohorts[currentCohort]?.startDate);
                return (
                  <button
                    key={day}
                    onClick={() => handleDaySelect(day)}
                    className={`flex-shrink-0 px-5 py-2 rounded-[20px] font-serif tracking-widest transition-all duration-300 border flex flex-col items-center gap-0.5 min-w-[80px] ${
                      currentDay === day
                        ? 'bg-astra-gold text-astra-navy border-astra-gold shadow-[0_0_15px_var(--color-astra-glow)] transform scale-105 font-bold'
                        : 'bg-astra-blue/50 text-ink-light border-white/10 hover:bg-astra-blue hover:text-astra-gold backdrop-blur-sm'
                    }`}
                  >
                    <span className="text-sm">Day {day}</span>
                    <span className={`text-[10px] font-sans font-light tracking-[0.05em] ${currentDay === day ? 'text-astra-navy/80 font-semibold' : 'text-ink-gray'}`}>
                      {dateStr}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <main className="relative z-10 px-4 flex flex-col gap-8">
            <MissionForm currentDay={currentDay} onMissionSubmit={onMissionSubmit} cohortId={currentCohort} />

            <div className="w-full max-w-2xl mx-auto flex justify-center md:justify-end mb-2">
              <button
                onClick={() => setIsPortfolioOpen(true)}
                className="flex items-center gap-2 px-6 py-3 bg-astra-navy/60 border border-astra-gold/40 rounded-full text-astra-gold hover:bg-astra-blue/50 hover:border-astra-gold hover:-translate-y-1 transition-all duration-300 font-serif shadow-[0_0_15px_rgba(217,187,123,0.2)] tracking-widest text-sm"
              >
                <Star className="w-[18px] h-[18px]" /> 나의 북극성 모아보기 &gt;
              </button>
            </div>

            <MissionFeed missions={missions} isLoading={isLoading} />

            {isPortfolioOpen && (
              <MyPortfolioModal cohortId={currentCohort} onClose={() => setIsPortfolioOpen(false)} />
            )}
          </main>
        </>
      )}
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
