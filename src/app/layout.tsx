import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Serif_KR, Gowun_Batang } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerif = Noto_Serif_KR({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const gowunBatang = Gowun_Batang({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gowun-batang",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Positive Village | 변화 보고서",
  description: "지치고 미안했던 육아가 설레고 평온한 일상으로 바뀌는 마법 같은 순간들",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${playfair.variable} ${inter.variable} ${notoSerif.variable} ${gowunBatang.variable} antialiased transition-colors duration-500`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
