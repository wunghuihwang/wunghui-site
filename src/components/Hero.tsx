'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import { useEffect, useRef } from 'react';
import styles from '../styles/Hero.module.scss';

export default function Hero() {
    const lang = useUIStore((s) => s.lang);
    const t = content[lang].hero;

    const rootRef = useRef<HTMLDivElement>(null);
    const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const cornerRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const guideRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const titleLineRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion || !rootRef.current) return;

        let ctx: gsap.Context | null = null;
        let mounted = true;

        (async () => {
            const { default: gsap } = await import('gsap');

            if (!mounted || !rootRef.current) return;

            ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    defaults: { ease: 'power3.out' },
                });

                tl.from(
                    guideRefs.current,
                    {
                        scaleX: 0,
                        scaleY: 0,
                        transformOrigin: 'left top',
                        duration: 0.9,
                        stagger: 0.06,
                    },
                    0,
                )
                    .from(
                        cornerRefs.current,
                        {
                            opacity: 0,
                            scale: 0.4,
                            duration: 0.5,
                            stagger: 0.05,
                        },
                        0.2,
                    )
                    .from(
                        '[data-hero-eyebrow]',
                        {
                            opacity: 0,
                            y: 8,
                            duration: 0.5,
                        },
                        0.45,
                    )
                    .fromTo(
                        titleLineRefs.current,
                        {
                            clipPath: 'inset(0 100% 0 0)',
                        },
                        {
                            clipPath: 'inset(0 0% 0 0)',
                            duration: 0.7,
                            stagger: 0.12,
                        },
                        0.55,
                    )
                    .from(
                        '[data-hero-sub]',
                        {
                            opacity: 0,
                            y: 10,
                            duration: 0.5,
                        },
                        1.1,
                    )
                    .from(
                        '[data-hero-spec]',
                        {
                            opacity: 0,
                            y: 8,
                            duration: 0.5,
                        },
                        1.25,
                    )
                    .from(
                        '[data-hero-cta]',
                        {
                            opacity: 0,
                            y: 8,
                            duration: 0.5,
                        },
                        1.35,
                    );
            }, rootRef);
        })();

        return () => {
            mounted = false;
            ctx?.revert();
        };
    }, []);

    return (
        <section className={styles.hero} id="hero" aria-label="인트로">
            <div className={styles.stage} ref={rootRef} style={{ visibility: 'visible', opacity: 1 }}>
                <div className={styles.blueprint} aria-hidden="true">
                    <span
                        ref={(el) => {
                            guideRefs.current[0] = el;
                        }}
                        className={`${styles.guide} ${styles.guideH}`}
                        style={{ top: '28%' }}
                    />
                    <span
                        ref={(el) => {
                            guideRefs.current[1] = el;
                        }}
                        className={`${styles.guide} ${styles.guideH}`}
                        style={{ top: '72%' }}
                    />
                    <span
                        ref={(el) => {
                            guideRefs.current[2] = el;
                        }}
                        className={`${styles.guide} ${styles.guideV}`}
                        style={{ left: '14%' }}
                    />
                    <span
                        ref={(el) => {
                            guideRefs.current[3] = el;
                        }}
                        className={`${styles.guide} ${styles.guideV}`}
                        style={{ left: '86%' }}
                    />

                    <span
                        ref={(el) => {
                            cornerRefs.current[0] = el;
                        }}
                        className={`${styles.corner} ${styles.cornerTl}`}
                    />
                    <span
                        ref={(el) => {
                            cornerRefs.current[1] = el;
                        }}
                        className={`${styles.corner} ${styles.cornerTr}`}
                    />
                    <span
                        ref={(el) => {
                            cornerRefs.current[2] = el;
                        }}
                        className={`${styles.corner} ${styles.cornerBl}`}
                    />
                    <span
                        ref={(el) => {
                            cornerRefs.current[3] = el;
                        }}
                        className={`${styles.corner} ${styles.cornerBr}`}
                    />
                </div>

                <div className={styles.content}>
                    <p className={styles.eyebrow} data-hero-eyebrow>
                        <span className={styles.dot} aria-hidden="true" />
                        {t.eyebrow}
                    </p>

                    <h1 className={styles.title}>
                        {t.title.map((line, i) => (
                            <span className={styles.titleLineWrap} key={line}>
                                <span
                                    className={styles.titleLine}
                                    ref={(el) => {
                                        titleLineRefs.current[i] = el;
                                        lineRefs.current[i] = el;
                                    }}
                                >
                                    {line}
                                </span>
                            </span>
                        ))}
                    </h1>

                    <p className={styles.sub} data-hero-sub>
                        {t.sub}
                    </p>

                    <div className={styles.specRow} data-hero-spec>
                        <span className={styles.specLabel}>{t.specLabel}</span>
                        <span className={styles.specValue}>{t.specValue}</span>
                    </div>

                    <div data-hero-cta>
                        <a className={styles.cta} href="#career">
                            {t.cta}
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                <div className={styles.scrollHint} aria-hidden="true">
                    <span className={styles.scrollLabel}>{t.scrollHint}</span>
                    <span className={styles.scrollLine} />
                </div>
            </div>
        </section>
    );
}
