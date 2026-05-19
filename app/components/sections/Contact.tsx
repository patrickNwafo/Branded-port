"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/app/lib/gsap";
import { SITE_META } from "@/app/lib/constants";
import SectionTag from "@/app/components/ui/SectionTag";
import Button from "@/app/components/ui/Button";
import NoiseBg from "@/app/components/ui/NoiseBg";

const SOCIAL_LINKS = [
  { label: "GitHub", href: SITE_META.github },
  { label: "LinkedIn", href: SITE_META.linkedin },
  { label: "Twitter / X", href: SITE_META.twitter },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "expo.out",
          scrollTrigger: {
            trigger: innerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder — wire to a form handler (Formspree, Resend, etc.) later
    alert("Message sent! (Connect a form handler to activate this.)");
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "1px solid rgba(0,200,255,0.15)",
    borderRadius: "4px",
    padding: "14px 16px",
    fontFamily: "var(--font-jetbrains)",
    fontSize: "14px",
    fontWeight: 300,
    color: "var(--text-bright)",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  };

  const focusStyle = {
    borderColor: "rgba(0,200,255,0.5)",
    boxShadow: "0 0 20px rgba(0,200,255,0.08)",
  };

  function handleFocus(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    Object.assign(e.target.style, focusStyle);
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    e.target.style.borderColor = "rgba(0,200,255,0.15)";
    e.target.style.boxShadow = "none";
  }

  return (
    <section id="contact" ref={sectionRef}>
      <NoiseBg />

      {/* Center glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(0,200,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="section-inner relative z-10">
        <div
          ref={innerRef}
          className="mx-auto flex flex-col gap-10"
          style={{ maxWidth: "600px", opacity: 0 }}
        >
          {/* Availability badge */}
          <div className="flex justify-center">
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(0,255,148,0.25)",
              }}
            >
              <span className="pulse-dot" />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--green)",
                }}
              >
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <SectionTag className="mx-auto mb-4">Contact</SectionTag>
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "var(--text-4xl)",
                fontWeight: 800,
                color: "var(--text-bright)",
                marginBottom: "12px",
              }}
            >
              Let&apos;s build something.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: "14px",
                fontWeight: 300,
                color: "var(--text-mid)",
              }}
            >
              Available for full-time roles and select freelance projects.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formState.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formState.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              value={formState.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
            />
            <Button
              type="submit"
              variant="primary"
              className="self-end px-8 py-3.5"
            >
              Send Message →
            </Button>
          </form>

          {/* Divider */}
          <div
            className="flex items-center gap-4"
            style={{ borderTop: "1px solid rgba(0,200,255,0.08)", paddingTop: "32px" }}
          >
            <span
              className="shrink-0"
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
              }}
            >
              Find me on
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(0,200,255,0.08)" }} />
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-6">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: "13px",
                  color: "var(--text-mid)",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--cyan)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-mid)";
                }}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
