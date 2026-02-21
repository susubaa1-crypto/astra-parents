import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "긍정 언어 캠프 | 변화 보고서",
  description: "지치고 미안했던 육아가 설레고 평온한 일상으로 바뀌는 마법 같은 순간들",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased transition-colors duration-500">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
