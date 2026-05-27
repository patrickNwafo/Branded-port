import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/app/components/ui/LenisProvider";
import CustomCursor from "@/app/components/ui/CustomCursor";
import LoadingScreen from "@/app/components/ui/LoadingScreen";
import CommandPalette from "@/app/components/ui/CommandPalette";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-syne",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    preload: true,
});

const inter = Inter({
    variable: "--font-body",
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    display: "swap",
    preload: true,
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains",
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    display: "swap",
    preload: true,
});

export const metadata: Metadata = {
    title: "Chinedu Nwafor — Fullstack & Product Engineer",
    description:
        "Fullstack and product engineer building scalable systems, immersive interfaces, and ambitious digital experiences. Based in Nigeria, working globally.",
    keywords: [
        "Fullstack Engineer",
        "Product Engineer",
        "Next.js",
        "React",
        "Supabase",
        "Nigeria",
        "Three.js",
    ],
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
    },
    openGraph: {
        title: "Chinedu Nwafor — Fullstack & Product Engineer",
        description:
            "Building scalable systems, immersive interfaces, and ambitious digital experiences.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
        >
            <body>
                <LenisProvider>
                    <LoadingScreen />
                    <CustomCursor />
                    <CommandPalette />
                    {children}
                </LenisProvider>
            </body>
        </html>
    );
}
