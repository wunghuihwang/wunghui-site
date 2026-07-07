'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const tiny = 'font-mono text-[11px] font-medium uppercase tracking-[0.12em]';

export default function Career() {
    const lang = useUIStore((s) => s.lang);
    const t = content[lang].career;

    return (
        <section className="mx-auto max-w-site px-6 py-[100px] max-md:px-5 max-md:py-[72px] max-sm:px-4" id="career" aria-labelledby="career-heading">
            <div>
                <Reveal>
                    <SectionHeading tag="CAREER — 04" heading={t.heading} sub={t.sub} id="career-heading" />
                </Reveal>

                <ol className="flex flex-col gap-16 max-sm:gap-12">
                    {t.companies.map((c, ci) => (
                        <Reveal
                            as="li"
                            key={c.company}
                            delay={ci * 0.08}
                            className="grid min-w-0 grid-cols-[120px_minmax(0,1fr)] gap-8 max-md:grid-cols-[64px_minmax(0,1fr)] max-md:gap-4 max-sm:grid-cols-[54px_minmax(0,1fr)] max-sm:gap-3"
                        >
                            <div className="relative flex min-w-0 flex-col items-center">
                                <span className={`${tiny} w-full text-left text-soft max-md:text-[9px] max-sm:break-words max-sm:leading-[1.45]`}>
                                    {c.period}
                                </span>
                                <span className="mt-3.5 size-[9px] shrink-0 rounded-full bg-mint" aria-hidden="true" />
                                <span className="mt-2 w-px flex-1 bg-line" aria-hidden="true" />
                            </div>

                            <div className="min-w-0 pb-2">
                                <header className="mb-6">
                                    <h3 className="mb-1.5 break-words font-display text-2xl font-bold text-ink max-sm:text-xl">{c.company}</h3>
                                    <p className="mb-1 break-words text-[0.95rem] text-soft">{c.role}</p>
                                    <p className={`${tiny} break-words text-amber max-sm:text-[10px]`}>{c.stackNote}</p>
                                </header>

                                <ul className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
                                    {c.projects.map((p) => (
                                        <li
                                            className="min-w-0 rounded-md border border-line p-5 transition-[border-color,transform] duration-fast hover:-translate-y-0.5 hover:border-strong max-sm:p-4"
                                            key={p.title}
                                        >
                                            <div className="mb-2 flex min-w-0 items-start justify-between gap-2 max-sm:flex-col">
                                                <h4 className="min-w-0 break-words text-[1.02rem] font-bold text-ink">{p.title}</h4>
                                                {p.ratio ? (
                                                    <span className={`${tiny} shrink-0 whitespace-nowrap rounded-[3px] bg-[color-mix(in_srgb,var(--accent-mint)_14%,transparent)] px-2 py-[3px] text-mint`}>
                                                        {p.ratio}
                                                    </span>
                                                ) : null}
                                            </div>
                                            <p className="mb-3 break-words text-[0.92rem] text-soft">{p.desc}</p>
                                            <ul className="flex flex-col gap-1.5">
                                                {p.achievements.map((a) => (
                                                    <li
                                                        key={a}
                                                        className="relative break-words pl-3.5 text-[0.88rem] leading-[1.55] text-ink before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-[5px] before:bg-mint before:content-['']"
                                                    >
                                                        {a}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    );
}
