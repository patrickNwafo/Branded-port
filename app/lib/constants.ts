export const SITE_META = {
    name: "Chinedu Nwafor",
    title: "Fullstack & Product Engineer",
    tagline:
        "Building scalable systems, immersive interfaces, and ambitious digital experiences. Based in Nigeria, working globally.",
    location: "Nigeria",
    email: "patrickchinwafor@gmail.com",
    github: "https://github.com/patrickNwafo",
    linkedin: "https://www.linkedin.com/in/chinedu01/",
    twitter: "https://x.com/devchinex",
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
        tags: ["Next.js", "Supabase", "Stripe", "TypeScript"],
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
        role: "Full Stack Engineer",
        company: "Tsaleach Global Pty Ltd",
        period: "Apr 2025 — Present",
        location: "Remote",
        bullets: [
            "Leading development of Car Rental Plus — a production-grade platform serving real-world operational rental workflows across South Africa.",
            "Architecting and maintaining both frontend and backend systems: booking flows, Stripe payment integrations, admin infrastructure, and performance optimization.",
            "Building scalable user experiences that balance technical reliability with premium interaction design using Next.js, Supabase, and Tailwind CSS.",
            "Implementing backend infrastructure and database workflows engineered for operational scalability and long-term maintainability.",
        ],
    },
    {
        role: "Creative Frontend / Software Engineer",
        company: "Paul Injeti Collaboration",
        period: "Jun 2024 — Mar 2025",
        location: "Remote",
        bullets: [
            "Contributed to immersive frontend experiences and interactive web interfaces combining cinematic interaction design with modern engineering.",
            "Built animation systems with GSAP and Three.js / React Three Fiber for motion-driven, GPU-accelerated user experiences.",
            "Developed advanced UI interaction patterns — scroll-driven reveals, parallax depth, and inertia-based transitions.",
        ],
    },
    {
        role: "Software Engineer",
        company: "CenterBox Solutions",
        period: "Dec 2022 — Present",
        location: "Remote",
        bullets: [
            "Collaborating on modern web applications across multiple industries — frontend systems, backend integrations, and scalable product experiences.",
            "Building responsive, maintainable, and production-ready applications within cross-functional teams focused on product-grade engineering.",
            "Contributing across React ecosystems, scalable frontend architecture, backend integrations, and responsive design systems.",
        ],
    },
];

export type AdditionalProject = {
    title: string;
    url: string;
    description: string;
};

export const ADDITIONAL_PROJECTS: AdditionalProject[] = [
    {
        title: "The Tighty Society",
        url: "https://thetightysociety.com/",
        description: "Brand & community platform",
    },
    {
        title: "DALL·E Generator",
        url: "https://dall-e-rose-ten.vercel.app/",
        description: "AI image generation interface",
    },
    {
        title: "ICE Global Resources",
        url: "https://iceglobalresources.com/",
        description: "Corporate web platform",
    },
];
