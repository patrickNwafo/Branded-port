"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";
import SectionTag from "@/app/components/ui/SectionTag";
import NoiseBg from "@/app/components/ui/NoiseBg";

const PRINCIPLES = [
  {
    index: "01",
    title: "Systems over features",
    body: "Good engineering starts with architecture. I think in systems — how data flows, how components scale, how decisions compound over time.",
  },
  {
    index: "02",
    title: "Interface as experience",
    body: "Every pixel, every transition, every loading state is a moment. I design interfaces that feel engineered — not decorated.",
  },
  {
    index: "03",
    title: "Ambition as a constraint",
    body: "I choose difficult problems deliberately. Complexity is where craft separates from commodity. I build things that are hard to build.",
  },
  {
    index: "04",
    title: "Clarity over cleverness",
    body: "The best code is the code that doesn't need explaining. Readable, predictable, intentional — not impressive.",
  },
];

export default function EngineeringPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        quoteRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "expo.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      const cards = sectionRef.current?.querySelectorAll(".principle-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 88%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={sectionRef}>
      <NoiseBg />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(0,87,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="section-inner relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="max-w-[640px]" style={{ opacity: 0 }}>
          <SectionTag className="mb-5">Philosophy</SectionTag>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "var(--text-4xl)",
              fontWeight: 700,
              color: "var(--text-bright)",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Engineering is a craft,
            <br />
            not a commodity.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "var(--text-mid)",
            }}
          >
            I approach every project as a system to be designed — not a
            checklist to be completed. That means thinking about scale,
            maintainability, and the human on the other end of every interface.
          </p>
        </div>

        {/* Pull quote */}
        <div
          ref={quoteRef}
          className="my-16 pl-8 max-w-[700px]"
          style={{
            borderLeft: "2px solid rgba(0,200,255,0.25)",
            opacity: 0,
          }}
        >
          <blockquote
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(20px, 2.5vw, 28px)",
              fontWeight: 500,
              color: "var(--text-bright)",
              lineHeight: 1.45,
              letterSpacing: "-0.01em",
            }}
          >
            &ldquo;I build things that are hard to build — because that&rsquo;s
            where real engineering begins.&rdquo;
          </blockquote>
          <p
            className="mt-4"
            style={{
              fontFamily: "var(--font-jetbrains)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-dim)",
            }}
          >
            — Chinedu Nwafor
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRINCIPLES.map((p) => (
            <div
              key={p.index}
              className="principle-card group flex flex-col gap-4 p-6 rounded"
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(0,200,255,0.08)",
                transition: "border-color 0.25s ease, background 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(0,200,255,0.25)";
                el.style.background = "var(--elevated)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(0,200,255,0.08)";
                el.style.background = "var(--surface)";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: "11px",
                  color: "var(--cyan)",
                  letterSpacing: "0.15em",
                }}
              >
                {p.index}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--text-bright)",
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "var(--text-mid)",
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
