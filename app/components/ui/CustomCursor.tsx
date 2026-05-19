"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    const onMouseEnterInteractive = () => {
      if (dotRef.current) dotRef.current.style.transform += " scale(2)";
      if (ringRef.current) {
        ringRef.current.style.width = "56px";
        ringRef.current.style.height = "56px";
        ringRef.current.style.borderColor = "rgba(0,200,255,0.6)";
      }
    };

    const onMouseLeaveInteractive = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.borderColor = "rgba(0,200,255,0.35)";
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    const interactives = document.querySelectorAll(
      "a, button, [role='button'], [data-cursor='interactive']"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed left-0 top-0 z-[9999] h-[10px] w-[10px] rounded-full bg-[var(--cyan)] pointer-events-none mix-blend-screen transition-transform duration-[25ms]"
        style={{ willChange: "transform" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed left-0 top-0 z-[9998] h-[36px] w-[36px] rounded-full border border-[rgba(0,200,255,0.35)] pointer-events-none transition-[width,height,border-color] duration-200"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
