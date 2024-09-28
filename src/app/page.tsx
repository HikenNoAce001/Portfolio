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
//     <main className="flex flex-col min-w-screen min-h-screen justify-center bg-[#0f172a]">
//       <div className="absolute top-0 right-0 p-7">
//         <Social />
//       </div>
//       <section className="items-center justify-center flex flex-col p-24">
//         {' '}
//         <div className="items-center space-y-8">
//           <div className="flex flex-col space-y-2 items-center">
//             <h1 className="text-5xl font-mono opacity-90">
//               Mohammad Zobair Hossain Fahim
//             </h1>
//             <p className="text-2xl font-serif">Junior Software Engineer</p>
//           </div>

//           <nav className="text-xl text-white p-2">
//             <ul className="flex justify-center space-x-8">
//               <li className="hover:underline">
//                 <Link href="#about">About</Link>
//               </li>
//               <li className="hover:underline">
//                 <Link href="#experience">Experience</Link>
//               </li>
//               <li className="hover:underline">
//                 <Link href="/" target="_blank">
//                   Project
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </section>
//       <section id="experience">
//         <Experience />
//       </section>
//       <section id="about">
//         <About />
//       </section>
//       <section id="about">
//         <About />
//       </section>
//     </main>
//   );
// }
