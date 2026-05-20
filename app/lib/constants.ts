export const SITE_META = {
    name: "Chinedu Nwafor",
    title: "Fullstack & Product Engineer",
    tagline:
        "Building scalable systems, immersive interfaces, and ambitious digital experiences. Based in Nigeria, working globally.",
    location: "Nigeria",
    email: "chinedu@example.com",
    github: "https://github.com/chinedu",
    linkedin: "https://linkedin.com/in/chinedu",
    twitter: "https://twitter.com/chinedu",
    stats: [
        { value: "6+", label: "Years Engineering" },
        { value: "20+", label: "Products Shipped" },
        { value: "12+", label: "Clients Served" },
    ],
};

export const NAV_LINKS = [
    { label: "Work", href: "#projects" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Systems", href: "#skills" },
    { label: "Journey", href: "#experience" },
];

export type Skill = {
    name: string;
};

export type SkillCategory = {
    category: string;
    items: Skill[];
};

export const SKILLS: SkillCategory[] = [
    {
        category: "Frontend Systems",
        items: [
            { name: "Next.js" },
            { name: "React" },
            { name: "TypeScript" },
            { name: "Tailwind CSS" },
            { name: "Framer Motion" },
            { name: "GSAP" },
        ],
    },
    {
        category: "Backend & Data",
        items: [
            { name: "Node.js" },
            { name: "Supabase" },
            { name: "PostgreSQL" },
            { name: "REST APIs" },
            { name: "Express" },
            { name: "Prisma" },
        ],
    },
    {
        category: "3D & Creative",
        items: [
            { name: "Three.js" },
            { name: "React Three Fiber" },
            { name: "Drei" },
            { name: "WebGL" },
            { name: "GLSL" },
        ],
    },
    {
        category: "AI & Infrastructure",
        items: [
            { name: "OpenAI API" },
            { name: "LangChain" },
            { name: "Vercel" },
            { name: "Docker" },
            { name: "Git" },
            { name: "Figma" },
        ],
    },
];

export type Project = {
    id: number;
    title: string;
    role: string;
    description: string;
    tags: string[];
    link: string;
    github: string;
    image: string;
    featured?: boolean;
};

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Car Rental Plus",
        role: "Fullstack Engineer",
        description:
            "Evolved from a static HTML implementation into a production-grade rental platform — frontend architecture, backend systems, booking workflows, admin infrastructure, and scalable deployment for a South African car rental business.",
        tags: ["Next.js", "Node.js", "Supabase", "TypeScript"],
        link: "https://carrental-plus.com/",
        github: "#",
        image: "/images/projects/car-rental-plus.png",
        featured: true,
    },
    {
        id: 2,
        title: "GrandConnects",
        role: "Fullstack Engineer",
        description:
            "Fullstack professional network platform with complex admin systems, scalable architecture, and seamless user management workflows.",
        tags: ["Next.js", "Supabase", "TypeScript"],
        link: "https://grandconnects.com",
        github: "#",
        image: "/images/projects/grandconnects.png",
    },
    {
        id: 3,
        title: "3D Customizer",
        role: "Creative Engineer",
        description:
            "Interactive 3D product customization experience combining real-time rendering with AI-assisted logo generation, texture systems, and typography customization.",
        tags: ["Three.js", "React Three Fiber", "AI", "TypeScript"],
        link: "https://threejscustomizer-rt.vercel.app/",
        github: "#",
        image: "/images/projects/3d-customizer.png",
    },
    {
        id: 4,
        title: "Chat With PDF",
        role: "Fullstack Engineer",
        description:
            "AI-powered document intelligence platform — upload PDFs and interact conversationally through retrieval-augmented generation, delivering accurate, context-aware responses.",
        tags: ["Next.js", "OpenAI", "LangChain", "TypeScript"],
        link: "https://chat-with-pdf-virid.vercel.app/",
        github: "#",
        image: "/images/projects/chat-with-pdf.png",
    },
    {
        id: 5,
        title: "Perkings Marketplace",
        role: "Fullstack Engineer",
        description:
            "Full-stack marketplace platform with vendor management, admin infrastructure, multi-role authentication, and transactional systems built for scale.",
        tags: ["Next.js", "TypeScript", "Supabase", "Node.js"],
        link: "https://www.perkingsmarketplace.com/",
        github: "#",
        image: "/images/projects/perkings.png",
    },
    {
        id: 6,
        title: "IN9JA",
        role: "Fullstack Engineer",
        description:
            "Community platform and marketplace for Nigerians — fullstack architecture with admin systems, user-generated content, and real-time community features.",
        tags: ["Next.js", "TypeScript", "Supabase", "Node.js"],
        link: "https://in9ja.com/",
        github: "#",
        image: "/images/projects/in9ja.png",
    },
];

export type ExperienceItem = {
    role: string;
    company: string;
    period: string;
    location: string;
    bullets: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
    {
        role: "Fullstack & Product Engineer",
        company: "Independent — Client Work & Products",
        period: "2022 — Present",
        location: "Nigeria (Remote)",
        bullets: [
            "Engineered Car Rental Plus from a static HTML prototype into a full production platform — booking systems, admin infrastructure, backend architecture, and scalable deployment.",
            "Built GrandConnects, Perkings Marketplace, and IN9JA: fullstack platforms with complex admin systems, multi-role auth, and scalable architecture.",
            "Developed the 3D Customizer — real-time 3D rendering combined with AI-assisted logo generation and texture customization workflows.",
            "Shipped Chat With PDF: an AI document intelligence tool using retrieval-augmented generation to deliver conversational PDF interaction.",
        ],
    },
    {
        role: "Frontend → Fullstack Expansion",
        company: "Self-Directed Growth & Client Projects",
        period: "2020 — 2022",
        location: "Nigeria",
        bullets: [
            "Expanded from frontend engineering into backend systems, API design, and database architecture — driven by real project demands.",
            "Adopted Supabase, TypeScript, and modern fullstack patterns across multiple client platforms in e-commerce and services verticals.",
            "Began exploring 3D, animation systems, and AI-augmented workflows — developing the creative engineering identity that defines current work.",
        ],
    },
    {
        role: "Early Engineering & Foundation",
        company: "Exploration & Client Work",
        period: "2018 — 2020",
        location: "Nigeria",
        bullets: [
            "Started with HTML, CSS, and vanilla JavaScript — rapidly progressing through React and component-driven UI architecture.",
            "Built client websites, landing pages, and internal tools across diverse industries, developing a strong design sensibility alongside technical skill.",
            "Understood early that engineering and UX are inseparable — every interface is a system with human consequences.",
        ],
    },
];
