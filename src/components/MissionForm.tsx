"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Send, CheckCircle2, Camera, X, Clock, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { cohorts } from '../data/participants';
import { curriculumMissions } from '../data/curriculum';
import imageCompression from 'browser-image-compression';

interface MissionFormProps {
  currentDay: number;
  cohortId: number;
  onMissionSubmit: () => void;
}

export default function MissionForm({ currentDay, cohortId, onMissionSubmit }: MissionFormProps) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showDictionary, setShowDictionary] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 가나다 순 참가자 정렬 (cohorts 데이터에서 가져오기)
  const sortedParticipants = useMemo(() => {
    const cohortParticipants = cohorts[cohortId]?.participants || [];
    return [...cohortParticipants].sort((a, b) => a.name.localeCompare(b.name, 'ko'));
  }, [cohortId]);

  // 현재 선택된 날짜(currentDay)에 맞는 미션 데이터 가져오기
  const currentMission = useMemo(() => {
    return curriculumMissions.find(m => m.day === currentDay);
  }, [currentDay]);

  // 마감 시간 계산 로직 (시작일 4월 6일 기준, 다음날 오전 6시 마감 KST)
  const isExpired = useMemo(() => {
    if (!isClient) return false;
    
    const START_DATE = new Date('2026-04-06T00:00:00+09:00');
    const deadline = new Date(START_DATE);
    deadline.setDate(deadline.getDate() + currentDay); // Day 1이면 +1 해서 4월 7일
    deadline.setHours(6, 0, 0, 0); // 06:00:00 KST
    
    return new Date() > deadline;
  }, [currentDay, isClient]);

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
    if (isExpired) return;
    if (!name || !content) return;

    setIsSubmitting(true);
    
    try {
      let uploadedImageUrl = undefined;

      // 1. 이미지가 있으면 브라우저에서 압축 후 Vercel Blob에 업로드 (4.5MB 제한 우회)
      if (imageFile) {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
          initialQuality: 0.8
        };
        const compressedFile = await imageCompression(imageFile, options);

        const fileExt = imageFile.name.split('.').pop() || 'jpg';
        const safeFileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const blobRes = await fetch(`/api/upload?filename=${safeFileName}`, {
          method: 'POST',
          body: compressedFile,
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
        body: JSON.stringify({ day: currentDay, name, content, imageUrl: uploadedImageUrl, cohort: cohortId })
      });

      if (res.ok) {
        setIsSuccess(true);
        setContent('');
        removeImage(); 
        
        onMissionSubmit();
        
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `서버 에러 (${res.status})`);
      }
    } catch (error: any) {
      console.error("Failed to submit mission:", error);
      alert(`업로드 실패: ${error?.message || '알 수 없는 오류'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-astra-blue/40 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border border-white/5 mb-8 max-w-2xl mx-auto w-full">
      <div className="mb-6 space-y-4">
        <h3 className="font-serif text-xl md:text-2xl text-astra-glow flex items-center gap-2 drop-shadow-sm">
          <span>✨</span> Day {currentDay} : {currentMission?.title || "미션 인증하기"}
        </h3>
        <p className="text-ink-light font-sans text-sm md:text-base leading-relaxed bg-astra-navy/50 p-5 rounded-xl border border-astra-gold/20 shadow-inner">
          {currentMission?.description || "오늘의 미션을 진행하고 느낀 점을 자유롭게 적어주세요."}
        </p>
      </div>

      <div className="mb-8">
        <button 
          type="button"
          onClick={() => setShowDictionary(!showDictionary)}
          className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
            showDictionary 
              ? 'bg-astra-navy/80 border-astra-gold/40 text-astra-gold shadow-[0_0_15px_rgba(217,187,123,0.1)]' 
              : 'bg-astra-navy/40 border-white/10 text-astra-starlight hover:border-astra-gold/30 hover:bg-astra-navy/60'
          }`}
        >
          <span className="font-sans font-medium flex items-center gap-2">
            <BookOpen size={18} /> 감정 및 욕구 단어장 보며 작성하기
          </span>
          {showDictionary ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        
        {showDictionary && (
          <div className="mt-3 p-5 md:p-6 bg-astra-navy/90 rounded-xl border border-astra-gold/20 space-y-7 text-sm animate-in fade-in slide-in-from-top-2 duration-300 shadow-inner">
            <div>
              <h4 className="text-astra-gold font-bold text-base mb-3 border-b border-white/10 pb-2 flex items-center gap-2">
                <span className="bg-astra-gold/20 px-2 py-0.5 rounded text-astra-gold text-xs">1</span> 감정 온도 (Feelings)
              </h4>
              <ul className="space-y-2.5 text-ink-light font-light leading-relaxed">
                <li className="flex gap-2"><span className="font-medium text-astra-starlight shrink-0 w-20">기쁨/안정 :</span> <span>편안한, 감사한, 뿌듯한, 신나는, 홀가분한, 포근한, 재미있는, 든든한</span></li>
                <li className="flex gap-2"><span className="font-medium text-astra-starlight shrink-0 w-20">슬픔/우울 :</span> <span>속상한, 울적한, 외로운, 서운한, 허전한, 무기력한, 피곤한, 막막한</span></li>
                <li className="flex gap-2"><span className="font-medium text-astra-starlight shrink-0 w-20">불안/긴장 :</span> <span>걱정되는, 긴장되는, 불안한, 혼란스러운, 당황한, 조급한</span></li>
                <li className="flex gap-2"><span className="font-medium text-astra-starlight shrink-0 w-20">화/분노 :</span> <span>화가 나는, 짜증나는, 답답한, 억울한, 원망스러운, 미운</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-astra-gold font-bold text-base mb-3 border-b border-white/10 pb-2 flex items-center gap-2">
                <span className="bg-astra-gold/20 px-2 py-0.5 rounded text-astra-gold text-xs">2</span> 마음 속 진짜 욕구 (Needs)
              </h4>
              <ul className="space-y-2.5 text-ink-light font-light leading-relaxed">
                <li className="flex gap-2"><span className="font-medium text-astra-starlight shrink-0 w-20">연결/사랑 :</span> <span>공감받고, 안아줬으면 하고, 소속되고 싶어</span></li>
                <li className="flex gap-2"><span className="font-medium text-astra-starlight shrink-0 w-20">존중/인정 :</span> <span>인정받고, 내 의견을 존중받고 칭찬받고 싶어</span></li>
                <li className="flex gap-2"><span className="font-medium text-astra-starlight shrink-0 w-20">자율/자유 :</span> <span>내 마음대로 선택하고, 간섭없이 혼자 해보고 싶어</span></li>
                <li className="flex gap-2"><span className="font-medium text-astra-starlight shrink-0 w-20">휴식/평온 :</span> <span>가만히 쉬고, 조용히 혼자만의 시간이 필요해</span></li>
                <li className="flex gap-2"><span className="font-medium text-astra-starlight shrink-0 w-20">재미/놀이 :</span> <span>신나고 재미있게 놀고, 새로운 걸 경험하고 싶어</span></li>
                <li className="flex gap-2"><span className="font-medium text-astra-starlight shrink-0 w-20">성취/배움 :</span> <span>스스로 잘 해내고, 성취감을 느끼고 싶어</span></li>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-10 text-astra-gold animate-in fade-in zoom-in duration-500">
          <CheckCircle2 size={56} className="mb-4 drop-shadow-[0_0_10px_var(--color-astra-glow)]" />
          <p className="font-serif text-lg tracking-wide">미션 인증 완료! 북극성이 하나 더 빛납니다 🌟</p>
        </div>
      ) : isExpired ? (
        <div className="flex flex-col items-center justify-center py-12 px-4 bg-black/20 rounded-xl border border-white/5 text-ink-gray">
          <Clock size={40} className="mb-4 text-ink-gray/60" />
          <p className="font-serif text-xl md:text-2xl text-astra-starlight mb-2 tracking-widest text-center">
            과제 제출이 마감되었습니다
          </p>
          <p className="text-sm">매일 주어지는 소중한 약속, 내일 미션을 기대해 주세요.</p>
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
              {sortedParticipants.map((p, idx) => (
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
              placeholder="무의식의 우주에 빛을 남기는 중..."
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
