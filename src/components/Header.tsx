'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.scss';

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
        { href: '#skills', label: t.skills },
        { href: '#career', label: t.career },
        { href: '#contact', label: t.contact },
    ];

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <a href="#main-content" className={styles.logo} aria-label="홈으로 이동">
                    <span className={styles.logoMark} aria-hidden="true" />
                    <span className={styles.logoText}>FE.PUB</span>
                </a>

                <nav className={styles.nav} aria-label="주요 섹션">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <button type="button" className={styles.toggle} onClick={toggleLang} aria-label={t.toggleLang}>
                        <span aria-hidden="true">{hydrated && lang === 'ko' ? 'EN' : 'KO'}</span>
                    </button>
                    <button
                        type="button"
                        className={styles.toggle}
                        onClick={toggleTheme}
                        aria-label={t.toggleTheme}
                        aria-pressed={hydrated && theme === 'dark'}
                    >
                        <span className={styles.themeIcon} aria-hidden="true">
                            {hydrated && theme === 'dark' ? '☾' : '☀'}
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
}
