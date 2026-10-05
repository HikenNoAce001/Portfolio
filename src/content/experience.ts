import type { Role } from './types';

export const experience: Role[] = [
  {
    id: 'wos-germany',
    title: 'Software Engineer',
    org: 'The WOS Germany GmbH · Lentho.com',
    period: 'MAY 2023 — 2026',
    periodIso: '2023-05 → 2026',
    place: ['MÖNCHENGLADBACH, DE', 'REMOTE'],
    placeShort: 'REMOTE',
    highlights: [
      'Shipped 15+ production features for a multi-tenant SaaS used by 5,000+ people daily.',
      'Cut REST API response times by 40%.',
      'Built OTP authentication that lifted login success by 25%.',
      'Set code-review standards that reduced production bugs by 30%.',
    ],
    highlightsShort: [
      '15+ production features, 5,000+ daily users',
      'REST API response times cut by 40%',
      'OTP auth lifted login success by 25%',
      'Review standards cut prod bugs by 30%',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Zustand',
      'SWR',
      'Docker',
      'Sentry',
    ],
    terminal: {
      org: 'Software Engineer · The WOS Germany GmbH',
      lines: [
        'Lentho.com · Mönchengladbach, DE (remote)',
        '  ▸ 15+ production features, 5,000+ DAU',
        '  ▸ REST API response time −40%',
        '  ▸ OTP auth → login success +25%',
        '  ▸ review standards → prod bugs −30%',
      ],
    },
  },
  {
    id: 'diligite',
    title: 'Software Development Intern',
    org: 'Diligite Limited',
    period: 'OCT — NOV 2022',
    periodIso: '2022-10 → 2022-11',
    place: ['CHITTAGONG, BD'],
    placeShort: 'CHITTAGONG',
    highlights: [
      'Built 5+ React.js UI components, working in Git, Jira and Agile sprints.',
    ],
    highlightsShort: [
      'Built 5+ React.js UI components in Git, Jira and Agile sprints.',
    ],
    stack: [],
    terminal: {
      org: 'Software Dev Intern · Diligite Limited',
      lines: ['  ▸ 5+ React.js UI components · Git, Jira'],
    },
  },
];
