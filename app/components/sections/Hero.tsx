"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "@/app/lib/gsap";
import { SITE_META } from "@/app/lib/constants";
import SectionTag from "@/app/components/ui/SectionTag";
import Button from "@/app/components/ui/Button";
import NoiseBg from "@/app/components/ui/NoiseBg";

const HeroCanvas = dynamic(() => import("@/app/components/three/HeroCanvas"), {
    ssr: false,
});

export default function Hero() {
    const tagRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.fromTo(
            tagRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.3 },
        )
            .fromTo(
                nameRef.current?.querySelectorAll(".name-line") ?? [],
                { yPercent: 110 },
                { yPercent: 0, stagger: 0.12, duration: 1.0 },
                "-=0.4",
            )
            .fromTo(
                subtitleRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                "-=0.5",
            )
            .fromTo(
                descRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                "-=0.5",
            )
            .fromTo(
                ctaRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                "-=0.5",
            )
            .fromTo(
                statsRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                "-=0.4",
            );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center pt-[72px]"
            style={{ paddingTop: "72px", paddingBottom: 0 }}
        >
            <NoiseBg />

            {/* Cyan radial glow from right */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 60% at 75% 50%, rgba(0,200,255,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="section-inner relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[calc(100vh-72px)] items-center gap-0">
                    {/* ── Left: Text content ─────────────────────────────── */}
                    <div className="flex flex-col justify-center py-16 lg:py-0 pr-0 lg:pr-12">
                        {/* Available tag */}
                        <div ref={tagRef} style={{ opacity: 0 }}>
                            <SectionTag variant="green">
                                Available for work
                            </SectionTag>
                        </div>

                        {/* Name */}
                        <div ref={nameRef} className="mt-6 overflow-hidden">
                            <div className="overflow-clip">
                                <h1
                                    className="name-line block font-[family-name:var(--font-syne)] font-extrabold leading-[0.95] text-[var(--text-bright)]"
                                    style={{ fontSize: "var(--text-9xl)" }}
                                >
                                    Chinedu
                                </h1>
                            </div>
                            <div className="overflow-clip">
                                <h1
                                    className="name-line block font-[family-name:var(--font-syne)] font-extrabold leading-[0.95] text-[var(--text-bright)]"
                                    style={{ fontSize: "var(--text-9xl)" }}
                                >
                                    Nwafor
                                    <span className="text-[var(--cyan)]">
                                        .
                                    </span>
                                </h1>
                            </div>
                        </div>

                        {/* Subtitle */}
                        <div
                            ref={subtitleRef}
                            className="mt-5"
                            style={{ opacity: 0 }}
                        >
                            <p
                                className="font-[family-name:var(--font-syne)] font-bold text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, #00C8FF 0%, #0057FF 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontSize: "var(--text-xl)",
                                }}
                            >
                                Fullstack &amp; Product Engineer
                            </p>
                        </div>

                        {/* Description */}
                        <p
                            ref={descRef}
                            className="mt-5 font-[family-name:var(--font-jetbrains)] text-[14px] font-light leading-[1.8] text-[var(--text-mid)] max-w-[480px]"
                            style={{ opacity: 0 }}
                        >
                            {SITE_META.tagline}
                            <span
                                className="terminal-cursor"
                                aria-hidden="true"
                            />
                        </p>

                        {/* CTAs */}
                        <div
                            ref={ctaRef}
                            className="mt-8 flex flex-wrap items-center gap-4"
                            style={{ opacity: 0 }}
                        >
                            <Button
                                as="a"
                                href="#projects"
                                variant="primary"
                                className="px-7 py-3.5"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector("#projects")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                            >
                                View Projects ↗
                            </Button>
                            <Button
                                as="a"
                                href="/cv.pdf"
                                variant="ghost"
                                className="px-7 py-3.5"
                            >
                                Download CV
                            </Button>
                        </div>

                        {/* Stats row */}
                        <div
                            ref={statsRef}
                            className="mt-12 flex items-center gap-8 border-t border-[rgba(0,200,255,0.08)] pt-8"
                            style={{ opacity: 0 }}
                        >
                            {SITE_META.stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col">
                                    <span className="font-[family-name:var(--font-syne)] font-extrabold text-[var(--text-bright)] text-[28px] leading-none">
                                        {stat.value}
                                    </span>
                                    <span className="mt-1 font-[family-name:var(--font-jetbrains)] text-[11px] tracking-widest uppercase text-[var(--text-dim)]">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Three.js canvas ─────────────────────────── */}
                    <div className="relative hidden lg:block h-[calc(100vh-72px)]">
                        <HeroCanvas />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.3em] uppercase text-[var(--text-dim)]">
                    Scroll
                </span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--cyan)] to-transparent opacity-50" />
            </div>
        </section>
    );
}
