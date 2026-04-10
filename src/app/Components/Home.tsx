import Image from 'next/image';
import Navbar from './Navbar';

export default function Landing() {
  return (
    <section className="flex flex-col items-center justify-between min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative mb-4 sm:mb-6">
          <Image
            src={'/Fahim2.jpg'}
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-cyan-600/30 dark:border-cyan-400/20"
          />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono opacity-90 break-words mb-2 text-slate-900 dark:text-white">
          Mohammad Zobair Hosain Fahim
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif mb-3 text-cyan-600 dark:text-cyan-400">
          Software Engineer
        </p>
        <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-gray-400">
          @ The WOS Germany GmbH
        </p>
      </div>
      <Navbar />
    </section>
  );
}
