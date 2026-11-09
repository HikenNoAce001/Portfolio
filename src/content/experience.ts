import type { Role } from './types';

// Newest first: the flight log reads top-down from the current mission.
// Every number here has a source Fahim can name (see the résumé).
export const experience: Role[] = [
  {
    id: 'rssm',
    title: 'Project Lead & Web Developer',
    org: 'Risk & Safety Solutions Melbourne · Freelance',
    period: 'JUL 2026 – NOW',
    periodIso: '2026-07 → now',
    place: ['MELBOURNE, AUSTRALIA', 'REMOTE'],
    placeShort: 'REMOTE',
    current: true,
    highlights: [
      'Leading the website rebuild end to end, from design to the WordPress build, with a two-developer team.',
      'Set up a workflow where the developers build the base and an AI coding agent implements the pages.',
      'Structuring the site so non-technical staff can run all content after handover.',
    ],
    highlightsShort: [
      'Leading the rebuild from design to WordPress',
      'Devs build the base, an AI agent builds pages',
      'Built for non-technical editors',
    ],
    stack: ['WordPress', 'Figma', 'Claude Code'],
    terminal: {
      org: 'Project Lead & Web Dev (Freelance) · RSSM',
      aliases: ['risk', 'risk-safety'],
      lines: [
        'Risk & Safety Solutions Melbourne (remote)',
        '  ▸ leading the rebuild: design → WordPress, two devs',
        '  ▸ devs build the base, an AI agent builds pages',
        '  ▸ handover: non-technical staff run the content',
      ],
    },
  },
  {
    id: 'wos-germany',
    title: 'Software Engineer',
    org: 'The WOS Germany GmbH · Lentho.com',
    period: 'MAY 2023 – MAY 2026',
    periodIso: '2023-05 → 2026-05',
    place: ['MÖNCHENGLADBACH, GERMANY', 'REMOTE'],
    placeShort: 'REMOTE',
    link: { label: 'lentho.com', href: 'https://lentho.com/de-DE' },
    // Matches the résumé; the product work is backed by Fahim's commits
    // (author HikenNoAce001) in SMSGermany/4takeaway-storefront and
    // SMSGermany/4ta-backoffice: OTP resend 2025-07, retry-payment timeout
    // 2024-11, data-store pages and filtered navigation 2025-09/10, finance and
    // subscriber date ranges 2025-06/07, dynamic imports 2025-02, images under
    // 1 MB 2025-04, FAQ 2025-04, vendor schema 2025-07.
    highlights: [
      'Shipped 15+ production features for Lentho.com, a multi-tenant food ordering, deals and cashback platform used by 5,000+ people daily, across its storefront, restaurant panel, back office and Flutter app.',
      'Built German/English localization across all three web apps with next-intl, including translated Zod validation errors in checkout, login and registration.',
      'Built the OTP verification form with resend, a timed retry-payment flow for failed checkouts, and the vendor and FAQ pages.',
      'Built back-office data-store pages with permission-based navigation, and date-range filters for finance and subscriber reports.',
      'Improved performance: restaurant pages and their SEO metadata share one API request, heavy routes load through dynamic imports, and large images are compressed.',
      'Upgraded the back office from Next.js 14 to 16 and React 19.',
      'Set up code-review standards and QA checks that reduced production bugs by 30%.',
    ],
    highlightsShort: [
      '15+ production features, 5,000+ daily users',
      'DE/EN localization across three apps',
      'OTP verification and a retry-payment flow',
      'Back-office data stores and finance reports',
      'Shared fetches, dynamic imports, lighter images',
      'Next.js 14 → 16 and React 19 upgrade',
      'Review standards cut prod bugs by 30%',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Zustand',
      'SWR',
      'Zod',
      'next-intl',
      'Radix UI',
      'Docker',
      'Sentry',
      'Flutter',
    ],
    terminal: {
      org: 'Software Engineer · The WOS Germany GmbH',
      aliases: ['wos', 'lentho'],
      lines: [
        'Lentho.com · Mönchengladbach, Germany (remote)',
        '  ▸ 15+ production features, 5,000+ DAU',
        '  ▸ DE/EN localization across three apps',
        '  ▸ OTP verification, timed retry payment',
        '  ▸ back office: data stores, finance reports',
        '  ▸ shared fetches, dynamic imports, lighter images',
        '  ▸ back office: Next.js 14 → 16, React 19',
        '  ▸ review standards → prod bugs −30%',
      ],
    },
  },
];
