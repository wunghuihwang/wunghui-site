export type Lang = 'ko' | 'en';

export interface StrengthItem {
    title: string;
    desc: string;
}

export interface SkillGroup {
    label: string;
    items: string[];
    desc: string;
}

export interface ProjectCase {
    title: string;
    summary: string;
    tasks: string[];
    stack: string[];
    highlight: string;
}

export interface CareerCompany {
    company: string;
    period: string;
    role: string;
    summary: string;
    duties: string[];
}

export interface Content {
    meta: { title: string; description: string };
    nav: {
        about: string;
        strengths: string;
        skills: string;
        projects: string;
        career: string;
        contact: string;
        toggleTheme: string;
        toggleLang: string;
    };
    hero: {
        eyebrow: string;
        title: string[];
        sub: string;
        specLabel: string;
        specValue: string;
        ctas: { label: string; href: string; variant?: 'primary' | 'secondary' }[];
        scrollHint: string;
    };
    about: {
        heading: string;
        lead: string;
        body: string[];
        stats: { value: string; label: string }[];
    };
    strengths: { heading: string; sub: string; items: StrengthItem[] };
    skills: { heading: string; sub: string; groups: SkillGroup[] };
    projects: {
        heading: string;
        sub: string;
        labels: { case: string; project: string; tasks: string; stack: string; highlight: string };
        cases: ProjectCase[];
    };
    career: { heading: string; sub: string; dutiesLabel: string; companies: CareerCompany[] };
    contact: {
        heading: string;
        sub: string;
        email: string;
        channels: { label: string; value: string }[];
        form?: {
            nameLabel: string;
            namePlaceholder: string;
            emailLabel: string;
            emailPlaceholder: string;
            phoneLabel: string;
            phonePlaceholder: string;
            messageLabel: string;
            messagePlaceholder: string;
            submitButton: string;
        };
    };
    footer: { rights: string };
}

