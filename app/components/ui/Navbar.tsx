"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/app/lib/constants";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(0,200,255,0.1)] bg-[rgba(4,8,15,0.85)] backdrop-blur-[20px]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-16 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-[family-name:var(--font-syne)] text-[15px] font-bold tracking-wider text-[var(--text-bright)] no-underline"
          aria-label="Chinedu Nwafor — Home"
        >
          <span className="relative flex h-[8px] w-[8px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cyan)] opacity-60" />
            <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[var(--cyan)]" />
          </span>
          CN_DEV
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-[13px] tracking-widest uppercase text-[var(--text-mid)] hover:text-[var(--text-bright)] transition-colors duration-200 font-[family-name:var(--font-jetbrains)]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" as="a" href="#contact" className="text-[13px] tracking-wider">
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
          menuOpen ? "max-h-[400px] border-b border-[rgba(0,200,255,0.1)]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-8 py-6 gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-[13px] tracking-widest uppercase text-[var(--text-mid)] hover:text-[var(--text-bright)] transition-colors font-[family-name:var(--font-jetbrains)]"
            >
              {link.label}
            </button>
          ))}
          <Button variant="ghost" as="a" href="#contact" className="self-start text-[13px]">
            Hire Me
          </Button>
        </nav>
      </div>
    </header>
  );
}
