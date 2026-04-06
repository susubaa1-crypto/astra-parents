"use client";

import React, { useState, useEffect } from 'react';
import { X, Search, Star } from 'lucide-react';
import { cohorts } from '../data/participants';
import { Mission } from '../app/api/missions/route';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

interface MyPortfolioModalProps {
  cohortId: number;
  onClose: () => void;
}

export default function MyPortfolioModal({ cohortId, onClose }: MyPortfolioModalProps) {
  const [selectedName, setSelectedName] = useState<string>('');
  const [missions, setMissions] = useState<Mission[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const cohortData = cohorts[cohortId];
  const participantList = cohortData ? cohortData.participants : [];

  useEffect(() => {
    if (selectedName) {
      const fetchAllMissions = async () => {
        setIsLoading(true);
        try {
          // Fetch all missions for this cohort without 'day' parameter
          const res = await fetch(`/api/missions?cohort=${cohortId}`, {
            cache: 'no-store',
            headers: { 'Pragma': 'no-cache' }
          });
          if (res.ok) {
            const data: Mission[] = await res.json();
            // Filter by name and sort by day ASC
            const myMissions = data
              .filter(m => m.name === selectedName)
              .sort((a, b) => a.day - b.day);
            setMissions(myMissions);
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchAllMissions();
    }
  }, [selectedName, cohortId]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-astra-navy/80 backdrop-blur-md">
      <div className="bg-astra-navy/90 border border-astra-gold/30 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-[0_0_50px_rgba(217,187,123,0.15)] relative overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-astra-blue/20">
          <h2 className="text-xl md:text-2xl font-serif text-astra-glow flex items-center gap-2">
            <Star className="w-6 h-6 text-astra-gold" /> 나의 북극성 별자리
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-ink-light hover:text-astra-gold transition rounded-full hover:bg-white/5"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar">
          
          {/* Name Selector */}
          <div className="bg-astra-blue/30 rounded-2xl p-6 border border-white/5">
            <p className="text-ink-light mb-3 font-medium">검색할 이름을 선택해주세요</p>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-astra-gold/50 w-5 h-5 pointer-events-none" />
              <select
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-astra-navy/80 border border-astra-gold/40 rounded-xl text-ink-light focus:outline-none focus:border-astra-gold appearance-none font-medium text-lg shadow-inner"
              >
                <option value="" disabled>이름을 선택하세요</option>
                {[...participantList].sort((a, b) => a.name.localeCompare(b.name)).map((p) => (
                  <option key={p.name} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Area */}
          {selectedName && (
            <div className="flex flex-col gap-6 mt-4">
              <h3 className="text-astra-glow font-serif text-lg tracking-wide pl-2 border-l-2 border-astra-gold">
                {selectedName} 님의 빛나는 기록들 ({missions.length}개)
              </h3>

              {isLoading ? (
                <div className="flex flex-col gap-4">
                  {[1, 2].map(i => (
                    <div key={i} className="w-full h-32 bg-astra-blue/50 animate-pulse rounded-2xl border border-white/5"></div>
                  ))}
                </div>
              ) : missions.length === 0 ? (
                <div className="py-12 flex flex-col items-center justify-center text-ink-gray bg-white/5 rounded-2xl border border-white/5 border-dashed">
                  <Star className="w-10 h-10 mb-4 opacity-20" />
                  <p>아직 등록된 기록이 없습니다. 오늘 첫 번째 별을 띄워보세요!</p>
                </div>
              ) : (
                <div className="flex flex-col gap-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-astra-gold/50 before:via-astra-gold/20 before:to-transparent">
                  {missions.map((mission, index) => (
                    <div key={mission.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-astra-navy bg-astra-gold text-astra-navy font-bold font-serif shadow-[0_0_15px_rgba(217,187,123,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        {mission.day}
                      </div>
                      
                      <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl bg-astra-blue/40 border border-white/10 backdrop-blur-md shadow-sm transition hover:border-astra-gold/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-astra-gold font-bold text-sm tracking-widest uppercase bg-astra-navy px-3 py-1 rounded-full border border-astra-gold/20">Day {mission.day}</span>
                          <span className="text-xs text-ink-gray font-light">{format(new Date(mission.created_at), 'MMM d일 HH:mm', { locale: ko })}</span>
                        </div>
                        <p className="text-ink-light text-sm md:text-base leading-relaxed whitespace-pre-wrap font-light">
                          {mission.content}
                        </p>
                        {mission.imageUrl && (
                          <div className="mt-4 rounded-xl overflow-hidden border border-white/10 max-h-64 flex justify-center bg-black/40">
                            <img src={mission.imageUrl} alt="Mission upload" className="object-cover max-w-full h-auto max-h-64 opacity-90 hover:opacity-100 transition duration-300" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
