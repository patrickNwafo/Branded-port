"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/app/lib/gsap";
import { SITE_META } from "@/app/lib/constants";
import NoiseBg from "@/app/components/ui/NoiseBg";

const TYPEWRITER_TEXT = "every great product starts with a conversation.";

const SOCIAL_LINKS = [
    { label: "GitHub", href: SITE_META.github },
    { label: "LinkedIn", href: SITE_META.linkedin },
    { label: "Twitter/X", href: SITE_META.twitter },
];

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const tagRef = useRef<HTMLDivElement>(null);
    const twTextRef = useRef<HTMLSpanElement>(null);
    const twCursorRef = useRef<HTMLSpanElement>(null);
    const heading1Ref = useRef<HTMLDivElement>(null);
    const heading2Ref = useRef<HTMLDivElement>(null);
    const subheadRef = useRef<HTMLParagraphElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const formFieldsRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    useEffect(() => {
        if (status === "success" || status === "error") {
            const t = setTimeout(() => setStatus("idle"), 5000);
            return () => clearTimeout(t);
        }
    }, [status]);

    function startTypewriter() {
        if (!twTextRef.current || !twCursorRef.current) return;
        let i = 0;
        twTextRef.current.textContent = "";
        gsap.set(twCursorRef.current, { opacity: 1 });
        intervalRef.current = setInterval(() => {
            if (!twTextRef.current) return;
            if (i < TYPEWRITER_TEXT.length) {
                twTextRef.current.textContent = TYPEWRITER_TEXT.slice(0, ++i);
            } else {
                clearInterval(intervalRef.current!);
                setTimeout(() => {
                    if (twCursorRef.current) {
                        gsap.to(twCursorRef.current, {
                            opacity: 0,
                            duration: 0.4,
                            ease: "power2.out",
                        });
                    }
                }, 2000);
            }
        }, 28);
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                tagRef.current,
                { opacity: 0, y: 12 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                        onEnter: () => {
                            setTimeout(startTypewriter, 300);
                            gsap.fromTo(
                                [heading1Ref.current, heading2Ref.current],
                                { y: "105%" },
                                {
                                    y: "0%",
                                    duration: 0.9,
                                    ease: "expo.out",
                                    stagger: 0.1,
                                    delay: 0.4,
                                },
                            );
                            gsap.fromTo(
                                subheadRef.current,
                                { opacity: 0, y: 20 },
                                {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.8,
                                    ease: "expo.out",
                                    delay: 0.7,
                                },
                            );
                            gsap.fromTo(
                                badgeRef.current,
                                { opacity: 0, x: -16 },
                                {
                                    opacity: 1,
                                    x: 0,
                                    duration: 0.6,
                                    ease: "expo.out",
                                    delay: 0.9,
                                },
                            );
                            if (formFieldsRef.current) {
                                const fields =
                                    formFieldsRef.current.querySelectorAll(
                                        ".form-field",
                                    );
                                gsap.fromTo(
                                    fields,
                                    { opacity: 0, y: 24 },
                                    {
                                        opacity: 1,
                                        y: 0,
                                        duration: 0.6,
                                        ease: "expo.out",
                                        stagger: 0.08,
                                        delay: 1.0,
                                    },
                                );
                            }
                        },
                    },
                },
            );
        }, sectionRef);

        return () => {
            ctx.revert();
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });
            const data = (await res.json()) as {
                success?: boolean;
                error?: string;
            };
            if (!res.ok || !data.success)
                throw new Error(data.error ?? "Failed to send.");
            setStatus("success");
            setFormState({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        }
    }

    const btnStyle: React.CSSProperties =
        status === "success"
            ? {
                  background: "rgba(34,197,94,0.15)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  color: "#22C55E",
              }
            : status === "error"
              ? {
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.25)",
                    color: "#EF4444",
                }
              : status === "loading"
                ? {
                      background:
                          "linear-gradient(90deg,#00C8FF 25%,#0057FF 50%,#00C8FF 75%)",
                      backgroundSize: "200% 100%",
                      color: "var(--void)",
                      animation: "shimmer 1.2s ease infinite",
                  }
                : { background: "var(--cyan)", color: "var(--void)" };

    const btnText =
        status === "loading"
            ? "Sending..."
            : status === "success"
              ? "Message sent ✓"
              : status === "error"
                ? "Failed — try again"
                : "Send Message →";

    return (
        <section id="contact" ref={sectionRef} className="contact-section">
            <NoiseBg />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 90%, rgba(0,200,255,0.04) 0%, transparent 70%)",
                }}
            />

            <div
                className="section-inner relative z-10"
                style={{ maxWidth: "720px" }}
            >
                {/* 1. Section tag */}
                <div
                    ref={tagRef}
                    className="flex items-center gap-3"
                    style={{ marginBottom: "32px", opacity: 0 }}
                >
                    <span
                        style={{
                            display: "block",
                            width: "2px",
                            height: "16px",
                            background: "var(--cyan)",
                            flexShrink: 0,
                        }}
                    />
                    <span
                        style={{
                            fontFamily: "var(--font-jetbrains)",
                            fontSize: "11px",
                            color: "var(--cyan)",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                        }}
                    >
                        Contact
                    </span>
                </div>

                {/* 2. Typewriter */}
                <div
                    className="flex items-center"
                    style={{ marginBottom: "48px", minHeight: "20px" }}
                >
                    <span
                        ref={twTextRef}
                        style={{
                            fontFamily: "var(--font-jetbrains)",
                            fontSize: "13px",
                            fontWeight: 300,
                            color: "var(--text-dim)",
                            letterSpacing: "0.06em",
                        }}
                    />
                    <span
                        ref={twCursorRef}
                        style={{
                            display: "inline-block",
                            width: "2px",
                            height: "14px",
                            background: "var(--cyan)",
                            marginLeft: "2px",
                            opacity: 0,
                            flexShrink: 0,
                            animation: "blink 0.8s ease infinite",
                        }}
                    />
                </div>

                {/* 3. Main heading */}
                <div style={{ marginBottom: "20px" }}>
                    <div style={{ overflow: "hidden" }}>
                        <div
                            ref={heading1Ref}
                            style={{
                                fontFamily: "var(--font-syne)",
                                fontSize: "clamp(48px, 6vw, 88px)",
                                fontWeight: 800,
                                color: "var(--text-bright)",
                                letterSpacing: "-0.03em",
                                lineHeight: 0.95,
                                transform: "translateY(105%)",
                            }}
                        >
                            Let&apos;s build
                        </div>
                    </div>
                    <div style={{ overflow: "hidden" }}>
                        <div
                            ref={heading2Ref}
                            style={{
                                fontFamily: "var(--font-syne)",
                                fontSize: "clamp(48px, 6vw, 88px)",
                                fontWeight: 800,
                                color: "var(--text-bright)",
                                letterSpacing: "-0.03em",
                                lineHeight: 0.95,
                                transform: "translateY(105%)",
                            }}
                        >
                            something
                            <span
                                style={{
                                    color: "#00C8FF",
                                    textShadow: "0 0 30px rgba(0,200,255,0.5)",
                                }}
                            >
                                .
                            </span>
                        </div>
                    </div>
                </div>

                {/* 4. Subheading */}
                <p
                    ref={subheadRef}
                    style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontSize: "14px",
                        fontWeight: 300,
                        color: "var(--text-mid)",
                        lineHeight: 1.8,
                        marginBottom: "40px",
                        maxWidth: "480px",
                        opacity: 0,
                    }}
                >
                    Available for full-time roles and select freelance projects.{" "}
                    Let&apos;s talk.
                </p>

                {/* 5. Availability badge */}
                <div
                    ref={badgeRef}
                    style={{ marginBottom: "56px", opacity: 0 }}
                >
                    <div
                        className="inline-flex items-center"
                        style={{
                            gap: "10px",
                            background: "rgba(34,197,94,0.05)",
                            border: "1px solid rgba(34,197,94,0.2)",
                            borderRadius: "4px",
                            padding: "8px 16px",
                        }}
                    >
                        <span className="avail-dot" />
                        <span
                            style={{
                                fontFamily: "var(--font-jetbrains)",
                                fontSize: "11px",
                                color: "#22C55E",
                                letterSpacing: "0.08em",
                            }}
                        >
                            Open to opportunities
                        </span>
                    </div>
                </div>

                {/* 6. Contact form */}
                <div ref={formFieldsRef}>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col"
                        style={{ gap: "16px" }}
                    >
                        <div
                            className="form-field contact-field-wrapper"
                            style={{ opacity: 0 }}
                        >
                            <label className="contact-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                disabled={status === "loading"}
                                className="contact-input"
                            />
                        </div>
                        <div
                            className="form-field contact-field-wrapper"
                            style={{ opacity: 0 }}
                        >
                            <label className="contact-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                disabled={status === "loading"}
                                className="contact-input"
                            />
                        </div>
                        <div
                            className="form-field contact-field-wrapper"
                            style={{ opacity: 0 }}
                        >
                            <label className="contact-label">Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project..."
                                rows={5}
                                value={formState.message}
                                onChange={handleChange}
                                required
                                disabled={status === "loading"}
                                className="contact-input contact-textarea"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className={`form-field contact-submit${status !== "idle" ? " no-hover" : ""}`}
                            style={
                                {
                                    ...btnStyle,
                                    opacity: 0,
                                } as React.CSSProperties
                            }
                        >
                            {btnText}
                        </button>
                    </form>
                </div>

                {/* 7. Divider */}
                <div
                    style={{
                        marginTop: "64px",
                        height: "1px",
                        background:
                            "linear-gradient(90deg, transparent, rgba(0,200,255,0.15) 30%, rgba(0,200,255,0.15) 70%, transparent)",
                    }}
                />

                {/* 8. Info strip */}
                <div
                    className="flex items-center justify-between flex-wrap"
                    style={{ marginTop: "32px", gap: "16px" }}
                >
                    <a
                        href={`mailto:${SITE_META.email}`}
                        className="contact-email-link"
                    >
                        {SITE_META.email}
                    </a>
                    <div className="flex items-center" style={{ gap: "24px" }}>
                        {SOCIAL_LINKS.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-social-link"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