const koProjects: ProjectCase[] = [
    {
        title: '남양부직포 ERP 관리자 시스템',
        summary:
            'Next.js와 TypeScript 기반으로 계정, 매장, 거래처, 품목, 출고, 재고 조회 등 관리자 업무에 필요한 화면을 개발한 ERP 프로젝트입니다.',
        tasks: [
            '계정/매장/거래처/품목 관리 화면 개발',
            '검색, 정렬, 페이지네이션이 가능한 데이터 테이블 구현',
            '등록/수정/삭제 모달 및 폼 검증 처리',
            'React Query 기반 API 연동 및 서버 상태 관리',
            'Zustand 기반 UI 상태 관리',
            '권한별 메뉴 및 페이지 접근 처리',
        ],
        stack: [
            'Next.js',
            'TypeScript',
            'React Query',
            'Zustand',
            'TanStack Table',
            'React Hook Form',
            'Zod',
            'shadcn/ui',
        ],
        highlight: '관리자 페이지에서 반복되는 테이블, 필터, 모달, 폼 구조를 실무 흐름에 맞게 구현했습니다.',
    },
    {
        title: '우잉 관리자 및 스토어 화면',
        summary:
            '매장 운영, 서비스 신청, 약관, 알림, 사업자 정보 관리 등 운영성 화면을 중심으로 개발한 관리자/스토어 프로젝트입니다.',
        tasks: [
            '서비스 신청/변경 화면 UI 구현',
            '약관 조회 및 이전 약관 페이지 개발',
            '쿼리스트링 기반 약관 상세 조회 처리',
            '모달, 배너, 상태 표시 UI 구현',
            'API 연동 및 CORS 이슈 대응',
            '다국어 UI 일부 대응',
        ],
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Query', 'i18next'],
        highlight: '운영자가 실제로 사용하는 화면에서 데이터 조회, 상태 표시, 외부 접근 페이지를 고려해 개발했습니다.',
    },
    {
        title: 'DID / 모바일 대기 시스템',
        summary: '매장 대기 고객을 위한 DID 화면과 모바일 대기 등록 화면을 개발한 프로젝트입니다.',
        tasks: [
            '회차 모드와 일반 대기 모드 UI 구현',
            '개인정보 및 마케팅 동의 화면 개발',
            '30초 순환 DID 화면 처리',
            '이메일 입력 모드 및 검증 로직 반영',
            '대기 상태에 따른 화면 표시 처리',
            'API 응답값 기반 UI 상태 관리',
        ],
        stack: ['Next.js', 'TypeScript', 'React Query', 'Tailwind CSS'],
        highlight: '실시간성이 필요한 대기 화면에서 사용자 상태와 운영 화면을 구분해 구현했습니다.',
    },
    {
        title: 'LINA 생명 웹사이트 리뉴얼',
        summary: '보험 상품, 사이버창구, 공통 UI 컴포넌트 화면을 구축한 대규모 웹사이트 리뉴얼 프로젝트입니다.',
        tasks: [
            '보험 상품 및 사이버창구 주요 화면 마크업',
            '반응형/적응형 화면 구현',
            '체크박스, 라디오, 스위치, 스텝바 등 공통 UI 컴포넌트 구현',
            '시멘틱 마크업 및 웹 접근성 개선',
            '웹 접근성 인증 대응',
        ],
        stack: ['Vue.js', 'HTML', 'SCSS', 'JavaScript', '웹 접근성'],
        highlight:
            '웹 표준과 접근성을 고려한 화면 구현 경험을 쌓았고, 이후 프론트엔드 개발 역량으로 확장하는 기반이 되었습니다.',
    },
    {
        title: 'Kakao Map 기반 장소 추천 서비스',
        summary:
            '현재 위치와 카테고리를 기반으로 주변 장소를 검색하고, 거리와 조건에 따라 추천 결과를 보여주는 지도 기반 웹 프로젝트입니다.',
        tasks: [
            'Kakao Maps SDK 연동',
            '현재 위치 기반 주변 장소 검색',
            '카테고리별 장소 필터링',
            '거리 계산 및 추천 점수 처리',
            '지도 마커와 결과 리스트 연동',
            'Next.js 환경에서 window 객체 처리',
        ],
        stack: ['Next.js', 'TypeScript', 'Kakao Maps SDK', 'Tailwind CSS'],
        highlight: '외부 SDK를 Next.js 환경에 맞게 연동하고, 지도와 리스트 UI가 함께 동작하도록 구현했습니다.',
    },
    {
        title: 'Movies / Mini Community',
        summary:
            '목록, 상세, 검색, 작성 흐름을 통해 프론트엔드 기본 구조와 사용자 인터랙션을 정리한 개인 프로젝트입니다.',
        tasks: [
            '목록/상세 페이지 라우팅 구성',
            '검색 및 필터 UI 구현',
            '게시글 작성/수정 흐름 구현',
            '재사용 가능한 카드, 폼, 버튼 컴포넌트 구성',
            '상태 변화에 따른 빈 화면과 로딩 UI 처리',
        ],
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
        highlight: '실무 프로젝트에서 필요한 목록, 상세, 폼, 상태 표시 패턴을 작은 단위로 반복 구현했습니다.',
    },
];

