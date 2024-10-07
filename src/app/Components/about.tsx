import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h1 className="text-4xl mb-12 font-bold font-serif p-6 text-slate-300 text-center max-w-max mx-auto">
        About
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-4">
          <p className="font-sans text-indigo-200 text-base sm:text-lg leading-relaxed opacity-90">
            As a passionate web development enthusiast, I blend creativity with
            technical precision to craft seamless user experiences. My expertise
            lies in modern frontend technologies, particularly Next.js and
            React, where I excel at translating design concepts into functional,
            elegant code.
          </p>
          <p className="font-sans text-indigo-200 text-base sm:text-lg leading-relaxed opacity-90">
            Adaptability is my strength,I thrive on learning new technologies
            and contributing effectively to diverse projects. Whether it&apos;s
            optimizing performance, implementing responsive designs, or solving
            complex coding challenges, I approach each task with enthusiasm and
            attention to detail.
          </p>
          <p className="font-sans text-indigo-200 text-base sm:text-lg leading-relaxed opacity-90">
            My journey in web development is driven by a constant desire to
            innovate and push boundaries. I&apos;m currently expanding my skills
            into backend technologies, aiming to become a versatile full-stack
            developer. My goal is to contribute cutting-edge solutions to
            challenging projects in collaborative environments, always staying
            at the forefront of web development trends.
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
