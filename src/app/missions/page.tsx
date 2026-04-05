"use client";

import React, { useState, useEffect } from 'react';
import MissionForm from '../../components/MissionForm';
import MissionFeed from '../../components/MissionFeed';
import { Navigation } from '../../components/Navigation';
import { Mission } from '../api/missions/route';

export default function MissionsPage() {
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [missions, setMissions] = useState<Mission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMissions = async (day: number) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/missions?day=${day}`);
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
    fetchMissions(currentDay);
  }, [currentDay]);

  const handleDaySelect = (day: number) => {
    setCurrentDay(day);
  };

  const onMissionSubmit = () => {
    fetchMissions(currentDay);
  };

  return (
    <div className="min-h-screen bg-astra-navy text-astra-starlight font-sans pb-20 relative overflow-hidden">
      {/* Background Starry Image */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: "url('/astra/north_star_banner.png')", backgroundSize: "cover", backgroundPosition: "center top", backgroundAttachment: "fixed" }}></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-astra-navy pointer-events-none"></div>

      <Navigation />
      
      {/* Header */}
      <header className="relative z-10 pt-[30vh] md:pt-[40vh] pb-[15vh] px-6 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-serif text-astra-glow mb-6 tracking-[0.3em] uppercase drop-shadow-[0_0_15px_rgba(217,187,123,0.5)]">
          ASTRA PARENTS
        </h1>
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
        <MissionForm currentDay={currentDay} onMissionSubmit={onMissionSubmit} />
        <MissionFeed missions={missions} isLoading={isLoading} />
      </main>
      
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
