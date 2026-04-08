const skillsData = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C++'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      'React.js',
      'Next.js',
      'Node.js',
      'Flutter',
      'Tailwind CSS',
      'REST API',
      'Laravel',
    ],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Jira',
      'CI/CD',
      'Unit Testing',
      'Agile',
      'Scrum',
      'AWS',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="">
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-12 font-serif p-6 text-slate-900 dark:text-slate-300">
          Skills
        </h1>

        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-300/70 dark:border-gray-700/50 hover:border-gray-400/70 dark:hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-300/50 dark:hover:bg-gray-800/30 group"
              >
                {/* Category Header */}
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4 group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-colors duration-300">
                  {category.category}
                </h3>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-slate-200 dark:bg-gray-700/60 text-slate-800 dark:text-gray-300 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-800/50 hover:text-blue-900 dark:hover:text-blue-200 hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
          <div className="text-center p-4 rounded-lg bg-gray-200/50 dark:bg-gray-800/30 border border-gray-300/70 dark:border-gray-700/50">
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
              4+
            </p>
            <p className="text-sm text-slate-700 dark:text-gray-400 mt-1">
              Languages
            </p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-200/50 dark:bg-gray-800/30 border border-gray-300/70 dark:border-gray-700/50">
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
              7+
            </p>
            <p className="text-sm text-slate-700 dark:text-gray-400 mt-1">
              Frameworks
            </p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-200/50 dark:bg-gray-800/30 border border-gray-300/70 dark:border-gray-700/50">
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
              2+
            </p>
            <p className="text-sm text-slate-700 dark:text-gray-400 mt-1">
              Years Experience
            </p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-200/50 dark:bg-gray-800/30 border border-gray-300/70 dark:border-gray-700/50">
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
              15+
            </p>
            <p className="text-sm text-slate-700 dark:text-gray-400 mt-1">
              Tools & Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
