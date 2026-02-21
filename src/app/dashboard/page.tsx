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
    <main className="min-h-screen p-8 md:p-16 lg:p-24 max-w-6xl mx-auto space-y-24 fade-in-section">
      {/* Header */}
      <header className="flex flex-col items-center text-center space-y-8 pb-12 border-b border-slate-200">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#3a3a3a]">
            긍정 언어 습관 챌린지
          </h1>
          <p className="text-sm font-medium text-slate-400 uppercase tracking-widest flex items-center justify-center gap-3">
            <span className="w-10 h-[1px] bg-slate-200" />
            우리들의 소중한 기록들
            <span className="w-10 h-[1px] bg-slate-200" />
          </p>
        </div>
        <div className="text-xs text-slate-300 italic font-serif">
          마지막으로 기록된 시각: {generated_at}
        </div>
      </header>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
        <StatCard
          title="참가자"
          value={stats.totalMembers}
          icon={<Users className="w-4 h-4" />}
          delay={0.1}
        />
        <StatCard
          title="평균 달성률"
          value={`${Math.round(stats.averageRate)}%`}
          icon={<Star className="w-4 h-4" />}
          delay={0.2}
        />
        <StatCard
          title="총 제출"
          value={stats.totalSubmissions}
          icon={<BarChart3 className="w-4 h-4" />}
          delay={0.3}
        />
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-20">
        {/* Chart View */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-white double-border p-12 gentle-shadow h-full">
            <h3 className="text-2xl font-serif text-[#3a3a3a] mb-12 text-center uppercase tracking-widest border-b border-slate-50 pb-4">제출 현황 변동</h3>
            <ProgressChart data={chartData} />
          </div>
        </div>

        {/* Missing Recently */}
        <div className="space-y-8 lg:col-span-1">
          <div className="bg-white double-border p-8 gentle-shadow h-full flex flex-col">
            <h3 className="text-xl font-serif text-[#3a3a3a] mb-8 text-center uppercase tracking-widest border-b border-slate-50 pb-4">미제출 기록</h3>
            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <MissingList names={missingRecently} />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Table */}
      <section className="bg-white double-border gentle-shadow overflow-hidden pt-12">
        <div className="px-12 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-serif text-[#3a3a3a]">상세 과제 현황</h3>
            <p className="text-sm text-slate-400 font-serif italic uppercase tracking-widest border-l-2 border-slate-100 pl-4 py-1">
              개개인의 소중한 과제 기록을 정교하게 확인합니다
            </p>
          </div>
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </div>
        <MemberTable members={filteredMembers} files={files} />
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 text-center text-slate-300 font-serif text-xs uppercase tracking-widest space-y-4">
        <div className="w-12 h-[1px] bg-slate-100 mx-auto mb-8" />
        <p>&copy; 2026 긍정 언어 습관 챌린지. 모든 기록은 소중히 보관됩니다.</p>
        <p className="italic text-[10px] opacity-50 underline decoration-slate-100 underline-offset-4">Refined with Minimalist Aesthetics</p>
      </footer>
    </main>
  );
}
