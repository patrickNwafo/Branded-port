"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/app/lib/constants";
import Button from "./Button";

const WATCHED = [
    "hero",
    "projects",
    "philosophy",
    "skills",
    "experience",
    "contact",
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const navLinksRef = useRef<HTMLElement>(null);
    const dotRef = useRef<HTMLSpanElement>(null);
    const linkRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // Scroll opacity/border transition
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // IntersectionObserver for active section
    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        WATCHED.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    // Move active dot
    useEffect(() => {
        const dot = dotRef.current;
        const nav = navLinksRef.current;
        if (!dot || !nav) return;
        const idx = NAV_LINKS.findIndex((l) => l.href === `#${activeSection}`);
        if (idx === -1) {
            dot.style.opacity = "0";
            return;
        }
        const link = linkRefs.current[idx];
        if (!link) return;
        const navRect = nav.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();
        const cx = linkRect.left - navRect.left + linkRect.width / 2 - 2;
        dot.style.transform = `translateX(${cx}px)`;
        dot.style.opacity = "1";
    }, [activeSection]);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ${
                scrolled
                    ? "border-b border-[rgba(0,200,255,0.12)] bg-[rgba(4,8,15,0.92)] backdrop-blur-[20px]"
                    : "border-b border-[rgba(0,200,255,0.06)] bg-[rgba(4,8,15,0.7)] backdrop-blur-[12px]"
            }`}
        >
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-[72px] relative">
                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2.5 no-underline z-10"
                    aria-label="Chinedu Nwafor — Home"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    <span className="relative flex h-[8px] w-[8px]">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cyan)] opacity-60" />
                        <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[var(--cyan)]" />
                    </span>
                    <span
                        style={{
                            fontFamily: "var(--font-syne)",
                            fontSize: "15px",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            color: "var(--text-bright)",
                        }}
                    >
                        CN_DEV
                    </span>
                    {/* Name — xl screens only */}
                    <span
                        className="hidden xl:flex items-center"
                        aria-hidden="true"
                    >
                        <span
                            style={{
                                display: "block",
                                width: "1px",
                                height: "14px",
                                background: "rgba(0,200,255,0.2)",
                                margin: "0 14px",
                            }}
                        />
                        <span
                            style={{
                                fontFamily: "var(--font-syne)",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "var(--text-dim)",
                                letterSpacing: "0.02em",
                            }}
                        >
                            Chinedu Nwafor
                        </span>
                    </span>
                </a>

                {/* Desktop Nav — absolutely centered */}
                <nav
                    ref={navLinksRef}
                    className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
                    style={{ position: "absolute" }}
                >
                    {NAV_LINKS.map((link, i) => {
                        const isActive = `#${activeSection}` === link.href;
                        return (
                            <button
                                key={link.href}
                                ref={(el) => {
                                    linkRefs.current[i] = el;
                                }}
                                onClick={() => handleNavClick(link.href)}
                                style={{
                                    fontFamily: "var(--font-jetbrains)",
                                    fontSize: "13px",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: isActive
                                        ? "var(--text-bright)"
                                        : "var(--text-mid)",
                                    transition: "color 0.2s ease",
                                    background: "none",
                                    border: "none",
                                    padding: 0,
                                    cursor: "none",
                                    position: "relative",
                                }}
                                onMouseEnter={(e) => {
                                    (
                                        e.currentTarget as HTMLButtonElement
                                    ).style.color = "var(--text-bright)";
                                }}
                                onMouseLeave={(e) => {
                                    (
                                        e.currentTarget as HTMLButtonElement
                                    ).style.color = isActive
                                        ? "var(--text-bright)"
                                        : "var(--text-mid)";
                                }}
                            >
                                {link.label}
                            </button>
                        );
                    })}

                    {/* Moving active dot */}
                    <span
                        ref={dotRef}
                        style={{
                            position: "absolute",
                            bottom: "-10px",
                            left: 0,
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: "#00C8FF",
                            boxShadow: "0 0 8px rgba(0,200,255,0.6)",
                            opacity: 0,
                            transform: "translateX(0px)",
                            transition:
                                "transform 0.3s ease, opacity 0.2s ease",
                            pointerEvents: "none",
                        }}
                    />
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4 z-10">
                    <Button
                        variant="ghost"
                        as="a"
                        href="#contact"
                        size="sm"
                        className="tracking-[0.08em]"
                    >
                        Hire Me
                    </Button>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-[5px] p-2"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    <span
                        className={`block h-[1.5px] w-6 bg-[var(--text-bright)] transition-all duration-300 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
                    />
                    <span
                        className={`block h-[1.5px] w-6 bg-[var(--text-bright)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`block h-[1.5px] w-6 bg-[var(--text-bright)] transition-all duration-300 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 bg-[rgba(4,8,15,0.95)] backdrop-blur-[20px] ${
                    menuOpen
                        ? "max-h-[400px] border-b border-[rgba(0,200,255,0.1)]"
                        : "max-h-0"
                }`}
            >
                <nav className="flex flex-col px-8 py-6 gap-6">
                    {NAV_LINKS.map((link) => {
                        const isActive = `#${activeSection}` === link.href;
                        return (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="text-left transition-colors"
                                style={{
                                    fontFamily: "var(--font-jetbrains)",
                                    fontSize: "13px",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: isActive
                                        ? "var(--text-bright)"
                                        : "var(--text-mid)",
                                    background: "none",
                                    border: "none",
                                    padding: 0,
                                    cursor: "none",
                                }}
                            >
                                {link.label}
                            </button>
                        );
                    })}
                    <Button
                        variant="ghost"
                        as="a"
                        href="#contact"
                        size="sm"
                        className="self-start tracking-[0.08em]"
                    >
                        Hire Me
                    </Button>
                </nav>
            </div>
        </header>
    );
}
