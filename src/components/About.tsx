'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const tiny = 'font-mono text-[11px] font-medium uppercase tracking-[0.12em]';

export default function About() {
    const lang = useUIStore((s) => s.lang);
    const t = content[lang].about;

    return (
        <section className="mx-auto max-w-site px-6 py-[100px] max-md:px-5 max-md:py-[72px] max-sm:px-4" id="about" aria-labelledby="about-heading">
            <div className="w-full">
                <Reveal>
                    <SectionHeading tag="ABOUT — 01" heading={t.heading} id="about-heading" />
                </Reveal>

                <div className="grid grid-cols-[0.9fr_1.4fr] gap-14 max-lg:grid-cols-1 max-lg:gap-8">
                    <Reveal>
                        <p className="sticky top-[110px] font-display text-[clamp(1.3rem,2.4vw,1.7rem)] font-semibold leading-[1.45] text-ink max-lg:static">
                            {t.lead}
                        </p>
                    </Reveal>

                    <div className="flex flex-col gap-5">
                        {t.body.map((para, i) => (
                            <Reveal key={para.slice(0, 12)} delay={i * 0.08}>
                                <p className="max-w-[64ch] break-words text-base leading-[1.75] text-soft">{para}</p>
                            </Reveal>
                        ))}

                        <Reveal delay={t.body.length * 0.08} className="mt-4">
                            <dl className="flex flex-wrap gap-10 border-t border-line pt-6">
                                {t.stats.map((stat) => (
                                    <div className="flex flex-col gap-1" key={stat.label}>
                                        <dt className="font-mono text-[1.8rem] font-semibold text-mint">{stat.value}</dt>
                                        <dd className={`${tiny} text-soft`}>{stat.label}</dd>
                                    </div>
                                ))}
                            </dl>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
