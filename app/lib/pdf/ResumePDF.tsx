import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 50,
        paddingRight: 50,
        fontFamily: "Helvetica",
    },
    accentBar: {
        height: 2,
        backgroundColor: "#00C8FF",
        marginBottom: 24,
    },
    header: {
        marginBottom: 28,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Helvetica-Bold",
        color: "#0a0a0a",
        marginBottom: 4,
    },
    title: {
        fontSize: 11,
        fontFamily: "Helvetica",
        color: "#3a3a3a",
        marginBottom: 16,
    },
    contact: {
        fontSize: 8,
        fontFamily: "Helvetica",
        color: "#666666",
        marginBottom: 2,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: "bold",
        fontFamily: "Helvetica-Bold",
        color: "#0a0a0a",
        marginBottom: 10,
        textTransform: "uppercase",
    },
    sectionDivider: {
        height: 0.5,
        backgroundColor: "#e5e5e5",
        marginBottom: 14,
        marginTop: 2,
    },
    summary: {
        fontSize: 9,
        fontFamily: "Helvetica",
        color: "#2a2a2a",
        lineHeight: 1.5,
        marginBottom: 20,
    },
    techSection: {
        marginBottom: 20,
    },
    techRow: {
        flexDirection: "row",
        marginBottom: 4,
    },
    techCategory: {
        width: 140,
        fontSize: 8,
        fontWeight: "bold",
        fontFamily: "Helvetica-Bold",
        color: "#0a0a0a",
    },
    techItems: {
        flex: 1,
        fontSize: 8,
        fontFamily: "Helvetica",
        color: "#3a3a3a",
    },
    jobSection: {
        marginBottom: 18,
    },
    jobHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 3,
    },
    jobRole: {
        fontSize: 9,
        fontWeight: "bold",
        fontFamily: "Helvetica-Bold",
        color: "#0a0a0a",
    },
    jobMeta: {
        fontSize: 8,
        fontFamily: "Helvetica",
        color: "#666666",
    },
    jobCompany: {
        fontSize: 9,
        fontFamily: "Helvetica",
        color: "#3a3a3a",
        marginBottom: 6,
    },
    bullet: {
        fontSize: 8,
        fontFamily: "Helvetica",
        color: "#2a2a2a",
        marginBottom: 2,
        lineHeight: 1.4,
    },
    projectSection: {
        marginBottom: 16,
    },
    projectHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 2,
    },
    projectName: {
        fontSize: 9,
        fontWeight: "bold",
        fontFamily: "Helvetica-Bold",
        color: "#0a0a0a",
    },
    projectUrl: {
        fontSize: 7,
        fontFamily: "Helvetica",
        color: "#00C8FF",
    },
    projectTech: {
        fontSize: 7,
        fontFamily: "Helvetica",
        color: "#666666",
        marginBottom: 2,
    },
    projectDesc: {
        fontSize: 8,
        fontFamily: "Helvetica",
        color: "#2a2a2a",
        lineHeight: 1.4,
    },
    education: {
        fontSize: 8,
        fontFamily: "Helvetica",
        color: "#2a2a2a",
    },
    languages: {
        fontSize: 8,
        fontFamily: "Helvetica",
        color: "#2a2a2a",
    },
});