const enProjects: ProjectCase[] = [
    {
        title: 'Namyang Nonwoven ERP Admin System',
        summary:
            'An ERP admin project built with Next.js and TypeScript for account, store, client, item, shipment, and inventory management screens.',
        tasks: [
            'Developed account, store, client, and item management screens',
            'Implemented searchable, sortable, paginated data tables',
            'Handled create/update/delete modals and form validation',
            'Integrated APIs and server state with React Query',
            'Managed UI state with Zustand',
            'Handled role-based menus and page access',
        ],
        stack: [
            'Next.js',
            'TypeScript',
            'React Query',
            'Zustand',
            'TanStack Table',
            'React Hook Form',
            'Zod',
            'shadcn/ui',
        ],
        highlight:
            'Implemented repeated admin patterns such as tables, filters, modals, and forms around real operational workflows.',
    },
    {
        title: 'Wooing Admin and Store Screens',
        summary:
            'An admin/store project focused on operational screens such as store management, service applications, terms, notifications, and business information.',
        tasks: [
            'Built service application and change request screens',
            'Developed terms lookup and previous terms pages',
            'Handled query-string based terms detail views',
            'Implemented modals, banners, and status UI',
            'Integrated APIs and responded to CORS issues',
            'Supported parts of multilingual UI',
        ],
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Query', 'i18next'],
        highlight:
            'Built operational screens with attention to data lookup, status display, and externally accessible page flows.',
    },
    {
        title: 'DID / Mobile Waiting System',
        summary: 'A waiting system project for store DID screens and mobile customer waiting registration flows.',
        tasks: [
            'Implemented round-based and normal waiting mode UI',
            'Built privacy and marketing consent screens',
            'Handled 30-second rotating DID display',
            'Added email input mode and validation logic',
            'Displayed screens based on waiting status',
            'Managed UI state from API responses',
        ],
        stack: ['Next.js', 'TypeScript', 'React Query', 'Tailwind CSS'],
        highlight:
            'Separated customer-facing state and operator display needs in a waiting screen where real-time status clarity matters.',
    },
    {
        title: 'LINA Life Insurance Website Renewal',
        summary:
            'A large-scale website renewal project covering insurance product pages, cyber service screens, and shared UI components.',
        tasks: [
            'Marked up major insurance product and cyber service screens',
            'Implemented responsive and adaptive layouts',
            'Built shared UI components such as checkboxes, radio buttons, switches, and step bars',
            'Improved semantic markup and web accessibility',
            'Supported web accessibility certification',
        ],
        stack: ['Vue.js', 'HTML', 'SCSS', 'JavaScript', 'Web Accessibility'],
        highlight:
            'Built a strong foundation in standards-based UI implementation and accessibility, which later expanded into frontend development work.',
    },
    {
        title: 'Kakao Map-based Place Recommendation Service',
        summary:
            'A map-based web project that searches nearby places by current location and category, then recommends results by distance and conditions.',
        tasks: [
            'Integrated Kakao Maps SDK',
            'Searched nearby places from current location',
            'Filtered places by category',
            'Calculated distance and recommendation score',
            'Connected map markers with result lists',
            'Handled the window object in a Next.js environment',
        ],
        stack: ['Next.js', 'TypeScript', 'Kakao Maps SDK', 'Tailwind CSS'],
        highlight:
            'Integrated an external SDK in a Next.js environment and connected map and list UI into one working flow.',
    },
    {
        title: 'Movies / Mini Community',
        summary:
            'A personal project for practicing frontend fundamentals through list, detail, search, and writing flows.',
        tasks: [
            'Configured list/detail page routing',
            'Implemented search and filter UI',
            'Built post create/update flows',
            'Composed reusable card, form, and button components',
            'Handled empty and loading states based on state changes',
        ],
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
        highlight:
            'Repeated practical frontend patterns such as list, detail, form, and state display in a smaller project scope.',
    },
];

