"use client";

import { useRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "ghost";
    size?: "sm" | "md" | "lg";
    as?: "button" | "a";
    href?: string;
    children: React.ReactNode;
}

export default function Button({
    variant = "primary",
    size = "md",
    as: Tag = "button",
    href,
    children,
    className = "",
    ...props
}: ButtonProps) {
    const audioCtxRef = useRef<AudioContext | null>(null);

    function playTick() {
        try {
            if (!audioCtxRef.current) {
                audioCtxRef.current = new (
                    window.AudioContext ||
                    (
                        window as unknown as {
                            webkitAudioContext: typeof AudioContext;
                        }
                    ).webkitAudioContext
                )();
            }
            const ctx = audioCtxRef.current;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = 800;
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(
                0.001,
                ctx.currentTime + 0.08,
            );
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.08);
        } catch {
            // Ignore audio errors silently
        }
    }

    const baseClasses =
        "relative inline-flex items-center justify-center gap-2 text-sm font-medium tracking-wide rounded-md transition-all duration-[250ms] font-[family-name:var(--font-jetbrains)]";

    const sizes = {
        sm: "px-4 py-2",
        md: "px-6 py-3",
        lg: "px-8 py-3.5",
    };

    const variants = {
        primary:
            "bg-[var(--cyan)] text-[var(--void)] hover:bg-[#33D4FF] hover:shadow-[0_0_24px_rgba(0,200,255,0.35)]",
        ghost: "border border-[rgba(0,200,255,0.5)] text-[var(--cyan)] hover:bg-[rgba(0,200,255,0.1)] hover:border-[rgba(0,200,255,0.7)]",
    };

    const composed = `${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`;

    if (Tag === "a" && href) {
        return (
            <a href={href} className={composed} onClick={playTick}>
                {children}
            </a>
        );
    }

    return (
        <button
            className={composed}
            onClick={(e) => {
                playTick();
                props.onClick?.(e);
            }}
            {...props}
        >
            {children}
        </button>
    );
}
