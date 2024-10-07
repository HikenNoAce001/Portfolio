import Link from 'next/link';
import Image from 'next/image';
const experiences = [
  {
    period: 'May 2023 - Present',
    title: 'Junior Software Developer',
    company: '4Takeaway',
    link: 'https://4takeaway.com',
    location: 'Mönchengladbach, North Rhine-Westphalia, Germany',
    description:
      'Developing a food delivery platform using Next.js with TypeScript for frontend.Optimizing application performance and implementing responsive UI components.',
    technologies: ['Next.js', 'Typescript', 'Laravel', 'AWS', 'Tailwind CSS'],
  },
  {
    period: 'May 2023 - Present',
    title: 'Junior Software Developer',
    company: 'The WOS Group Gmbh',
    link: 'https://thewos.com/',
    location: 'Mönchengladbach, North Rhine-Westphalia, Germany',
    description:
      'Developing a food delivery platform (4Takeaway) using Next.js and TypeScript.Optimized web performance and implemented responsive designs.Contributed in the development of a social media app and leraned intregation testing.',
    technologies: [
      'Next.js',
      'Typescript',
      'Laravel',
      'AWS',
      'Tailwind CSS',
      'Flutter',
    ],
  },
  {
    period: 'Oct 2022 - Nov 2022',
    title: 'Software Engineering Intern',
    company: 'Diligite',
    link: 'https://4takeaway.com',
    location:
      '7th Floor, Sheikh Kamal IT Business Incubator, CUET, Raozan, Chittagong-4349',
    description:
      'Assisted in the development of a File Management System. Learned and applied Agile methodologies in a fast-paced environment.',
    technologies: ['React.js', 'Node.js', 'Git', 'Jira'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="">
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-12 font-serif p-6  text-sky-300">
          Experience
        </h1>
        <div className="mt-2 w-full max-w-3xl">
          <ul className="flex flex-col gap-y-6">
            {experiences.map((exp, index) => (
              <li
                key={index}
                className="grid grid-cols-8 gap-x-2 justify-normal p-4 rounded-lg relative group transition-all duration-300 hover:bg-gray-800/50"
              >
                <p className="text-sm col-span-2 italic z-10 text-gray-400 group-hover:text-gray-200">
                  {exp.period}
                </p>
                <div className="col-span-6 z-10">
                  <div className="text-md">
                    <h3 className="font-semibold text-lg text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-gray-300 font-medium">{exp.company}</p>
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
                    </div>
                    <p className="text-gray-400 italic text-sm">
                      {exp.location}
                    </p>
                    <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700/60 text-gray-300 rounded-full text-sm transition-colors duration-300 group-hover:bg-blue-800/50 group-hover:text-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
