import About from '@/components/site/About';
import Contact from '@/components/site/Contact';
import Experience from '@/components/site/Experience';
import Footer from '@/components/site/Footer';
import Hero from '@/components/site/Hero';
import Nav from '@/components/site/Nav';
import Projects from '@/components/site/Projects';
import TechLane from '@/components/site/TechLane';
import { content } from '@/content';

const { socials } = content.profile;
const hrefFor = (label: string) =>
  socials.find((social) => social.label === label)?.href ?? '#';
const lane = (id: string) => content.lanes.find((l) => l.id === id)!;

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-flame focus:px-5 focus:py-3 focus:font-semibold focus:text-abyss"
      >
        Skip to main content
      </a>
      <Nav github={hrefFor('GitHub')} linkedin={hrefFor('LinkedIn')} />
      <main id="main">
        <Hero />
        <TechLane lane={lane('frontend')} />
        <About />
        <TechLane lane={lane('backend')} />
        <Experience />
        <TechLane lane={lane('ship')} />
        <Projects />
        <TechLane lane={lane('ai')} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
