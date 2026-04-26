export type QuestionType = 'star' | 'nps' | 'multiSelect' | 'singleSelect' | 'text';

export interface SurveyQuestion {
  id: string;
  section: number;
  sectionTitle: string;
  sectionSubtitle?: string;
  sectionEmoji?: string;
  type: QuestionType;
  label: string;
  description?: string;
  required: boolean;
  options?: string[];
  allowOther?: boolean; // "기타" 직접입력 허용
  maxStars?: number;
  placeholder?: string;
}

export const surveyQuestions: SurveyQuestion[] = [
  // === Section 1: 기본 정보 ===
  // (이름은 별도 드롭다운으로 처리, 질문 배열에는 포함하지 않음)

  // === Section 2: 강의 만족도 ===
  {
    id: 'satisfaction',
    section: 1,
    sectionTitle: '강의 만족도',
    sectionSubtitle: '3주간의 여정은 어떠셨나요?',
    sectionEmoji: '⭐',
    type: 'star',
    label: '전반적인 강의 만족도를 알려주세요',
    required: true,
    maxStars: 5,
  },
  {
    id: 'applicability',
    section: 1,
    sectionTitle: '강의 만족도',
    sectionEmoji: '⭐',
    type: 'star',
    label: '강의 내용을 실생활에 얼마나 적용하고 계신가요?',
    required: true,
    maxStars: 5,
  },
  {
    id: 'bestWeek',
    section: 1,
    sectionTitle: '강의 만족도',
    sectionEmoji: '⭐',
    type: 'multiSelect',
    label: '가장 도움이 되었던 주차를 골라주세요 (복수 선택 가능)',
    required: true,
    options: [
      'Week 1: 나를 마주하다 (결핍 해소)',
      'Week 2: 아이를 바라보다 (긍정언어/관찰)',
      'Week 3: 별을 세우다 (BMS/가족문화)',
    ],
  },

  // === Section 3: 구체적 도움 ===
  {
    id: 'helpReceived',
    section: 2,
    sectionTitle: '어떤 도움을 받으셨나요',
    sectionSubtitle: '솔직한 이야기를 들려주세요',
    sectionEmoji: '💛',
    type: 'text',
    label: '이 강의를 통해 어떤 도움을 받으셨나요?',
    required: true,
    placeholder: '예) 아이에게 소리를 지르는 횟수가 줄었어요, 나의 결핍을 인정하게 됐어요...',
  },
  {
    id: 'biggestChange',
    section: 2,
    sectionTitle: '어떤 도움을 받으셨나요',
    sectionEmoji: '💛',
    type: 'text',
    label: '강의 전과 후, 가장 크게 달라진 점이 있다면?',
    required: false,
    placeholder: '예) 아이를 관찰하게 되었어요, 부정어를 의식하게 됐어요...',
  },

  // === Section 4: 추천 의향 ===
  {
    id: 'nps',
    section: 3,
    sectionTitle: '추천 의향',
    sectionSubtitle: '주변에 추천하고 싶으신가요?',
    sectionEmoji: '📣',
    type: 'nps',
    label: '이 강의를 주변 지인에게 추천할 의향은 얼마나 되시나요?',
    description: '0점(전혀 추천하지 않는다) ~ 10점(적극 추천한다)',
    required: true,
  },
  {
    id: 'recommendTo',
    section: 3,
    sectionTitle: '추천 의향',
    sectionEmoji: '📣',
    type: 'multiSelect',
    label: '어떤 분들에게 추천하시겠어요? (복수 선택 가능)',
    required: true,
    options: [
      '아이에게 소리를 자주 지르는 엄마',
      '육아에 자신감이 없는 엄마',
      '자신의 어린 시절 상처가 있는 엄마',
      '아이와 더 깊은 유대를 원하는 엄마',
      '긍정적인 가족 문화를 만들고 싶은 엄마',
    ],
    allowOther: true,
  },
  {
    id: 'recommendReason',
    section: 3,
    sectionTitle: '추천 의향',
    sectionEmoji: '📣',
    type: 'text',
    label: '추천하고 싶은 이유가 있다면 자유롭게 적어주세요',
    required: false,
    placeholder: '예) 나처럼 육아가 막막한 엄마들에게 꼭 들어봤으면 좋겠어요...',
  },

  // === Section 5: 향후 빌드업 ===
  {
    id: 'futureTopics',
    section: 4,
    sectionTitle: '향후 강의 방향',
    sectionSubtitle: '앞으로 어떤 강의를 만들면 좋을까요?',
    sectionEmoji: '🚀',
    type: 'multiSelect',
    label: '참여하고 싶은 주제를 골라주세요 (복수 선택 가능)',
    required: true,
    options: [
      '부부 소통 & 긍정 대화법',
      '아이 연령별 맞춤 긍정언어 심화',
      '감정 코칭 실전편',
      '형제/자매 갈등 해결',
      '엄마의 자기돌봄 & 마인드셋',
      '자기 치유 에세이 글쓰기',
      '가족 문화 설계 워크숍 (오프라인)',
    ],
    allowOther: true,
  },
  {
    id: 'preferredFormat',
    section: 4,
    sectionTitle: '향후 강의 방향',
    sectionEmoji: '🚀',
    type: 'multiSelect',
    label: '선호하는 강의 형태는? (복수 선택 가능)',
    required: true,
    options: [
      '3주 온라인 챌린지 (현재와 동일)',
      '1일 6시간 집중 워크숍 (오프라인)',
      '월 1회 정기 모임 (온라인)',
      '주 1회 6주 정기 모임 (온라인)',
      '1:1 코칭',
      '자기주도형 온라인 코스 (영상)',
    ],
  },

  // === Section 6: 현재 막막함 ===
  {
    id: 'currentStruggle',
    section: 5,
    sectionTitle: '지금 느끼는 막막함',
    sectionSubtitle: '챌린지가 끝난 지금, 솔직하게 이야기해주세요',
    sectionEmoji: '🌊',
    type: 'text',
    label: '육아에서 가장 막막한 점은 무엇인가요?',
    required: false,
    placeholder: '예) 배운 것을 꾸준히 실천하는 게 어려워요, 남편과의 육아관 차이...',
  },
  {
    id: 'freeMessage',
    section: 5,
    sectionTitle: '지금 느끼는 막막함',
    sectionEmoji: '🌊',
    type: 'text',
    label: '키키맘에게 하고 싶은 말이 있다면 자유롭게 적어주세요 💛',
    required: false,
    placeholder: '감사 인사, 건의사항, 아무 말이나 편하게...',
  },
];

// 섹션 번호로 그룹핑
export const getSectionQuestions = (section: number) =>
  surveyQuestions.filter((q) => q.section === section);

export const totalSections = 5;
