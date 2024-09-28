import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="max-w-8xl mx-auto md:mx-8">
      <div className="items-center flex flex-col justify-center p-10">
        <h1 className="text-4xl mb-12 font-serif p-6 bg-black rounded-full text-[#ecfccb]">
          About
        </h1>
        <div className="space-y-[15px]">
          <div className="">
            <Image
              src="/min4.png"
              alt="min3"
              width={180}
              height={150}
              className="hidden sm:block sm:float-right "
            />
            <p className="mb-5 font-serif text-[#ddd6fe] text-[25px] space-y-3 leading-loose opacity-70">
              A passionate web development enthusiast with a keen eye for
              creating seamless user experiences, I thrive at the intersection
              of design and functionality. Specializing in modern frontend
              technologies, particularly Next.js and React, I bring a blend of
              creativity and technical acumen to every project. Known for my
              adaptability, I excel at learning new technologies and
              contributing effectively to diverse projects. My true passion lies
              in crafting elegant code and pushing the boundaries of web
              development. I&apos;m eager to expand my skillset into backend
              technologies, always seeking opportunities to learn and grow. My
              goal is to evolve into a well-rounded full-stack developer,
              contributing innovative solutions to challenging projects in a
              collaborative environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
