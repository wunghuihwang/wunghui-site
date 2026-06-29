'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import styles from '../styles/Footer.module.scss';

export default function Footer() {
    const lang = useUIStore((s) => s.lang);
    const t = content[lang];
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <span className={styles.mark}>FE.PUB</span>
                <p className={styles.rights}>
                    © {year} · {t.footer.rights}
                </p>
            </div>
        </footer>
    );
}
