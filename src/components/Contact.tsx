'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import styles from '../styles/Contact.module.scss';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Contact() {
    const lang = useUIStore((s) => s.lang);
    const t = content[lang].contact;
    const form = t.form;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    useEffect(() => {
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailjs.init(publicKey);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const openMailtoFallback = () => {
        const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || 'website visitor'}`);
        const body = encodeURIComponent(
            [
                `Name: ${formData.name || ''}`,
                `Email: ${formData.email || ''}`,
                `Phone: ${formData.phone || ''}`,
                '',
                formData.message || '',
            ].join('\n'),
        );

        window.location.href = `mailto:${t.email}?subject=${subject}&body=${body}`;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setFeedbackMessage('');

        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                openMailtoFallback();
                setStatus('error');
                setFeedbackMessage(
                    lang === 'ko'
                        ? '메일 앱이 열렸어요. 내용을 확인한 뒤 바로 보내주세요.'
                        : 'Your mail app should open so you can send the message directly.',
                );
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
                return;
            }

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                message: formData.message,
                name: formData.name,
                email: formData.email,
                user_name: formData.name,
                user_email: formData.email,
                user_phone: formData.phone,
                user_message: formData.message,
                reply_to: formData.email,
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setStatus('success');
            setFeedbackMessage(lang === 'ko' ? '메시지가 성공적으로 전송되었습니다!' : 'Message sent successfully!');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (err) {
            console.error('Email send error:', err);
            const errorInfo = err as Record<string, unknown> | null;
            const statusCode = typeof errorInfo?.status === 'number' ? errorInfo.status : '';
            const errorText =
                typeof errorInfo?.text === 'string'
                    ? errorInfo.text
                    : typeof errorInfo?.message === 'string'
                      ? errorInfo.message
                      : err instanceof Error
                        ? err.message
                        : 'Unknown error';
            const detailText = [statusCode ? `status: ${statusCode}` : '', errorText].filter(Boolean).join(' | ');

            openMailtoFallback();
            setStatus('error');
            setFeedbackMessage(
                lang === 'ko'
                    ? `전송에 실패해서 메일 앱으로 연결했습니다. EmailJS 오류: ${detailText}`
                    : `The send failed, so your mail app was opened with the message ready to send. EmailJS error: ${detailText}`,
            );
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section className={styles.section} id="contact" aria-labelledby="contact-heading">
            <div className={styles.inner}>
                <Reveal>
                    <SectionHeading tag="CONTACT — 05" heading={t.heading} sub={t.sub} id="contact-heading" />
                </Reveal>

                <div className={styles.content}>
                    <Reveal>
                        <div className={styles.infoBlock}>
                            <a className={styles.emailLink} href={`mailto:${t.email}`}>
                                {t.email}
                            </a>

                            <ul className={styles.channels}>
                                {t.channels.map((ch) => (
                                    <li key={ch.label} className={styles.channel}>
                                        <span className={styles.channelLabel}>{ch.label}</span>
                                        <span className={styles.channelValue}>{ch.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label htmlFor="name" className={styles.label}>
                                        {form?.nameLabel}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder={form?.namePlaceholder}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="email" className={styles.label}>
                                        {form?.emailLabel}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder={form?.emailPlaceholder}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="phone" className={styles.label}>
                                    {form?.phoneLabel}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder={form?.phonePlaceholder}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="message" className={styles.label}>
                                    {form?.messageLabel}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder={form?.messagePlaceholder}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className={styles.textarea}
                                    rows={4}
                                />
                            </div>

                            <div className={styles.footer}>
                                <button type="submit" className={styles.submitButton} disabled={status === 'loading'}>
                                    {status === 'loading'
                                        ? lang === 'ko'
                                            ? '전송 중...'
                                            : 'Sending...'
                                        : form?.submitButton}
                                </button>

                                {status === 'success' && feedbackMessage && (
                                    <p className={styles.successMessage}>{feedbackMessage}</p>
                                )}
                                {status === 'error' && feedbackMessage && (
                                    <p className={styles.errorMessage}>{feedbackMessage}</p>
                                )}
                            </div>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
