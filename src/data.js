export const personal = {
  name: "Michael Philip",
  title: "Backend Software Engineer",
  subtitle: "Java · Spring Boot · Python · Node.js · React · Next.js · Vue · PostgreSQL",
  tagline: "Trained at Semicolon Africa · Building secure, scalable REST APIs and real-time backend systems — plus the React, Next.js and Vue frontends that consume them. Based in Nigeria, building for the world.",
  email: "philipmichaelonyekachi@gmail.com",
  phone: "+234 810 117 7267",
  whatsapp: "https://wa.me/2348101177267",
  portfolio: "https://michael-philip-portfolio.vercel.app",
  github: "https://github.com/Meet-hybrid",
  twitter: "https://x.com/Meethybrid_",
  location: "Nigeria · Remote",
  available: "Open to Remote & International Backend Engineering Roles",
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", color: "#f89820", bg: "#2d1f00" },
      { name: "Python", color: "#3776ab", bg: "#001a2d" },
      { name: "JavaScript", color: "#f7df1e", bg: "#2d2a00" },
      { name: "TypeScript", color: "#3178c6", bg: "#001a38" },
      { name: "SQL", color: "#e38c00", bg: "#2d2000" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", color: "#6db33f", bg: "#112200" },
      { name: "Spring Security", color: "#6db33f", bg: "#112200" },
      { name: "FastAPI", color: "#05998b", bg: "#00201d" },
      { name: "Django", color: "#a8d5b5", bg: "#092e20" },
      { name: "Node.js", color: "#68a063", bg: "#0d2010" },
      { name: "Express", color: "#dddddd", bg: "#1a1a1a" },
      { name: "Socket.IO", color: "#ffffff", bg: "#111111" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", color: "#61dafb", bg: "#00222e" },
      { name: "Next.js", color: "#ffffff", bg: "#111111" },
      { name: "Vue 3", color: "#42b883", bg: "#0c241a" },
      { name: "Tailwind CSS", color: "#38bdf8", bg: "#00202e" },
      { name: "Pinia", color: "#ffd85c", bg: "#2d2500" },
    ],
  },
  {
    category: "Databases & Caching",
    items: [
      { name: "PostgreSQL", color: "#74a9d8", bg: "#001525" },
      { name: "MySQL", color: "#4479a1", bg: "#001525" },
      { name: "MongoDB", color: "#4db33d", bg: "#0d2200" },
      { name: "Redis", color: "#ff6b6b", bg: "#2d0600" },
      { name: "Supabase", color: "#3ecf8e", bg: "#00251a" },
      { name: "Firebase", color: "#ffca28", bg: "#2d2200" },
    ],
  },
  {
    category: "Testing & DevOps",
    items: [
      { name: "JUnit", color: "#c9934a", bg: "#2a1d05" },
      { name: "Pytest", color: "#6bcebb", bg: "#062622" },
      { name: "Docker", color: "#0db7ed", bg: "#00232e" },
      { name: "GitHub Actions", color: "#5b8dee", bg: "#001a3a" },
      { name: "Postman", color: "#ff6c37", bg: "#2d1000" },
      { name: "Git", color: "#f05032", bg: "#2d0e00" },
    ],
  },
];