export const content: Record<Lang, Content> = {
    ko: {
        meta: {
            title: '프론트엔드 개발자 포트폴리오',
            description:
                '퍼블리셔 출신의 화면 구현력을 기반으로 Next.js와 TypeScript로 관리자 페이지와 데이터 중심 UI를 개발하는 프론트엔드 개발자 포트폴리오',
        },
        nav: {
            about: 'About',
            strengths: 'Strength',
            skills: 'Skills',
            projects: 'Projects',
            career: 'Career',
            contact: 'Contact',
            toggleTheme: '테마 전환',
            toggleLang: '언어 전환',
        },
        hero: {
            eyebrow: 'FRONTEND DEVELOPER · ADMIN UI · DATA UI',
            title: ['화면 구현력과', '구조 설계를 함께 갖춘', '프론트엔드 개발자'],
            sub: '웹퍼블리셔로 커리어를 시작해 웹 표준, 접근성, 반응형 UI를 익혔고, 현재는 Next.js, TypeScript, React Query, Zustand를 활용해 관리자 페이지와 백오피스 UI를 개발하고 있습니다.',
            specLabel: 'POSITIONING',
            specValue: 'Publisher-based UI · Next.js · TypeScript · Admin/Data UI',
            ctas: [
                { label: '프로젝트 보기', href: '#projects', variant: 'primary' },
                { label: '이력서 보기', href: '#career', variant: 'secondary' },
                { label: 'GitHub 보기', href: 'https://github.com/wunghuihwang', variant: 'secondary' },
            ],
            scrollHint: 'Scroll',
        },
        about: {
            heading: 'About',
            lead: '퍼블리셔 출신의 화면 구현력을 기반으로, Next.js와 TypeScript를 활용해 관리자 페이지와 데이터 중심 UI를 개발하는 프론트엔드 개발자입니다.',
            body: [
                '저는 퍼블리셔로 커리어를 시작해 프론트엔드 개발자로 역할을 확장해온 개발자입니다.',
                '초기에는 HTML, CSS, JavaScript를 기반으로 시안을 정확하게 구현하고, 다양한 해상도와 브라우저 환경에서 일관된 화면을 만드는 데 집중했습니다.',
                '이후 실무를 거치며 UI는 단순한 화면이 아니라 데이터, 상태, 사용자 행동이 연결되는 영역이라는 점을 배웠고, 현재는 Next.js, TypeScript, React Query, Zustand를 활용해 관리자 페이지와 백오피스 화면을 개발하고 있습니다.',
                '저의 강점은 화면 구현력과 개발 구조 이해를 함께 갖고 있다는 점입니다. 마크업, 접근성, 반응형 UI에 대한 기반 위에서 API 연동, 상태 관리, 공통 컴포넌트 설계까지 담당하고 있습니다.',
            ],
            stats: [
                { value: '4+', label: '년차 실무 경험' },
                { value: 'Admin', label: '관리자/ERP 화면' },
                { value: 'A11Y', label: '접근성 인증 대응' },
            ],
        },
        strengths: {
            heading: 'Frontend Strength',
            sub: '채용 관점에서 바로 확인할 수 있는 프론트엔드 개발 강점입니다.',
            items: [
                {
                    title: '데이터 중심 UI 구현',
                    desc: '관리자 페이지에서 자주 사용되는 검색, 필터, 정렬, 페이지네이션, 상세 조회, 등록/수정/삭제 흐름을 구현해왔습니다.',
                },
                {
                    title: '상태 관리 분리',
                    desc: '서버에서 받아오는 데이터는 React Query로 관리하고, 모달, 선택값, 필터 상태 등 클라이언트 UI 상태는 Zustand로 분리해 관리했습니다.',
                },
                {
                    title: '퍼블리싱 기반의 UI 완성도',
                    desc: '웹 표준, 접근성, 반응형 UI에 대한 이해를 바탕으로 디자인 시안을 실제 서비스 화면으로 안정적으로 구현할 수 있습니다.',
                },
                {
                    title: '운영성 화면 경험',
                    desc: 'ERP, 관리자 페이지, 약관, 대기 시스템처럼 실제 운영자가 사용하는 화면을 중심으로 개발해왔습니다.',
                },
            ],
        },
        skills: {
            heading: 'Skills',
            sub: '기술을 역할별로 묶어 실무에서 어떻게 쓰는지 드러냈습니다.',
            groups: [
                {
                    label: 'Frontend',
                    items: ['React', 'Next.js', 'TypeScript'],
                    desc: '페이지 구성, API 연동, 상태 처리, 실무 화면 개발',
                },
                { label: 'State & Data', items: ['React Query', 'Zustand'], desc: '서버 상태와 클라이언트 상태 분리' },
                {
                    label: 'UI',
                    items: ['Tailwind CSS', 'SCSS', 'shadcn/ui'],
                    desc: '반응형 UI, 공통 컴포넌트, 디자인 시스템 활용',
                },
                {
                    label: 'Table & Form',
                    items: ['TanStack Table', 'React Hook Form', 'Zod'],
                    desc: '관리자 페이지의 테이블, 필터, 폼 검증 구현',
                },
                {
                    label: 'ETC',
                    items: ['Kakao Maps API', 'i18next', 'Git', 'Vercel'],
                    desc: '지도 API, 다국어, 배포, 협업 경험',
                },
            ],
        },
        projects: {
            heading: 'Projects',
            sub: '관리자 페이지, 데이터 UI, 운영성 화면 경험이 드러나는 프로젝트를 우선 배치했습니다.',
            labels: {
                case: 'CASE',
                project: 'Project',
                tasks: '주요 작업',
                stack: '기술 스택',
                highlight: '강조 포인트',
            },
            cases: koProjects,
        },
        career: {
            heading: 'Career',
            sub: '기간보다 어떤 화면과 업무를 맡았는지 중심으로 정리했습니다.',
            dutiesLabel: '주요 업무',
            companies: [
                {
                    company: 'Endusoft',
                    period: '2024.05 - Present',
                    role: 'Frontend Developer / Web Publisher',
                    summary:
                        '관리자 페이지, ERP, 스토어 화면, DID 대기 시스템 등 운영성 웹 화면을 개발했습니다. Next.js, TypeScript, React Query, Zustand를 활용해 API 연동, 상태 관리, 데이터 테이블, 모달, 폼 UI를 구현했습니다.',
                    duties: [
                        'ERP 관리자 페이지 개발',
                        '서비스 신청/변경 관리 화면 개발',
                        '약관 조회 및 이전 약관 페이지 개발',
                        'DID/모바일 대기 시스템 화면 개발',
                        '공통 테이블, 모달, 상태 배지 UI 구현',
                    ],
                },
                {
                    company: 'Freeive',
                    period: '2022.03 - 2023.09',
                    role: 'Web Publisher',
                    summary:
                        '대형 웹사이트 리뉴얼 프로젝트에서 웹 표준, 접근성, 반응형 UI를 중심으로 화면을 구현했습니다. 시안을 정확하게 구현하는 퍼블리싱 역량을 쌓았고, 공통 UI 컴포넌트와 접근성 개선 작업을 경험했습니다.',
                    duties: [
                        'Vue 기반 웹사이트 퍼블리싱',
                        '공통 UI 컴포넌트 구현',
                        '반응형/적응형 화면 구현',
                        '웹 접근성 인증 대응',
                    ],
                },
            ],
        },
        contact: {
            heading: 'Contact',
            sub: '프론트엔드 개발, 관리자 페이지 구축, 퍼블리싱 고도화가 필요한 프로젝트에서 함께할 수 있습니다. 이메일, GitHub, 이력서를 통해 더 자세한 내용을 확인하실 수 있습니다.',
            email: 'dudwk9946@naver.com',
            channels: [
                { label: 'Email', value: 'dudwk9946@naver.com' },
                { label: 'GitHub', value: 'https://github.com/wunghuihwang' },
                { label: 'GitHub v2', value: 'https://github.com/wunhui' },
            ],
            form: {
                nameLabel: '회사명',
                namePlaceholder: '회사명',
                emailLabel: '이메일',
                emailPlaceholder: '이메일',
                phoneLabel: '연락처',
                phonePlaceholder: '010-0000-0000',
                messageLabel: '메시지',
                messagePlaceholder: '메시지',
                submitButton: '메시지 보내기',
            },
        },
        footer: { rights: '모든 권리 보유.' },
    },
    en: {
        meta: {
            title: 'Frontend Developer Portfolio',
            description:
                'Frontend developer portfolio focused on admin pages and data-driven UI with Next.js and TypeScript',
        },
        nav: {
            about: 'About',
            strengths: 'Strength',
            skills: 'Skills',
            projects: 'Projects',
            career: 'Career',
            contact: 'Contact',
            toggleTheme: 'Toggle theme',
            toggleLang: 'Toggle language',
        },
        hero: {
            eyebrow: 'FRONTEND DEVELOPER · ADMIN UI · DATA UI',
            title: ['Frontend developer', 'with UI craft', 'and structure'],
            sub: 'I started as a web publisher and built a foundation in standards, accessibility, and responsive UI. Today I build admin and back-office interfaces with Next.js, TypeScript, React Query, and Zustand.',
            specLabel: 'POSITIONING',
            specValue: 'Publisher-based UI · Next.js · TypeScript · Admin/Data UI',
            ctas: [
                { label: 'View Projects', href: '#projects', variant: 'primary' },
                { label: 'View Career', href: '#career', variant: 'secondary' },
                { label: 'View GitHub', href: 'https://github.com/wunghuihwang', variant: 'secondary' },
            ],
            scrollHint: 'Scroll',
        },
        about: {
            heading: 'About',
            lead: 'A frontend developer who builds admin pages and data-driven UI with Next.js and TypeScript on top of strong publishing fundamentals.',
            body: [
                'I started my career as a publisher and expanded into frontend development.',
                'Early on, I focused on translating designs accurately with HTML, CSS, and JavaScript across browsers and screen sizes.',
                'Through production work, I learned that UI connects data, state, and user behavior. I now build admin and back-office screens with Next.js, TypeScript, React Query, and Zustand.',
                'My strength is combining UI implementation quality with structural understanding: markup, accessibility, responsive UI, API integration, state management, and shared components.',
            ],
            stats: [
                { value: '4+', label: 'years experience' },
                { value: 'Admin', label: 'ERP/admin UI' },
                { value: 'A11Y', label: 'accessibility work' },
            ],
        },
        strengths: {
            heading: 'Frontend Strength',
            sub: 'A concise view of the strengths I bring to frontend product work.',
            items: [
                {
                    title: 'Data-driven UI',
                    desc: 'Implemented search, filters, sorting, pagination, detail views, and create/update/delete flows common in admin pages.',
                },
                {
                    title: 'State separation',
                    desc: 'Used React Query for server state and Zustand for client UI state such as modals, selections, and filters.',
                },
                {
                    title: 'UI quality from publishing',
                    desc: 'Built reliable service screens based on web standards, accessibility, responsive UI, and precise implementation.',
                },
                {
                    title: 'Operational screen experience',
                    desc: 'Worked on screens used by real operators: ERP, admin pages, terms, and waiting systems.',
                },
            ],
        },
        skills: {
            heading: 'Skills',
            sub: 'Grouped by how each tool is used in production UI work.',
            groups: [
                {
                    label: 'Frontend',
                    items: ['React', 'Next.js', 'TypeScript'],
                    desc: 'Page composition, API integration, state handling, production UI development',
                },
                {
                    label: 'State & Data',
                    items: ['React Query', 'Zustand'],
                    desc: 'Server state and client UI state separation',
                },
                {
                    label: 'UI',
                    items: ['Tailwind CSS', 'SCSS', 'shadcn/ui'],
                    desc: 'Responsive UI, shared components, design-system usage',
                },
                {
                    label: 'Table & Form',
                    items: ['TanStack Table', 'React Hook Form', 'Zod'],
                    desc: 'Admin tables, filters, and form validation',
                },
                {
                    label: 'ETC',
                    items: ['Kakao Maps API', 'i18next', 'Git', 'Vercel'],
                    desc: 'Map API, i18n, deployment, collaboration',
                },
            ],
        },
        projects: {
            heading: 'Projects',
            sub: 'Project cases that emphasize admin pages, data UI, and operational workflows.',
            labels: {
                case: 'CASE',
                project: 'Project',
                tasks: 'Key Work',
                stack: 'Tech Stack',
                highlight: 'Highlight',
            },
            cases: enProjects,
        },
        career: {
            heading: 'Career',
            sub: 'Focused on responsibilities and screen types rather than only dates.',
            dutiesLabel: 'Key Responsibilities',
            companies: [
                {
                    company: 'Endusoft',
                    period: '2024.05 - Present',
                    role: 'Frontend Developer / Web Publisher',
                    summary:
                        'Built operational web screens including admin pages, ERP, store screens, and DID waiting systems. Implemented API integration, state management, data tables, modals, and form UI with Next.js, TypeScript, React Query, and Zustand.',
                    duties: [
                        'ERP admin development',
                        'Service application/change management screens',
                        'Terms and previous terms pages',
                        'DID/mobile waiting system screens',
                        'Shared table, modal, and status badge UI',
                    ],
                },
                {
                    company: 'Freeive',
                    period: '2022.03 - 2023.09',
                    role: 'Web Publisher',
                    summary:
                        'Implemented large-scale website renewal screens with a focus on web standards, accessibility, and responsive UI. Built publishing fundamentals, shared UI components, and accessibility improvements.',
                    duties: [
                        'Vue-based website publishing',
                        'Shared UI components',
                        'Responsive/adaptive screens',
                        'Accessibility certification support',
                    ],
                },
            ],
        },
        contact: {
            heading: 'Contact',
            sub: 'I can contribute to frontend development, admin page implementation, and advanced publishing work. You can review more through email and GitHub.',
            email: 'dudwk9946@naver.com',
            channels: [
                { label: 'Email', value: 'dudwk9946@naver.com' },
                { label: 'GitHub', value: 'https://github.com/wunghuihwang' },
                { label: 'GitHub v2', value: 'https://github.com/wunhui' },
            ],
            form: {
                nameLabel: 'Company name',
                namePlaceholder: 'Your Company name',
                emailLabel: 'Email',
                emailPlaceholder: 'your@email.com',
                phoneLabel: 'Phone',
                phonePlaceholder: '+82-10-0000-0000',
                messageLabel: 'Message',
                messagePlaceholder: 'Your message',
                submitButton: 'Send Message',
            },
        },
        footer: { rights: 'All rights reserved.' },
    },
};
