import type { Profile } from './types';

export const profile: Profile = {
  fullName: 'Mohammad Zobair Hosain Fahim',
  shortName: 'Fahim',
  callsign: '0xzhosain',
  role: 'Software Engineer',
  intro:
    'Full-stack software engineer with 3 years of production experience in React, Next.js, TypeScript and Flutter, plus backend projects in FastAPI, Express and PostgreSQL. Focused on',
  focus: ['backend systems', 'AI engineering'],
  availability: 'Open to remote roles',
  availabilityShort: 'Open to remote',
  contactBlurb:
    'Open to remote roles in backend, full-stack and AI engineering. Based in Chittagong, Bangladesh (UTC+6).',
  contactBlurbShort:
    'Open to remote roles in backend, full-stack and AI engineering. Chittagong, Bangladesh (UTC+6).',
  city: 'Chittagong, BD',
  timezone: 'UTC+6',
  baseLine: 'Chittagong, BD (UTC+6)',
  // **word** marks a highlighted keyword (rendered in cyan, medium weight).
  // The same text shows on every screen size.
  about: [
    'I am a **full-stack engineer** with three years of production work on Lentho.com, a multi-tenant platform used by 5,000+ people daily. I shipped features across its storefront, restaurant panel and back office, and was most drawn to the layer underneath: APIs, authentication and real-time systems.',
    'Currently, I am leading the website rebuild for **Risk & Safety Solutions Melbourne, Australia**, from design to delivery: I designed the site, I manage the project, and I lead its WordPress development with a two-developer team. Alongside this, I am deepening my expertise in **backend systems** and **AI engineering**. I ramp up on unfamiliar tools and codebases quickly, so I can go wherever the problem leads.',
  ],
  // Only numbers Fahim can source (résumé, Lentho git history).
  telemetry: [
    {
      value: 15,
      suffix: '+',
      label: 'production features shipped',
      labelShort: 'production features',
    },
    { value: 5000, suffix: '+', label: 'daily active users' },
    {
      value: 3,
      suffix: ' yrs',
      label: 'shipping to production',
      labelShort: 'in production',
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
    place: 'CHITTAGONG, BANGLADESH',
    gpa: '3.21 / 4.00',
    // From the résumé: "Federated learning optimization using Laplacian
    // Smoothing SGD combined with FedNova, evaluated on CIFAR-10."
    thesis: {
      title: 'Federated learning optimization',
      summary:
        'Optimizing federated learning by combining Laplacian Smoothing SGD with FedNova, evaluated on the CIFAR-10 dataset.',
      tags: [
        'Federated learning',
        'Laplacian Smoothing SGD',
        'FedNova',
        'CIFAR-10',
      ],
    },
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
