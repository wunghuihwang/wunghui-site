import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: '프론트엔드 개발자 · 퍼블리셔 포트폴리오',
  description: 'Next.js로 ERP·어드민·이커머스 서비스를 만드는 프론트엔드 개발자 / 퍼블리셔 포트폴리오',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#edf1f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0e14' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* Pretendard: 한국어 가변폭 산세리프, CDN 정적 웹폰트 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
        {/* JetBrains Mono: 스펙 라벨·숫자용 모노스페이스 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        {/* 깜빡임(FOUC) 방지: 페인트 이전에 저장된 테마를 먼저 적용 */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio:theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);var l=localStorage.getItem('portfolio:lang');if(l){document.documentElement.setAttribute('lang',l);}}catch(e){}})();`,
          }}
        />
        <a href="#main-content" className="skip-link">
          본문으로 바로가기
        </a>
        {children}
      </body>
    </html>
  );
}
