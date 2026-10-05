import { experience } from './experience';
import type { Profile } from './types';

export const profile: Profile = {
  fullName: 'Mohammad Zobair Hosain Fahim',
  shortName: 'Fahim',
  role: 'Software Engineer',
  // headline, intro and stackSentence are draft copy from docs/CONTENT.md;
  // they are not rendered until the Phase 2 site view.
  headline: "Hi, I'm Fahim. I build web products end to end.",
  intro:
    'Software engineer with about three years of shipping production features in React, Next.js, FastAPI, and PostgreSQL, from real-time collaboration tools to multi-tenant platforms used by thousands of people every day.',
  summary:
    'Full-Stack Software Engineer with 3+ years of experience building production web applications with Python (FastAPI), React/Next.js, TypeScript, and PostgreSQL. Experienced in REST API and database schema design, JWT/OTP authentication, caching, and Docker, working in distributed Agile teams. Research background in federated learning; hands-on experience building LLM-powered applications.',
  status: '@ The WOS Germany GmbH',
  availability: 'Open to software engineering and product roles',
  location: 'Bangladesh (Open to Remote)',
  experienceLength: 'about three years',
  about: [
    "I'm a Software Engineer with about three years of experience building scalable web and mobile applications using React.js, Next.js, and Flutter. I specialize in full-stack development, REST API optimization, and Agile methodologies.",
    'I thrive in collaborative environments where I can deliver high-quality solutions through clean code, thorough testing, and continuous improvement. My approach combines technical expertise with a focus on user experience and system performance.',
    "Strong believer in technology-agnostic problem solving. While I specialize in React, Next.js, and Flutter, I'm highly adaptable and can quickly learn new languages and frameworks like Golang, Rust, or any technology the project demands.",
  ],
  // The same achievements as the WOS role, so the two cannot drift apart.
  highlights: experience[0].highlights,
  stackSentence:
    "Most of my work is in TypeScript, Python, React, Next.js, FastAPI, PostgreSQL, Socket.io, and Docker. I've also shipped with Flutter, Laravel, Prisma, and AWS, and I have hands-on experience building LLM-powered applications with tools like LangChain.",
  education: {
    school: 'Chittagong University of Engineering and Technology (CUET)',
    degree: 'B.Sc. in Computer Science & Engineering',
    graduated: 'July 2023',
    thesis:
      'Federated learning optimization using Laplacian Smoothing SGD combined with FedNova, evaluated on CIFAR-10.',
  },
  email: 'zobairf03@gmail.com',
  phone: '+880-1840219368',
  socials: [
    { label: 'GitHub', href: 'https://github.com/HikenNoAce001' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fahim77108/' },
  ],
  resumeUrl: '/resume.pdf',
  photo: { src: '/profile.webp', alt: 'Profile' },
};
