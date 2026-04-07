import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h1 className="text-4xl mb-12 font-bold p-6 text-slate-900 dark:text-slate-100 text-center max-w-max mx-auto tracking-tight">
        About
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          {/* Value Proposition */}
          <p className="font-sans text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            I&apos;m a{' '}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
              Software Engineer
            </span>{' '}
            with 2+ years of experience building scalable web and mobile
            applications using React.js, Next.js, and Flutter. Currently working
            remotely at{' '}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
              The WOS Germany GmbH
            </span>
            , I specialize in full-stack development, REST API optimization, and
            Agile methodologies.
          </p>

          {/* Key Achievements */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400">
              Key Achievements
            </h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <span className="text-cyan-600 dark:text-cyan-400 mr-2 mt-1">
                  ▸
                </span>
                <span>
                  Developed and maintained{' '}
                  <span className="font-semibold">15+ production features</span>{' '}
                  for Lentho.com, serving{' '}
                  <span className="font-semibold">
                    5,000+ daily active users
                  </span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 dark:text-cyan-400 mr-2 mt-1">
                  ▸
                </span>
                <span>
                  Optimized REST API performance, reducing average response time
                  by <span className="font-semibold">40%</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 dark:text-cyan-400 mr-2 mt-1">
                  ▸
                </span>
                <span>
                  Implemented secure OTP-based authentication, improving login
                  success rate by <span className="font-semibold">25%</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 dark:text-cyan-400 mr-2 mt-1">
                  ▸
                </span>
                <span>
                  Established code review standards, reducing production bugs by{' '}
                  <span className="font-semibold">30%</span>
                </span>
              </li>
            </ul>
          </div>

          {/* What Drives Me */}
          <p className="font-sans text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            I thrive in collaborative environments where I can deliver
            high-quality solutions through clean code, thorough testing, and
            continuous improvement. My approach combines technical expertise
            with a focus on user experience and system performance.
          </p>

          {/* Adaptability */}
          <p className="font-sans text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Strong believer in technology-agnostic problem solving. While I
            specialize in React, Next.js, and Flutter, I&apos;m highly adaptable
            and can quickly learn new languages and frameworks like Golang,
            Rust, or any technology the project demands.
          </p>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-full max-w-[300px] aspect-square">
            <Image
              src="/geek4.png"
              alt="Nerd"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
