"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";
import { EXPERIENCE } from "@/app/lib/constants";
import SectionTag from "@/app/components/ui/SectionTag";
import NoiseBg from "@/app/components/ui/NoiseBg";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      const entries = sectionRef.current?.querySelectorAll(".timeline-entry");
      entries?.forEach((entry, i) => {
        const isLeft = i % 2 === 0;
        gsap.fromTo(
          entry,
          { x: isLeft ? -40 : 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: entry,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef}>
      <NoiseBg />

      {/* Left glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 20% 60%, rgba(0,200,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="section-inner relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20" style={{ opacity: 0 }}>
          <SectionTag className="mx-auto mb-4">Career</SectionTag>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "var(--text-4xl)",
              fontWeight: 800,
              color: "var(--text-bright)",
            }}
          >
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div
          className="relative mx-auto"
          style={{ maxWidth: "720px" }}
        >
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block"
            style={{ width: "1px", background: "rgba(0,200,255,0.12)" }}
          />

          <div className="flex flex-col gap-12">
            {EXPERIENCE.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={item.company + item.period}
                  className={`timeline-entry relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start md:items-center gap-6 md:gap-10`}
                >
                  {/* Card */}
                  <div
                    className="flex-1"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid rgba(0,200,255,0.12)",
                      borderRadius: "6px",
                      padding: "28px",
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-col gap-1 mb-4">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3
                          style={{
                            fontFamily: "var(--font-syne)",
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "var(--text-bright)",
                          }}
                        >
                          {item.role}
                        </h3>
                        <span
                          className="px-2.5 py-1 rounded text-[11px]"
                          style={{
                            fontFamily: "var(--font-jetbrains)",
                            background: "rgba(0,200,255,0.06)",
                            border: "1px solid rgba(0,200,255,0.15)",
                            color: "var(--cyan)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          style={{
                            fontFamily: "var(--font-jetbrains)",
                            fontSize: "13px",
                            color: "var(--cyan)",
                            fontWeight: 500,
                          }}
                        >
                          {item.company}
                        </span>
                        <span
                          style={{
                            color: "var(--text-dim)",
                            fontSize: "12px",
                          }}
                        >
                          ·
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-jetbrains)",
                            fontSize: "12px",
                            color: "var(--text-dim)",
                          }}
                        >
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="flex flex-col gap-2">
                      {item.bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          className="flex items-start gap-2"
                          style={{
                            fontFamily: "var(--font-jetbrains)",
                            fontSize: "13px",
                            fontWeight: 300,
                            lineHeight: 1.75,
                            color: "var(--text-mid)",
                          }}
                        >
                          <span
                            className="mt-[7px] shrink-0 w-[3px] h-[3px] rounded-full"
                            style={{ background: "var(--cyan)" }}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline dot */}
                  <div
                    aria-hidden="true"
                    className="hidden md:flex shrink-0 w-3 h-3 rounded-full items-center justify-center"
                    style={{
                      background: "var(--cyan)",
                      boxShadow: "0 0 12px rgba(0,200,255,0.5)",
                      zIndex: 1,
                    }}
                  />

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
