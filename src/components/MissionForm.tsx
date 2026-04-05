"use client";

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { participants } from '../data/participants';

interface MissionFormProps {
  currentDay: number;
  onMissionSubmit: () => void;
}

export default function MissionForm({ currentDay, onMissionSubmit }: MissionFormProps) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) return;

    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/missions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ day: currentDay, name, content })
      });

      if (res.ok) {
        setIsSuccess(true);
        setContent('');
        // We keep the name so the user doesn't have to re-select it next time
        onMissionSubmit();
        
        // Reset success state after 3s
        setTimeout(() => setIsSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Failed to submit mission", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-astra-blue/40 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border border-white/5 mb-8 max-w-2xl mx-auto w-full">
      <h3 className="font-serif text-xl text-astra-glow mb-6 flex items-center gap-2">
        <span>✨</span> 나의 Day {currentDay} 미션 인증하기
      </h3>
      
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-10 text-astra-gold animate-in fade-in zoom-in duration-500">
          <CheckCircle2 size={56} className="mb-4 drop-shadow-[0_0_10px_var(--color-astra-glow)]" />
          <p className="font-serif text-lg tracking-wide">미션 인증 완료! 북극성이 하나 더 빛납니다 🌟</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-sans tracking-wide text-ink-light">이름</label>
            <select 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 bg-astra-navy/50 border border-white/10 rounded-xl focus:outline-none focus:border-astra-gold focus:ring-1 focus:ring-astra-gold text-astra-starlight appearance-none"
              required
            >
              <option value="" disabled>이름을 선택해주세요</option>
              {participants.map((p, idx) => (
                <option key={idx} value={p.name} className="bg-astra-navy text-astra-starlight">{p.name} ({p.phone.slice(-4)})</option>
              ))}
            </select>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="content" className="text-sm font-sans tracking-wide text-ink-light">미션 내용</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="우리 집만의 문화를 만들기 위한 오늘의 시도를 적어주세요."
              className="px-4 py-4 bg-astra-navy/50 border border-white/10 rounded-xl focus:outline-none focus:border-astra-gold focus:ring-1 focus:ring-astra-gold min-h-[140px] resize-y text-astra-starlight placeholder:text-ink-gray"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting || !name || !content}
            className="mt-4 bg-astra-gold hover:bg-astra-glow disabled:opacity-50 text-astra-navy font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 tracking-wide font-sans shadow-[0_0_15px_rgba(217,187,123,0.2)] hover:shadow-[0_0_25px_var(--color-astra-glow)] transform hover:-translate-y-1"
          >
            {isSubmitting ? '밤하늘에 새기는 중...' : (
              <>인증하기 <Send size={18} /></>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
