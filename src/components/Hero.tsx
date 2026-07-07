'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import { useEffect, useRef } from 'react';

const tiny = 'font-mono text-[11px] font-medium uppercase tracking-[0.12em]';
const corner =
    "absolute size-4 before:absolute before:left-0 before:top-0 before:h-px before:w-full before:bg-soft before:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-px after:bg-soft after:content-['']";

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
        <section
            className="relative flex min-h-screen min-h-svh w-full items-stretch bg-paper bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[size:40px_40px]"
            id="hero"
            aria-label="인트로"
        >
            <div
                className="relative mx-auto flex w-full max-w-site flex-col justify-center px-6 max-md:px-5"
                ref={rootRef}
                style={{ visibility: 'visible', opacity: 1 }}
            >
                <div className="pointer-events-none absolute inset-x-6 bottom-14 top-14 max-md:inset-x-3 max-md:bottom-16 max-md:top-[84px]" aria-hidden="true">
                    <span
                        ref={(el) => {
                            guideRefs.current[0] = el;
                        }}
                        className="absolute left-0 right-0 h-px bg-strong"
                        style={{ top: '28%' }}
                    />
                    <span
                        ref={(el) => {
                            guideRefs.current[1] = el;
                        }}
                        className="absolute left-0 right-0 h-px bg-strong"
                        style={{ top: '72%' }}
                    />
                    <span
                        ref={(el) => {
                            guideRefs.current[2] = el;
                        }}
                        className="absolute bottom-0 top-0 w-px bg-strong"
                        style={{ left: '14%' }}
                    />
                    <span
                        ref={(el) => {
                            guideRefs.current[3] = el;
                        }}
                        className="absolute bottom-0 top-0 w-px bg-strong"
                        style={{ left: '86%' }}
                    />

                    <span
                        ref={(el) => {
                            cornerRefs.current[0] = el;
                        }}
                        className={`${corner} left-0 top-0`}
                    />
                    <span
                        ref={(el) => {
                            cornerRefs.current[1] = el;
                        }}
                        className={`${corner} right-0 top-0 scale-x-[-1]`}
                    />
                    <span
                        ref={(el) => {
                            cornerRefs.current[2] = el;
                        }}
                        className={`${corner} bottom-0 left-0 scale-y-[-1]`}
                    />
                    <span
                        ref={(el) => {
                            cornerRefs.current[3] = el;
                        }}
                        className={`${corner} bottom-0 right-0 scale-[-1]`}
                    />
                </div>

                <div className="relative z-[1] min-w-0 py-[120px_64px] max-md:py-[100px_56px] max-sm:py-[96px_48px]">
                    <p className={`${tiny} mb-6 inline-flex items-center gap-2 text-soft`} data-hero-eyebrow>
                        <span className="size-1.5 rounded-full bg-mint shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent-mint)_25%,transparent)]" aria-hidden="true" />
                        {t.eyebrow}
                    </p>

                    <h1 className="mb-7 max-w-[16ch] break-words font-display text-[clamp(2.15rem,11vw,5.2rem)] font-bold leading-[1.08] tracking-normal text-ink">
                        {t.title.map((line, i) => (
                            <span className="block overflow-hidden" key={line}>
                                <span
                                    className="inline-block"
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

                    <p className="mb-8 max-w-[56ch] text-[clamp(1rem,1.6vw,1.15rem)] text-soft" data-hero-sub>
                        {t.sub}
                    </p>

                    <div className="mb-10 inline-flex w-fit max-w-full flex-wrap items-center gap-2.5 rounded border border-strong px-3.5 py-2" data-hero-spec>
                        <span className={`${tiny} text-amber`}>{t.specLabel}</span>
                        <span className={`${tiny} tracking-[0.04em] text-soft`}>{t.specValue}</span>
                    </div>

                    <div data-hero-cta>
                        <a
                            className="inline-flex items-center gap-2.5 rounded border border-ink px-[22px] py-3.5 text-[0.95rem] font-semibold text-ink transition-[background,color,transform] duration-fast hover:bg-ink hover:text-paper active:scale-[0.98] [&_span]:transition-transform [&_span]:duration-fast hover:[&_span]:translate-x-[3px]"
                            href="#career"
                        >
                            {t.cta}
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 max-sm:hidden" aria-hidden="true">
                    <span className={`${tiny} text-soft`}>{t.scrollHint}</span>
                    <span className="h-8 w-px animate-scrollPulse bg-gradient-to-b from-soft to-transparent" />
                </div>
            </div>
        </section>
    );
}
