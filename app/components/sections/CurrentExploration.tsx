"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";
import NoiseBg from "@/app/components/ui/NoiseBg";

export default function CurrentExploration() {
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

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
            start: "top 82%",
            once: true,
          },
        }
      );

      // Subtle ambient glow animation
      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.7,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="exploration" ref={sectionRef}>
      <NoiseBg />

      <div className="section-inner relative z-10">
        <div ref={innerRef} style={{ opacity: 0 }}>
          {/* Label */}
          <div className="flex items-center gap-3 mb-10">
            <span
              className="block w-8 h-px"
              style={{ background: "rgba(0,200,255,0.4)" }}
            />
            <span
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: "11px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--cyan)",
              }}
            >
              Current Exploration
            </span>
          </div>

          {/* Main card */}
          <div
            className="relative overflow-hidden rounded-lg p-12 md:p-16"
            style={{
              background:
                "linear-gradient(135deg, var(--surface) 0%, rgba(15,32,64,0.8) 100%)",
              border: "1px solid rgba(0,200,255,0.12)",
            }}
          >
            {/* Ambient glow orb */}
            <div
              ref={glowRef}
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,200,255,0.08) 0%, transparent 70%)",
              }}
            />

            {/* Status indicator */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(0,200,255,0.06)",
                  border: "1px solid rgba(0,200,255,0.2)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "var(--cyan)",
                    boxShadow: "0 0 6px rgba(0,200,255,0.8)",
                    animation: "pulse-dot 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--cyan)",
                  }}
                >
                  In Development
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Content */}
              <div className="flex flex-col gap-6">
                <h2
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "var(--text-4xl)",
                    fontWeight: 700,
                    color: "var(--text-bright)",
                    lineHeight: 1.1,
                  }}
                >
                  AI-Assisted
                  <br />
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #00C8FF 0%, #0057FF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Healthcare Platform
                  </span>
                </h2>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "var(--text-mid)",
                    maxWidth: "440px",
                  }}
                >
                  Exploring the intersection of intelligent systems and human
                  healthcare. A platform designed around scalable infrastructure,
                  AI-assisted workflows, and experiences that feel human — not
                  clinical.
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    "AI Systems",
                    "Healthcare",
                    "Scalable Infrastructure",
                    "Human-Centered UX",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-[11px]"
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        background: "rgba(0,200,255,0.05)",
                        border: "1px solid rgba(0,200,255,0.15)",
                        color: "var(--text-mid)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: "12px",
                    color: "var(--text-dim)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Details withheld — currently in stealth development.
                </p>
              </div>

              {/* Right: Abstract visual system */}
              <div className="relative flex items-center justify-center h-48 lg:h-64">
                {/* Concentric rings */}
                {[80, 120, 160, 200].map((size, i) => (
                  <div
                    key={size}
                    aria-hidden="true"
                    className="absolute rounded-full"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      border: `1px solid rgba(0,200,255,${0.18 - i * 0.04})`,
                      animation: `spin ${12 + i * 4}s linear infinite ${
                        i % 2 === 0 ? "" : "reverse"
                      }`,
                    }}
                  />
                ))}

                {/* Center node */}
                <div
                  className="relative w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,200,255,0.4) 0%, rgba(0,200,255,0.1) 100%)",
                    boxShadow: "0 0 20px rgba(0,200,255,0.3)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "var(--cyan)" }}
                  />
                </div>

                {/* Satellite dots */}
                {[
                  { angle: 45, r: 100 },
                  { angle: 135, r: 140 },
                  { angle: 225, r: 100 },
                  { angle: 315, r: 140 },
                ].map(({ angle, r }, i) => {
                  const rad = (angle * Math.PI) / 180;
                  return (
                    <div
                      key={i}
                      aria-hidden="true"
                      className="absolute w-1.5 h-1.5 rounded-full"
                      style={{
                        background: "var(--cyan)",
                        opacity: 0.5,
                        left: `calc(50% + ${Math.cos(rad) * r * 0.5}px)`,
                        top: `calc(50% + ${Math.sin(rad) * r * 0.5}px)`,
                        boxShadow: "0 0 6px rgba(0,200,255,0.5)",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spin keyframe for rings */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
