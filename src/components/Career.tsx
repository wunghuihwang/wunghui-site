'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import styles from '../styles/Career.module.scss';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Career() {
    const lang = useUIStore((s) => s.lang);
    const t = content[lang].career;

    return (
        <section className={styles.section} id="career" aria-labelledby="career-heading">
            <div className={styles.inner}>
                <Reveal>
                    <SectionHeading tag="CAREER — 04" heading={t.heading} sub={t.sub} id="career-heading" />
                </Reveal>

                <ol className={styles.timeline}>
                    {t.companies.map((c, ci) => (
                        <Reveal as="li" key={c.company} delay={ci * 0.08} className={styles.company}>
                            <div className={styles.rail}>
                                <span className={styles.period}>{c.period}</span>
                                <span className={styles.dot} aria-hidden="true" />
                                <span className={styles.railLine} aria-hidden="true" />
                            </div>

                            <div className={styles.companyBody}>
                                <header className={styles.companyHead}>
                                    <h3 className={styles.companyName}>{c.company}</h3>
                                    <p className={styles.role}>{c.role}</p>
                                    <p className={styles.stackNote}>{c.stackNote}</p>
                                </header>

                                <ul className={styles.projects}>
                                    {c.projects.map((p) => (
                                        <li className={styles.project} key={p.title}>
                                            <div className={styles.projectHead}>
                                                <h4 className={styles.projectTitle}>{p.title}</h4>
                                                {p.ratio ? <span className={styles.ratio}>{p.ratio}</span> : null}
                                            </div>
                                            <p className={styles.projectDesc}>{p.desc}</p>
                                            <ul className={styles.achievements}>
                                                {p.achievements.map((a) => (
                                                    <li key={a}>{a}</li>
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
