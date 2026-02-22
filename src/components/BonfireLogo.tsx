export function BonfireLogo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {/* 
              이 SVG는 사용자가 그려주신 "말따옴표(quotation mark)" 모양이 결합된 
              둥글고 따뜻한 불꽃(Fire) 모양을 수작업으로 패스 수치화한 것입니다.
            */}
            <path d="M 50 15 
                     C 65 30, 75 45, 75 60
                     C 75 75, 62 85, 48 85
                     C 35 85, 25 75, 25 60
                     C 25 50, 32 42, 40 40
                     C 48 38, 52 45, 50 55
                     C 45 40, 50 25, 50 15 Z" />
        </svg>
    );
}
