"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { gsap } from "@/app/lib/gsap";
import { PROJECTS, type Project } from "@/app/lib/constants";
import SectionTag from "@/app/components/ui/SectionTag";
import NoiseBg from "@/app/components/ui/NoiseBg";

export default function Projects() {
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
                },
            );

            const cards = gridRef.current?.querySelectorAll(".project-card");
            if (cards) {
                gsap.fromTo(
                    cards,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.7,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 85%",
                            once: true,
                        },
                    },
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={sectionRef}>
            <NoiseBg />

            {/* Right glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 50% 50% at 85% 40%, rgba(0,87,255,0.05) 0%, transparent 70%)",
                }}
            />

            <div className="section-inner relative z-10">
                {/* Heading */}
                <div ref={headingRef} className="mb-16" style={{ opacity: 0 }}>
                    <SectionTag className="mb-4">Selected Work</SectionTag>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <h2
                            style={{
                                fontFamily: "var(--font-syne)",
                                fontSize: "var(--text-4xl)",
                                fontWeight: 800,
                                color: "var(--text-bright)",
                            }}
                        >
                            Projects
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-jetbrains)",
                                fontSize: "13px",
                                fontWeight: 300,
                                color: "var(--text-mid)",
                                maxWidth: "320px",
                            }}
                        >
                            A selection of systems and experiences I&apos;ve
                            shipped across different industries.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const cardRef = useRef<HTMLDivElement>(null);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-6px)`;
    }

    function handleMouseLeave(e?: React.MouseEvent<HTMLDivElement>) {
        if (cardRef.current) {
            cardRef.current.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
            cardRef.current.style.borderColor = "rgba(0,200,255,0.10)";
        }
        void e;
    }

    return (
        <motion.div
            className="project-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(0,200,255,0.35)";
            }}
            whileHover={{
                boxShadow: "0 0 40px rgba(0,200,255,0.08)",
            }}
            transition={{ duration: 0.25 }}
            style={{
                background: "var(--surface)",
                border: "1px solid rgba(0,200,255,0.10)",
                borderRadius: "8px",
                overflow: "hidden",
                willChange: "transform",
                transition:
                    "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
            }}
        >
            {/* Image area */}
            <div
                style={{
                    aspectRatio: "16/9",
                    background: "var(--elevated)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Placeholder gradient */}
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        background: `linear-gradient(135deg, rgba(0,200,255,0.06) 0%, rgba(0,87,255,0.08) 100%)`,
                    }}
                >
                    <span
                        style={{
                            fontFamily: "var(--font-syne)",
                            fontSize: "11px",
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            color: "rgba(0,200,255,0.3)",
                        }}
                    >
                        {project.title}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h3
                            style={{
                                fontFamily: "var(--font-syne)",
                                fontSize: "18px",
                                fontWeight: 600,
                                color: "var(--text-bright)",
                            }}
                        >
                            {project.title}
                        </h3>
                        <span
                            style={{
                                fontFamily: "var(--font-jetbrains)",
                                fontSize: "10px",
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                color: "var(--text-dim)",
                            }}
                        >
                            {project.role}
                        </span>
                    </div>
                    <p
                        style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "13px",
                            fontWeight: 300,
                            lineHeight: 1.75,
                            color: "var(--text-mid)",
                        }}
                    >
                        {project.description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 rounded text-[11px]"
                            style={{
                                fontFamily: "var(--font-jetbrains)",
                                background: "rgba(0,200,255,0.06)",
                                border: "1px solid rgba(0,200,255,0.15)",
                                color: "var(--text-mid)",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div
                    className="flex items-center gap-4 pt-2"
                    style={{ borderTop: "1px solid rgba(0,200,255,0.07)" }}
                >
                    <a
                        href={project.link}
                        className="flex items-center gap-1.5 text-[13px] transition-colors duration-200"
                        style={{
                            fontFamily: "var(--font-jetbrains)",
                            color: "var(--text-dim)",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color =
                                "var(--cyan)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color =
                                "var(--text-dim)";
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLink size={13} />
                        Live ↗
                    </a>
                    <a
                        href={project.github}
                        className="flex items-center gap-1.5 text-[13px] transition-colors duration-200"
                        style={{
                            fontFamily: "var(--font-jetbrains)",
                            color: "var(--text-dim)",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color =
                                "var(--cyan)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color =
                                "var(--text-dim)";
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Code2 size={13} />
                        GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
