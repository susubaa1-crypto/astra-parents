"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Send, CheckCircle2, Camera, X } from 'lucide-react';
import { participants } from '../data/participants';
import { curriculumMissions } from '../data/curriculum';

interface MissionFormProps {
  currentDay: number;
  onMissionSubmit: () => void;
}

export default function MissionForm({ currentDay, onMissionSubmit }: MissionFormProps) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 현재 선택된 날짜(currentDay)에 맞는 미션 데이터 가져오기
  const currentMission = useMemo(() => {
    return curriculumMissions.find(m => m.day === currentDay);
  }, [currentDay]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("사진 용량은 5MB 이하만 가능합니다.");
        return;
      }
      setImageFile(file);
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) return;

    setIsSubmitting(true);
    
    try {
      let uploadedImageUrl = undefined;

      // 1. 이미지가 있으면 먼저 Vercel Blob에 업로드
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const safeFileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const blobRes = await fetch(`/api/upload?filename=${safeFileName}`, {
          method: 'POST',
          body: imageFile,
        });

        if (!blobRes.ok) {
          throw new Error('Image upload failed');
        }

        const blobData = await blobRes.json();
        uploadedImageUrl = blobData.url;
      }

      // 2. 미션 데이터 업로드 (이미지 URL 포함)
      const res = await fetch('/api/missions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ day: currentDay, name, content, imageUrl: uploadedImageUrl })
      });

      if (res.ok) {
        setIsSuccess(true);
        setContent('');
        removeImage(); // 이미지 초기화
        
        onMissionSubmit();
        
        setTimeout(() => setIsSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Failed to submit mission", error);
      alert("업로드 중 문제가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-astra-blue/40 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border border-white/5 mb-8 max-w-2xl mx-auto w-full">
      <div className="mb-8 space-y-4">
        <h3 className="font-serif text-xl md:text-2xl text-astra-glow flex items-center gap-2 drop-shadow-sm">
          <span>✨</span> Day {currentDay} : {currentMission?.title || "미션 인증하기"}
        </h3>
        <p className="text-ink-light font-sans text-sm md:text-base leading-relaxed bg-astra-navy/50 p-5 rounded-xl border border-astra-gold/20 shadow-inner">
          {currentMission?.description || "오늘의 미션을 진행하고 느낀 점을 자유롭게 적어주세요."}
        </p>
      </div>
      
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

          <div className="flex flex-col gap-3">
            <label className="text-sm font-sans tracking-wide text-ink-light">사진 첨부 (선택)</label>
            <div className="flex items-start gap-4">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center w-24 h-24 bg-astra-navy/30 border border-white/10 rounded-xl hover:border-astra-gold hover:bg-astra-navy/50 transition-colors text-ink-light"
              >
                <Camera size={24} className="mb-2 text-astra-gold" />
                <span className="text-xs">사진 추가</span>
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                accept="image/*" 
                className="hidden" 
              />
              
              {imagePreview && (
                <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-astra-gold/40">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 hover:bg-black/80 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting || !name || !content}
            className="mt-4 bg-astra-gold hover:bg-astra-glow disabled:opacity-50 text-astra-navy font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 tracking-wide font-sans shadow-[0_0_15px_rgba(217,187,123,0.2)] hover:shadow-[0_0_25px_var(--color-astra-glow)] transform hover:-translate-y-1"
          >
            {isSubmitting ? '북극성에 기록중...' : (
              <>긍정 무의식 저장하기 <Send size={18} /></>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