export const projects = [
  {
    title: "Point of Sale (POS) System",
    year: "2026",
    description: "Production POS web app in Vue 3 + TypeScript with a fully unit-tested Pinia cart store. Offline-first PWA: localStorage cart persistence, double-charge prevention, receipt generation, and scanner input — deployed live on Vercel.",
    tech: ["TypeScript", "Vue 3", "Pinia", "Vitest", "PWA"],
    github: "https://github.com/Meet-hybrid/pos-system",
    live: "https://pos-system-nine-coral.vercel.app/",
    demoNote: "Try the scanner with test barcodes: 111111 · 222222 · 333333 · 444444 · 555555",
  },
  {
    title: "Eventery — Real-Time Event Platform",
    year: "2026",
    description: "Express + Socket.IO backend for a multi-role event ecosystem (planners, guests, vendors, super-admins): room-based real-time ordering, MongoDB domain modeling, Redis caching, BullMQ queues, Paystack payments, and Google OAuth + JWT.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.IO", "Redis", "BullMQ"],
    live: "https://www.even3ry.com/",
    clientProject: true,
  },
  {
    title: "Equipment Rental Marketplace",
    year: "2026 · Ongoing",
    description: "Spring Boot backend MVP for a peer-to-peer equipment rental marketplace: KYC-verified accounts, listings with admin approval, location-based search, and a full rental transaction core — bookings, payments, deposits, escrow, refunds, and payouts.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "WebSockets", "Escrow"],
    comingSoon: true,
  },
  {
    title: "MeethybridHub — Multi-Tenant E-Commerce SaaS",
    year: "2025 – Present",
    description: "Shopify-style platform where every business gets its own branded storefront: row-level store isolation, tenant resolution via subdomain/custom domains, JWT auth with refresh rotation and revocation, installment payments, Redis caching, and an enforced 80%+ test-coverage CI gate. Ships with a Next.js 15 storefront and a React merchant dashboard.",
    tech: ["Java", "Spring Boot 3", "PostgreSQL", "Next.js 15", "React", "Tailwind CSS"],
    github: "https://github.com/Meet-hybrid/meethybridhub",
  },
  {
    title: "Bizora — AI Business Management Platform",
    year: "2025 – Present",
    description: "FastAPI REST API with Clean Architecture for inventory, sales, expenses, installment payments, and AI-driven analytics — JWT + RBAC, Alembic migrations on MySQL, async LLM operations, and a Pytest/httpx suite covering contracts and edge cases.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "Pytest"],
    github: "https://github.com/Meet-hybrid/Bizora",
  },
  {
    title: "Nara — Personal Finance Platform",
    year: "2025",
    description: "Django REST Framework backend for budgeting: atomic transactions across all writes, JWT with refresh rotation and blacklisting, normalized PostgreSQL schemas with strategic indexing, Redis-cached reporting, Docker, and a full Pytest suite.",
    tech: ["Python", "Django", "DRF", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/Meet-hybrid/Nara-capstone-project",
  },
];

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "Semicolon Africa",
    location: "Lagos, Nigeria",
    date: "2026 – Present",
    bullets: [
      "Applying backend and full-stack skills on real-world projects using Java, Spring Boot, Node.js, and Python",
      "Collaborating with peers and mentors using agile methodologies and code reviews",
      "Building with clean architecture principles across frontend and backend systems",
    ],
  },
  {
    role: "Retail Developer",
    company: "MTN Nigeria",
    location: "Remote & Onsite",
    date: "2024 – 2025",
    bullets: [
      "Developed and managed retail channels to increase MTN product penetration",
      "Supported retailers with onboarding, training, and digital tools for sales optimisation",
      "Analysed market trends and customer feedback to refine retail strategies",
      "Collaborated with trade partners to enhance brand visibility and customer experience",
    ],
  },
  {
    role: "Trade Development Representative",
    company: "SAUKI LTD",
    location: "Kaduna, Nigeria",
    date: "Jan 2021 – Feb 2022",
    bullets: [
      "Promoted MTN products and services including mobile plans and MobileMoney",
      "Managed agent growth, brand visibility, and customer engagement initiatives",
      "Resolved customer complaints and ensured sustained agent activity",
    ],
  },
  {
    role: "Canvasser (OUTTERSPACE)",
    company: "MTN Nigeria",
    location: "Nigeria",
    date: "2021",
    bullets: [
      "Conducted direct marketing campaigns and app activations for MyMTNApp, Ayoba, and MOMO",
      "Collected customer feedback and coordinated market outreach activities",
    ],
  },
  {
    role: "Production Supervisor",
    company: "NigerianWizy Star Ltd",
    location: "Umuahia, Nigeria",
    date: "2020 – 2021",
    bullets: [
      "Oversaw table water production and PET bottle manufacturing operations",
      "Managed quality control processes and production scheduling",
    ],
  },
];

export const education = [
  {
    institution: "Semicolon Africa",
    degree: "Software Engineering Certificate",
    location: "Lagos, Nigeria",
    date: "2025 – 2026",
    note: "Currently on internship · Full-stack programme covering React, Java, Node.js, and Agile",
  },
  {
    institution: "Michael Okpara University of Agriculture",
    degree: "B.Sc. Business Education – Second Class Upper",
    location: "Umudike, Nigeria",
    date: "2015 – 2020",
    note: null,
  },
  {
    institution: "Amazing Strides International School",
    degree: "Senior Secondary School Certificate (WASSCE)",
    location: "Aba, Nigeria",
    date: "2008 – 2014",
    note: null,
  },
];

export const certifications = [
  { text: "Software Engineering Certificate — Semicolon Africa, 2026" },
  { text: "Certificate of National Service (NYSC) — 2023" },
  { text: "B.Sc. Business Education — Michael Okpara University, 2021" },
  { text: "ICT Competence Certificate — 2019" },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Igbo", level: "Native" },
  { name: "Hausa", level: "Conversational" },
];
