'use client';

import { content } from '@/data/content';
import { useUIStore } from '@/store/useUIStore';
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const tiny = 'font-mono text-[11px] font-medium uppercase tracking-[0.12em]';
const inputClass =
    'w-full min-w-0 rounded-lg border border-strong bg-raised px-4 py-3 font-[inherit] text-base text-ink transition-[border-color,background-color] duration-fast placeholder:text-soft focus:border-mint focus:bg-paper focus:outline-none disabled:cursor-not-allowed disabled:opacity-60';

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
        <section className="mx-auto max-w-site px-6 pb-[60px] pt-[100px] max-md:px-5 max-md:pb-12 max-md:pt-[72px] max-sm:px-4" id="contact" aria-labelledby="contact-heading">
            <div className="flex flex-col">
                <Reveal>
                    <SectionHeading tag="CONTACT — 07" heading={t.heading} sub={t.sub} id="contact-heading" />
                </Reveal>

                <div className="mt-10 grid min-w-0 grid-cols-2 gap-[60px] max-md:grid-cols-1 max-md:gap-10">
                    <Reveal>
                        <div className="flex min-w-0 flex-col gap-8">
                            <a
                                className="inline-block max-w-full break-all border-b-2 border-mint font-display text-[clamp(1.35rem,6.8vw,3rem)] font-bold leading-tight text-ink transition-colors duration-fast hover:text-mint"
                                href={`mailto:${t.email}`}
                            >
                                {t.email}
                            </a>

                            <ul className="flex flex-wrap gap-8 max-sm:gap-5">
                                {t.channels.map((ch) => (
                                    <li key={ch.label} className="min-w-0 flex flex-col gap-1">
                                        <span className={`${tiny} text-soft`}>{ch.label}</span>
                                        <span className="break-all font-mono text-[0.92rem] text-ink">{ch.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <form className="flex min-w-0 flex-col gap-6" onSubmit={handleSubmit}>
                            <div className="grid min-w-0 grid-cols-2 gap-5 max-md:grid-cols-1">
                                <div className="flex min-w-0 flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-soft">
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
                                        className={inputClass}
                                    />
                                </div>
                                <div className="flex min-w-0 flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-soft">
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
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div className="flex min-w-0 flex-col gap-2">
                                <label htmlFor="phone" className="text-sm font-medium text-soft">
                                    {form?.phoneLabel}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder={form?.phonePlaceholder}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="flex min-w-0 flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-soft">
                                    {form?.messageLabel}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder={form?.messagePlaceholder}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className={`${inputClass} min-h-[120px] resize-y font-mono text-[0.9rem]`}
                                    rows={4}
                                />
                            </div>

                            <div className="flex flex-col items-start gap-3">
                                <button
                                    type="submit"
                                    className="rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] px-10 py-3.5 font-display text-base font-semibold text-white transition-[transform,box-shadow,opacity] duration-fast hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(124,58,237,0.3)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none max-sm:w-full"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading'
                                        ? lang === 'ko'
                                            ? '전송 중...'
                                            : 'Sending...'
                                        : form?.submitButton}
                                </button>

                                {status === 'success' && feedbackMessage && (
                                    <p className="text-sm font-medium text-[#10b981]">{feedbackMessage}</p>
                                )}
                                {status === 'error' && feedbackMessage && (
                                    <p className="text-sm font-medium text-[#ef4444]">{feedbackMessage}</p>
                                )}
                            </div>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
