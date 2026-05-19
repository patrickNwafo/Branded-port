import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/app/components/ui/LenisProvider";
import CustomCursor from "@/app/components/ui/CustomCursor";

const syne = Syne({
    variable: "--font-syne",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
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
    title: "Chinedu Nwafor — Full Stack & Mobile Engineer",
    description:
        "Full Stack and Mobile Engineer with 6+ years building scalable digital systems and immersive product experiences. Based in Nigeria, working globally.",
    keywords: [
        "Full Stack Engineer",
        "Mobile Developer",
        "React Native",
        "Next.js",
        "Node.js",
        "Nigeria",
    ],
    openGraph: {
        title: "Chinedu Nwafor — Full Stack & Mobile Engineer",
        description:
            "Building scalable systems and immersive product experiences.",
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
            className={`${syne.variable} ${jetbrainsMono.variable}`}
        >
            <body>
                <LenisProvider>
                    <CustomCursor />
                    {children}
                </LenisProvider>
            </body>
        </html>
    );
}
