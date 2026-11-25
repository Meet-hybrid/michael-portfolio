export const personal = {
  name: "Michael Philip",
  title: "Full-Stack Software Engineer",
  subtitle: "TypeScript · Vue 3 · React · Next.js · Java · Spring Boot · Python · FastAPI · Node.js · PostgreSQL · MongoDB",
  tagline: "I build products end to end: Vue 3, React and Next.js frontends in TypeScript on secure REST and real-time APIs in Java/Spring Boot, Python/FastAPI and Django, and Node.js. Creator of Soroban Forge, an open-source Rust smart-contract library in the Stellar Wave Program. Based in Nigeria, building for the world.",
  email: "philipmichaelonyekachi@gmail.com",
  phone: "+234 810 117 7267",
  whatsapp: "https://wa.me/2348101177267",
  portfolio: "https://michael-philip-portfolio.vercel.app",
  github: "https://github.com/Meet-hybrid",
  twitter: "https://x.com/Meethybrid_",
  location: "Nigeria · Remote / Open to Relocation",
  available: "Open to Remote & International Full-Stack Roles",
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", color: "#3178c6", bg: "#001a38" },
      { name: "JavaScript", color: "#f7df1e", bg: "#2d2a00" },
      { name: "Java", color: "#f89820", bg: "#2d1f00" },
      { name: "Python", color: "#3776ab", bg: "#001a2d" },
      { name: "SQL", color: "#e38c00", bg: "#2d2000" },
      { name: "Rust", color: "#dea584", bg: "#2d1a05" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Vue 3", color: "#42b883", bg: "#0c241a" },
      { name: "Pinia", color: "#ffd85c", bg: "#2d2500" },
      { name: "React", color: "#61dafb", bg: "#00222e" },
      { name: "Next.js", color: "#ffffff", bg: "#111111" },
      { name: "Tailwind CSS", color: "#38bdf8", bg: "#00202e" },
      { name: "PWA / Offline-First", color: "#5a0fc8", bg: "#170433" },
      { name: "HTML5", color: "#e34f26", bg: "#2d0e00" },
      { name: "CSS3", color: "#1572b6", bg: "#001a2d" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", color: "#6db33f", bg: "#112200" },
      { name: "Spring Security", color: "#6db33f", bg: "#112200" },
      { name: "JPA / Hibernate", color: "#bcae79", bg: "#2a2308" },
      { name: "Flyway", color: "#cc0202", bg: "#2d0000" },
      { name: "FastAPI", color: "#05998b", bg: "#00201d" },
      { name: "SQLAlchemy", color: "#d71f00", bg: "#2d0500" },
      { name: "Alembic", color: "#a8d5b5", bg: "#092e20" },
      { name: "Django REST Framework", color: "#a30000", bg: "#2d0000" },
      { name: "Node.js", color: "#68a063", bg: "#0d2010" },
      { name: "Express", color: "#dddddd", bg: "#1a1a1a" },
      { name: "Socket.IO", color: "#ffffff", bg: "#111111" },
      { name: "BullMQ", color: "#e11d48", bg: "#2d0310" },
    ],
  },
  {
    category: "Auth & APIs",
    items: [
      { name: "JWT", color: "#d63aff", bg: "#2a0033" },
      { name: "OAuth2 (Google)", color: "#4285f4", bg: "#001a3a" },
      { name: "RBAC", color: "#7c8cf8", bg: "#111a3a" },
      { name: "REST API Design", color: "#22c55e", bg: "#052e14" },
      { name: "Swagger / OpenAPI", color: "#85ea2d", bg: "#1e2d00" },
      { name: "Webhooks", color: "#f59e0b", bg: "#2d1c00" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", color: "#74a9d8", bg: "#001525" },
      { name: "MySQL", color: "#4479a1", bg: "#001525" },
      { name: "MongoDB", color: "#4db33d", bg: "#0d2200" },
      { name: "Redis", color: "#ff6b6b", bg: "#2d0600" },
      { name: "Supabase", color: "#3ecf8e", bg: "#00251a" },
      { name: "Firestore", color: "#ffca28", bg: "#2d2200" },
      { name: "Schema Design", color: "#06b6d4", bg: "#00222b" },
      { name: "Multi-Tenancy", color: "#ec4899", bg: "#2d0a1d" },
    ],
  },
  {
    category: "Testing & DevOps",
    items: [
      { name: "Vitest", color: "#fcc72b", bg: "#2d2600" },
      { name: "JUnit", color: "#c9934a", bg: "#2a1d05" },
      { name: "Mockito", color: "#78a641", bg: "#14220a" },
      { name: "Pytest", color: "#6bcebb", bg: "#062622" },
      { name: "httpx", color: "#009688", bg: "#00201d" },
      { name: "Postman", color: "#ff6c37", bg: "#2d1000" },
      { name: "Docker", color: "#0db7ed", bg: "#00232e" },
      { name: "Git", color: "#f05032", bg: "#2d0e00" },
      { name: "GitHub Actions", color: "#5b8dee", bg: "#001a3a" },
      { name: "Vercel", color: "#ffffff", bg: "#111111" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Soroban (Stellar) Smart Contracts", color: "#7d00ff", bg: "#1a0033" },
      { name: "Clean Architecture", color: "#22d3ee", bg: "#00222e" },
      { name: "SOLID", color: "#f59e0b", bg: "#2d1c00" },
      { name: "Repository Pattern", color: "#f472b6", bg: "#2d0a1d" },
      { name: "System Design", color: "#60a5fa", bg: "#001a33" },
    ],
  },
];

export const projects = [
  {
    title: "Point of Sale (POS) System — PWA",
    year: "2026 · Sole Engineer",
    description: "Production POS web app in Vue 3 + TypeScript with a Pinia cart store fully covered by Vitest unit tests, plus offline-first PWA installability, persisted carts, double-charge prevention, receipts, and scanner input.",
    tech: ["TypeScript", "Vue 3", "Pinia", "Vitest", "PWA", "Offline-First"],
    github: "https://github.com/Meet-hybrid/pos-system",
    live: "https://pos-system-nine-coral.vercel.app/",
    demoNote: "Try the scanner with test barcodes: 111111 · 222222 · 333333 · 444444 · 555555",
  },
  {
    title: "MeethybridHub — Multi-Tenant E-Commerce SaaS",
    year: "2025 – 2026 · Sole Backend Engineer",
    description: "Shopify-style multi-tenant platform: row-level store_id isolation, tenant resolution by subdomain, custom domain, or header, and installment payments as a first-class feature. Full identity stack — JWT refresh rotation with revocation, RBAC, rate-limited login, email verification, audit trail — covered by 150+ JUnit/Mockito tests on an 80%+ CI coverage floor. Ships with a Next.js storefront and merchant dashboard.",
    tech: ["Java", "Spring Boot 3", "Spring Security", "PostgreSQL", "Redis", "Flyway", "Docker", "JUnit", "Mockito", "GitHub Actions", "Next.js"],
    github: "https://github.com/Meet-hybrid/meethybridhub",
  },
  {
    title: "Eventery — Real-Time Event Service Platform",
    year: "2026",
    description: "Express + Socket.IO backend for planners, guests, vendors, and admins with real-time rooms, Paystack webhooks, Google OAuth + JWT role guards, Redis caching, and BullMQ jobs.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.IO", "Redis", "BullMQ", "JWT", "Google OAuth", "Paystack", "Cloudinary"],
    live: "https://www.even3ry.com/",
    clientProject: true,
  },
  {
    title: "Bizora — AI-Powered Business Management Platform",
    year: "2025 – 2026 · Sole Backend Engineer",
    description: "Clean Architecture FastAPI API for inventory, sales, expenses, installments, and async AI analytics, with JWT/RBAC scopes, Alembic migrations, and a Pytest/httpx suite.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "MySQL", "Pydantic", "Pytest", "httpx", "Clean Architecture"],
    github: "https://github.com/Meet-hybrid/Bizora",
  },
  {
    title: "Equipment Rental Marketplace — Backend MVP",
    year: "2026 · Client Contract",
    description: "Peer-to-peer rental backend: KYC accounts, approved listings, location search, overlap-free bookings, deposits, escrow, refunds, and owner payouts.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "WebSockets", "Escrow & Payouts"],
    comingSoon: true,
  },
  {
    title: "Nara — Personal Finance & Budgeting Platform",
    year: "2025 · Sole Backend Engineer",
    description: "DRF API for budgets, categories, savings goals, and recurring transactions, with atomic writes and JWT rotation with logout blacklisting.",
    tech: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis", "JWT", "Docker", "Pytest"],
    github: "https://github.com/Meet-hybrid/Nara-capstone-project",
  },
];

export const experience = [
  {
    role: "Full-Stack Software Engineer",
    company: "Meethybrid (Independent)",
    location: "Remote",
    date: "2025 – 2026",
    bullets: [
      "Designed, built, and shipped products end to end — data model, API, UI, and deployment — including a multi-tenant e-commerce SaaS, an AI business-management platform, and an offline-first POS PWA, with CI gates and Docker/Vercel deploys",
      "Delivered client work: the real-time Node.js backend for Eventery and the Spring Boot MVP for an equipment-rental marketplace",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Smallwaka",
    location: "Vue 3 · TypeScript",
    date: "2025 – 2026",
    bullets: [
      "Built the Vue 3 + TypeScript frontend for Smallwaka, a platform that makes going out for outdoor activities easier",
      "Developed the event and activity discovery experience and the booking flow that takes users from an activity to a confirmed booking",
    ],
  },
  {
    role: "Creator & Maintainer — Soroban Forge",
    company: "Drips Wave / Stellar Wave Program",
    location: "Remote",
    date: "2026 – Present",
    bullets: [
      "Created and develop an open-source library of six Soroban (Rust) smart-contract modules for the Stellar ecosystem — escrow, vesting, multi-signature wallet, DAO governance, subscription payments, and marketplace royalties",
      "Escrow uses SEP-41 token custody with property-tested invariants verified on Stellar testnet",
      "Accepted into the Drips Wave / Stellar Wave Program (Sep 2026); author scoped contributor issues, review pull requests, and enforce rustfmt, clippy, test, and security-audit checks in GitHub Actions",
    ],
  },
];

export const openSource = [
  {
    text: "Soroban Forge — creator and maintainer of a six-module Soroban (Rust) smart-contract library for the Stellar ecosystem; accepted into the Drips Wave / Stellar Wave Program (Sep 2026).",
    link: "https://github.com/Meet-hybrid/soroban-forge",
  },
];

export const education = [
  {
    institution: "Michael Okpara University of Agriculture",
    degree: "B.Sc. Business Education – Second Class Upper",
    location: "Umudike, Nigeria",
    date: "2015 – Sep 2021",
    note: "NYSC 2023",
  },
];

export const certifications = [
  { text: "Certificate of National Service (NYSC) — 2023" },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Igbo", level: "Native" },
  { name: "Hausa", level: "Conversational" },
];
