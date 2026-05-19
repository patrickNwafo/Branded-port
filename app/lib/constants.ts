export const SITE_META = {
  name: "Chinedu Nwafor",
  title: "Full Stack & Mobile Engineer",
  tagline: "Building high-performance digital products — from scalable backends to immersive mobile experiences. Based in Nigeria, working globally.",
  location: "Nigeria",
  email: "chinedu@example.com",
  github: "https://github.com/chinedu",
  linkedin: "https://linkedin.com/in/chinedu",
  twitter: "https://twitter.com/chinedu",
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "30+", label: "Projects Shipped" },
    { value: "12+", label: "Happy Clients" },
  ],
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
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
    category: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Three.js" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "REST" },
      { name: "GraphQL" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native" },
      { name: "Flutter" },
      { name: "Expo" },
      { name: "iOS" },
      { name: "Android" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Vercel" },
      { name: "Figma" },
      { name: "CI/CD" },
    ],
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NexaBank",
    description:
      "A fintech mobile application delivering seamless banking experiences with real-time transactions, biometric auth, and advanced analytics.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Redis"],
    link: "#",
    github: "#",
    image: "/images/projects/project-1.png",
  },
  {
    id: 2,
    title: "ShipTrack",
    description:
      "Real-time logistics platform with live shipment tracking, driver management, and predictive ETA using WebSocket-driven data pipelines.",
    tags: ["Next.js", "WebSockets", "Redis", "Node.js"],
    link: "#",
    github: "#",
    image: "/images/projects/project-2.png",
  },
  {
    id: 3,
    title: "MedConnect",
    description:
      "Healthcare booking system connecting patients to specialists across Africa — built for scale with offline-first mobile architecture.",
    tags: ["Flutter", "Express", "MongoDB", "AWS"],
    link: "#",
    github: "#",
    image: "/images/projects/project-3.png",
  },
  {
    id: 4,
    title: "DevMetrics",
    description:
      "Developer analytics dashboard surfacing team velocity, code quality signals, and deployment trends from multiple CI/CD sources.",
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    link: "#",
    github: "#",
    image: "/images/projects/project-4.png",
  },
  {
    id: 5,
    title: "AgroLink",
    description:
      "AgriTech marketplace connecting Nigerian farmers to buyers and logistics providers — web and mobile with real-time pricing data.",
    tags: ["Next.js", "React Native", "AWS", "Node.js"],
    link: "#",
    github: "#",
    image: "/images/projects/project-5.png",
  },
  {
    id: 6,
    title: "TaskFlow AI",
    description:
      "AI-powered task management that learns team workflows, auto-prioritises work, and generates intelligent project summaries.",
    tags: ["Next.js", "OpenAI API", "Prisma", "TypeScript"],
    link: "#",
    github: "#",
    image: "/images/projects/project-6.png",
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
    role: "Senior Full Stack Engineer",
    company: "TechCorp Africa",
    period: "2022 — Present",
    location: "Lagos, Nigeria",
    bullets: [
      "Architected and shipped 4 production-grade platforms across fintech and healthtech verticals.",
      "Led a 6-person engineering team, driving code standards, PR reviews, and sprint planning.",
      "Reduced API response times by 68% through caching strategies and query optimisation.",
      "Introduced a design-system approach that cut frontend dev time by 40%.",
    ],
  },
  {
    role: "Mobile Developer",
    company: "Fintech Startup",
    period: "2020 — 2022",
    location: "Abuja, Nigeria",
    bullets: [
      "Built and shipped a React Native mobile banking app to 50,000+ users on iOS and Android.",
      "Implemented biometric authentication and end-to-end encryption for financial data.",
      "Collaborated with designers to create micro-interactions that raised app rating to 4.8/5.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2019 — 2020",
    location: "Lagos, Nigeria",
    bullets: [
      "Delivered 12+ client websites with React, achieving Lighthouse scores above 95.",
      "Pioneered adoption of TypeScript across the frontend team.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Software House",
    period: "2018 — 2019",
    location: "Lagos, Nigeria",
    bullets: [
      "Built internal tooling and admin dashboards using React and Node.js.",
      "Contributed to backend API development and database schema design.",
    ],
  },
];
