"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ReviewsPage() {
  return (
    <main className="min-h-screen p-8 md:p-16 lg:p-24 max-w-7xl mx-auto space-y-24 md:space-y-32 bg-astra-navy text-astra-starlight pt-36 selection:bg-astra-gold selection:text-astra-navy">
      {/* Header Copy */}
      <header className="flex flex-col items-center text-center space-y-12 pb-20 border-b border-white/10 mx-auto max-w-4xl relative z-10">
        <div className="space-y-10 w-full pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-[13px] md:text-[15px] font-sans uppercase tracking-[0.2em] text-ink-light font-medium bg-white/5 px-6 py-2 rounded-full border border-white/10 inline-block">
              21일 동안 어떤 변화가 생기는지 궁금하시죠?
            </span>
            <h2 className="text-2xl md:text-[32px] text-astra-starlight font-light tracking-widest break-keep leading-[1.6]">
              지금까지 참여한 엄마들이 공통적으로 느낀 변화,<br />
              <span className="text-astra-gold font-serif italic text-3xl md:text-5xl block mt-6 drop-shadow-[0_0_15px_rgba(217,187,123,0.3)]">
                "엄마가 바뀌니, 아이도 바뀐다."
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-10 space-y-12"
          >
            <p className="text-[16px] md:text-[20px] font-serif text-ink-light font-light break-keep leading-[2.2]">
              저 혼자 경험한 변화였다면<br />
              이렇게까지 오지 못 했을 거에요.<br /><br />
              
              3주의 긴 시간<br />
              우리의 무의식은 조금씩 조금씩<br />
              정화되는 걸 많은 분들이 함께 경험했어요.
            </p>

            <div className="py-4 space-y-4 relative">
              <div className="absolute left-1/2 -top-6 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent to-astra-gold/50" />
              <p className="text-[18px] md:text-2xl font-serif text-astra-starlight leading-[2.2] pt-8 font-light">
                엄마인 나의 말이 바뀌니<br />
                아이의 돌아오는 말이 달라지고<br /><br />
                스트레스 받던 일상이<br />
                <strong className="text-astra-gold font-normal">행복한 감정이 쌓이는 추억</strong>으로<br />
                바뀌게 되었어요.<br /><br />
                <span className="text-[18px] md:text-2xl block mt-4 underline decoration-1 underline-offset-8 decoration-astra-gold/50 text-astra-gold italic">
                  이제, 여러분들의 차례입니다.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Metrics Section */}
      <section className="max-w-5xl mx-auto w-full pb-16 lg:pb-24">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center justify-center p-8 md:p-12 lg:p-14 border border-astra-gold/30 bg-astra-gold/5 space-y-4 relative overflow-hidden group w-full max-w-xl shadow-[0_0_40px_rgba(217,187,123,0.1)] rounded-[2px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-astra-gold/0 to-astra-gold/10 group-hover:to-astra-gold/20 transition-colors" />
            <span className="text-[14px] text-astra-gold font-sans tracking-[0.3em] uppercase font-bold relative z-10">아이의 즉각적 협조 경험</span>
            <div className="flex items-baseline gap-2 pt-2 relative z-10">
              <span className="text-6xl md:text-[80px] font-serif text-astra-starlight font-light leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">85</span>
              <span className="text-3xl font-serif text-astra-gold">%</span>
            </div>
            <span className="text-[15px] text-ink-light pt-3 relative z-10 tracking-widest font-light">실제 수강생 변화 체감률</span>
          </motion.div>
        </div>
      </section>

      {/* Review Grid */}
      <section className="space-y-16 lg:space-y-24">
        {[
          {
            author: "곽*미",
            content: "오늘의 이야기는 아니지만 엊그제 정말 힘든 날이었어요. 아이는 계속 보채고 칭얼거리면서 뭔가 불편함을 토로하는데 제가 정말 잘 모르겠더라구요. 엄마도 사람인지라 화가 나도 꾹 참고 언제나 참는게 버릇처럼 되었는데 그러다 감정이 폭발하고 나면 언제나 후회할걸 알기에 솔직하게 제 마음을 이야기 해보았어요.\n\n\"ㅇㅇ이가 지금 뭔가 불편하고 마음이 좋지 않아 이러는거지? 근데 엄마는 지금 ㅇㅇ이가 원하는걸 잘 모르겠어~ 엄마도 조금 지치는데 우리 다른거 하면서 놀아볼까?\"\n\n하는데 갑자기 눈물이 나더라구요🥲 제 안에 서글픈 감정이 얼마나 누적되었는지 수도꼭지 튼것마냥 갑자기 눈물이 펑펑ㅠㅠ 아이도 처음에는 당황해하더니 옆에서 자리지키며 제 등을 토닥여주더라구요. 어려도 내 감정을 다 알고 날 이렇게 보듬어 주는구나 싶어 정신이 확 들었어요ㅎㅎ",
            highlight: "가끔은 제 마음을 솔직하게 이야기하는게 아이에게도, 저에게도 좋은 일인거 같아요~!",
          },
          {
            author: "김*나",
            content: "오늘은 같이 낮잠을 잤는데ㅡ 아이가 깼는데 제가 못일어나겠는 거예요ㅡ 그래서 \"00아ㅡ 미안한데 엄마 조금만 더 자고 일어날게ㅡ\" 했더니 옆에서 깨우다가 그 소리 듣고는 나가서 놀더라구요ㅡ 나가면서 \"엄마 조금만 더 잘게~\" 이러면서 나가요 ㅎㅎ\n\n이게 먹히는 걸까..생각하고 긍정어로 말했던게 있긴 했거든요 평소에도ㅡ 근데 그게 지나고 나서 아이한테 쌓이면 아웃풋으로 나온다는게 신기합니다.",
            highlight: "제가 긍정어로 말하면 아이도 좀 더 차분해지는것 같아요.",
          },
          {
            author: "곽*영",
            content: "오늘 저녁식사 후에 정리를 하는데 갑자기 티슈를 들더니 돌아다니면서 막 뽑더라고요~ 평소에는 '내려놔' 또는 '정리해'라는 단어를 사용해 이야기 했을텐데 \"우와 00야 굴뚝에서 연기가 모락모락 나네~ 그런데 티슈를 마구마구 뽑으면 낭비가 되고 지구가 아프대. 그만 뽑고 정리해줄 수 있을까?\" 했더니 처음에는 연기에서 활짝 웃고 정리에서 싫다고 이야기 했어요🥲\n\n다시 한 번 \"우리 같이 정리해보자~ 00가 5장 정리할까 10장 정리할까?\" 물었더니 본인이 더 많이 10장 정리한다고 부지런히 주워오는 모습을 보였습니다ㅎㅎㅎ",
            highlight: "오늘도 엄마가 마음의 여유를 가지며 한층 더 쉬운 육아가 가능했어요😊",
          },
          {
            author: "곽*미",
            content: "아이가 저녁을 일찍 먹는 편이라 저도 아주 간단히 같이 먹고 일어나면 항상 뒷정리와 설거지를 해요. 그럴때마다 \"엄마는 그릇을 뽀드득 깨끗히 목욕시켜줘야 하는데 ㅇㅇ이는 그동안 놀이방에서 놀아볼까? 심심하거나 엄마가 보고 싶으면 언제든 주방으로 와도 돼~\" 하면 아이가 가서 혼자 놀다 또 주방와서 괜히 한번 엉덩이에 얼굴 한번 부벼보고 주방 한켠에 자리잡고 놀아요ㅎㅎ\n\n확실히 \"이렇게 해!\" 명령조로 이야기하는거 보단 권유하거나 초대하듯 이야기해주면 처음에는 싫다고 하지만 결국에는 이야기의 주도권을 제가 쥘 수 있게 되더라구요.",
            highlight: "약간의 포기(?)도 있어야 부탁과 제안하는 언어가 더 잘되는거 같아요!",
          },
          {
            author: "이*영",
            content: "매일 밤 '오늘은 그러지 말걸' 후회하며 잠들었는데... 오늘 등원 시간에 아이에게 선택권을 줬더니 '안할거야!' 하지 않고 곧장 해서 등원 시간이 너무 편해졌어요.\n\n제가 으름장 놓던 모습을 아이가 그대로 따라 하는 걸 보고 반성했었는데, 이제 제 마음이 편안해지니 아이에게도 미운 말을 덜 하게 됩니다. 아직 완벽하진 않아도 애쓰는 저를 칭찬해주고 싶어요.",
            highlight: "선택권을 줬더니 등원 시간이 너무 편해졌어요. 나를 칭찬합니다.",
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center"
          >
            {/* Real Review Content */}
            <div className="flex-1 bg-white/5 border border-white/10 p-8 md:p-12 transition-smooth hover:border-astra-gold/50 hover:shadow-[0_0_20px_rgba(217,187,123,0.15)] w-full relative z-10 rounded-[2px]">
              <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-8">
                <div className="w-12 h-12 rounded-full bg-astra-gold/10 flex items-center justify-center text-astra-gold font-serif font-light text-xl">
                  {item.author[0]}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-light text-astra-starlight">{item.author}</h3>
                  <p className="text-[13px] text-ink-light tracking-widest mt-1">캠프 수강생 찐후기</p>
                </div>
              </div>

              <div className="space-y-6 text-[15px] md:text-[17px] font-serif font-light text-ink-light break-keep leading-[2.2]">
                {item.content.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="lg:w-2/5 w-full flex flex-col justify-center text-left px-4 pt-4 lg:pt-0">
              <Quote className="w-12 h-12 text-astra-gold/30 mb-8" />
              <p className="font-serif italic text-3xl md:text-4xl lg:text-[40px] text-astra-gold/90 leading-[1.6] break-keep relative z-10 w-full pl-0 font-light tracking-wide">
                "{item.highlight}"
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Footer Space */}
      <footer className="pt-32 pb-20 text-center text-ink-light font-sans text-[11px] uppercase tracking-[0.4em] space-y-6 flex flex-col items-center">
        <div className="w-16 h-[1px] bg-white/20 mb-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-white/20 bg-astra-navy" />
        </div>
        <p className="transition-colors hover:text-astra-starlight">&copy; 2026 Positive Village.</p>
        <p className="font-serif italic text-[13px] opacity-70 tracking-widest text-astra-gold">All these miracles started from a small change.</p>
      </footer>
    </main>
  );
}
