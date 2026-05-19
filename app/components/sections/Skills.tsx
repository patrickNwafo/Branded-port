"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";
import { SKILLS } from "@/app/lib/constants";
import SectionTag from "@/app/components/ui/SectionTag";
import NoiseBg from "@/app/components/ui/NoiseBg";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      const categories = gridRef.current?.querySelectorAll(".skill-category");
      categories?.forEach((cat, i) => {
        gsap.fromTo(
          cat,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "expo.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: cat,
              start: "top 90%",
              once: true,
            },
          }
        );

        const pills = cat.querySelectorAll(".skill-pill");
        gsap.fromTo(
          pills,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.04,
            duration: 0.5,
            ease: "expo.out",
            delay: i * 0.1 + 0.15,
            scrollTrigger: {
              trigger: cat,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <NoiseBg />

      {/* Centered radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,200,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="section-inner relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <SectionTag className="mx-auto mb-4">Technologies</SectionTag>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "var(--text-4xl)",
              fontWeight: 800,
              color: "var(--text-bright)",
              marginBottom: "12px",
            }}
          >
            What I work with
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jetbrains)",
              fontSize: "14px",
              fontWeight: 300,
              color: "var(--text-mid)",
            }}
          >
            Technologies across the full stack
          </p>
        </div>

        {/* Skills grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SKILLS.map((group) => (
            <div key={group.category} className="skill-category flex flex-col gap-4">
              {/* Category label */}
              <div
                className="flex items-center gap-2"
                style={{
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(0,200,255,0.1)",
                }}
              >
                <span
                  className="block w-1 h-4 rounded-full"
                  style={{ background: "var(--cyan)" }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--cyan)",
                  }}
                >
                  {group.category}
                </span>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <SkillPill key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillPill({ name }: { name: string }) {
  return (
    <span
      className="skill-pill px-3 py-1.5 rounded text-[12px] transition-all duration-200"
      style={{
        fontFamily: "var(--font-jetbrains)",
        background: "var(--surface)",
        border: "1px solid rgba(0,200,255,0.12)",
        color: "var(--text-mid)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(0,200,255,0.4)";
        el.style.background = "var(--elevated)";
        el.style.color = "var(--text-bright)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(0,200,255,0.12)";
        el.style.background = "var(--surface)";
        el.style.color = "var(--text-mid)";
      }}
    >
      {name}
    </span>
  );
}