export default function ResumePDF() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Accent bar */}
                <View style={styles.accentBar} />

                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.name}>Chinedu Nwafor</Text>
                    <Text style={styles.title}>Fullstack Product Engineer</Text>
                    <Text style={styles.contact}>
                        Nigeria · Remote · +234 703 772 9150 ·
                        patrickchinwafor@gmail.com
                    </Text>
                    <Text style={styles.contact}>
                        linkedin.com/in/chinedu01 · github.com/patrickNwafo
                    </Text>
                </View>

                {/* Professional Summary */}
                <Text style={styles.sectionTitle}>Professional Summary</Text>
                <View style={styles.sectionDivider} />
                <Text style={styles.summary}>
                    Fullstack Product Engineer with 5+ years of experience
                    building scalable web applications, interactive platforms,
                    and production-grade digital systems. Specialized in
                    developing end-to-end products using Next.js, React,
                    TypeScript, and Python, with strong experience across
                    backend integration, system architecture, and immersive
                    frontend engineering. Passionate about building products
                    that combine clean user experience, scalable architecture,
                    and modern interaction design, with a strong focus on
                    performance, usability, and product thinking.
                </Text>

                {/* Core Technologies */}
                <Text style={styles.sectionTitle}>Core Technologies</Text>
                <View style={styles.sectionDivider} />
                <View style={styles.techSection}>
                    <View style={styles.techRow}>
                        <Text style={styles.techCategory}>Frontend</Text>
                        <Text style={styles.techItems}>
                            React · Next.js · TypeScript · JavaScript · Tailwind
                            CSS · Framer Motion · GSAP · React Three Fiber ·
                            Zustand
                        </Text>
                    </View>
                    <View style={styles.techRow}>
                        <Text style={styles.techCategory}>
                            Backend & Systems
                        </Text>
                        <Text style={styles.techItems}>
                            Node.js · Python · Supabase · Firebase · REST APIs ·
                            GraphQL · MySQL · PostgreSQL
                        </Text>
                    </View>
                    <View style={styles.techRow}>
                        <Text style={styles.techCategory}>Mobile</Text>
                        <Text style={styles.techItems}>
                            React Native (Expo)
                        </Text>
                    </View>
                    <View style={styles.techRow}>
                        <Text style={styles.techCategory}>
                            3D / Interactive Systems
                        </Text>
                        <Text style={styles.techItems}>
                            Three.js · React Three Fiber · WebGL-based
                            interactions · Motion systems
                        </Text>
                    </View>
                    <View style={styles.techRow}>
                        <Text style={styles.techCategory}>
                            Tools & Workflow
                        </Text>
                        <Text style={styles.techItems}>
                            Git · GitHub · Docker · CI/CD · Vercel ·
                            Figma-to-code workflows
                        </Text>
                    </View>
                </View>

                {/* Professional Experience */}
                <Text style={styles.sectionTitle}>Professional Experience</Text>
                <View style={styles.sectionDivider} />

                <View style={styles.jobSection}>
                    <View style={styles.jobHeader}>
                        <Text style={styles.jobRole}>
                            Fullstack Engineer (Contract)
                        </Text>
                        <Text style={styles.jobMeta}>Apr 2025 – Present</Text>
                    </View>
                    <Text style={styles.jobCompany}>
                        Tsaleach Global Pty Ltd — Car Rental Plus · South Africa
                        · Remote
                    </Text>
                    <Text style={styles.bullet}>
                        • Engineered and delivered a full-scale car rental
                        platform designed to modernize booking, fleet
                        management, and customer operations across South Africa
                    </Text>
                    <Text style={styles.bullet}>
                        • Led end-to-end development across frontend and backend
                        systems, building a seamless booking experience with
                        integrated payments, responsive UI systems, and
                        operational admin workflows
                    </Text>
                    <Text style={styles.bullet}>
                        • Focused on creating a production-grade platform that
                        balances usability, scalability, and business efficiency
                    </Text>
                </View>

                <View style={styles.jobSection}>
                    <View style={styles.jobHeader}>
                        <Text style={styles.jobRole}>Software Engineer</Text>
                        <Text style={styles.jobMeta}>Dec 2022 – Present</Text>
                    </View>
                    <Text style={styles.jobCompany}>
                        CenterBox Solutions · Abuja, Nigeria · Remote
                    </Text>
                    <Text style={styles.bullet}>
                        • Contributed to the development of enterprise-level web
                        applications across multiple industries
                    </Text>
                    <Text style={styles.bullet}>
                        • Worked on frontend architecture, API integration, and
                        scalable UI systems while collaborating with
                        cross-functional engineering teams to deliver
                        production-ready software
                    </Text>
                </View>

                <View style={styles.jobSection}>
                    <View style={styles.jobHeader}>
                        <Text style={styles.jobRole}>
                            Frontend / Interactive Engineer (Contract)
                        </Text>
                        <Text style={styles.jobMeta}>Jun 2024 – Dec 2024</Text>
                    </View>
                    <Text style={styles.jobCompany}>
                        Paul Injeti · Remote (US)
                    </Text>
                    <Text style={styles.bullet}>
                        • Developed advanced interactive web experiences
                        combining modern frontend engineering with 3D and
                        animation systems
                    </Text>
                    <Text style={styles.bullet}>
                        • Focused on building immersive UI systems using React,
                        GSAP, and React Three Fiber to deliver visually rich and
                        performant web applications
                    </Text>
                </View>

                <View style={styles.jobSection}>
                    <View style={styles.jobHeader}>
                        <Text style={styles.jobRole}>
                            Frontend Developer (Contract)
                        </Text>
                        <Text style={styles.jobMeta}>Jan 2024 – Mar 2024</Text>
                    </View>
                    <Text style={styles.jobCompany}>
                        OnTheSide Platform · Remote
                    </Text>
                    <Text style={styles.bullet}>
                        • Built a mentorship platform connecting mentors and
                        mentees through a modern web experience
                    </Text>
                    <Text style={styles.bullet}>
                        • Developed frontend features using React and Next.js,
                        implemented authentication systems using Firebase, and
                        built responsive, mobile-first UI components
                    </Text>
                </View>

                {/* Selected Projects */}
                <Text style={styles.sectionTitle}>Selected Projects</Text>
                <View style={styles.sectionDivider} />

                <View style={styles.projectSection}>
                    <View style={styles.projectHeader}>
                        <Text style={styles.projectName}>Car Rental Plus</Text>
                        <Text style={styles.projectUrl}>
                            carrental-plus.com
                        </Text>
                    </View>
                    <Text style={styles.projectTech}>
                        Next.js · Supabase · Stripe · TypeScript
                    </Text>
                    <Text style={styles.projectDesc}>
                        Fullstack mobility platform designed for booking,
                        managing, and operating vehicle rentals across South
                        Africa. Built as a production-grade system integrating
                        booking workflows, payment systems, and admin
                        operations.
                    </Text>
                </View>

                <View style={styles.projectSection}>
                    <View style={styles.projectHeader}>
                        <Text style={styles.projectName}>GrandConnects</Text>
                        <Text style={styles.projectUrl}>grandconnects.com</Text>
                    </View>
                    <Text style={styles.projectTech}>
                        Next.js · Supabase · TypeScript
                    </Text>
                    <Text style={styles.projectDesc}>
                        Fullstack transportation coordination platform with
                        integrated admin dashboard and scalable backend systems
                        built using Next.js and Supabase.
                    </Text>
                </View>

                <View style={styles.projectSection}>
                    <View style={styles.projectHeader}>
                        <Text style={styles.projectName}>
                            Perkings Marketplace
                        </Text>
                        <Text style={styles.projectUrl}>
                            perkingsmarketplace.com
                        </Text>
                    </View>
                    <Text style={styles.projectTech}>
                        Next.js · TypeScript · Supabase · Node.js
                    </Text>
                    <Text style={styles.projectDesc}>
                        B2B sourcing and wholesale marketplace connecting buyers
                        and suppliers through an admin-managed system for
                        quotes, product management, and order tracking.
                    </Text>
                </View>

                <View style={styles.projectSection}>
                    <View style={styles.projectHeader}>
                        <Text style={styles.projectName}>IN9JA</Text>
                        <Text style={styles.projectUrl}>in9ja.com</Text>
                    </View>
                    <Text style={styles.projectTech}>
                        Next.js · TypeScript · Supabase · Node.js
                    </Text>
                    <Text style={styles.projectDesc}>
                        Nigerian-focused digital community platform combining
                        social interaction, marketplace functionality, and
                        content discovery into a unified ecosystem.
                    </Text>
                </View>

                <View style={styles.projectSection}>
                    <View style={styles.projectHeader}>
                        <Text style={styles.projectName}>3D Customizer</Text>
                        <Text style={styles.projectUrl}>
                            threejscustomizer-rt.vercel.app
                        </Text>
                    </View>
                    <Text style={styles.projectTech}>
                        Three.js · React Three Fiber · AI · TypeScript
                    </Text>
                    <Text style={styles.projectDesc}>
                        Interactive 3D product customization platform with
                        AI-assisted design features and real-time rendering.
                    </Text>
                </View>

                <View style={styles.projectSection}>
                    <View style={styles.projectHeader}>
                        <Text style={styles.projectName}>Chat With PDF</Text>
                        <Text style={styles.projectUrl}>
                            chat-with-pdf-virid.vercel.app
                        </Text>
                    </View>
                    <Text style={styles.projectTech}>
                        Next.js · OpenAI · LangChain · TypeScript
                    </Text>
                    <Text style={styles.projectDesc}>
                        AI-powered document interaction platform enabling users
                        to upload and chat with PDF content.
                    </Text>
                </View>

                {/* Education */}
                <Text style={styles.sectionTitle}>Education</Text>
                <View style={styles.sectionDivider} />
                <Text style={styles.education}>
                    Bachelor`&rsquo;` Degree in Computer Science
                </Text>
                <Text style={styles.education}>
                    Ecole Supérieure des Technologies Avancées et de Management
                    (ESTAM University) · 2019 – 2022
                </Text>

                {/* Languages */}
                <Text style={styles.sectionTitle}>Languages</Text>
                <View style={styles.sectionDivider} />
                <Text style={styles.languages}>
                    English — Full Professional Proficiency
                </Text>
                <Text style={styles.languages}>
                    Yoruba — Professional Working Proficiency
                </Text>
            </Page>
        </Document>
    );
}
