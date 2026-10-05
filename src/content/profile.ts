import type { Profile } from './types';

export const profile: Profile = {
  fullName: 'Mohammad Zobair Hosain Fahim',
  shortName: 'Fahim',
  callsign: '0xzhosain',
  role: 'Software Engineer',
  intro:
    'Software engineer with 3 years shipping production web apps — React, Next.js and TypeScript up front, FastAPI and PostgreSQL behind it. Now climbing toward',
  focus: ['backend systems.', 'AI engineering.'],
  availability: 'Open to remote roles',
  availabilityShort: 'Open to remote',
  contactBlurb:
    'Open to remote roles in backend, full-stack and AI engineering. Based in Chittagong, Bangladesh (UTC+6).',
  contactBlurbShort:
    'Open to remote roles in backend, full-stack and AI engineering. Chittagong, Bangladesh (UTC+6).',
  city: 'Chittagong, BD',
  timezone: 'UTC+6',
  baseLine: 'Chittagong, BD (UTC+6)',
  about: [
    'For three years I built Lentho.com — a multi-tenant platform for European users spanning food delivery, deals and cashback. I shipped features end to end, and kept getting pulled toward the other side of the wire: shaving API latency, hardening auth, wiring real-time updates.',
    'That pull is now the plan: I’m going deeper into backend systems and AI engineering. I care more about the problem than the framework — Go, Rust, or whatever the job needs.',
  ],
  aboutShort: [
    'For three years I built Lentho.com — a multi-tenant platform for European users spanning food delivery, deals and cashback — and kept getting pulled toward the other side of the wire: API latency, auth, real-time sync.',
    'Now I’m going deeper into backend systems and AI engineering.',
  ],
  // Numbers from the résumé (WOS Germany / Lentho.com).
  telemetry: [
    {
      value: 15,
      suffix: '+',
      label: 'production features shipped',
      labelShort: 'production features',
    },
    { value: 5000, suffix: '+', label: 'daily active users' },
    {
      value: 40,
      prefix: '−',
      suffix: '%',
      label: 'REST API response time',
      labelShort: 'API response time',
      accent: true,
    },
    {
      value: 30,
      prefix: '−',
      suffix: '%',
      label: 'production bugs',
      accent: true,
    },
  ],
  education: {
    school: 'Chittagong University of Engineering and Technology (CUET)',
    schoolShort: 'CUET',
    degree: 'B.Sc. Computer Science & Engineering',
    degreeShort: 'B.Sc. CSE',
    graduated: 'JUL 2023',
    graduatedIso: '2023-07',
  },
  email: 'zobairf03@gmail.com',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/HikenNoAce001',
      short: 'github.com/HikenNoAce001',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/fahim77108/',
      short: 'linkedin.com/in/fahim77108',
    },
  ],
  resumeUrl: '/resume.pdf',
};
