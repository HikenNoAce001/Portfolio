import type { Role } from './types';

export const experience: Role[] = [
  {
    id: 'wos-germany',
    company: 'The WOS Germany GmbH',
    companyUrl: 'https://thewos.com/',
    title: 'Software Engineer',
    start: 'May 2023',
    location: 'Mönchengladbach, Germany (Remote)',
    highlights: [
      {
        text: 'Developed and maintained 15+ production features for Lentho.com using Flutter and Next.js, serving 5,000+ daily active users across web and mobile platforms',
        strong: ['15+ production features', '5,000+ daily active users'],
      },
      {
        text: 'Optimized REST API performance by eliminating redundant calls and implementing caching strategies, reducing average response time by 40%',
        strong: ['40%'],
      },
      {
        text: 'Designed and implemented secure OTP-based authentication system with session management, improving user login success rate by 25%',
        strong: ['25%'],
      },
      {
        text: 'Established code review standards and QA protocols across a 6-member distributed team, reducing production bugs by 30%',
        strong: ['30%'],
      },
    ],
    stack: ['Flutter', 'Next.js', 'TypeScript', 'REST API', 'Laravel', 'AWS'],
  },
  {
    id: 'diligite',
    company: 'Diligite Limited',
    title: 'Software Development Intern',
    start: 'Oct 2022',
    end: 'Nov 2022',
    location: 'Chittagong, Bangladesh',
    highlights: [
      {
        text: 'Built 5+ reusable React.js UI components for a file-sharing app, improving code reuse and maintainability',
      },
      {
        text: 'Collaborated via Git, Jira, and Agile workflows including sprint planning and code reviews',
      },
    ],
    stack: ['React.js', 'Node.js', 'Git', 'Jira'],
  },
];
