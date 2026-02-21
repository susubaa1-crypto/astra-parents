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

export function ProgressChart({ data }: ProgressChartProps) {
    return (
        <div className="w-full h-full min-h-[300px] p-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis
                        dataKey="name"
                        axisLine={{ stroke: '#3a3a3a', strokeWidth: 1 }}
                        tickLine={false}
                        tick={{ fill: "#3a3a3a", fontSize: 13, fontFamily: 'Nanum Myeongjo, serif' }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={{ stroke: '#3a3a3a', strokeWidth: 1 }}
                        tickLine={false}
                        tick={{ fill: "#3a3a3a", fontSize: 13, fontFamily: 'Nanum Myeongjo, serif' }}
                    />
                    <Tooltip
                        cursor={{ fill: "rgba(0, 0, 0, 0.02)" }}
                        contentStyle={{
                            backgroundColor: "#fff",
                            border: "1px solid #3a3a3a",
                            borderRadius: "0px",
                            fontFamily: 'Nanum Myeongjo, serif',
                            color: "#3a3a3a",
                            boxShadow: 'none'
                        }}
                    />
                    <Bar dataKey="count" radius={0}>
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={index === data.length - 1 ? "#3a3a3a" : "rgba(58, 58, 58, 0.05)"}
                                stroke="#3a3a3a"
                                strokeWidth={0.5}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
