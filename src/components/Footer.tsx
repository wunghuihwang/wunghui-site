'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';

const tiny = 'font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-soft';

export default function Footer() {
    const lang = useUIStore((s) => s.lang);
    const t = content[lang];
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-site items-center justify-between gap-3 p-6 max-md:flex-col max-md:items-start max-md:p-5">
                <span className={tiny}>FE.PUB</span>
                <p className={tiny}>
                    © {year} · {t.footer.rights}
                </p>
            </div>
        </footer>
    );
}
