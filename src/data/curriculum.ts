export interface DailyMissionConfig {
  day: number;
  title: string;
  description: string;
  type: "무의식 끊기" | "긍정 무의식 심기" | "환경 통제 중심";
}

export const curriculumMissions: DailyMissionConfig[] = [
  // 1주차 — 🪞 나를 마주하다 (부정적 무의식 패턴 끊기)
  {
    day: 1,
    title: "어린 시절의 나 마주하기 ✍️",
    description: "우리가 아이에게 주려는 사랑은 종종 우리가 ‘받고 싶었던’ 사랑의 결핍에서 출발합니다. 그 시절 내가 진짜로 원했던 숨겨진 감정과 욕구는 무엇이었을까요? 가장 안쓰러운 나를 안아주는 첫 번째 기록을 남겨보세요.",
    type: "무의식 끊기"
  },
  {
    day: 2,
    title: "나를 위한 긍정확언 📝",
    description: "무의식은 내 입에서 나오는 소리를 가장 강력한 진실로 믿습니다. 나 자신에게 해주고 싶은 가장 단단한 한 문장을 포스트잇에 적어 매일 볼 수 있는 곳에 붙이고, 소리 내어 읽은 뒤 그 공간의 사진을 공유해주세요.",
    type: "무의식 끊기"
  },
  {
    day: 3,
    title: "어긋난 사랑의 재해석 💡",
    description: "완벽하진 않았어도, 부모님이 당시 최선을 다해 주려 했던 그들만의 사랑을 다시 들여다보세요. \"내가 원했던 방식과 달랐을 뿐, 그것 역시 서툰 사랑이었구나.\" 이 깨달음이 묵은 상처를 녹여낼 것입니다.",
    type: "무의식 끊기"
  },
  {
    day: 4,
    title: "파도의 뿌리 찾기 (감정-욕구 연결) 🔍",
    description: "분노는 내 마음을 지키려다 튀어나온 거친 파도일 뿐입니다. 오늘 나를 화나게 한 순간의 밑바닥에 숨어있던 나의 진짜 연약한 '욕구(존중, 휴식, 이해 등)'는 무엇이었는지 세밀하게 들여다보고 기록해 보세요.",
    type: "무의식 끊기"
  },
  {
    day: 5,
    title: "분노 스위치 끄기 🛑",
    description: "자극과 감정 사이에는 '선택할 수 있는 공간'이 존재합니다. 감정이 끓어오르는 순간, 즉시 대처를 멈추고 '심호흡 5초'를 시도해 보세요. 내가 내 감정의 주인이라고 선언했을 때 찾아오는 평온함을 인증해 주세요.",
    type: "무의식 끊기"
  },
  {
    day: 6,
    title: "아이에게 띄우는 첫 번째 유산 💌",
    description: "나의 상처를 들여다보며 1주차를 훌륭히 지나왔습니다. 과거의 결핍을 물려주지 않겠다는 다짐과, 정화된 홀가분한 마음을 담아 편지를 써주세요. 훗날 아이가 어른이 되었을 때 영혼의 유산이 될 것입니다.",
    type: "무의식 끊기"
  },
  
  // 2주차 — 👁️ 아이를 바라보다 (긍정적 무의식 새롭게 세팅)
  {
    day: 7,
    title: "해석 없는 관찰 👀",
    description: "아이의 행동을 내 생각이나 판단(나쁜 의도 등) 없이, 오직 눈에 보이는 그대로(CCTV처럼) 가만히 묘사하며 바라본 경험을 적어보세요.",
    type: "긍정 무의식 심기"
  },
  {
    day: 8,
    title: "부정어 수집기 🚫",
    description: "오늘 하루 동안 내가 아이나 가족에게 무의식적으로 내뱉은 금지어/부정적인 언어(안 돼, 하지 마 등) 5개를 수집해서 적어보세요.",
    type: "긍정 무의식 심기"
  },
  {
    day: 9,
    title: "긍정어 번역기 🔄",
    description: "어제 수집했던 부정어 5개를 ASTRA 긍정언어(권유, 지시, 선택권, 마음 읽기)로 예쁘게 번역해서 적어보세요.",
    type: "긍정 무의식 심기"
  },
  {
    day: 10,
    title: "긍정언어 실전 투입 🗣️",
    description: "어제 만든 긍정언어를 실제 사용해봅시다! 직접 소리 내어 3가지 이상의 상황에 적용해보세요. 그때 가족들의 반응은 어땠는지, 나의 기분은 어땠는지 적어주세요.<br/><br/>💡 나의 부정언어를 긍정언어로 단번에 번역하고 싶다면?<br/><a href='/ladder' target='_blank' class='inline-block mt-2 px-4 py-2 bg-astra-gold/20 text-astra-gold hover:bg-astra-gold hover:text-black border border-astra-gold/50 rounded-lg font-bold transition-colors'>👉 10초 AI 사다리게임 바로가기</a>",
    type: "긍정 무의식 심기"
  },
  {
    day: 11,
    title: "거울 공감 (미러링) 🤝",
    description: "내 생각이나 해결책을 섞지 않고, 오로지 상대방의 감정 단어만 그대로 \"우리 00가 무지 속상했구나\" 하고 되돌려주는 거울 대화법을 시도해보세요.",
    type: "긍정 무의식 심기"
  },
  {
    day: 12,
    title: "나에게 주는 긍정 확언 📜",
    description: "아이도 배우자도 아닌, 그 누구보다 '오늘 애쓴 나 자신'에게 가장 따뜻하고 포근하게 해주고 싶은 단 1개의 문장을 적어보세요.",
    type: "긍정 무의식 심기"
  },

  // 3주차 — ⭐ 별을 세우다 (북극성을 세우는 환경 통제)
  {
    day: 13,
    title: "우리집 방향성 점검 🧭",
    description: "새로 추가된 'BMS 에너지 자가진단' 툴을 이용해 현재 나의 상태(Body, Mind, Soul)를 객관적으로 측정해보고, 그 점수를 바탕으로 우리 가족이 앞으로 나아가야 할 방향성에 대한 솔직한 소감을 남겨주세요.<br/><br/><a href='/bms' target='_blank' class='inline-block mt-2 px-4 py-2 bg-astra-gold/20 text-astra-gold hover:bg-astra-gold hover:text-black border border-astra-gold/50 rounded-lg font-bold transition-colors'>👉 BMS 에너지 자가진단 하러가기</a>",
    type: "환경 통제 중심"
  },
  {
    day: 14,
    title: "우리집 기둥 세우기 🏛️",
    description: "우리 가족을 지탱할 힘을 찾아봅니다. 내가 아이에게 줄 수 있는 것 3가지, 남편(배우자)이 줄 수 있는 것 3가지를 적어보고, 이 6가지가 합쳐진 우리 집은 어떤 모습일지 상상하여 적어보세요.",
    type: "환경 통제 중심"
  },
  {
    day: 15,
    title: "5대 상황 긍정 리추얼 세팅 📝",
    description: "일상의 결정적 순간인 5가지 상황(기상 직후, 외출할 때, 밥 먹을 때, 놀이할 때, 잠들기 직전)에 사용할 긍정어를 각각 적어 잘 보이는 곳에 부착하세요. 곧 우리 집만의 강력한 긍정 리추얼이 될 것입니다.<br/><br/><a href='/positive-words' target='_blank' class='inline-block mt-2 px-4 py-2 bg-astra-gold/20 text-astra-gold hover:bg-astra-gold hover:text-black border border-astra-gold/50 rounded-lg font-bold transition-colors'>👉 상황별 긍정어 50개 샘플(컨닝페이퍼) 보러가기</a>",
    type: "환경 통제 중심"
  },
  {
    day: 16,
    title: "시작과 끝의 마법 (실천 1탄) 🌅",
    description: "어제 붙여둔 5가지 긍정어 중 하루의 시작과 끝을 담당하는 '기상 직후', '잠들기 직전' 2가지 상황에 집중해서 실천해 보고 그 느낌을 기록해 보세요.",
    type: "환경 통제 중심"
  },
  {
    day: 17,
    title: "일상 속 긍정 퍼뜨리기 (실천 2탄) 🍚",
    description: "이번에는 가장 부딪치기 쉬운 일상 상황인 '밥 먹을 때', '놀이할 때', '외출할 때' 중 2가지 이상의 상황에서 준비해둔 긍정어를 실천해 본 뒤, 솔직한 소감을 남겨주세요.",
    type: "환경 통제 중심"
  },
  {
    day: 18,
    title: "가장 애쓴 나에게 쓰는 편지 💌",
    description: "지난 18일 동안 아이를 위해, 가족을 위해, 그리고 나 자신을 위해 내면의 상처를 마주하고 변화하려 노력한 당신. 오늘만큼은 세상 그 누구보다 나를 꼭 안아주며 '정말 수고했다'고, '앞으로 더 빛날 것'이라고 칭찬하는 편지를 써보세요.",
    type: "환경 통제 중심"
  }
];
