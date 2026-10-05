import type { Project } from './types';

// One record per project. Projects with a `mission` block appear on the site
// and in the terminal; the rest (the portfolio itself) are kept as data only.
export const projects: Project[] = [
  {
    slug: 'lentho',
    name: 'Lentho',
    tagline: 'Multi-tenant food ordering & restaurant management platform',
    live: true,
    source: 'proprietary',
    links: {
      live: 'https://lentho.com/de-DE',
    },
    summary:
      'Production storefront for the LENTHO platform — a multi-tenant food ordering system serving both customers and restaurant operators. Built with Next.js App Router and internationalized for German and English markets, with a dedicated business dashboard for restaurant management alongside the customer-facing ordering experience.',
    highlights: [
      'Multi-locale support (DE/EN) via next-intl',
      'Separate customer and restaurant dashboards',
      'Sentry error monitoring in production',
      'Firebase push messaging integration',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'SWR',
      'React Hook Form',
      'Zod',
      'Radix UI',
      'Docker',
    ],
    images: [
      {
        src: '/project-lentho/storefront.webp',
        alt: 'LENTHO storefront',
      },
      {
        src: '/project-lentho/storefront-detail.webp',
        alt: 'LENTHO storefront detail',
      },
      {
        src: '/project-lentho/dashboard.webp',
        alt: 'LENTHO dashboard',
      },
      {
        src: '/project-lentho/dashboard-detail.webp',
        alt: 'LENTHO dashboard detail',
      },
    ],
    mission: {
      id: 'MSN-01',
      dir: 'lentho',
      aliases: [],
      status: 'live',
      tag: 'PROFESSIONAL',
      blurb:
        'Multi-tenant food ordering and restaurant management platform for European users.',
      points: [
        'German / English locales and separate dashboards',
        'Sentry monitoring, Firebase messaging',
      ],
      chips: [
        { text: 'Next.js', tone: 'plain' },
        { text: 'TypeScript', tone: 'plain' },
        { text: 'Tailwind', tone: 'plain' },
        { text: 'Zustand', tone: 'plain' },
        { text: 'SWR', tone: 'plain' },
        { text: 'Zod', tone: 'plain' },
        { text: 'Radix UI', tone: 'plain' },
        { text: 'Docker', tone: 'plain' },
      ],
      phone: {
        blurb:
          'Multi-tenant food ordering and restaurant management platform for European users. DE/EN locales, separate dashboards, Sentry, Firebase messaging.',
        stack: ['Next.js', 'TypeScript', 'Zustand', 'Zod', 'Docker'],
        tone: 'plain',
      },
      liveLabel: 'lentho.com',
      termName: 'Lentho',
      termBlurb:
        'Multi-tenant food ordering & restaurant management platform for European users.',
      termPoints: [
        'DE/EN locales, separate dashboards',
        'Sentry monitoring, Firebase messaging',
      ],
    },
  },
  {
    slug: 'team-hub',
    name: 'Team Hub',
    tagline: 'Real-time collaborative team workspace',
    live: true,
    source: 'public',
    links: {
      live: 'https://teamhub-pulse.up.railway.app',
      code: 'https://github.com/HikenNoAce001/Collaborative-Team-Hub',
    },
    summary:
      'Multi-tenant collaborative workspace where teams manage announcements, goals, action items, and analytics in real time. Built as a Turborepo monorepo with an Express 5 API and a Next.js 16 front end, it features live presence, a drag-and-drop kanban, rich-text announcements, and an immutable audit log written transactionally with every mutation.',
    highlights: [
      'Real-time sync via Socket.io workspace rooms with live presence dots',
      'Optimistic UI on every mutation- kanban drag, reactions, comments with snapshot rollback',
      'Append-only audit log written inside the same DB transaction as each mutation',
      'JWT in httpOnly cookies with hashed refresh-token rotation, role-based access control, and rate limiting',
      '11-module Express REST API with Swagger docs and a 14-model PostgreSQL schema (Prisma)',
      'Zod validation shared across the API and the frontend',
      'Tiptap rich-text announcements with @mentions, reactions, and comments',
      'Analytics dashboard with Recharts charts and CSV export',
    ],
    stack: [
      'Next.js',
      'React',
      'Express 5',
      'Prisma',
      'PostgreSQL',
      'Socket.io',
      'TanStack Query',
      'Zustand',
      'Tailwind CSS',
      'Turborepo',
      'Zod',
      'Swagger',
    ],
    images: [
      {
        src: '/project-team-hub/action-items-kanban-board.webp',
        alt: 'Action items kanban board',
      },
      {
        src: '/project-team-hub/announcements-feed.webp',
        alt: 'Announcements feed',
      },
      {
        src: '/project-team-hub/workspaces-list.webp',
        alt: 'Workspaces list',
      },
      {
        src: '/project-team-hub/landing-page.webp',
        alt: 'Team Hub landing page',
      },
      {
        src: '/project-team-hub/landing-page-light-mode.webp',
        alt: 'Team Hub landing page (light mode)',
      },
    ],
    mission: {
      id: 'MSN-02',
      dir: 'team-hub',
      aliases: ['team', 'teamhub'],
      status: 'live',
      tag: 'FULL-STACK',
      blurb:
        'Real-time collaborative workspace for announcements, goals and action items — live presence, drag-and-drop kanban, immutable audit log, JWT auth.',
      points: [
        'Live presence, drag-and-drop kanban',
        'Immutable audit log, JWT auth',
      ],
      chips: [
        { text: 'Express 5', tone: 'violet' },
        { text: 'PostgreSQL', tone: 'violet' },
        { text: 'Prisma', tone: 'violet' },
        { text: 'Socket.io', tone: 'violet' },
        { text: 'Next.js 16', tone: 'plain' },
        { text: 'Turborepo', tone: 'plain' },
      ],
      phone: {
        blurb:
          'Real-time collaborative workspace — live presence, kanban, audit log, JWT auth.',
        stack: ['Express 5', 'PostgreSQL', 'Prisma', 'Socket.io'],
        tone: 'violet',
      },
      termName: 'Team Hub',
      termBlurb:
        'Real-time collaborative workspace for announcements, goals and action items.',
      termPoints: [
        'live presence, drag-and-drop kanban',
        'immutable audit log, JWT auth',
      ],
    },
  },
  {
    slug: 'marketplace-workflow',
    name: 'Marketplace Workflow System',
    tagline: 'Project marketplace with role-based access and real-time bidding',
    live: true,
    source: 'public',
    links: {
      live: 'https://marketplace-workflow-system.up.railway.app/',
      code: 'https://github.com/HikenNoAce001/marketplace-workflow-system',
    },
    summary:
      'Full-stack project marketplace with role-based access control, real-time bidding, and ZIP deliverable management. Buyers post projects, solvers bid and deliver work, with atomic cascade operations ensuring data consistency throughout the workflow.',
    highlights: [
      'Role-based access (Admin / Buyer / Solver)',
      'Atomic bid acceptance with cascade state machine',
      'Presigned MinIO URLs — backend never proxies files',
      'JWT in memory + httpOnly refresh cookie (XSS-safe)',
      'Docker monorepo (FastAPI, PostgreSQL, Next.js) built under a tight production deadline',
      'Requirements and technical specs written before coding, enabling clear task breakdown and parallel development',
    ],
    stack: [
      'FastAPI',
      'Next.js',
      'PostgreSQL',
      'MinIO',
      'Docker',
      'TypeScript',
      'TanStack Query',
    ],
    images: [
      {
        src: '/project-market-workflow/admin-panel.webp',
        alt: 'Admin panel',
      },
      {
        src: '/project-market-workflow/admin-panel-detail.webp',
        alt: 'Admin panel detail',
      },
      {
        src: '/project-market-workflow/buyer-panel.webp',
        alt: 'Buyer panel',
      },
      {
        src: '/project-market-workflow/buyer-panel-detail.webp',
        alt: 'Buyer panel detail',
      },
      {
        src: '/project-market-workflow/solver-panel.webp',
        alt: 'Solver panel',
      },
    ],
    mission: {
      id: 'MSN-03',
      dir: 'marketplace',
      aliases: ['market', 'marketplace-workflow'],
      status: 'live',
      tag: 'PERSONAL',
      blurb:
        'Role-based marketplace with bidding and ZIP deliverables — RBAC, atomic operations, presigned uploads, XSS-safe auth.',
      points: ['RBAC, atomic operations', 'Presigned uploads, XSS-safe auth'],
      chips: [
        { text: 'FastAPI', tone: 'violet' },
        { text: 'PostgreSQL', tone: 'violet' },
        { text: 'MinIO', tone: 'violet' },
        { text: 'Next.js', tone: 'plain' },
        { text: 'Docker', tone: 'plain' },
      ],
      phone: {
        name: 'Marketplace Workflow',
        blurb:
          'Role-based marketplace with bidding and ZIP deliverables — RBAC, presigned uploads.',
        stack: ['FastAPI', 'PostgreSQL', 'MinIO', 'Docker'],
        tone: 'violet',
      },
      termName: 'Marketplace Workflow',
      termBlurb: 'Role-based marketplace with bidding and ZIP deliverables.',
      termPoints: [
        'RBAC, atomic operations',
        'presigned uploads, XSS-safe auth',
      ],
    },
  },
  {
    slug: 'digital-prescription',
    name: 'Digital Prescription Generator',
    tagline: 'Prescription system with a searchable medicine database',
    live: false,
    source: 'proprietary',
    links: {},
    summary:
      'Full-stack prescription management system with Medex database integration. Enables doctors to search 10,000+ medicines by generic or brand name and generate digital prescriptions with optimized caching and database queries.',
    highlights: [
      '10,000+ searchable medicines',
      'Sub-100ms medication search response',
      'Efficient caching mechanisms',
      'PDF prescription generation',
    ],
    stack: ['React.js', 'Node.js', 'MySQL', 'REST API'],
    images: [],
    mission: {
      id: 'MSN-04',
      dir: 'rx-generator',
      aliases: ['rx', 'prescription', 'digital-prescription'],
      status: 'private',
      tag: 'PERSONAL',
      blurb:
        'Prescription system for doctors with 10,000+ searchable medicines — sub-100 ms search with caching, PDF generation.',
      points: ['Sub-100 ms search with caching', 'PDF generation'],
      chips: [
        { text: 'Node.js', tone: 'violet' },
        { text: 'MySQL', tone: 'violet' },
        { text: 'REST API', tone: 'violet' },
        { text: 'React', tone: 'plain' },
      ],
      phone: {
        name: 'Prescription Generator',
        blurb:
          '10,000+ searchable medicines, sub-100 ms search, PDF generation.',
        stack: ['React', 'Node.js', 'MySQL'],
        tone: 'violet',
      },
      termName: 'Prescription Generator',
      termBlurb:
        'Prescription system for doctors with 10,000+ searchable medicines.',
      termPoints: ['sub-100 ms search with caching', 'PDF generation'],
    },
  },
  {
    slug: 'portfolio',
    name: 'Personal Portfolio',
    tagline: 'Portfolio site built with Next.js and Tailwind CSS',
    live: true,
    source: 'public',
    links: {
      live: 'https://0xzhosain.com',
      code: 'https://github.com/HikenNoAce001/portfolio',
    },
    summary:
      'Responsive portfolio website built with Next.js and Tailwind CSS, achieving 95+ Lighthouse performance score. Features modern UI/UX design patterns, dark mode support, smooth animations, and interactive mouse-tracking effects.',
    highlights: [
      '95+ Lighthouse performance score',
      'SEO optimized',
      'Interactive mouse-tracking gradient',
      'Fully responsive design',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    images: [
      {
        src: '/project-portfolio/home.webp',
        alt: 'Portfolio home',
      },
      {
        src: '/project-portfolio/about.webp',
        alt: 'Portfolio about',
      },
    ],
  },
  {
    slug: 'urban-garden',
    name: 'Urban Garden Companion',
    tagline: 'Mobile plant care app for urban gardeners',
    live: false,
    source: 'public',
    links: {
      design:
        'https://www.figma.com/design/zQKafZT7XX7wupYDLlBNuN/Urban-Garden-Companion-App?node-id=0-1&t=xA4VmMVfJcnQTYgi-1',
    },
    summary:
      'A mobile plant care app that helps urban gardeners discover, track, and care for indoor and outdoor plants. It uses camera-based space scanning to analyze sunlight, temperature, and humidity, then recommends suitable plants. Designed for city dwellers and beginner plant parents who want personalized care reminders and plant suggestions.',
    highlights: [
      'AI-powered space analysis driving personalized plant recommendations',
      'Low-friction onboarding: preferences → scan → first plant added',
      'Cohesive green-toned design system with reusable care detail cards',
      'Bottom tab navigation across Home, My Garden, Scan, and Profile',
    ],
    stack: ['Figma', 'Auto Layout', 'Prototyping', 'iOS Design Guidelines'],
    images: [
      {
        src: '/project-urban-garden/sign-up-screen.webp',
        alt: 'Sign up screen',
      },
      {
        src: '/project-urban-garden/plant-preferences.webp',
        alt: 'Plant preferences',
      },
      {
        src: '/project-urban-garden/space-scan.webp',
        alt: 'Space scan',
      },
      {
        src: '/project-urban-garden/home-screen.webp',
        alt: 'Home screen',
      },
      {
        src: '/project-urban-garden/plant-details.webp',
        alt: 'Plant details',
      },
    ],
    mission: {
      id: 'MSN-05',
      dir: 'urban-garden',
      aliases: ['garden'],
      status: 'design',
      tag: 'FIGMA',
      blurb:
        'Mobile plant-care app concept with AI-powered space analysis — camera-based scanning, personalised care plans, care tracking.',
      points: ['Camera-based scanning', 'Personalised care plans, tracking'],
      chips: [
        { text: 'Figma', tone: 'plain' },
        { text: 'Auto Layout', tone: 'plain' },
        { text: 'Prototyping', tone: 'plain' },
      ],
      phone: {
        blurb: 'Plant-care app concept with AI-powered space analysis.',
        stack: ['Figma', 'Prototyping'],
        tone: 'plain',
      },
      termName: 'Urban Garden Companion',
      termBlurb:
        'Mobile plant-care app concept with AI-powered space analysis.',
      termPoints: [
        'camera-based scanning',
        'personalised care plans, tracking',
      ],
    },
  },
];
