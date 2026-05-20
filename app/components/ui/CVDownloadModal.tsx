"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Sparkles, Check, Copy } from "lucide-react";

type DownloadState =
    | "idle"
    | "generating"
    | "finalizing"
    | "ready"
    | "downloaded";

interface CVDownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CVDownloadModal({
    isOpen,
    onClose,
}: CVDownloadModalProps) {
    const [state, setState] = useState<DownloadState>("idle");
    const [selectedFormat, setSelectedFormat] = useState<"ats" | "designed">(
        "designed",
    );

    const handleDownload = async (format: "ats" | "designed") => {
        setSelectedFormat(format);
        setState("generating");

        // Simulate generation time
        setTimeout(() => {
            setState("finalizing");

            setTimeout(() => {
                setState("ready");

                // Auto-download after a brief moment
                setTimeout(() => {
                    const url = format === "ats" ? "/api/cv/ats" : "/api/cv";
                    const link = document.createElement("a");
                    link.href = url;
                    link.download =
                        format === "ats"
                            ? "Chinedu_Nwafor_Resume_ATS.pdf"
                            : "Chinedu_Nwafor_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    setState("downloaded");
                }, 800);
            }, 1200);
        }, 1000);
    };

    const handleReset = () => {
        setState("idle");
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(
            "https://portfolio-three-orpin-40.vercel.app/api/cv",
        );
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: "fixed",
                            inset: 0,
                            backgroundColor: "rgba(0,0,0,0.6)",
                            backdropFilter: "blur(8px)",
                            zIndex: 100,
                        }}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "90%",
                            maxWidth: "480px",
                            backgroundColor: "var(--surface)",
                            border: "1px solid rgba(0,200,255,0.15)",
                            borderRadius: "12px",
                            padding: "32px",
                            zIndex: 101,
                        }}
                    >
                        {/* Idle State - Format Selection */}
                        {state === "idle" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "8px",
                                            background: "rgba(0,200,255,0.1)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Download
                                            style={{
                                                color: "var(--cyan)",
                                                width: "20px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h3
                                            style={{
                                                fontFamily: "var(--font-syne)",
                                                fontSize: "18px",
                                                fontWeight: 600,
                                                color: "var(--text-bright)",
                                                marginBottom: "2px",
                                            }}
                                        >
                                            Download Resume
                                        </h3>
                                        <p
                                            style={{
                                                fontFamily:
                                                    "var(--font-jetbrains)",
                                                fontSize: "11px",
                                                color: "var(--text-dim)",
                                            }}
                                        >
                                            Choose your preferred format
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {/* Designed PDF */}
                                    <button
                                        onClick={() =>
                                            handleDownload("designed")
                                        }
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor =
                                                "rgba(0,200,255,0.4)";
                                            e.currentTarget.style.background =
                                                "rgba(0,200,255,0.05)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor =
                                                "rgba(0,200,255,0.15)";
                                            e.currentTarget.style.background =
                                                "var(--surface)";
                                        }}
                                        style={{
                                            padding: "16px",
                                            borderRadius: "8px",
                                            border:
                                                selectedFormat === "designed"
                                                    ? "2px solid var(--cyan)"
                                                    : "1px solid rgba(0,200,255,0.15)",
                                            background:
                                                selectedFormat === "designed"
                                                    ? "rgba(0,200,255,0.08)"
                                                    : "var(--surface)",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                        }}
                                    >
                                        <div className="flex items-start gap-3">
                                            <Sparkles
                                                style={{
                                                    color: "var(--cyan)",
                                                    width: "18px",
                                                    marginTop: "2px",
                                                }}
                                            />
                                            <div className="flex-1 text-left">
                                                <div
                                                    style={{
                                                        fontFamily:
                                                            "var(--font-syne)",
                                                        fontSize: "14px",
                                                        fontWeight: 600,
                                                        color: "var(--text-bright)",
                                                        marginBottom: "4px",
                                                    }}
                                                >
                                                    Designed PDF
                                                </div>
                                                <div
                                                    style={{
                                                        fontFamily:
                                                            "var(--font-body)",
                                                        fontSize: "12px",
                                                        color: "var(--text-mid)",
                                                        lineHeight: 1.5,
                                                    }}
                                                >
                                                    Premium branded version with
                                                    enhanced visual design
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    {/* ATS Version */}
                                    <button
                                        onClick={() => handleDownload("ats")}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor =
                                                "rgba(0,200,255,0.4)";
                                            e.currentTarget.style.background =
                                                "rgba(0,200,255,0.05)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor =
                                                "rgba(0,200,255,0.15)";
                                            e.currentTarget.style.background =
                                                "var(--surface)";
                                        }}
                                        style={{
                                            padding: "16px",
                                            borderRadius: "8px",
                                            border:
                                                selectedFormat === "ats"
                                                    ? "2px solid var(--cyan)"
                                                    : "1px solid rgba(0,200,255,0.15)",
                                            background:
                                                selectedFormat === "ats"
                                                    ? "rgba(0,200,255,0.08)"
                                                    : "var(--surface)",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                        }}
                                    >
                                        <div className="flex items-start gap-3">
                                            <FileText
                                                style={{
                                                    color: "var(--text-mid)",
                                                    width: "18px",
                                                    marginTop: "2px",
                                                }}
                                            />
                                            <div className="flex-1 text-left">
                                                <div
                                                    style={{
                                                        fontFamily:
                                                            "var(--font-syne)",
                                                        fontSize: "14px",
                                                        fontWeight: 600,
                                                        color: "var(--text-bright)",
                                                        marginBottom: "4px",
                                                    }}
                                                >
                                                    ATS Version
                                                </div>
                                                <div
                                                    style={{
                                                        fontFamily:
                                                            "var(--font-body)",
                                                        fontSize: "12px",
                                                        color: "var(--text-mid)",
                                                        lineHeight: 1.5,
                                                    }}
                                                >
                                                    Clean, recruiter-optimized
                                                    for ATS systems
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                <button
                                    onClick={onClose}
                                    style={{
                                        marginTop: "20px",
                                        padding: "12px",
                                        width: "100%",
                                        borderRadius: "8px",
                                        border: "none",
                                        background: "transparent",
                                        fontFamily: "var(--font-jetbrains)",
                                        fontSize: "12px",
                                        color: "var(--text-dim)",
                                        cursor: "pointer",
                                    }}
                                >
                                    Cancel
                                </button>
                            </motion.div>
                        )}

                        {/* Generating State */}
                        {state === "generating" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center gap-6"
                            >
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "50%",
                                        border: "2px solid rgba(0,200,255,0.2)",
                                        borderTopColor: "var(--cyan)",
                                        animation: "spin 1s linear infinite",
                                    }}
                                />
                                <div className="text-center">
                                    <div
                                        style={{
                                            fontFamily: "var(--font-syne)",
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            color: "var(--text-bright)",
                                            marginBottom: "8px",
                                        }}
                                    >
                                        Generating Resume…
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "var(--font-jetbrains)",
                                            fontSize: "12px",
                                            color: "var(--text-dim)",
                                        }}
                                    >
                                        Optimizing for ATS + Print Layout
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Finalizing State */}
                        {state === "finalizing" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center gap-6"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                    }}
                                >
                                    <Check
                                        style={{
                                            color: "var(--cyan)",
                                            width: "48px",
                                            height: "48px",
                                        }}
                                    />
                                </motion.div>
                                <div className="text-center">
                                    <div
                                        style={{
                                            fontFamily: "var(--font-syne)",
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            color: "var(--text-bright)",
                                            marginBottom: "8px",
                                        }}
                                    >
                                        Finalizing layout…
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "var(--font-jetbrains)",
                                            fontSize: "12px",
                                            color: "var(--text-dim)",
                                        }}
                                    >
                                        Almost ready
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Ready State */}
                        {state === "ready" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center gap-6"
                            >
                                <div
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "50%",
                                        background: "rgba(0,200,255,0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Download
                                        style={{
                                            color: "var(--cyan)",
                                            width: "24px",
                                        }}
                                    />
                                </div>
                                <div className="text-center">
                                    <div
                                        style={{
                                            fontFamily: "var(--font-syne)",
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            color: "var(--text-bright)",
                                            marginBottom: "8px",
                                        }}
                                    >
                                        Download Ready
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "var(--font-jetbrains)",
                                            fontSize: "12px",
                                            color: "var(--text-dim)",
                                        }}
                                    >
                                        Click to save your resume
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        const url =
                                            selectedFormat === "ats"
                                                ? "/api/cv/ats"
                                                : "/api/cv";
                                        const link =
                                            document.createElement("a");
                                        link.href = url;
                                        link.download =
                                            selectedFormat === "ats"
                                                ? "Chinedu_Nwafor_Resume_ATS.pdf"
                                                : "Chinedu_Nwafor_Resume.pdf";
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                        setState("downloaded");
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background =
                                            "rgba(0,200,255,0.15)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background =
                                            "var(--cyan)";
                                    }}
                                    style={{
                                        padding: "14px 28px",
                                        borderRadius: "8px",
                                        background: "var(--cyan)",
                                        border: "none",
                                        fontFamily: "var(--font-syne)",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        color: "#000",
                                        cursor: "pointer",
                                        transition: "background 0.2s ease",
                                    }}
                                >
                                    Download Now
                                </button>
                            </motion.div>
                        )}

                        {/* Downloaded State with Toast */}
                        {state === "downloaded" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            background: "rgba(0,200,255,0.1)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Check
                                            style={{
                                                color: "var(--cyan)",
                                                width: "20px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <div
                                            style={{
                                                fontFamily: "var(--font-syne)",
                                                fontSize: "16px",
                                                fontWeight: 600,
                                                color: "var(--text-bright)",
                                            }}
                                        >
                                            Resume Generated Successfully
                                        </div>
                                        <div
                                            style={{
                                                fontFamily:
                                                    "var(--font-jetbrains)",
                                                fontSize: "11px",
                                                color: "var(--text-dim)",
                                            }}
                                        >
                                            {selectedFormat === "ats"
                                                ? "ATS Version"
                                                : "Designed PDF"}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => {
                                            handleReset();
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background =
                                                "rgba(0,200,255,0.05)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background =
                                                "transparent";
                                        }}
                                        style={{
                                            padding: "12px",
                                            borderRadius: "8px",
                                            border: "1px solid rgba(0,200,255,0.15)",
                                            background: "transparent",
                                            fontFamily: "var(--font-syne)",
                                            fontSize: "13px",
                                            color: "var(--text-bright)",
                                            cursor: "pointer",
                                            transition: "background 0.2s ease",
                                        }}
                                    >
                                        View Again
                                    </button>
                                    <button
                                        onClick={handleCopyLink}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background =
                                                "rgba(0,200,255,0.05)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background =
                                                "transparent";
                                        }}
                                        style={{
                                            padding: "12px",
                                            borderRadius: "8px",
                                            border: "1px solid rgba(0,200,255,0.15)",
                                            background: "transparent",
                                            fontFamily: "var(--font-syne)",
                                            fontSize: "13px",
                                            color: "var(--text-bright)",
                                            cursor: "pointer",
                                            transition: "background 0.2s ease",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "8px",
                                        }}
                                    >
                                        <Copy
                                            style={{
                                                width: "14px",
                                                color: "var(--text-dim)",
                                            }}
                                        />
                                        Copy Link
                                    </button>
                                    <button
                                        onClick={onClose}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background =
                                                "rgba(0,200,255,0.05)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background =
                                                "transparent";
                                        }}
                                        style={{
                                            padding: "12px",
                                            borderRadius: "8px",
                                            border: "none",
                                            background: "transparent",
                                            fontFamily: "var(--font-jetbrains)",
                                            fontSize: "12px",
                                            color: "var(--text-dim)",
                                            cursor: "pointer",
                                            transition: "background 0.2s ease",
                                        }}
                                    >
                                        Close
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        <style jsx global>{`
                            @keyframes spin {
                                from {
                                    transform: rotate(0deg);
                                }
                                to {
                                    transform: rotate(360deg);
                                }
                            }
                        `}</style>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
