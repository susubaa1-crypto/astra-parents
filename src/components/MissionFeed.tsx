"use client";

import React from 'react';
import { Mission } from '../app/api/missions/route';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

interface MissionFeedProps {
  missions: Mission[];
  isLoading: boolean;
}

export default function MissionFeed({ missions, isLoading }: MissionFeedProps) {
  if (isLoading) {
    return (
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="w-full h-32 bg-astra-blue/50 animate-pulse rounded-2xl border border-white/5"></div>
        ))}
      </div>
    );
  }

  if (missions.length === 0) {
    return (
      <div className="w-full max-w-2xl mx-auto py-12 text-center text-ink-light bg-astra-navy/50 backdrop-blur-sm rounded-2xl shadow-sm border border-white/5">
        <p className="text-lg font-serif">아직 밤하늘에 새겨진 미션이 없습니다.</p>
        <p className="text-sm mt-2 text-ink-gray">첫 번째 빛나는 별이 되어보세요! ✨</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
      <h3 className="font-serif text-astra-glow text-lg mb-2 pl-2 tracking-wide">
        우리들의 북극성 피드 ({missions.length})
      </h3>
      
      {missions.map((mission) => (
        <div key={mission.id} className="bg-astra-blue/30 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/5 transition hover:border-astra-gold/30 hover:bg-astra-blue/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-astra-navy border border-astra-gold/50 text-astra-gold flex items-center justify-center font-bold text-xl shadow-[0_0_10px_rgba(217,187,123,0.1)]">
                {mission.name.slice(0, 1)}
              </div>
              <div>
                <p className="font-bold text-astra-starlight text-lg">{mission.name} 맘</p>
                <p className="text-xs text-ink-gray">
                  {formatDistanceToNow(new Date(mission.created_at), { addSuffix: true, locale: ko })}
                </p>
              </div>
            </div>
            <div className="bg-astra-navy/80 border border-astra-gold/40 text-astra-gold px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              Day {mission.day}
            </div>
          </div>
          
          <div className="text-ink-light whitespace-pre-wrap leading-relaxed font-light text-sm md:text-base">
            {mission.content}
          </div>
        </div>
      ))}
    </div>
  );
}
