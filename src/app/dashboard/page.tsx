"use client";

import { useState } from "react";
import { Users, BarChart3, Star, Clock } from "lucide-react";
import { getSummaryStats, getChartData, getMemberStatusList, getMissingRecently, getDashboardData } from "@/lib/data-utils";
import { StatCard } from "@/components/StatCard";
import { ProgressChart } from "@/components/ProgressChart";
import { MemberTable } from "@/components/MemberTable";
import { MissingList } from "@/components/MissingList";
import { SearchInput } from "@/components/SearchInput";

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = getSummaryStats();
  const chartData = getChartData();
  const membersStatus = getMemberStatusList();
  const missingRecently = getMissingRecently();
  const { generated_at, files } = getDashboardData();

  const filteredMembers = membersStatus.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen p-8 md:p-16 lg:p-24 max-w-7xl mx-auto space-y-32 fade-in-section bg-paper-cream pt-36">
      {/* Header */}
      <header className="flex flex-col items-center text-center space-y-10 pb-16 border-b border-ink-light mx-auto max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-[80px] text-ink-charcoal font-serif tracking-tight leading-[1.2]">
            긍정 언어 습관 챌린지
          </h1>
          <p className="text-[12px] font-sans text-ink-gray uppercase tracking-[0.4em] flex items-center justify-center gap-6">
            <span className="w-12 h-[1px] bg-ink-light" />
            우리들의 소중한 기록들
            <span className="w-12 h-[1px] bg-ink-light" />
          </p>
        </div>
        <div className="text-[13px] text-ink-gray italic font-serif opacity-70">
          마지막으로 기록된 시각: {generated_at}
        </div>
      </header>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-8">
        <StatCard
          title="참가자"
          value={stats.totalMembers}
          icon={<Users className="w-5 h-5 text-ink-gray" />}
          delay={0.1}
        />
        <StatCard
          title="평균 달성률"
          value={`${Math.round(stats.averageRate)}%`}
          icon={<Star className="w-5 h-5 text-ink-gray" />}
          delay={0.2}
        />
        <StatCard
          title="총 제출"
          value={stats.totalSubmissions}
          icon={<BarChart3 className="w-5 h-5 text-ink-gray" />}
          delay={0.3}
        />
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-16">
        {/* Chart View */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-paper-white hairline-border no-shadow p-12 lg:p-16 h-full transition-smooth hover:border-ink-charcoal">
            <h3 className="text-2xl font-serif text-ink-charcoal mb-16 text-center uppercase tracking-[0.2em] border-b border-ink-light pb-6">제출 현황 변동</h3>
            <div className="aspect-[2/1] min-h-[400px]">
              <ProgressChart data={chartData} />
            </div>
          </div>
        </div>

        {/* Missing Recently */}
        <div className="space-y-8 lg:col-span-1">
          <div className="bg-paper-white hairline-border no-shadow p-10 lg:p-12 h-full flex flex-col transition-smooth hover:border-ink-charcoal">
            <h3 className="text-[18px] font-serif text-ink-charcoal mb-10 text-center uppercase tracking-[0.2em] border-b border-ink-light pb-6">미제출 기록</h3>
            <div className="overflow-y-auto pr-4 custom-scrollbar flex-1">
              <MissingList names={missingRecently} />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Table */}
      <section className="bg-paper-white hairline-border no-shadow overflow-hidden pt-16 transition-smooth hover:border-ink-charcoal">
        <div className="px-12 lg:px-16 pb-16 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-ink-light">
          <div className="space-y-6">
            <h3 className="text-4xl font-serif text-ink-charcoal">상세 과제 현황</h3>
            <p className="text-[13px] text-ink-gray font-sans font-light tracking-wide border-l border-ink-light pl-6 py-1">
              개개인의 소중한 과제 기록을 정교하게 확인합니다
            </p>
          </div>
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </div>
        <div className="p-8">
          <MemberTable members={filteredMembers} files={files} />
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-20 text-center text-ink-gray font-sans text-[11px] uppercase tracking-[0.4em] space-y-6 flex flex-col items-center">
        <div className="w-16 h-[1px] bg-ink-light mb-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-ink-light bg-paper-cream" />
        </div>
        <p className="transition-colors hover:text-ink-charcoal">&copy; 2026 긍정 언어 습관 챌린지. 모든 기록은 소중히 보관됩니다.</p>
        <p className="font-serif italic text-[13px] opacity-70 tracking-widest text-ink-charcoal">Refined with Minimalist Aesthetics</p>
      </footer>
    </main>
  );
}
