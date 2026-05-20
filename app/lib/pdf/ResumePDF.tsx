import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: "50pt 50pt 50pt 50pt",
    fontFamily: "Helvetica",
  },
  accentBar: {
    height: "2pt",
    backgroundColor: "#00C8FF",
    marginBottom: "24pt",
  },
  header: {
    marginBottom: "28pt",
  },
  name: {
    fontSize: "22pt",
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    color: "#0a0a0a",
    marginBottom: "4pt",
  },
  title: {
    fontSize: "11pt",
    fontFamily: "Helvetica",
    color: "#3a3a3a",
    marginBottom: "16pt",
  },
  contact: {
    fontSize: "8pt",
    fontFamily: "Helvetica",
    color: "#666666",
    marginBottom: "2pt",
  },
  sectionTitle: {
    fontSize: "10pt",
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    color: "#0a0a0a",
    marginBottom: "10pt",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  sectionDivider: {
    height: "0.5pt",
    backgroundColor: "#e5e5e5",
    marginBottom: "14pt",
    marginTop: "2pt",
  },
  summary: {
    fontSize: "9pt",
    fontFamily: "Helvetica",
    color: "#2a2a2a",
    lineHeight: "1.5",
    marginBottom: "20pt",
  },
  techSection: {
    marginBottom: "20pt",
  },
  techRow: {
    flexDirection: "row",
    marginBottom: "4pt",
  },
  techCategory: {
    width: "140pt",
    fontSize: "8pt",
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    color: "#0a0a0a",
  },
  techItems: {
    flex: 1,
    fontSize: "8pt",
    fontFamily: "Helvetica",
    color: "#3a3a3a",
  },
  jobSection: {
    marginBottom: "18pt",
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "3pt",
  },
  jobRole: {
    fontSize: "9pt",
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    color: "#0a0a0a",
  },
  jobMeta: {
    fontSize: "8pt",
    fontFamily: "Helvetica",
    color: "#666666",
  },
  jobCompany: {
    fontSize: "9pt",
    fontFamily: "Helvetica",
    color: "#3a3a3a",
    marginBottom: "6pt",
  },
  bullet: {
    fontSize: "8pt",
    fontFamily: "Helvetica",
    color: "#2a2a2a",
    marginBottom: "2pt",
    lineHeight: "1.4",
  },
  projectSection: {
    marginBottom: "16pt",
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "2pt",
  },
  projectName: {
    fontSize: "9pt",
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    color: "#0a0a0a",
  },
  projectUrl: {
    fontSize: "7pt",
    fontFamily: "Helvetica",
    color: "#00C8FF",
  },
  projectTech: {
    fontSize: "7pt",
    fontFamily: "Helvetica",
    color: "#666666",
    marginBottom: "2pt",
  },
  projectDesc: {
    fontSize: "8pt",
    fontFamily: "Helvetica",
    color: "#2a2a2a",
    lineHeight: "1.4",
  },
  education: {
    fontSize: "8pt",
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
            Abuja, Nigeria · patrickchinwafor@gmail.com · +234 703 772 9150
          </Text>
          <Text style={styles.contact}>
            linkedin.com/in/chinedu01 · github.com/patrickNwafo · x.com/devchinex
          </Text>
        </View>

        {/* Engineering Summary */}
        <Text style={styles.sectionTitle}>Engineering Summary</Text>
        <View style={styles.sectionDivider} />
        <Text style={styles.summary}>
          Fullstack engineer focused on building scalable digital products, immersive web experiences, and production-grade systems. Experienced in architecting modern applications using Next.js, React, TypeScript, Python, and cloud-based backend infrastructure, with a strong emphasis on performance, usability, and thoughtful interaction design.
        </Text>

        {/* Core Technologies */}
        <Text style={styles.sectionTitle}>Core Technologies</Text>
        <View style={styles.sectionDivider} />
        <View style={styles.techSection}>
          <View style={styles.techRow}>
            <Text style={styles.techCategory}>Frontend</Text>
            <Text style={styles.techItems}>React · Next.js · TypeScript · Tailwind CSS · Framer Motion · GSAP · React Three Fiber</Text>
          </View>
          <View style={styles.techRow}>
            <Text style={styles.techCategory}>Backend & Infrastructure</Text>
            <Text style={styles.techItems}>Node.js · Python · Supabase · PostgreSQL · REST APIs · Express · Prisma</Text>
          </View>
          <View style={styles.techRow}>
            <Text style={styles.techCategory}>Mobile</Text>
            <Text style={styles.techItems}>React Native · Expo</Text>
          </View>
          <View style={styles.techRow}>
            <Text style={styles.techCategory}>AI & Interactive Systems</Text>
            <Text style={styles.techItems}>OpenAI APIs · LangChain · Three.js · WebGL</Text>
          </View>
          <View style={styles.techRow}>
            <Text style={styles.techCategory}>Tooling & Workflow</Text>
            <Text style={styles.techItems}>Git · GitHub · Docker · CI/CD · Vercel · Figma</Text>
          </View>
        </View>

        {/* Professional Experience */}
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        <View style={styles.sectionDivider} />

        <View style={styles.jobSection}>
          <View style={styles.jobHeader}>
            <Text style={styles.jobRole}>Full Stack Engineer</Text>
            <Text style={styles.jobMeta}>Apr 2025 — Present</Text>
          </View>
          <Text style={styles.jobCompany}>Tsaleach Global Pty Ltd · Remote</Text>
          <Text style={styles.bullet}>• Leading development of Car Rental Plus — a production-grade platform serving real-world operational rental workflows across South Africa</Text>
          <Text style={styles.bullet}>• Architecting and maintaining both frontend and backend systems: booking flows, Stripe payment integrations, admin infrastructure, and performance optimization</Text>
          <Text style={styles.bullet}>• Building scalable user experiences that balance technical reliability with premium interaction design using Next.js, Supabase, and Tailwind CSS</Text>
          <Text style={styles.bullet}>• Implementing backend infrastructure and database workflows engineered for operational scalability and long-term maintainability</Text>
        </View>

        <View style={styles.jobSection}>
          <View style={styles.jobHeader}>
            <Text style={styles.jobRole}>Creative Frontend / Software Engineer</Text>
            <Text style={styles.jobMeta}>Jun 2024 — Mar 2025</Text>
          </View>
          <Text style={styles.jobCompany}>Paul Injeti Collaboration · Remote</Text>
          <Text style={styles.bullet}>• Contributed to immersive frontend experiences and interactive web interfaces combining cinematic interaction design with modern engineering</Text>
          <Text style={styles.bullet}>• Built animation systems with GSAP and Three.js / React Three Fiber for motion-driven, GPU-accelerated user experiences</Text>
          <Text style={styles.bullet}>• Developed advanced UI interaction patterns — scroll-driven reveals, parallax depth, and inertia-based transitions</Text>
        </View>

        <View style={styles.jobSection}>
          <View style={styles.jobHeader}>
            <Text style={styles.jobRole}>Software Engineer</Text>
            <Text style={styles.jobMeta}>Dec 2022 — Present</Text>
          </View>
          <Text style={styles.jobCompany}>CenterBox Solutions · Remote</Text>
          <Text style={styles.bullet}>• Collaborating on modern web applications across multiple industries — frontend systems, backend integrations, and scalable product experiences</Text>
          <Text style={styles.bullet}>• Building responsive, maintainable, and production-ready applications within cross-functional teams focused on product-grade engineering</Text>
          <Text style={styles.bullet}>• Contributing across React ecosystems, scalable frontend architecture, backend integrations, and responsive design systems</Text>
        </View>

        {/* Selected Projects */}
        <Text style={styles.sectionTitle}>Selected Projects</Text>
        <View style={styles.sectionDivider} />

        <View style={styles.projectSection}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>Car Rental Plus</Text>
            <Text style={styles.projectUrl}>carrental-plus.com</Text>
          </View>
          <Text style={styles.projectTech}>Next.js · Supabase · Stripe · TypeScript</Text>
          <Text style={styles.projectDesc}>Production-grade rental platform with booking flows, payment integration, and admin infrastructure for South African car rental operations.</Text>
        </View>

        <View style={styles.projectSection}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>GrandConnects</Text>
            <Text style={styles.projectUrl}>grandconnects.com</Text>
          </View>
          <Text style={styles.projectTech}>Next.js · Supabase · TypeScript</Text>
          <Text style={styles.projectDesc}>Fullstack professional network platform with complex admin systems, scalable architecture, and seamless user management workflows.</Text>
        </View>

        <View style={styles.projectSection}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>Perkings Marketplace</Text>
            <Text style={styles.projectUrl}>perkingsmarketplace.com</Text>
          </View>
          <Text style={styles.projectTech}>Next.js · TypeScript · Supabase · Node.js</Text>
          <Text style={styles.projectDesc}>Full-stack marketplace with vendor management, admin infrastructure, multi-role authentication, and transactional systems.</Text>
        </View>

        <View style={styles.projectSection}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>IN9JA</Text>
            <Text style={styles.projectUrl}>in9ja.com</Text>
          </View>
          <Text style={styles.projectTech}>Next.js · TypeScript · Supabase · Node.js</Text>
          <Text style={styles.projectDesc}>Community platform and marketplace for Nigerians with admin systems, user-generated content, and real-time community features.</Text>
        </View>

        <View style={styles.projectSection}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>3D Customizer</Text>
            <Text style={styles.projectUrl}>threejscustomizer-rt.vercel.app</Text>
          </View>
          <Text style={styles.projectTech}>Three.js · React Three Fiber · AI · TypeScript</Text>
          <Text style={styles.projectDesc}>Interactive 3D product customization with real-time rendering, AI-assisted logo generation, and texture systems.</Text>
        </View>

        <View style={styles.projectSection}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>Chat With PDF</Text>
            <Text style={styles.projectUrl}>chat-with-pdf-virid.vercel.app</Text>
          </View>
          <Text style={styles.projectTech}>Next.js · OpenAI · LangChain · TypeScript</Text>
          <Text style={styles.projectDesc}>AI-powered document intelligence platform for conversational PDF interaction through retrieval-augmented generation.</Text>
        </View>

        {/* Education */}
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.sectionDivider} />
        <Text style={styles.education}>Bachelor of Science, Computer Science · [University Name]</Text>
        <Text style={styles.education}>Abuja, Nigeria</Text>

      </Page>
    </Document>
  );
}
