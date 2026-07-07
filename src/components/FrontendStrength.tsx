'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const tiny = 'font-mono text-[11px] font-medium uppercase tracking-[0.12em]';

export default function FrontendStrength() {
    const lang = useUIStore((s) => s.lang);
    const t = content[lang].strengths;

    return (
        <section className="mx-auto max-w-site px-6 py-[100px] max-md:px-5 max-md:py-[72px] max-sm:px-4" id="strengths" aria-labelledby="strengths-heading">
            <div>
                <Reveal>
                    <SectionHeading tag="STRENGTH — 03" heading={t.heading} sub={t.sub} id="strengths-heading" />
                </Reveal>

                <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                    {t.items.map((item, i) => (
                        <Reveal
                            key={item.title}
                            delay={i * 0.06}
                            className="min-w-0 rounded-md border border-line bg-[color-mix(in_srgb,var(--paper-raised)_60%,transparent)] p-5 transition-colors duration-fast hover:border-strong"
                        >
                            <p className={`${tiny} mb-4 text-mint`}>0{i + 1}</p>
                            <h3 className="mb-3 break-words font-display text-xl font-bold text-ink">{item.title}</h3>
                            <p className="break-words text-[0.94rem] leading-[1.7] text-soft">{item.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
