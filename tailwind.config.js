/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      maxWidth: {
        site: 'var(--max-width)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        paper: 'var(--paper)',
        raised: 'var(--paper-raised)',
        ink: 'var(--ink)',
        soft: 'var(--ink-soft)',
        line: 'var(--line)',
        strong: 'var(--line-strong)',
        mint: 'var(--accent-mint)',
        amber: 'var(--accent-amber)',
      },
      transitionTimingFunction: {
        spec: 'var(--ease-spec)',
      },
      transitionDuration: {
        fast: 'var(--motion-fast)',
        base: 'var(--motion-base)',
        slow: 'var(--motion-slow)',
      },
      keyframes: {
        scrollPulse: {
          '0%, 100%': { transform: 'scaleY(0.4)', opacity: '0.4' },
          '50%': { transform: 'scaleY(1)', opacity: '1' },
        },
      },
      animation: {
        scrollPulse: 'scrollPulse 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
