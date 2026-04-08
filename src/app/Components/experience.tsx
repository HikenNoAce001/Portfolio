import Link from 'next/link';
import Image from 'next/image';
const experiences = [
  {
    period: 'May 2023 - Present',
    title: 'Software Engineer',
    company: 'The WOS Germany GmbH',
    link: 'https://lentho.com',
    location: 'Mönchengladbach, Germany (Remote)',
    achievements: [
      {
        text: 'Developed and maintained ',
        highlights: ['15+ production features', '5,000+ daily active users'],
        full: 'Developed and maintained 15+ production features serving 5,000+ daily active users',
      },
      {
        text: 'Optimized REST API performance, reducing average response time by ',
        highlights: ['40%'],
        full: 'Optimized REST API performance, reducing average response time by 40%',
      },
      {
        text: 'Implemented secure OTP-based authentication, improving login success rate by ',
        highlights: ['25%'],
        full: 'Implemented secure OTP-based authentication, improving login success rate by 25%',
      },
      {
        text: 'Established code review standards across 6-member team, reducing production bugs by ',
        highlights: ['30%'],
        full: 'Established code review standards across 6-member team, reducing production bugs by 30%',
      },
    ],
    technologies: [
      'Flutter',
      'Next.js',
      'TypeScript',
      'REST API',
      'Laravel',
      'AWS',
    ],
  },
  {
    period: 'Oct 2022 - Nov 2022',
    title: 'Software Development Intern',
    company: 'Diligite Limited',
    link: null,
    location: 'Chittagong, Bangladesh',
    achievements: [
      'Built 5+ reusable React.js UI components for file sharing application',
      'Collaborated using Git, Jira, and Agile workflows including sprint planning and code reviews',
    ],
    technologies: ['React.js', 'Node.js', 'Git', 'Jira'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="">
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-12 p-6 text-slate-900 dark:text-slate-100 tracking-tight">
          Experience
        </h1>
        <div className="mt-2 w-full max-w-3xl">
          <ul className="flex flex-col gap-y-6">
            {experiences.map((exp, index) => (
              <li
                key={index}
                className="grid grid-cols-8 gap-x-2 justify-normal p-4 rounded-lg relative group transition-all duration-300 hover:bg-gray-300/50 dark:hover:bg-gray-800/50 items-start"
              >
                <p className="text-sm col-span-2 italic z-10 text-slate-600 dark:text-gray-400 group-hover:text-slate-800 dark:group-hover:text-gray-200 pt-1">
                  {exp.period}
                </p>
                <div className="col-span-6 z-10">
                  <div className="text-md">
                    <h3 className="font-semibold text-lg text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-slate-800 dark:text-gray-300 font-medium">
                        {exp.company}
                      </p>
                      {exp.link && (
                        <Link
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          <Image
                            src="/link.svg"
                            alt="External link"
                            width={20}
                            height={20}
                            className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                          />
                        </Link>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-gray-400 italic text-sm">
                      {exp.location}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {exp.achievements.map((achievement, achIndex) => {
                        if (typeof achievement === 'string') {
                          return (
                            <li
                              key={achIndex}
                              className="text-slate-700 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-gray-300 transition-colors duration-300 flex items-start text-sm"
                            >
                              <span className="text-cyan-600 dark:text-cyan-400 mr-2 mt-0.5">
                                •
                              </span>
                              <span>{achievement}</span>
                            </li>
                          );
                        }

                        // Parse the full text and highlight keywords
                        const parts: React.ReactNode[] = [];
                        let remainingText = achievement.full;
                        let keyIndex = 0;

                        achievement.highlights.forEach((highlight) => {
                          const index = remainingText.indexOf(highlight);
                          if (index !== -1) {
                            if (index > 0) {
                              parts.push(remainingText.substring(0, index));
                            }
                            parts.push(
                              <span
                                key={`highlight-${keyIndex++}`}
                                className="font-semibold text-slate-900 dark:text-gray-300"
                              >
                                {highlight}
                              </span>,
                            );
                            remainingText = remainingText.substring(
                              index + highlight.length,
                            );
                          }
                        });

                        if (remainingText) {
                          parts.push(remainingText);
                        }

                        return (
                          <li
                            key={achIndex}
                            className="text-slate-700 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-gray-300 transition-colors duration-300 flex items-start text-sm"
                          >
                            <span className="text-cyan-600 dark:text-cyan-400 mr-2 mt-0.5">
                              •
                            </span>
                            <span>{parts}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-200 dark:bg-gray-700/60 text-slate-800 dark:text-gray-300 rounded-full text-sm transition-colors duration-300 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/40 group-hover:text-cyan-800 dark:group-hover:text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/30 dark:via-gray-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
