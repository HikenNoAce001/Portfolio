import type { Project } from './types';

// One record per project. Projects with a `mission` block appear on the site
// and in the terminal; the rest are kept as data only. Missions are Fahim's
// own projects: Lentho is professional work for WOS Germany, so it lives in
// the Flight log (experience.ts), not here.
export const projects: Project[] = [
  {
    slug: 'lentho',
    name: 'Lentho',
    tagline:
      'Multi-tenant food ordering, deals and cashback platform for European users',
    live: true,
    source: 'proprietary',
    links: {
      live: 'https://lentho.com/de-DE',
    },
    summary:
      'Production storefront for the LENTHO platform, a multi-tenant food ordering system serving both customers and restaurant operators. Built with Next.js App Router and internationalized for German and English markets, with a dedicated business dashboard for restaurant management alongside the customer-facing ordering experience.',
    // Fahim's own work (his Lentho git history), not platform features.
    highlights: [
      'German / English localization across the storefront, restaurant panel and back office',
      'Back office upgraded from Next.js 14 to 16 and React 19, with leaner data fetching',
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
    // No screenshots: Lentho is professional work, so its screens stay off the
    // site (Fahim removed public/project-lentho, Nov 2026).
    images: [],
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
      id: 'MSN-01',
      dir: 'team-hub',
      aliases: ['team', 'teamhub'],
      status: 'live',
      tag: 'FULL-STACK',
      blurb:
        'Real-time, multi-tenant workspace where teams run goals, announcements and a drag-and-drop kanban of action items.',
      points: [
        'Live presence, drag-and-drop kanban',
        'Transactional audit log, JWT auth',
      ],
      // Checked against ~/Team_Hub (apps/api): 11 modules, 14 Prisma models,
      // sha256-hashed refresh tokens, express-rate-limit, Socket.io rooms,
      // audit(tx) inside each $transaction.
      features: [
        '11-module Express 5 API with Swagger docs and a 14-model Prisma schema',
        'JWT cookies with hashed refresh-token rotation, RBAC and rate limiting',
        'Socket.io presence and notifications, plus an audit log written in the same transaction as each change',
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
          'Real-time, multi-tenant team workspace: goals, announcements and a drag-and-drop kanban.',
        stack: ['Express 5', 'PostgreSQL', 'Prisma', 'Socket.io'],
        tone: 'violet',
      },
      termName: 'Team Hub',
      termBlurb:
        'Real-time, multi-tenant workspace for goals, announcements and action items.',
      termPoints: [
        '11-module Express 5 API, 14-model Prisma schema',
        'JWT cookies, hashed refresh rotation, RBAC',
        'Socket.io presence, transactional audit log',
      ],
    },
  },
  {
    slug: 'marketplace-workflow',
    name: 'Marketplace Workflow System',
    tagline: 'Project marketplace with role-based access and live bid updates',
    live: true,
    source: 'public',
    links: {
      live: 'https://marketplace-workflow-system.up.railway.app/',
      code: 'https://github.com/HikenNoAce001/marketplace-workflow-system',
    },
    summary:
      'Full-stack project marketplace with role-based access control, live bid updates (polled every 5 s), and ZIP deliverable management. Buyers post projects, solvers bid and deliver work, with atomic cascade operations ensuring data consistency throughout the workflow.',
    highlights: [
      'Role-based access (Admin / Buyer / Solver)',
      'Atomic bid acceptance with cascade state machine',
      'ZIP deliverables validated and stored in MinIO, downloaded through presigned URLs',
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
      id: 'MSN-02',
      dir: 'marketplace',
      aliases: ['market', 'marketplace-workflow'],
      status: 'live',
      tag: 'FULL-STACK',
      blurb:
        'Project marketplace where buyers post work and solvers bid, build and hand in ZIP deliverables for review.',
      points: [
        'Bid acceptance in one transaction',
        'Role guards, MinIO storage',
      ],
      // Checked against ~/project-workflow-system (backend/app): async SQLModel
      // + asyncpg + Alembic; accept_request rejects other bids, assigns the
      // solver and sets ASSIGNED in one commit; require_role guards; ZIPs are
      // validated and uploaded by the API, downloads use presigned URLs.
      features: [
        'Async FastAPI backend with SQLModel, asyncpg and Alembic migrations',
        'Accepting a bid rejects the others, assigns the solver and moves the project on in one transaction',
        'Role guards for admin, buyer and solver; validated ZIPs stored in MinIO with presigned downloads',
      ],
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
          'Buyers post projects, solvers bid and deliver ZIPs, all on an async FastAPI backend.',
        stack: ['FastAPI', 'PostgreSQL', 'MinIO', 'Docker'],
        tone: 'violet',
      },
      termName: 'Marketplace Workflow',
      termBlurb:
        'Project marketplace where buyers post work and solvers bid and deliver ZIPs.',
      termPoints: [
        'async FastAPI, SQLModel, asyncpg, Alembic',
        'bid acceptance in one transaction',
        'role guards; ZIPs in MinIO, presigned downloads',
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
      'Full-stack prescription management system with Medex database integration. Enables doctors to search medicines by generic or brand name and generate digital prescriptions, with cached search and optimized database queries.',
    highlights: [
      'Searchable medicine database',
      'Cached medicine search',
      'PDF prescription generation',
    ],
    stack: ['React.js', 'Node.js', 'MySQL', 'REST API'],
    images: [],
    mission: {
      id: 'MSN-03',
      dir: 'rx-generator',
      aliases: ['rx', 'prescription', 'digital-prescription'],
      status: 'private',
      tag: 'PERSONAL',
      blurb:
        'Prescription system for doctors with a searchable medicine database, cached search and PDF prescriptions.',
      points: ['Cached medicine search', 'PDF prescriptions'],
      chips: [
        { text: 'Node.js', tone: 'violet' },
        { text: 'MySQL', tone: 'violet' },
        { text: 'REST API', tone: 'violet' },
        { text: 'React', tone: 'plain' },
      ],
      phone: {
        name: 'Prescription Generator',
        blurb:
          'Searchable medicine database, cached search, PDF prescriptions.',
        stack: ['React', 'Node.js', 'MySQL'],
        tone: 'violet',
      },
      termName: 'Prescription Generator',
      termBlurb:
        'Prescription system for doctors with a searchable medicine database.',
      termPoints: ['cached medicine search', 'PDF prescriptions'],
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
      id: 'MSN-04',
      dir: 'urban-garden',
      aliases: ['garden'],
      status: 'design',
      tag: 'FIGMA',
      blurb:
        'Mobile plant-care app concept with AI-powered space analysis, camera-based scanning, personalised care plans and care tracking.',
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
