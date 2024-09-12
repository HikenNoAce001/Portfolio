import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="max-w-8xl mx-auto">
      <div className="items-center flex flex-col justify-center p-10">
        <h1 className="text-5xl mb-12 font-serif p-6 bg-gradient-to-r from-[#000000] to-[#350249] rounded-full text-white">
          About
        </h1>
        <div className="space-y-[15px]">
          <div className="">
            <Image
              src="/min4.png"
              alt="min3"
              width={300}
              height={300}
              className="float-right"
            />
            <p className="mb-5 font-serif text-[25px] space-y-3 leading-loose opacity-70">
              As an ambitious junior developer, I&apos;ve rapidly progressed in
              my career, embracing new challenges and responsibilities with
              enthusiasm. Currently engaged in an innovative project, I leverage
              my expanding skill set to contribute meaningfully to our
              team&apos;s objectives.
            </p>
          </div>

          <p className="mb-5 font-serif text-[25px] space-y-3 leading-loose opacity-70">
            My journey is characterized by an insatiable curiosity and an
            unwavering commitment to mastering new technologies. I thrive in
            environments that foster continuous learning and welcome the
            opportunity to push the boundaries of my expertise.
          </p>

          <p className="font-serif text-[25px] space-y-3 leading-loose opacity-70">
            Eager to collaborate with seasoned professionals, I am actively
            seeking opportunities to be mentored by industry leaders. My goal is
            to absorb knowledge, refine my craft, and evolve into a versatile
            and indispensable asset in the ever-evolving landscape of software
            development.
          </p>
        </div>
      </div>
    </section>
  );
}
