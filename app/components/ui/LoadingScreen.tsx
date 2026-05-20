"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/app/lib/gsap";

export default function LoadingScreen() {
    const [done, setDone] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const topLeftRef = useRef<HTMLDivElement>(null);
    const topRightRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const alreadySeen = Boolean(sessionStorage.getItem("portfolio-loaded"));

        if (alreadySeen) {
            gsap.to(containerRef.current, {
                duration: 0,
                onComplete: () => setDone(true),
            });
            return;
        }

        const count = { val: 0 };
        const tl = gsap.timeline({
            onComplete: () => {
                sessionStorage.setItem("portfolio-loaded", "1");
                setDone(true);
            },
        });

        tl.fromTo(
            [topLeftRef.current, topRightRef.current],
            { opacity: 0, y: -6 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.08,
                duration: 0.5,
                ease: "expo.out",
            },
            0.2,
        )
            .fromTo(
                labelRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.4, ease: "power2.out" },
                0.5,
            )
            .to(
                count,
                {
                    val: 100,
                    duration: 1.6,
                    ease: "power2.inOut",
                    onUpdate: () => {
                        if (counterRef.current) {
                            const n = Math.round(count.val);
                            counterRef.current.textContent =
                                n < 10 ? `0${n}` : `${n}`;
                        }
                    },
                },
                0.5,
            )
            .to(
                progressRef.current,
                { scaleX: 1, duration: 1.6, ease: "power2.inOut" },
                0.5,
            )
            .to({}, { duration: 0.25 })
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
            });

        return () => {
            tl.kill();
        };
    }, []);

    if (done) return null;

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "var(--void)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                ref={topLeftRef}
                style={{
                    position: "absolute",
                    top: "32px",
                    left: "40px",
                    opacity: 0,
                }}
            >
                <span
                    style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "var(--text-bright)",
                        letterSpacing: "-0.01em",
                    }}
                >
                    CN<span style={{ color: "var(--cyan)" }}>.</span>
                </span>
            </div>

            <div
                ref={topRightRef}
                style={{
                    position: "absolute",
                    top: "34px",
                    right: "40px",
                    opacity: 0,
                }}
            >
                <span
                    style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--text-dim)",
                    }}
                >
                    Portfolio / {new Date().getFullYear()}
                </span>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                }}
            >
                <span
                    ref={counterRef}
                    style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "clamp(72px, 12vw, 112px)",
                        fontWeight: 700,
                        color: "var(--text-bright)",
                        lineHeight: 1,
                        letterSpacing: "-0.04em",
                        fontVariantNumeric: "tabular-nums",
                    }}
                >
                    00
                </span>

                <div
                    style={{
                        width: "clamp(160px, 20vw, 240px)",
                        height: "1px",
                        background: "rgba(0,200,255,0.12)",
                        borderRadius: "1px",
                        overflow: "hidden",
                    }}
                >
                    <div
                        ref={progressRef}
                        style={{
                            height: "100%",
                            background:
                                "linear-gradient(90deg, var(--cyan) 0%, var(--blue) 100%)",
                            transformOrigin: "left center",
                            transform: "scaleX(0)",
                        }}
                    />
                </div>

                <p
                    ref={labelRef}
                    style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontSize: "10px",
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "var(--text-dim)",
                        opacity: 0,
                    }}
                >
                    Initializing
                </p>
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background:
                        "linear-gradient(90deg, transparent 0%, rgba(0,200,255,0.15) 50%, transparent 100%)",
                }}
            />
        </div>
    );
}
