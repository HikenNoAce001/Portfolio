import Social from './Components/socials';
import Experience from './Components/experience';
import About from './Components/about';
import Landing from './Components/Home';
import Project from './Components/project';

export default function Home() {
  return (
    <>
      <Landing />
      <Social />
      <About />
      <Experience />
      {/* <Project /> */}
    </>
  );
}
