interface SectionHeadingProps {
    tag: string;
    heading: string;
    sub?: string;
    id?: string;
}

const tiny = 'font-mono text-[11px] font-medium uppercase tracking-[0.12em]';

export default function SectionHeading({ tag, heading, sub, id }: SectionHeadingProps) {
    return (
        <div className="mb-12 min-w-0 border-b border-line pb-5 max-md:mb-9">
            <p className={`${tiny} mb-3 text-mint`} aria-hidden="true">
                {tag}
            </p>
            <h2 className="mb-2.5 break-words font-display text-[clamp(1.55rem,7vw,2.4rem)] font-bold text-ink" id={id}>
                {heading}
            </h2>
            {sub ? <p className="max-w-[60ch] break-words text-[0.98rem] text-soft">{sub}</p> : null}
        </div>
    );
}
