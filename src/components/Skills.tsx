'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const tiny = 'font-mono text-[11px] font-medium uppercase tracking-[0.12em]';

export default function Skills() {
    const lang = useUIStore((s) => s.lang);
    const t = content[lang].skills;

    return (
        <section className="mx-auto max-w-site px-6 py-[100px] max-md:px-5 max-md:py-[72px] max-sm:px-4" id="skills" aria-labelledby="skills-heading">
            <div>
                <Reveal>
                    <SectionHeading tag="SKILLS — 04" heading={t.heading} sub={t.sub} id="skills-heading" />
                </Reveal>

                <div className="grid grid-cols-5 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
                    {t.groups.map((group, i) => (
                        <Reveal
                            key={group.label}
                            delay={i * 0.06}
                            className="min-w-0 rounded-md border border-line p-[22px] transition-colors duration-fast hover:border-strong max-sm:p-4"
                        >
                            <h3 className={`${tiny} mb-4 border-b border-dashed border-line pb-3 text-soft`}>{group.label}</h3>
                            <p className="mb-4 min-h-[3.5rem] break-words text-[0.9rem] leading-[1.55] text-ink max-sm:min-h-0">{group.desc}</p>
                            <ul className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <li
                                        key={item}
                                        className="break-words rounded border border-strong px-2.5 py-1.5 font-mono text-[0.82rem] text-ink transition-[background,color,border-color,transform] duration-fast hover:-translate-y-0.5 hover:border-mint hover:bg-mint hover:text-paper"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
