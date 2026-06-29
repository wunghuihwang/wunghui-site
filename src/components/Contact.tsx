'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import styles from '../styles/Contact.module.scss';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Contact() {
    const lang = useUIStore((s) => s.lang);
    const t = content[lang].contact;

    return (
        <section className={styles.section} id="contact" aria-labelledby="contact-heading">
            <div className={styles.inner}>
                <Reveal>
                    <SectionHeading tag="CONTACT — 05" heading={t.heading} sub={t.sub} id="contact-heading" />
                </Reveal>

                <Reveal>
                    <a className={styles.emailLink} href={`mailto:${t.email}`}>
                        {t.email}
                    </a>
                </Reveal>

                <Reveal delay={0.1}>
                    <ul className={styles.channels}>
                        {t.channels.map((ch) => (
                            <li key={ch.label} className={styles.channel}>
                                <span className={styles.channelLabel}>{ch.label}</span>
                                <span className={styles.channelValue}>{ch.value}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}
