import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    name: 'Marketplace Workflow System',
    tagline: '',
    type: 'Personal Project',
    link: null,
    github: 'https://github.com/HikenNoAce001/marketplace-workflow-system',
    description:
      'Full-stack project marketplace with role-based access control, real-time bidding, and ZIP deliverable management. Buyers post projects, solvers bid and deliver work, with atomic cascade operations ensuring data consistency throughout the workflow.',
    achievements: [
      'Role-based access (Admin / Buyer / Solver)',
      'Atomic bid acceptance with cascade state machine',
      'Presigned MinIO URLs — backend never proxies files',
      'JWT in memory + httpOnly refresh cookie (XSS-safe)',
    ],
    technologies: [
      'FastAPI',
      'Next.js',
      'PostgreSQL',
      'MinIO',
      'Docker',
      'TypeScript',
      'TanStack Query',
    ],
    isLive: false,
    isPrivate: false,
  },
  {
    name: 'Digital Prescription Generator',
    tagline: '',
    type: 'Personal Project',
    link: null,
    github: null,
    description:
      'Full-stack prescription management system with Medex database integration. Enables doctors to search 10,000+ medicines by generic or brand name and generate digital prescriptions with optimized caching and database queries.',
    achievements: [
      '10,000+ searchable medicines',
      'Sub-100ms medication search response',
      'Efficient caching mechanisms',
      'PDF prescription generation',
    ],
    technologies: ['React.js', 'Node.js', 'MySQL', 'REST API'],
    isLive: false,
    isPrivate: true,
  },
  {
    name: 'Personal Portfolio',
    tagline: '',
    type: 'Personal Project',
    link: null,
    github: 'https://github.com/HikenNoAce001/portfolio',
    description:
      'Responsive portfolio website built with Next.js and Tailwind CSS, achieving 95+ Lighthouse performance score. Features modern UI/UX design patterns, dark mode support, smooth animations, and interactive mouse-tracking effects.',
    achievements: [
      '95+ Lighthouse performance score',
      'SEO optimized',
      'Interactive mouse-tracking gradient',
      'Fully responsive design',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    isLive: true,
    isPrivate: false,
  },
];

export default function Project() {
  return (
    <section id="project" className="">
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-12 p-6 text-slate-100 tracking-tight">
          Projects
        </h1>

        <div className="w-full max-w-4xl">
          <div className="flex flex-col gap-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-lg relative group transition-all duration-300 hover:bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50"
              >
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-2xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                          {project.name}
                        </h3>
                        {project.isLive && (
                          <span className="px-2 py-1 bg-green-900/30 text-green-300 rounded text-xs border border-green-700/50">
                            Live
                          </span>
                        )}
                        {project.isPrivate && (
                          <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600/50">
                            Proprietary
                          </span>
                        )}
                      </div>
                      {project.tagline && (
                        <p className="text-indigo-200 font-medium text-lg">
                          {project.tagline}
                        </p>
                      )}
                      <p className="text-gray-400 text-sm italic">
                        {project.type}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded hover:bg-cyan-800/50 transition-all duration-300 text-sm border border-cyan-700/50"
                        >
                          Visit Site
                          <Image
                            src="/link.svg"
                            alt="External link"
                            width={16}
                            height={16}
                            className="ml-1 opacity-70"
                          />
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-gray-700/50 text-gray-300 rounded hover:bg-gray-600/50 transition-all duration-300 text-sm border border-gray-600/50"
                        >
                          <Image
                            src="/github.svg"
                            alt="GitHub"
                            width={16}
                            height={16}
                            className="mr-1"
                          />
                          Code
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-sm text-gray-400 flex items-start"
                      >
                        <span className="text-cyan-400 mr-2">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/60 text-gray-300 rounded-full text-sm transition-colors duration-300 group-hover:bg-cyan-900/40 group-hover:text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
