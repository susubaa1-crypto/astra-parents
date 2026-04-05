"use client";

import React, { useState, useEffect } from 'react';
import MissionForm from '../../components/MissionForm';
import MissionFeed from '../../components/MissionFeed';
import { Navigation } from '../../components/Navigation';
import { Mission } from '../api/missions/route';
import { cohorts } from '../../data/participants';
import { Lock } from 'lucide-react';

export default function MissionsPage() {
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [missions, setMissions] = useState<Mission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentCohort, setCurrentCohort] = useState<number>(5);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const savedCohort = localStorage.getItem('astra_cohort');
    if (savedCohort && cohorts[parseInt(savedCohort, 10)]) {
      setCurrentCohort(parseInt(savedCohort, 10));
      setIsAuthenticated(true);
    }
  }, []);

  const fetchMissions = async (day: number, cohortId: number) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/missions?day=${day}&cohort=${cohortId}`);
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
    } else {
      setAuthError('참여하신 기수의 비밀번호가 올바르지 않습니다.');
    }
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
        </main>
      ) : (
        <>
          {/* Header */}
          <header className="relative z-10 pt-[30vh] md:pt-[40vh] pb-[15vh] px-6 text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-serif text-astra-glow mb-4 tracking-[0.3em] uppercase drop-shadow-[0_0_15px_rgba(217,187,123,0.5)]">
              ASTRA PARENTS
            </h1>
            <div className="bg-astra-gold/10 text-astra-gold border border-astra-gold/30 px-4 py-1 rounded-full text-xs tracking-widest mb-6 font-bold">
              {cohorts[currentCohort]?.title} 채널
            </div>
            <p className="text-ink-light font-light text-[17px] md:text-xl tracking-wide max-w-2xl mx-auto leading-relaxed">
              우리 아이들이 엄마가 없어도 세상 속에서 길을 잃지 않도록,<br />단단한 북극성을 세워가는 {currentDay}일차 여정 🌟
            </p>
          </header>

          {/* Tabs */}
          <div className="relative z-10 w-full max-w-3xl mx-auto px-4 mb-10">
            <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-4 px-2">
              {Array.from({ length: 18 }, (_, i) => i + 1).map((day) => (
                <button
                  key={day}
                  onClick={() => handleDaySelect(day)}
                  className={`flex-shrink-0 px-6 py-2.5 rounded-full font-serif text-sm tracking-widest transition-all duration-300 border ${
                    currentDay === day
                      ? 'bg-astra-gold text-astra-navy border-astra-gold shadow-[0_0_15px_var(--color-astra-glow)] transform scale-105 font-bold'
                      : 'bg-astra-blue/50 text-ink-light border-white/10 hover:bg-astra-blue hover:text-astra-gold backdrop-blur-sm'
                  }`}
                >
                  Day {day}
                </button>
              ))}
            </div>
          </div>

          <main className="relative z-10 px-4">
            <MissionForm currentDay={currentDay} onMissionSubmit={onMissionSubmit} cohortId={currentCohort} />
            <MissionFeed missions={missions} isLoading={isLoading} />
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
