'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import styles from '../styles/Skills.module.scss';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
    const lang = useUIStore((s) => s.lang);
    const t = content[lang].skills;

    return (
        <section className={styles.section} id="skills" aria-labelledby="skills-heading">
            <div className={styles.inner}>
                <Reveal>
                    <SectionHeading tag="SKILLS — 02" heading={t.heading} sub={t.sub} id="skills-heading" />
                </Reveal>

                <div className={styles.groups}>
                    {t.groups.map((group, i) => (
                        <Reveal key={group.label} delay={i * 0.06} className={styles.group}>
                            <h3 className={styles.groupLabel}>{group.label}</h3>
                            <ul className={styles.chips}>
                                {group.items.map((item) => (
                                    <li key={item} className={styles.chip}>
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
