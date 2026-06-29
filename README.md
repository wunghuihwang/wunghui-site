# Frontend Portfolio (Next.js)

퍼블리셔 출신 프론트엔드 개발자를 위한 1페이지 포트폴리오입니다. 페이지 전체를 "퍼블리싱 스펙 시트 / 디자인 아트보드" 모티프로 디자인했습니다 — 블루프린트 그리드, 코너 크로스헤어, 룰러 라벨 등 실제 마크업 작업에서 다루는 요소들을 시각 언어로 가져왔습니다.

## 시작하기

```bash
npm install
npm run dev
```

`http://localhost:3000` 에서 확인할 수 있습니다.

```bash
npm run build && npm run start   # 프로덕션 빌드 확인
npm run lint                     # eslint
```

## 내 정보로 바꾸기 (가장 먼저 할 일)

1. `src/data/content.ts`
   - `contact.email`, `contact.channels` 의 GitHub 등 실제 연락처로 교체하세요 (ko/en 둘 다).
   - 경력·프로젝트 문구는 이력서 내용을 그대로 옮겨뒀습니다. 디테일/성과 수치가 더 있다면 `achievements` 배열에 추가하면 됩니다.
2. `src/app/layout.tsx` / `src/data/content.ts` 의 `meta.title`, `meta.description` — 실제 이름을 넣어주세요.
3. 파비콘: `src/app/favicon.ico` 를 원하는 아이콘으로 교체(또는 추가)하세요.
4. 헤더 로고 텍스트(`FE.PUB`, `src/components/Header.tsx`)도 원하면 이니셜이나 이름으로 교체하세요.

## 기술 스택 & 구조

- **Next.js 14 (App Router) + TypeScript**
- **SCSS Modules** — `@include tiny`, `@include media()` 같은 커스텀 믹스인 패턴 사용 (`src/styles/_mixins.scss`)
- **Zustand** — 테마(라이트/다크) & 언어(KO/EN) 전역 상태 (`src/store/useUIStore.ts`)
- **Framer Motion** — 스크롤 리빌 애니메이션 (`src/components/Reveal.tsx`), `prefers-reduced-motion` 자동 대응
- **GSAP** — 히어로 인트로 시퀀스(그리드 드로잉 + 헤드라인 와이프), 동적 import로 초기 번들에서 분리
- **@tanstack/react-table** — Projects 섹션의 정렬·필터링 가능한 테이블 (이력서의 "Tanstack/react-table 정렬·필터링" 경험을 그대로 시연)

```
src/
  app/            layout.tsx, page.tsx, globals 연결
  components/     Header, Hero, About, Skills, ProjectsTable, Career, Contact, Footer, Reveal
  data/content.ts ko/en 콘텐츠 사전 (경력/스킬/연락처 등)
  store/          Zustand 스토어
  styles/         _mixins.scss, globals.scss (디자인 토큰)
```

## 접근성(Web A11Y) 체크포인트

- 스킵 링크(`본문으로 바로가기`), 시맨틱 랜드마크(`header`/`main`/`footer`), 섹션별 `aria-labelledby`
- 키보드 포커스: 마우스 클릭 시엔 숨기고 키보드 탐색 시에만 보이는 `:focus-visible` 링
- `prefers-reduced-motion` 전역 대응 — GSAP 인트로는 모션 최소화 환경에서 애니메이션 없이 즉시 최종 상태로 표시, CSS 트랜지션/애니메이션도 전부 무력화
- 테이블: `scope="col"`, `aria-sort`, 필터 결과 개수를 `aria-live="polite"`로 안내
- 다크 모드 대비 토큰 분리 (라이트/다크 모두 WCAG AA 대비 기준으로 색 선정)
- 모든 토글 버튼에 `aria-label`/`aria-pressed`

## 크로스브라우징 체크포인트

- `postcss.config.js` + `browserslist`(package.json) → autoprefixer로 vendor prefix 자동 처리
- `100svh` 우선 적용 후 `100vh` 폴백 (구형 Safari/구형 브라우저 대비, 선언 순서로 자연 폴백)
- `-webkit-overflow-scrolling: touch`, `-webkit-text-size-adjust` 등 iOS Safari 대응
- `color-mix()` 사용 부분은 최신 브라우저 전용 효과(배경 투명도 믹스)이며, 미지원 브라우저에서도 레이아웃이 깨지지 않도록 보조적인 용도로만 사용 — 폴백이 필요하면 해당 값을 고정 rgba로 바꿔도 무방합니다.

## 폰트

- 본문/디스플레이: **Pretendard** (jsdelivr CDN)
- 스펙 라벨/숫자: **JetBrains Mono** (Google Fonts CDN)

오프라인 빌드 환경이거나 폰트를 자체 호스팅하고 싶다면 `public/fonts`에 폰트 파일을 넣고 `src/app/layout.tsx`의 `<link>` 태그들을 `@font-face`로 교체하면 됩니다.
# portfolio
