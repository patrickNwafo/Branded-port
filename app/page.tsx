import Navbar from "@/app/components/ui/Navbar";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Skills from "@/app/components/sections/Skills";
import Projects from "@/app/components/sections/Projects";
import Experience from "@/app/components/sections/Experience";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <footer
                style={{
                    borderTop: "1px solid rgba(0,200,255,0.07)",
                    padding: "32px 0",
                }}
            >
                <div
                    className="section-inner flex flex-col sm:flex-row items-center justify-between gap-4"
                    style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                        color: "var(--text-dim)",
                    }}
                >
                    <span>
                        {" "}
                        <span>
                            &copy; {new Date().getFullYear()} Chinedu Nwafor.
                            All rights reserved.
                        </span>
                    </span>
                    <span
                        style={{
                            background:
                                "linear-gradient(90deg, #00C8FF, #0057FF)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Engineered with precision.
                    </span>
                </div>
            </footer>
        </>
    );
}
