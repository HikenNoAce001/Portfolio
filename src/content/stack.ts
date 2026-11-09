import type { Asteroid, Chip, LoadoutGroup } from './types';

// The "Loadout" panel in About and the terminal's `stack` command, matching
// the résumé's skills. Fahim wants every tool he has used listed. Violet marks
// the backend side. On desktop, Mobile and Tools share a row.
export const loadout: LoadoutGroup[] = [
  {
    label: 'Languages',
    tone: 'plain',
    items: ['TypeScript', 'JavaScript', 'Python', 'HTML5', 'CSS3', 'C++'],
    term: {
      label: 'lang',
      rows: ['typescript · javascript · python · html5', 'css3 · c++'],
      compact: ['typescript · javascript', 'python · html5 · css3 · c++'],
    },
  },
  {
    label: 'Frontend',
    tone: 'plain',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'TanStack Query',
    ],
    term: {
      label: 'frontend',
      rows: [
        'react · next.js · typescript · tailwind',
        'zustand · tanstack-query',
      ],
      compact: [
        'react · next.js · typescript',
        'tailwind · zustand · tanstack',
      ],
    },
  },
  {
    label: 'Backend',
    tone: 'violet',
    items: [
      'FastAPI',
      'Node.js / Express',
      'PostgreSQL',
      'MySQL',
      'Prisma',
      'Socket.io',
      'REST APIs',
      'WebSockets',
      'JWT',
    ],
    term: {
      label: 'backend',
      rows: [
        'fastapi · node/express · postgresql',
        'mysql · prisma · socket.io',
        'rest apis · websockets · jwt',
      ],
      // narrow phones (360 px) wrap the first desktop row
      compact: [
        'fastapi · node/express',
        'postgresql · mysql · prisma',
        'socket.io · websockets',
        'rest apis · jwt',
      ],
    },
  },
  {
    label: 'Mobile',
    tone: 'plain',
    items: ['Flutter'],
    term: { label: 'mobile', rows: ['flutter'] },
  },
  {
    label: 'Tools',
    tone: 'plain',
    items: [
      'Docker',
      'Vercel',
      'Sentry',
      'MinIO',
      'WordPress',
      'Git',
      'CI/CD',
      'Unit testing',
      'Jira',
      'Swagger',
    ],
    term: {
      label: 'tools',
      rows: [
        'docker · vercel · sentry · minio · wordpress',
        'git · ci/cd · unit testing · jira · swagger',
      ],
      compact: [
        'docker · sentry · minio',
        'vercel · wordpress',
        'ci/cd · unit testing',
        'git · jira · swagger',
      ],
    },
  },
  {
    label: 'AI coding agents',
    tone: 'plain',
    items: ['Claude Code', 'OpenAI Codex', 'Gemini CLI'],
    term: {
      label: 'ai',
      rows: ['claude code · codex · gemini cli'],
      compact: ['claude code · codex · gemini'],
    },
  },
];

// The phone loadout: Languages, then one sweep with shorter names, then the
// AI coding agents, each under its own small label.
export const loadoutShort: { label?: string; items: Chip[] }[] = [
  {
    label: 'Languages',
    items: [
      { text: 'TypeScript', tone: 'plain' },
      { text: 'JavaScript', tone: 'plain' },
      { text: 'Python', tone: 'plain' },
      { text: 'HTML5', tone: 'plain' },
      { text: 'CSS3', tone: 'plain' },
      { text: 'C++', tone: 'plain' },
    ],
  },
  {
    label: 'Stack',
    items: [
      { text: 'React', tone: 'plain' },
      { text: 'Next.js', tone: 'plain' },
      { text: 'TypeScript', tone: 'plain' },
      { text: 'Tailwind', tone: 'plain' },
      { text: 'Zustand', tone: 'plain' },
      { text: 'TanStack Query', tone: 'plain' },
      { text: 'FastAPI', tone: 'violet' },
      { text: 'Node / Express', tone: 'violet' },
      { text: 'PostgreSQL', tone: 'violet' },
      { text: 'MySQL', tone: 'violet' },
      { text: 'Prisma', tone: 'violet' },
      { text: 'Socket.io', tone: 'violet' },
      { text: 'REST APIs', tone: 'violet' },
      { text: 'WebSockets', tone: 'violet' },
      { text: 'JWT', tone: 'violet' },
      { text: 'Flutter', tone: 'plain' },
      { text: 'Docker', tone: 'plain' },
      { text: 'MinIO', tone: 'plain' },
      { text: 'WordPress', tone: 'plain' },
      { text: 'Git', tone: 'plain' },
      { text: 'CI/CD', tone: 'plain' },
      { text: 'Unit testing', tone: 'plain' },
      { text: 'Jira', tone: 'plain' },
      { text: 'Swagger', tone: 'plain' },
    ],
  },
  {
    label: 'AI coding agents',
    items: [
      { text: 'Claude Code', tone: 'plain' },
      { text: 'Codex', tone: 'plain' },
      { text: 'Gemini CLI', tone: 'plain' },
    ],
  },
];

// The tech-logo meteors the astronaut jumps over in the hero, in loop order.
// `word` is the accessible name; the logo comes from components/space/TechLogo.
export const asteroids: Asteroid[] = [
  { word: 'React', logo: 'react', tone: 'plain' },
  { word: 'Next.js', logo: 'nextjs', tone: 'plain' },
  { word: 'TypeScript', logo: 'typescript', tone: 'plain' },
  { word: 'FastAPI', logo: 'fastapi', tone: 'violet' },
  { word: 'PostgreSQL', logo: 'postgresql', tone: 'violet' },
  { word: 'Docker', logo: 'docker', tone: 'plain' },
  { word: 'Socket.io', logo: 'socketio', tone: 'violet' },
  { word: 'Flutter', logo: 'flutter', tone: 'plain' },
];
