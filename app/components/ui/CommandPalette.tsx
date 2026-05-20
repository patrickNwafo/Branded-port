"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_META } from "@/app/lib/constants";
import CVDownloadModal from "@/app/components/ui/CVDownloadModal";

type Command = {
    id: string;
    label: string;
    description?: string;
    shortcut?: string;
    action: () => void;
};

type CommandGroup = {
    group: string;
    commands: Command[];
};

function scrollToSection(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const [isCVModalOpen, setIsCVModalOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const COMMAND_GROUPS: CommandGroup[] = [
        {
            group: "Navigate",
            commands: [
                {
                    id: "nav-work",
                    label: "Selected Work",
                    description: "Jump to projects",
                    action: () => {
                        setOpen(false);
                        scrollToSection("#projects");
                    },
                },
                {
                    id: "nav-philosophy",
                    label: "Engineering Philosophy",
                    description: "Jump to philosophy",
                    action: () => {
                        setOpen(false);
                        scrollToSection("#philosophy");
                    },
                },
                {
                    id: "nav-systems",
                    label: "Systems & Technologies",
                    description: "Jump to skills",
                    action: () => {
                        setOpen(false);
                        scrollToSection("#skills");
                    },
                },
                {
                    id: "nav-journey",
                    label: "Journey",
                    description: "Jump to experience",
                    action: () => {
                        setOpen(false);
                        scrollToSection("#experience");
                    },
                },
                {
                    id: "nav-contact",
                    label: "Contact",
                    description: "Jump to contact form",
                    action: () => {
                        setOpen(false);
                        scrollToSection("#contact");
                    },
                },
            ],
        },
        {
            group: "Connect",
            commands: [
                {
                    id: "github",
                    label: "Open GitHub",
                    description: SITE_META.github,
                    shortcut: "G",
                    action: () => {
                        setOpen(false);
                        window.open(SITE_META.github, "_blank");
                    },
                },
                {
                    id: "linkedin",
                    label: "Open LinkedIn",
                    description: SITE_META.linkedin,
                    shortcut: "L",
                    action: () => {
                        setOpen(false);
                        window.open(SITE_META.linkedin, "_blank");
                    },
                },
                {
                    id: "twitter",
                    label: "Open Twitter / X",
                    description: SITE_META.twitter,
                    action: () => {
                        setOpen(false);
                        window.open(SITE_META.twitter, "_blank");
                    },
                },
            ],
        },
        {
            group: "Actions",
            commands: [
                {
                    id: "resume",
                    label: "Download Resume",
                    description: "Open CV as PDF",
                    shortcut: "R",
                    action: () => {
                        setOpen(false);
                        setIsCVModalOpen(true);
                    },
                },
                {
                    id: "email",
                    label: "Send Email",
                    description: SITE_META.email,
                    action: () => {
                        setOpen(false);
                        window.open(`mailto:${SITE_META.email}`, "_blank");
                    },
                },
            ],
        },
    ];

    const allCommands = COMMAND_GROUPS.flatMap((g) => g.commands);

    const filtered = query.trim()
        ? allCommands.filter(
              (c) =>
                  c.label.toLowerCase().includes(query.toLowerCase()) ||
                  c.description?.toLowerCase().includes(query.toLowerCase()),
          )
        : allCommands;

    const open_palette = useCallback(() => {
        setOpen(true);
        setQuery("");
        setActiveIndex(0);
    }, []);

    const close_palette = useCallback(() => {
        setOpen(false);
        setQuery("");
    }, []);

    // Keyboard shortcut: Cmd+K / Ctrl+K
    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                if (open) {
                    close_palette();
                } else {
                    open_palette();
                }
            }
            if (e.key === "Escape" && open) {
                close_palette();
            }
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, open_palette, close_palette]);

    // Arrow key navigation
    useEffect(() => {
        if (!open) return;
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIndex((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter") {
                e.preventDefault();
                filtered[activeIndex]?.action();
            }
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, filtered, activeIndex]);

    // Focus input when opened
    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [open]);

    // Build display groups based on filter
    const displayGroups: CommandGroup[] = query.trim()
        ? [{ group: "Results", commands: filtered }]
        : COMMAND_GROUPS;

    return (
        <>
            {/* Trigger button in navbar area — also Cmd+K */}
            <button
                onClick={open_palette}
                aria-label="Open command palette (Cmd+K)"
                style={{
                    position: "fixed",
                    bottom: "32px",
                    right: "32px",
                    zIndex: 9000,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    background: "var(--surface)",
                    border: "1px solid rgba(0,200,255,0.15)",
                    cursor: "none",
                    backdropFilter: "blur(12px)",
                    transition: "border-color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(0,200,255,0.4)";
                    el.style.background = "var(--elevated)";
                }}
                onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(0,200,255,0.15)";
                    el.style.background = "var(--surface)";
                }}
            >
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--text-mid)" }}
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
                <span
                    style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontSize: "11px",
                        color: "var(--text-mid)",
                        letterSpacing: "0.05em",
                    }}
                >
                    ⌘K
                </span>
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            onClick={close_palette}
                            style={{
                                position: "fixed",
                                inset: 0,
                                zIndex: 9500,
                                background: "rgba(4,8,15,0.75)",
                                backdropFilter: "blur(4px)",
                            }}
                        />

                        {/* Palette */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97, y: -8 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.97, y: -8 }}
                            transition={{
                                duration: 0.18,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Command palette"
                            style={{
                                position: "fixed",
                                top: "20%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                zIndex: 9600,
                                width: "min(560px, calc(100vw - 32px))",
                                borderRadius: "10px",
                                background: "var(--surface)",
                                border: "1px solid rgba(0,200,255,0.18)",
                                boxShadow:
                                    "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,200,255,0.05), inset 0 1px 0 rgba(255,255,255,0.04)",
                                overflow: "hidden",
                            }}
                        >
                            {/* Search input */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    padding: "16px 20px",
                                    borderBottom:
                                        "1px solid rgba(0,200,255,0.08)",
                                }}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{
                                        color: "var(--text-dim)",
                                        flexShrink: 0,
                                    }}
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => {
                                        setQuery(e.target.value);
                                        setActiveIndex(0);
                                    }}
                                    placeholder="Search commands…"
                                    style={{
                                        flex: 1,
                                        background: "transparent",
                                        border: "none",
                                        outline: "none",
                                        fontFamily: "var(--font-body)",
                                        fontSize: "15px",
                                        color: "var(--text-bright)",
                                        caretColor: "var(--cyan)",
                                    }}
                                />
                                <kbd
                                    style={{
                                        fontFamily: "var(--font-jetbrains)",
                                        fontSize: "11px",
                                        color: "var(--text-dim)",
                                        padding: "2px 6px",
                                        borderRadius: "4px",
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                    }}
                                >
                                    ESC
                                </kbd>
                            </div>

                            {/* Command list */}
                            <div
                                style={{
                                    maxHeight: "360px",
                                    overflowY: "auto",
                                    padding: "8px 0",
                                }}
                            >
                                {filtered.length === 0 ? (
                                    <p
                                        style={{
                                            padding: "24px 20px",
                                            textAlign: "center",
                                            fontFamily: "var(--font-jetbrains)",
                                            fontSize: "13px",
                                            color: "var(--text-dim)",
                                        }}
                                    >
                                        No commands found.
                                    </p>
                                ) : (
                                    displayGroups.map((group) => {
                                        const visibleCommands =
                                            group.commands.filter((c) =>
                                                filtered.includes(c),
                                            );
                                        if (visibleCommands.length === 0)
                                            return null;
                                        return (
                                            <div key={group.group}>
                                                <p
                                                    style={{
                                                        padding: "8px 20px 4px",
                                                        fontFamily:
                                                            "var(--font-jetbrains)",
                                                        fontSize: "10px",
                                                        letterSpacing: "0.2em",
                                                        textTransform:
                                                            "uppercase",
                                                        color: "var(--text-dim)",
                                                    }}
                                                >
                                                    {group.group}
                                                </p>
                                                {visibleCommands.map((cmd) => {
                                                    const globalIdx =
                                                        filtered.indexOf(cmd);
                                                    const isActive =
                                                        globalIdx ===
                                                        activeIndex;
                                                    return (
                                                        <button
                                                            key={cmd.id}
                                                            onClick={cmd.action}
                                                            onMouseEnter={() =>
                                                                setActiveIndex(
                                                                    globalIdx,
                                                                )
                                                            }
                                                            style={{
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "space-between",
                                                                width: "100%",
                                                                padding:
                                                                    "10px 20px",
                                                                background:
                                                                    isActive
                                                                        ? "rgba(0,200,255,0.07)"
                                                                        : "transparent",
                                                                border: "none",
                                                                cursor: "none",
                                                                transition:
                                                                    "background 0.1s ease",
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    flexDirection:
                                                                        "column",
                                                                    gap: "2px",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "var(--font-body)",
                                                                        fontSize:
                                                                            "14px",
                                                                        color: isActive
                                                                            ? "var(--text-bright)"
                                                                            : "var(--text-mid)",
                                                                        fontWeight:
                                                                            isActive
                                                                                ? 500
                                                                                : 400,
                                                                        transition:
                                                                            "color 0.1s ease",
                                                                    }}
                                                                >
                                                                    {cmd.label}
                                                                </span>
                                                                {cmd.description && (
                                                                    <span
                                                                        style={{
                                                                            fontFamily:
                                                                                "var(--font-jetbrains)",
                                                                            fontSize:
                                                                                "11px",
                                                                            color: "var(--text-dim)",
                                                                        }}
                                                                    >
                                                                        {
                                                                            cmd.description
                                                                        }
                                                                    </span>
                                                                )}
                                                            </div>
                                                            {cmd.shortcut && (
                                                                <kbd
                                                                    style={{
                                                                        fontFamily:
                                                                            "var(--font-jetbrains)",
                                                                        fontSize:
                                                                            "11px",
                                                                        color: "var(--text-dim)",
                                                                        padding:
                                                                            "2px 7px",
                                                                        borderRadius:
                                                                            "4px",
                                                                        background:
                                                                            "rgba(255,255,255,0.05)",
                                                                        border: "1px solid rgba(255,255,255,0.08)",
                                                                        flexShrink: 0,
                                                                    }}
                                                                >
                                                                    {
                                                                        cmd.shortcut
                                                                    }
                                                                </kbd>
                                                            )}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        );
                                    })
                                )}
                            </div>

                            {/* Footer hint */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "16px",
                                    padding: "10px 20px",
                                    borderTop: "1px solid rgba(0,200,255,0.06)",
                                }}
                            >
                                {[
                                    ["↑↓", "Navigate"],
                                    ["↵", "Select"],
                                    ["ESC", "Close"],
                                ].map(([key, label]) => (
                                    <div
                                        key={key}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                        }}
                                    >
                                        <kbd
                                            style={{
                                                fontFamily:
                                                    "var(--font-jetbrains)",
                                                fontSize: "10px",
                                                color: "var(--text-dim)",
                                                padding: "1px 5px",
                                                borderRadius: "3px",
                                                background:
                                                    "rgba(255,255,255,0.05)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                            }}
                                        >
                                            {key}
                                        </kbd>
                                        <span
                                            style={{
                                                fontFamily:
                                                    "var(--font-jetbrains)",
                                                fontSize: "10px",
                                                color: "var(--text-dim)",
                                            }}
                                        >
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* CV Download Modal */}
            <CVDownloadModal
                isOpen={isCVModalOpen}
                onClose={() => setIsCVModalOpen(false)}
            />
        </>
    );
}
