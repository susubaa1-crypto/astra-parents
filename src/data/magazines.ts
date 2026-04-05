export interface Magazine {
    id: string;
    month: string;
    title: string;
    description: string;
    thumbnail: string;
    icon: string;
    link?: string;
    content?: {
        title: string;
        subtitle: string;
        sections: {
            heading: string;
            body: string;
        }[];
    };
}

export const magazines: Magazine[] = [
    {
        id: "2026-01",
        month: "JANUARY",
        title: "자기 긍정은 아이에게 물려준 유산이야",
        description: "진정한 자기 긍정이란 무엇인지, 엄마의 긍정이 아이에게 어떻게 전해지는지 이야기합니다.",
        thumbnail: "/astra/magazine_1.jpg",
        icon: "Book",
        link: "https://drive.google.com/file/d/1lwUnHr6QO2ysWzpjpO2cYto51v8kZ7WS/view?usp=drive_link",
    },
    {
        id: "2026-02",
        month: "FEBRUARY",
        title: "애정 결핍인 내가 엄마가 되어도 될까",
        description: "결핍을 사랑으로 승화시키며, 나와 아이가 모두 단단해지는 마법.",
        thumbnail: "/astra/magazine_2.jpg",
        icon: "Heart",
        link: "https://drive.google.com/file/d/1gq_mGa2n-qu90w-59F0T0v9bIRt3xQDT/view?usp=drive_link",
    },
    {
        id: "2026-03",
        month: "MARCH",
        title: "밝은 사람 같았는데 내면에 슬픔이 있네요",
        description: "겉모습에 가려진 감정의 파도를 마주하고, 나를 토닥여주는 시간.",
        thumbnail: "/astra/magazine_3.jpg",
        icon: "Sun",
        link: "https://drive.google.com/file/d/1LIODBrrBtGODOtScvXQ7EPcbzX1I2Q1i/view?usp=drive_link",
    }
];
