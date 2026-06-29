'use client';

import { create } from 'zustand';
import type { Lang } from '@/data/content';

type Theme = 'light' | 'dark';

interface UIState {
  theme: Theme;
  lang: Lang;
  hydrated: boolean;
  toggleTheme: () => void;
  toggleLang: () => void;
  hydrate: () => void;
}

const THEME_KEY = 'portfolio:theme';
const LANG_KEY = 'portfolio:lang';

export const useUIStore = create<UIState>((set, get) => ({
  theme: 'light',
  lang: 'ko',
  hydrated: false,
  toggleTheme: () => {
    const next: Theme = get().theme === 'light' ? 'dark' : 'light';
    set({ theme: next });
    document.documentElement.setAttribute('data-theme', next);
    window.localStorage.setItem(THEME_KEY, next);
  },
  toggleLang: () => {
    const next: Lang = get().lang === 'ko' ? 'en' : 'ko';
    set({ lang: next });
    document.documentElement.setAttribute('lang', next);
    window.localStorage.setItem(LANG_KEY, next);
  },
  hydrate: () => {
    if (get().hydrated) return;
    const storedTheme = window.localStorage.getItem(THEME_KEY) as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme: Theme = storedTheme ?? (prefersDark ? 'dark' : 'light');
    const storedLang = window.localStorage.getItem(LANG_KEY) as Lang | null;
    const lang: Lang = storedLang ?? 'ko';

    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('lang', lang);
    set({ theme, lang, hydrated: true });
  },
}));
