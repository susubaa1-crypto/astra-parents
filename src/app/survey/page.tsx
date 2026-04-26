"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import {
  surveyQuestions,
  getSectionQuestions,
  totalSections,
  SurveyQuestion,
} from "@/data/surveyQuestions";
import {
  ChevronRight,
  ChevronLeft,
  Send,
  Star,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// ─── Star Rating Component ───
function StarRating({
  value,
  onChange,
  max = 5,
}: {
  value: number;
  onChange: (v: number) => void;
  max?: number;
}) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-2 justify-center py-4">
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="transition-all duration-200 hover:scale-125 active:scale-95"
        >
          <Star
            size={40}
            className={`transition-colors duration-200 ${
              star <= (hover || value)
                ? "fill-astra-gold text-astra-gold drop-shadow-[0_0_8px_rgba(217,187,123,0.6)]"
                : "text-white/20"
            }`}
          />
        </button>
      ))}
      {value > 0 && (
        <span className="ml-3 text-astra-gold font-serif text-xl self-center">
          {value}점
        </span>
      )}
    </div>
  );
}

// ─── NPS Component ───
function NPSRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-[11px] text-ink-gray font-sans tracking-wider px-1">
        <span>전혀 추천하지 않음</span>
        <span>적극 추천</span>
      </div>
      <div className="grid grid-cols-11 gap-1.5">
        {Array.from({ length: 11 }, (_, i) => i).map((score) => {
          let bgClass = "bg-white/5 border-white/10 text-ink-gray";
          if (score === value) {
            if (score <= 6)
              bgClass =
                "bg-red-500/20 border-red-400/50 text-red-300 shadow-[0_0_12px_rgba(239,68,68,0.2)]";
            else if (score <= 8)
              bgClass =
                "bg-amber-500/20 border-amber-400/50 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]";
            else
              bgClass =
                "bg-emerald-500/20 border-emerald-400/50 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]";
          }
          return (
            <button
              key={score}
              type="button"
              onClick={() => onChange(score)}
              className={`py-3 rounded-xl border font-serif text-lg transition-all duration-200 hover:scale-105 active:scale-95 ${bgClass}`}
            >
              {score}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── MultiSelect Component ───
function MultiSelectInput({
  options,
  values,
  onChange,
  allowOther,
  otherValue,
  onOtherChange,
}: {
  options: string[];
  values: string[];
  onChange: (vals: string[]) => void;
  allowOther?: boolean;
  otherValue?: string;
  onOtherChange?: (v: string) => void;
}) {
  const toggle = (opt: string) => {
    if (values.includes(opt)) {
      onChange(values.filter((v) => v !== opt));
    } else {
      onChange([...values, opt]);
    }
  };

  return (
    <div className="space-y-3">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => toggle(opt)}
          className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-300 font-sans text-[15px] leading-relaxed ${
            values.includes(opt)
              ? "bg-astra-gold/15 border-astra-gold/50 text-astra-starlight shadow-[0_0_15px_rgba(217,187,123,0.1)]"
              : "bg-white/[0.03] border-white/10 text-ink-light hover:border-white/20 hover:bg-white/[0.06]"
          }`}
        >
          <span className="flex items-center gap-3">
            <span
              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                values.includes(opt)
                  ? "bg-astra-gold border-astra-gold"
                  : "border-white/20"
              }`}
            >
              {values.includes(opt) && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2.5 6L5 8.5L9.5 3.5"
                    stroke="#090B10"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            {opt}
          </span>
        </button>
      ))}
      {allowOther && (
        <div className="mt-2">
          <input
            type="text"
            value={otherValue || ""}
            onChange={(e) => onOtherChange?.(e.target.value)}
            placeholder="기타 (직접 입력)"
            className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-astra-starlight font-sans text-[15px] placeholder:text-ink-gray/50 focus:outline-none focus:border-astra-gold/50 focus:ring-1 focus:ring-astra-gold/30 transition-all"
          />
        </div>
      )}
    </div>
  );
}

// ─── TextArea Component ───
function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={4}
      className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-astra-starlight font-sans text-[15px] leading-relaxed placeholder:text-ink-gray/40 focus:outline-none focus:border-astra-gold/50 focus:ring-1 focus:ring-astra-gold/30 resize-none transition-all"
    />
  );
}

