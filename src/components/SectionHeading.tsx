import styles from '../styles/SectionHeading.module.scss';

interface SectionHeadingProps {
    tag: string;
    heading: string;
    sub?: string;
    id?: string;
}

export default function SectionHeading({ tag, heading, sub, id }: SectionHeadingProps) {
    return (
        <div className={styles.wrap}>
            <p className={styles.tag} aria-hidden="true">
                {tag}
            </p>
            <h2 className={styles.heading} id={id}>
                {heading}
            </h2>
            {sub ? <p className={styles.sub}>{sub}</p> : null}
        </div>
    );
}
