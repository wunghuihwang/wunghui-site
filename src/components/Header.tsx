'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import { useEffect, useState } from 'react';

const tiny = 'font-mono text-[11px] font-medium uppercase tracking-[0.12em]';

export default function Header() {
    const { theme, lang, toggleTheme, toggleLang, hydrate, hydrated } = useUIStore();
    const [scrolled, setScrolled] = useState(false);
    const t = content[lang].nav;

    useEffect(() => {
        hydrate();
    }, [hydrate]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navItems = [
        { href: '#about', label: t.about },
        { href: '#strengths', label: t.strengths },
        { href: '#skills', label: t.skills },
        { href: '#projects', label: t.projects },
        { href: '#career', label: t.career },
        { href: '#contact', label: t.contact },
    ];

    return (
        <header
            className={`fixed inset-x-0 top-0 z-[100] border-b transition-[background,border-color] duration-base ease-spec ${
                scrolled
                    ? 'border-line bg-[color-mix(in_srgb,var(--paper)_88%,transparent)] backdrop-blur-[10px]'
                    : 'border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto flex max-w-site items-center justify-between px-6 py-[18px] max-md:px-5 max-md:py-3.5">
                <a href="#main-content" className="inline-flex items-center gap-2 rounded text-no-underline" aria-label="홈으로 이동">
                    <span className="size-2.5 shrink-0 border border-ink bg-mint" aria-hidden="true" />
                    <span className={`${tiny} text-[13px] tracking-[0.08em] text-ink`}>FE.PUB</span>
                </a>

                <nav className="max-md:hidden" aria-label="주요 섹션">
                    <ul className="flex gap-5">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`${tiny} rounded-sm text-soft no-underline transition-colors duration-fast hover:text-ink hover:underline`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        className={`${tiny} flex size-11 min-h-11 min-w-11 items-center justify-center rounded border border-strong text-ink transition-[border-color,transform,background] duration-fast hover:border-mint hover:bg-[color-mix(in_srgb,var(--accent-mint)_10%,transparent)] active:scale-95`}
                        onClick={toggleLang}
                        aria-label={t.toggleLang}
                        title={t.toggleLang}
                    >
                        <span aria-hidden="true">{hydrated && lang === 'ko' ? 'EN' : 'KO'}</span>
                    </button>
                    <button
                        type="button"
                        className={`${tiny} flex size-11 min-h-11 min-w-11 items-center justify-center rounded border border-strong text-ink transition-[border-color,transform,background] duration-fast hover:border-mint hover:bg-[color-mix(in_srgb,var(--accent-mint)_10%,transparent)] active:scale-95`}
                        onClick={toggleTheme}
                        aria-label={t.toggleTheme}
                        aria-pressed={hydrated && theme === 'dark'}
                        title={t.toggleTheme}
                    >
                        <span className="text-sm" aria-hidden="true">
                            {hydrated && theme === 'dark' ? '☾' : '☀'}
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
}
