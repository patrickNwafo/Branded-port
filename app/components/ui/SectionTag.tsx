"use client";

interface SectionTagProps {
    children: React.ReactNode;
    className?: string;
    variant?: "cyan" | "green";
}

export default function SectionTag({
    children,
    className = "",
    variant = "cyan",
}: SectionTagProps) {
    const barColor =
        variant === "green" ? "bg-[var(--green)]" : "bg-[var(--cyan)]";
    const textColor =
        variant === "green" ? "text-[var(--green)]" : "text-[var(--cyan)]";

    return (
        <div
            className={`inline-flex items-center gap-2 text-[13px] font-medium tracking-widest uppercase ${textColor} ${className}`}
        >
            <span
                className={`block w-[3px] h-[14px] rounded-full ${barColor}`}
            />
            {children}
        </div>
    );
}