// ─── Question Renderer ───
function QuestionRenderer({
  question,
  answer,
  onAnswer,
  otherValue,
  onOtherChange,
}: {
  question: SurveyQuestion;
  answer: string | string[] | number;
  onAnswer: (value: string | string[] | number) => void;
  otherValue?: string;
  onOtherChange?: (v: string) => void;
}) {
  return (
    <div className="space-y-4">
      <label className="block text-[17px] md:text-lg font-serif text-astra-starlight leading-relaxed break-keep">
        {question.label}
        {question.required && (
          <span className="text-astra-gold ml-1 text-sm">*</span>
        )}
      </label>
      {question.description && (
        <p className="text-sm text-ink-gray font-sans">{question.description}</p>
      )}

      {question.type === "star" && (
        <StarRating
          value={(answer as number) || 0}
          onChange={(v) => onAnswer(v)}
          max={question.maxStars}
        />
      )}

      {question.type === "nps" && (
        <NPSRating
          value={answer !== undefined && answer !== "" ? (answer as number) : -1}
          onChange={(v) => onAnswer(v)}
        />
      )}

      {question.type === "multiSelect" && (
        <MultiSelectInput
          options={question.options || []}
          values={(answer as string[]) || []}
          onChange={(vals) => onAnswer(vals)}
          allowOther={question.allowOther}
          otherValue={otherValue}
          onOtherChange={onOtherChange}
        />
      )}

      {question.type === "text" && (
        <TextInput
          value={(answer as string) || ""}
          onChange={(v) => onAnswer(v)}
          placeholder={question.placeholder}
        />
      )}
    </div>
  );
}

