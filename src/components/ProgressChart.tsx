"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";
import { ChartData } from "@/lib/types";

interface ProgressChartProps {
    data: ChartData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-paper-white p-5 no-shadow hairline-border min-w-[140px] animate-in fade-in zoom-in duration-300">
                <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-ink-gray mb-3 pb-2 border-b border-ink-light">{label}</p>
                <p className="text-3xl font-serif text-ink-charcoal tracking-tight flex items-baseline gap-2">
                    {payload[0].value} <span className="text-[12px] font-sans text-ink-gray tracking-normal">건</span>
                </p>
            </div>
        );
    }
    return null;
};

export function ProgressChart({ data }: ProgressChartProps) {
    return (
        <div className="w-full h-full min-h-[300px] p-8">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="1 6" vertical={false} stroke="var(--color-ink-light)" strokeOpacity={0.5} />
                    <XAxis
                        dataKey="name"
                        axisLine={{ stroke: 'var(--color-ink-charcoal)', strokeWidth: 1, strokeOpacity: 0.2 }}
                        tickLine={false}
                        tick={{ fill: "var(--color-ink-gray)", fontSize: 12, fontFamily: 'var(--font-sans)', fontWeight: 300, letterSpacing: '0.02em' }}
                        dy={20}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "var(--color-ink-gray)", fontSize: 12, fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                        dx={-10}
                    />
                    <Tooltip
                        cursor={{ fill: "var(--color-paper-cream)", opacity: 0.5 }}
                        content={<CustomTooltip />}
                    />
                    <Bar dataKey="count" radius={[0, 0, 0, 0]} maxBarSize={40}>
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={index === data.length - 1 ? "var(--color-ink-charcoal)" : "var(--color-ink-light)"}
                                className="transition-smooth hover:opacity-70 cursor-pointer"
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
