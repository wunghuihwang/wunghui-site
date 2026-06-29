export type Lang = 'ko' | 'en';

export interface CareerProject {
    title: string;
    ratio?: string;
    desc: string;
    achievements: string[];
}

export interface CareerCompany {
    company: string;
    period: string;
    role: string;
    stackNote: string;
    projects: CareerProject[];
}

export interface SkillGroup {
    label: string;
    items: string[];
}

export interface Content {
    meta: { title: string; description: string };
    nav: { about: string; skills: string; career: string; contact: string; toggleTheme: string; toggleLang: string };
    hero: {
        eyebrow: string;
        title: string[];
        sub: string;
        specLabel: string;
        specValue: string;
        cta: string;
        scrollHint: string;
    };
    about: {
        heading: string;
        lead: string;
        body: string[];
        stats: { value: string; label: string }[];
    };
    skills: { heading: string; sub: string; groups: SkillGroup[] };
    career: { heading: string; sub: string; companies: CareerCompany[] };
    contact: { heading: string; sub: string; email: string; channels: { label: string; value: string }[] };
    footer: { rights: string };
}

export const content: Record<Lang, Content> = {
    ko: {
        meta: {
            title: '프론트엔드 개발자 · 퍼블리셔 포트폴리오',
            description: 'Next.js 기반 ERP·어드민·이커머스 서비스를 만드는 프론트엔드 개발자 / 퍼블리셔 포트폴리오',
        },
        nav: {
            about: 'About',
            skills: 'Skills',
            career: 'Career',
            contact: 'Contact',
            toggleTheme: '테마 전환',
            toggleLang: '언어 전환',
        },
        hero: {
            eyebrow: 'FRONTEND DEVELOPER / PUBLISHER',
            title: ['픽셀 한 칸까지', '책임지는', '프론트엔드'],
            sub: 'Next.js로 ERP, 어드민, 이커머스 서비스를 만듭니다. 퍼블리싱으로 다져진 그리드 감각과 웹접근성 기준으로, 화면을 그리는 일과 동작하게 만드는 일을 모두 합니다.',
            specLabel: 'SPEC',
            specValue: 'Grid 8px · A11Y AA · Cross-browser',
            cta: '경력 살펴보기',
            scrollHint: 'Scroll',
        },
        about: {
            heading: 'About',
            lead: '마크업의 정밀함과 로직의 견고함, 둘 다 놓치지 않습니다.',
            body: [
                '앤듀소프트에서 Next.js 기반 ERP와 관리자 페이지를 만들고 있습니다. 대량의 데이터를 다루는 테이블, 지도 API 연동, 다국어 처리처럼 “보이는 화면”과 “작동하는 로직”이 함께 필요한 작업을 주로 맡아왔습니다.',
                '프리아이브에서는 퍼블리셔로 시작해 매니저로서 프리랜서 협업과 작업 가이드 배포를 이끌었습니다. 라이나생명 프로젝트에서는 스크립트 기반 접근성 구현으로 웹접근성 인증 마크를 받기도 했습니다.',
                '지금은 퍼블리싱에서 쌓은 그리드·간격·접근성 기준을 Next.js와 상태관리, 인터랙션 설계로 확장하는 중입니다.',
            ],
            stats: [
                { value: '4+', label: '년차 (퍼블리싱 포함)' },
                { value: '7', label: '주요 프로젝트' },
                { value: 'AA', label: '웹접근성 인증 경험' },
            ],
        },
        skills: {
            heading: 'Skills',
            sub: '화면을 그리는 도구와, 그 화면을 움직이게 하는 도구.',
            groups: [
                { label: 'Core', items: ['Next.js', 'React', 'TypeScript', 'JavaScript'] },
                { label: 'Markup & Style', items: ['HTML', 'CSS', 'SCSS', 'Tailwind CSS'] },
                { label: 'State & Data', items: ['Zustand', 'React Query', 'REST API', 'Chart.js'] },
                { label: 'Motion', items: ['Framer Motion', 'GSAP'] },
                { label: 'Collaboration', items: ['i18n', 'Jira', 'Slack'] },
            ],
        },
        career: {
            heading: 'Career',
            sub: '퍼블리싱과 프론트엔드 개발을 함께 맡은 프로젝트들입니다. 비율은 제가 담당한 작업 범위입니다.',
            companies: [
                {
                    company: '앤듀소프트',
                    period: '2024.05 — 현재',
                    role: '개발 1팀 · 사원',
                    stackNote: 'Next.js 기반 ERP·관리자 페이지 프론트엔드 개발 및 퍼블리싱',
                    projects: [
                        {
                            title: '남양부직포 ERP',
                            ratio: '프론트 35%',
                            desc: '전사적 자원 관리 시스템(ERP) 프론트엔드 개발 및 홈페이지 퍼블리싱',
                            achievements: ['Tanstack/react-table로 대량 데이터를 시각화하고 정렬·필터링 기능 구현'],
                        },
                        {
                            title: '남양부직포 홈페이지 구축',
                            ratio: '퍼블 70%',
                            desc: 'Next.js 기반 홈페이지 리뉴얼 퍼블리싱',
                            achievements: ['카카오맵 기능 구현', '다국어 지원(i18n) 적용'],
                        },
                        {
                            title: '우잉(Wooing) 관리자 / 스토어 / 고객 화면',
                            ratio: '퍼블 80% · 프론트 20%',
                            desc: '이커머스 서비스의 관리자 페이지, 스토어, 고객 화면 구축 및 운영',
                            achievements: [
                                'Zustand 기반 전역 상태 관리로 데이터 흐름 최적화',
                                'API 연동 및 인터랙션(애니메이션 등) 추가로 서비스 완성도 향상',
                            ],
                        },
                        {
                            title: 'NH 방산업체 프로젝트',
                            ratio: '퍼블 50%',
                            desc: 'Next.js 기반 방산업체 웹사이트 구축',
                            achievements: ['Kakao Map API 연동으로 위치 정보 시각화', 'Email.js 기반 문의 시스템 구현'],
                        },
                    ],
                },
                {
                    company: '프리아이브',
                    period: '2022.03 — 2023.09',
                    role: '프론트팀 · 매니저',
                    stackNote: 'Vue.js 기반 퍼블리싱',
                    projects: [
                        {
                            title: '라이나생명 재구축 프로젝트',
                            desc: '대규모 보험 서비스 리뉴얼 및 웹 접근성 강화 (Vue 2)',
                            achievements: [
                                '스위치·체크박스·스텝 프로그레스바 등 재사용 가능한 공통 컴포넌트 설계',
                                '스크립트 기반 접근성 구현으로 웹접근성 인증 마크 획득',
                                '프리랜서 관리 및 팀 내 작업 가이드 배포 리딩',
                            ],
                        },
                        {
                            title: '카카오 어드민 & 원하냥',
                            desc: '데이터 기반 관리자 페이지 및 인트로 페이지 제작 (Vue 3)',
                            achievements: ['필터링, 팝업 데이터 바인딩 등 동적 데이터 셋팅 및 비즈니스 로직 구현'],
                        },
                        {
                            title: 'KT drive & uBuilder',
                            desc: '통합 개발 플랫폼 및 어드민 페이지 퍼블리싱 (HTML/CSS, 단독 수행)',
                            achievements: ['전체 퍼블리싱 100% 단독 수행'],
                        },
                    ],
                },
            ],
        },
        contact: {
            heading: 'Contact',
            sub: '협업 제안이나 궁금한 점이 있다면 편하게 연락해주세요.',
            email: 'dudwk9946@naver.com',
            channels: [
                { label: 'Email', value: 'dudwk9946@naver.com' },
                { label: 'GitHub', value: 'https://github.com/wunghuihwang' },
                { label: 'GitHub v2', value: 'https://github.com/wunhui' },
            ],
        },
        footer: { rights: '모든 권리 보유.' },
    },
    en: {
        meta: {
            title: 'Frontend Developer · Publisher Portfolio',
            description: 'A frontend developer / publisher building ERP, admin, and e-commerce services with Next.js',
        },
        nav: {
            about: 'About',
            skills: 'Skills',
            career: 'Career',
            contact: 'Contact',
            toggleTheme: 'Toggle theme',
            toggleLang: 'Toggle language',
        },
        hero: {
            eyebrow: 'FRONTEND DEVELOPER / PUBLISHER',
            title: ['Frontend that owns', 'every pixel,', 'on the grid'],
            sub: 'I build ERP, admin, and e-commerce products with Next.js. With a publisher’s eye for grid and an accessibility-first habit, I both draw the screen and make it work.',
            specLabel: 'SPEC',
            specValue: 'Grid 8px · A11Y AA · Cross-browser',
            cta: 'See the work',
            scrollHint: 'Scroll',
        },
        about: {
            heading: 'About',
            lead: 'Precise markup and solid logic — I don’t trade one for the other.',
            body: [
                'At Anduesoft I build Next.js-based ERP and admin products — large data tables, map API integrations, and multilingual UI: work that needs both a screen that looks right and logic that works right.',
                'At Freaive I started as a publisher and grew into a manager leading freelancer collaboration and team work guides. On the Lina Life Insurance project, script-based accessibility work earned an official Korean Web Accessibility certification mark.',
                'Now I’m extending the grid, spacing, and accessibility discipline from publishing into Next.js, state management, and interaction design.',
            ],
            stats: [
                { value: '4+', label: 'years (incl. publishing)' },
                { value: '7', label: 'major projects' },
                { value: 'AA', label: 'a11y certification experience' },
            ],
        },
        skills: {
            heading: 'Skills',
            sub: 'Tools for drawing a screen, and tools for making it move.',
            groups: [
                { label: 'Core', items: ['Next.js', 'React', 'TypeScript', 'JavaScript'] },
                { label: 'Markup & Style', items: ['HTML', 'CSS', 'SCSS', 'Tailwind CSS'] },
                { label: 'State & Data', items: ['Zustand', 'React Query', 'REST API', 'Chart.js'] },
                { label: 'Motion', items: ['Framer Motion', 'GSAP'] },
                { label: 'Collaboration', items: ['i18n', 'Jira', 'Slack'] },
            ],
        },
        career: {
            heading: 'Career',
            sub: 'Projects where I handled both publishing and frontend development. Percentages are my share of the work.',
            companies: [
                {
                    company: 'Anduesoft',
                    period: 'May 2024 — Present',
                    role: 'Dev Team 1 · Associate',
                    stackNote: 'Next.js-based ERP & admin frontend development and publishing',
                    projects: [
                        {
                            title: 'Namyang Nonwoven ERP',
                            ratio: 'Frontend 35%',
                            desc: 'Frontend development for an enterprise resource planning (ERP) system and corporate site publishing',
                            achievements: ['Built sorting/filtering for large datasets with Tanstack/react-table'],
                        },
                        {
                            title: 'Namyang Nonwoven Corporate Site',
                            ratio: 'Publishing 70%',
                            desc: 'Publishing for a Next.js-based corporate site renewal',
                            achievements: ['Implemented Kakao Map integration', 'Added multilingual (i18n) support'],
                        },
                        {
                            title: 'Wooing — Admin / Store / Customer',
                            ratio: 'Publishing 80% · Frontend 20%',
                            desc: 'Built and operated the admin, store, and customer screens for an e-commerce service',
                            achievements: [
                                'Optimized data flow with Zustand global state',
                                'Improved polish via API integration and interaction/animation work',
                            ],
                        },
                        {
                            title: 'NH Defense Industry Project',
                            ratio: 'Publishing 50%',
                            desc: 'Built a Next.js website for a defense-industry client',
                            achievements: [
                                'Visualized location data via Kakao Map API',
                                'Built an inquiry system with Email.js',
                            ],
                        },
                    ],
                },
                {
                    company: 'Freaive',
                    period: 'Mar 2022 — Sep 2023',
                    role: 'Frontend Team · Manager',
                    stackNote: 'Vue.js-based publishing',
                    projects: [
                        {
                            title: 'Lina Life Insurance Rebuild',
                            desc: 'Large-scale insurance service renewal and accessibility hardening (Vue 2)',
                            achievements: [
                                'Designed reusable shared components: switch, checkbox, step progress bar',
                                'Earned an official web accessibility certification via script-based a11y implementation',
                                'Led freelancer management and distributed team work guides',
                            ],
                        },
                        {
                            title: 'Kakao Admin & Wonhanyang',
                            desc: 'Built a data-driven admin page and intro page (Vue 3)',
                            achievements: [
                                'Implemented dynamic data binding and business logic for filtering and popups',
                            ],
                        },
                        {
                            title: 'KT drive & uBuilder',
                            desc: 'Publishing for an integrated dev platform and admin page (HTML/CSS, solo)',
                            achievements: ['Handled 100% of publishing solo'],
                        },
                    ],
                },
            ],
        },
        contact: {
            heading: 'Contact',
            sub: 'Open to collaboration — feel free to reach out.',
            email: 'dudwk9946@naver.com',
            channels: [
                { label: 'Email', value: 'dudwk9946@naver.com' },
                { label: 'GitHub', value: 'https://github.com/wunghuihwang' },
                { label: 'GitHub v2', value: 'https://github.com/wunhui' },
            ],
        },
        footer: { rights: 'All rights reserved.' },
    },
};