// ─── Main Survey Page ───
export default function SurveyPage() {
  const [currentSection, setCurrentSection] = useState(0); // 0 = intro
  const [answers, setAnswers] = useState<
    Record<string, string | string[] | number>
  >({});
  const [otherValues, setOtherValues] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  const sectionQuestions = useMemo(
    () => (currentSection > 0 ? getSectionQuestions(currentSection) : []),
    [currentSection]
  );

  const sectionInfo = sectionQuestions[0];

  const updateAnswer = (id: string, value: string | string[] | number) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const updateOther = (id: string, value: string) => {
    setOtherValues((prev) => ({ ...prev, [id]: value }));
  };

  // Validate current section
  const isSectionValid = () => {
    if (currentSection === 0) return true; // intro always valid

    const questions = getSectionQuestions(currentSection);
    return questions.every((q) => {
      if (!q.required) return true;
      const answer = answers[q.id];
      if (answer === undefined || answer === "" || answer === -1) return false;
      if (Array.isArray(answer) && answer.length === 0) return false;
      return true;
    });
  };

  const handleNext = () => {
    if (currentSection < totalSections) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Merge "기타" values into answers
    const finalAnswers = { ...answers };
    for (const [qId, otherVal] of Object.entries(otherValues)) {
      if (otherVal.trim()) {
        const existing = (finalAnswers[qId] as string[]) || [];
        finalAnswers[qId] = [...existing, `기타: ${otherVal.trim()}`];
      }
    }

    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "익명",
          cohort: 5,
          answers: finalAnswers,
        }),
      });

      if (res.ok) {
        setIsComplete(true);
      } else {
        alert("제출에 실패했습니다. 다시 시도해주세요.");
      }
    } catch {
      alert("네트워크 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLastSection = currentSection === totalSections;
  const progress = ((currentSection) / (totalSections + 1)) * 100;

  // ─── Completion Screen ───
  if (isComplete) {
    return (
      <div className="min-h-screen bg-astra-navy text-astra-starlight relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "url('/astra/north_star_banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Navigation />

        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-8 max-w-lg"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <CheckCircle2
                size={80}
                className="text-astra-gold mx-auto drop-shadow-[0_0_20px_rgba(217,187,123,0.5)]"
              />
            </motion.div>

            <h1 className="text-3xl md:text-4xl font-serif tracking-widest text-astra-glow">
              감사합니다
            </h1>

            <p className="text-ink-light font-light text-lg leading-relaxed break-keep">
              소중한 의견이<br />
              잘 전달되었습니다 💛
            </p>

            <p className="text-ink-gray text-sm leading-relaxed break-keep">
              여러분의 이야기 하나하나가<br />
              다음 여정을 만드는 북극성이 됩니다.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Sparkles className="text-astra-gold/50 mx-auto" size={24} />
            </motion.div>
          </motion.div>
        </main>
      </div>
    );
  }

  // ─── Main Survey Screen ───
  return (
    <div className="min-h-screen bg-astra-navy text-astra-starlight relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/astra/north_star_banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-astra-navy/50 to-astra-navy pointer-events-none" />

      <Navigation />

      {/* Progress Bar */}
      <div className="fixed top-[52px] left-0 right-0 z-40 h-[2px] bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-astra-gold to-astra-glow"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <main className="relative z-10 min-h-screen flex flex-col justify-center px-4 py-24 md:py-32">
        <div className="w-full max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {/* ─── Section 0: Intro ─── */}
            {currentSection === 0 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <div className="text-center space-y-6">
                  <span className="text-4xl">✧</span>
                  <h1 className="text-2xl md:text-3xl font-serif text-astra-glow tracking-widest">
                    설문조사
                  </h1>
                  <p className="text-ink-light font-light text-[15px] leading-relaxed break-keep">
                    3주간의 여정, 수고 많으셨어요.<br />
                    솔직한 이야기를 들려주세요 💛
                  </p>
                  <div className="w-12 h-[1px] bg-astra-gold/30 mx-auto" />
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-4 text-center">
                  <p className="text-astra-starlight font-serif text-lg">🔒 100% 익명 설문</p>
                  <p className="text-ink-light font-light text-[14px] leading-relaxed break-keep">
                    이 설문은 완전히 익명으로 진행됩니다.<br />
                    이름이나 개인정보는 일절 수집하지 않아요.<br />
                    편하게 솔직하게 적어주세요.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <p className="text-ink-gray text-[13px] font-sans">
                    약 3분 정도 소요됩니다
                  </p>
                </div>
              </motion.div>
            )}

            {/* ─── Question Sections ─── */}
            {currentSection > 0 && (
              <motion.div
                key={`section-${currentSection}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-10"
              >
                {/* Section Header */}
                <div className="text-center space-y-3 mb-8">
                  {sectionInfo?.sectionEmoji && (
                    <span className="text-3xl block">
                      {sectionInfo.sectionEmoji}
                    </span>
                  )}
                  <h2 className="text-xl md:text-2xl font-serif text-astra-glow tracking-widest">
                    {sectionInfo?.sectionTitle}
                  </h2>
                  {sectionInfo?.sectionSubtitle && (
                    <p className="text-ink-light font-light text-[15px] break-keep">
                      {sectionInfo.sectionSubtitle}
                    </p>
                  )}
                  <div className="w-8 h-[1px] bg-astra-gold/30 mx-auto" />
                </div>

                {/* Questions */}
                <div className="space-y-10">
                  {sectionQuestions.map((q) => (
                    <QuestionRenderer
                      key={q.id}
                      question={q}
                      answer={answers[q.id]}
                      onAnswer={(val) => updateAnswer(q.id, val)}
                      otherValue={otherValues[q.id]}
                      onOtherChange={(val) => updateOther(q.id, val)}
                    />
                  ))}
                </div>

                {/* Consent Checkbox — only on last section */}
                {currentSection === totalSections && (
                  <div className="mt-10 pt-8 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => setConsentChecked(!consentChecked)}
                      className={`w-full text-left px-5 py-5 rounded-2xl border transition-all duration-300 ${
                        consentChecked
                          ? "bg-astra-gold/10 border-astra-gold/40"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <span className="flex items-start gap-3">
                        <span
                          className={`w-5 h-5 mt-0.5 rounded-md border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                            consentChecked
                              ? "bg-astra-gold border-astra-gold"
                              : "border-white/20"
                          }`}
                        >
                          {consentChecked && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#090B10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        <span className="text-[14px] font-sans leading-relaxed text-ink-light break-keep">
                          남겨주신 설문은 소중하게 받겠습니다. 일부 내용은 인스타그램 콘텐츠에 활용될 수 있으며, 특정 개인이 드러나는 이야기는 사용하지 않습니다.
                          <span className="block mt-1 text-astra-gold font-medium">동의합니다.</span>
                        </span>
                      </span>
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ─── Navigation Buttons ─── */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5">
            {currentSection > 0 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-ink-gray hover:text-astra-starlight transition-colors text-sm font-sans tracking-wider"
              >
                <ChevronLeft size={18} />
                이전
              </button>
            ) : (
              <div />
            )}

            {/* Step indicator */}
            <div className="flex gap-1.5">
              {Array.from({ length: totalSections + 1 }, (_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentSection
                      ? "bg-astra-gold w-6"
                      : i < currentSection
                      ? "bg-astra-gold/40"
                      : "bg-white/10"
                  }`}
                />
              ))}
            </div>

            {isLastSection ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isSectionValid() || !consentChecked || isSubmitting}
                className="flex items-center gap-2 px-7 py-3 rounded-xl bg-astra-gold text-astra-navy font-bold text-sm tracking-widest hover:bg-astra-glow transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(217,187,123,0.2)] hover:shadow-[0_0_30px_rgba(217,187,123,0.4)]"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">제출 중...</span>
                ) : (
                  <>
                    제출하기
                    <Send size={16} />
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                disabled={!isSectionValid()}
                className="flex items-center gap-2 px-7 py-3 rounded-xl bg-astra-gold/10 border border-astra-gold/30 text-astra-gold font-bold text-sm tracking-widest hover:bg-astra-gold/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                다음
                <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
