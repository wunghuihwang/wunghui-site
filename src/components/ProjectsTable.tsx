'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const tiny = 'font-mono text-[11px] font-medium uppercase tracking-[0.12em]';

export default function ProjectsTable() {
    const lang = useUIStore((s) => s.lang);
    const t = content[lang].projects;

    return (
        <section className="mx-auto max-w-site px-6 py-[100px] max-md:px-5 max-md:py-[72px] max-sm:px-4" id="projects" aria-labelledby="projects-heading">
            <div className="min-w-0">
                <Reveal>
                    <SectionHeading tag="PROJECTS — 05" heading={t.heading} sub={t.sub} id="projects-heading" />
                </Reveal>

                <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
                    {t.cases.map((project, i) => (
                        <Reveal
                            key={project.title}
                            delay={i * 0.05}
                            className="min-w-0 rounded-md border border-line p-6 transition-[border-color,transform] duration-fast hover:-translate-y-0.5 hover:border-strong max-sm:p-4"
                        >
                            <div className="mb-5 flex min-w-0 items-start justify-between gap-4 max-sm:flex-col">
                                <div className="min-w-0">
                                    <p className={`${tiny} mb-2 text-mint`}>
                                        {t.labels.case} {String(i + 1).padStart(2, '0')}
                                    </p>
                                    <h3 className="break-words font-display text-2xl font-bold text-ink max-sm:text-xl">{project.title}</h3>
                                </div>
                                <span className={`${tiny} shrink-0 rounded-[3px] border border-strong px-2 py-1 text-soft`}>
                                    {t.labels.project}
                                </span>
                            </div>

                            <p className="mb-5 break-words text-[0.96rem] leading-[1.7] text-soft">{project.summary}</p>

                            <div className="mb-5">
                                <h4 className={`${tiny} mb-3 text-amber`}>{t.labels.tasks}</h4>
                                <ul className="grid gap-2">
                                    {project.tasks.map((task) => (
                                        <li
                                            key={task}
                                            className="relative break-words pl-3.5 text-[0.9rem] leading-[1.55] text-ink before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-[5px] before:bg-mint before:content-['']"
                                        >
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-5">
                                <h4 className={`${tiny} mb-3 text-amber`}>{t.labels.stack}</h4>
                                <ul className="flex flex-wrap gap-2">
                                    {project.stack.map((item) => (
                                        <li key={item} className="rounded border border-strong px-2.5 py-1.5 font-mono text-[0.78rem] text-ink">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-t border-line pt-4">
                                <h4 className={`${tiny} mb-2 text-mint`}>{t.labels.highlight}</h4>
                                <p className="break-words text-[0.94rem] leading-[1.65] text-ink">{project.highlight}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
