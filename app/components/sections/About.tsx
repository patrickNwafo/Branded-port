"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/app/lib/gsap";
import SectionTag from "@/app/components/ui/SectionTag";
import NoiseBg from "@/app/components/ui/NoiseBg";

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                leftRef.current,
                { x: -60, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.0,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                },
            );

            gsap.fromTo(
                rightRef.current,
                { x: 60, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.0,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                },
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef}>
            <NoiseBg />

            {/* Subtle left glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 50% 50% at 15% 50%, rgba(0,87,255,0.05) 0%, transparent 70%)",
                }}
            />

            <div className="section-inner relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 lg:gap-24 items-center">
                    {/* ── Left: Photo ───────────────────────────────────── */}
                    <div ref={leftRef} style={{ opacity: 0 }}>
                        <div
                            className="relative mx-auto lg:mx-0"
                            style={{ maxWidth: "480px" }}
                        >
                            {/* Corner accent lines */}
                            <div
                                className="relative"
                                style={{
                                    border: "2px solid rgba(0,200,255,0.35)",
                                    borderRadius: "4px",
                                }}
                            >
                                {/* Top-left corner */}
                                <span
                                    aria-hidden="true"
                                    className="absolute -top-[2px] -left-[2px] block w-6 h-6 border-t-2 border-l-2 border-[var(--cyan)] z-10"
                                />
                                {/* Top-right corner */}
                                <span
                                    aria-hidden="true"
                                    className="absolute -top-[2px] -right-[2px] block w-6 h-6 border-t-2 border-r-2 border-[var(--cyan)] z-10"
                                />
                                {/* Bottom-left corner */}
                                <span
                                    aria-hidden="true"
                                    className="absolute -bottom-[2px] -left-[2px] block w-6 h-6 border-b-2 border-l-2 border-[var(--cyan)] z-10"
                                />
                                {/* Bottom-right corner */}
                                <span
                                    aria-hidden="true"
                                    className="absolute -bottom-[2px] -right-[2px] block w-6 h-6 border-b-2 border-r-2 border-[var(--cyan)] z-10"
                                />

                                {/* Photo */}
                                <div
                                    className="relative overflow-hidden"
                                    style={{
                                        aspectRatio: "4/5",
                                        borderRadius: "2px",
                                    }}
                                >
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Chinedu Nwafor — Full Stack & Mobile Engineer"
                                        fill
                                        className="object-cover"
                                        priority
                                        onError={(e) => {
                                            (
                                                e.target as HTMLImageElement
                                            ).style.display = "none";
                                        }}
                                    />

                                    {/* Placeholder shown when image is missing */}
                                    <div
                                        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                                        style={{ background: "var(--surface)" }}
                                    >
                                        <div
                                            className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, rgba(0,200,255,0.15), rgba(0,87,255,0.15))",
                                                border: "1px solid rgba(0,200,255,0.2)",
                                                color: "var(--cyan)",
                                                fontFamily: "var(--font-syne)",
                                            }}
                                        >
                                            CN
                                        </div>
                                        <p
                                            style={{
                                                color: "var(--text-dim)",
                                                fontSize: "11px",
                                                fontFamily:
                                                    "var(--font-jetbrains)",
                                                letterSpacing: "0.2em",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            profile.jpg
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating tag */}
                            <div
                                className="absolute -bottom-5 -right-5 px-4 py-2 rounded"
                                style={{
                                    background: "var(--surface)",
                                    border: "1px solid rgba(0,200,255,0.2)",
                                    fontFamily: "var(--font-jetbrains)",
                                    fontSize: "11px",
                                    color: "var(--text-mid)",
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                }}
                            >
                                Based in{" "}
                                <span style={{ color: "var(--cyan)" }}>
                                    Nigeria 🇳🇬
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ── Right: Bio ────────────────────────────────────── */}
                    <div
                        ref={rightRef}
                        className="flex flex-col gap-6"
                        style={{ opacity: 0 }}
                    >
                        <SectionTag>About Me</SectionTag>

                        <h2
                            style={{
                                fontFamily: "var(--font-syne)",
                                fontSize: "var(--text-4xl)",
                                fontWeight: 800,
                                lineHeight: 1.1,
                                color: "var(--text-bright)",
                            }}
                        >
                            Engineer by craft,
                            <br />
                            <span
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, #00C8FF, #0057FF)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                creator by nature.
                            </span>
                        </h2>

                        <div
                            className="flex flex-col gap-5"
                            style={{
                                fontFamily: "var(--font-jetbrains)",
                                fontSize: "14px",
                                fontWeight: 300,
                                lineHeight: 1.9,
                                color: "var(--text-mid)",
                            }}
                        >
                            <p>
                                I&apos;m Chinedu Nwafor, a Full Stack and Mobile
                                Engineer with 6+ years building products that
                                scale. I work across the entire stack — from
                                architecting APIs and databases to crafting
                                pixel-perfect interfaces and shipping mobile
                                apps on iOS and Android.
                            </p>
                            <p>
                                I care deeply about performance, clean
                                architecture, and the human experience behind
                                every interface. Based in Nigeria, I collaborate
                                with clients and teams across the globe.
                            </p>
                        </div>

                        {/* Feature pills */}
                        <div className="flex flex-wrap gap-3 mt-2">
                            {[
                                "🇳🇬  Based in Nigeria",
                                "🌍  Working globally",
                            ].map((pill) => (
                                <span
                                    key={pill}
                                    className="px-4 py-2 rounded-full text-[13px]"
                                    style={{
                                        background: "var(--surface)",
                                        border: "1px solid rgba(0,200,255,0.25)",
                                        fontFamily: "var(--font-jetbrains)",
                                        color: "var(--text-mid)",
                                    }}
                                >
                                    {pill}
                                </span>
                            ))}
                        </div>

                        {/* Divider stat strip */}
                        <div
                            className="grid grid-cols-3 gap-4 pt-6 mt-2"
                            style={{
                                borderTop: "1px solid rgba(0,200,255,0.08)",
                            }}
                        >
                            {[
                                { v: "6+", l: "Years" },
                                { v: "30+", l: "Projects" },
                                { v: "12+", l: "Clients" },
                            ].map(({ v, l }) => (
                                <div key={l} className="flex flex-col">
                                    <span
                                        style={{
                                            fontFamily: "var(--font-syne)",
                                            fontSize: "24px",
                                            fontWeight: 800,
                                            color: "var(--cyan)",
                                        }}
                                    >
                                        {v}
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: "var(--font-jetbrains)",
                                            fontSize: "11px",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            color: "var(--text-dim)",
                                            marginTop: "2px",
                                        }}
                                    >
                                        {l}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
