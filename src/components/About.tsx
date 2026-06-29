'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import styles from '../styles/About.module.scss';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
    const lang = useUIStore((s) => s.lang);
    const t = content[lang].about;

    return (
        <section className={styles.section} id="about" aria-labelledby="about-heading">
            <div className={styles.inner}>
                <Reveal>
                    <SectionHeading tag="ABOUT — 01" heading={t.heading} id="about-heading" />
                </Reveal>

                <div className={styles.grid}>
                    <Reveal className={styles.leadCol}>
                        <p className={styles.lead}>{t.lead}</p>
                    </Reveal>

                    <div className={styles.bodyCol}>
                        {t.body.map((para, i) => (
                            <Reveal key={para.slice(0, 12)} delay={i * 0.08}>
                                <p className={styles.body}>{para}</p>
                            </Reveal>
                        ))}

                        <Reveal delay={t.body.length * 0.08} className={styles.stats}>
                            <dl>
                                {t.stats.map((stat) => (
                                    <div className={styles.stat} key={stat.label}>
                                        <dt className={styles.statValue}>{stat.value}</dt>
                                        <dd className={styles.statLabel}>{stat.label}</dd>
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
