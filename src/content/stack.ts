import type { Asteroid, Chip, LoadoutGroup } from './types';

// The "Loadout" panel in About. Violet marks the backend side.
export const loadout: LoadoutGroup[] = [
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
  },
  {
    label: 'Backend',
    tone: 'violet',
    items: [
      'FastAPI',
      'Node.js / Express',
      'PostgreSQL',
      'Prisma',
      'Socket.io',
    ],
  },
  { label: 'Mobile', tone: 'plain', items: ['Flutter'] },
  {
    label: 'Infra',
    tone: 'plain',
    items: ['Docker', 'Vercel', 'Sentry', 'MinIO'],
  },
];

// The phone loadout from the MainMobile board: one sweep, shorter names.
export const loadoutShort: Chip[] = [
  { text: 'React', tone: 'plain' },
  { text: 'Next.js', tone: 'plain' },
  { text: 'TypeScript', tone: 'plain' },
  { text: 'Tailwind', tone: 'plain' },
  { text: 'Zustand', tone: 'plain' },
  { text: 'FastAPI', tone: 'violet' },
  { text: 'Node / Express', tone: 'violet' },
  { text: 'PostgreSQL', tone: 'violet' },
  { text: 'Prisma', tone: 'violet' },
  { text: 'Socket.io', tone: 'violet' },
  { text: 'Flutter', tone: 'plain' },
  { text: 'Docker', tone: 'plain' },
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
