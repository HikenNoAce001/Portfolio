import Image from 'next/image';
import Navbar from './Navbar';

export default function Landing() {
  return (
    <section className="flex flex-col items-center justify-between min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative mb-4 sm:mb-6">
          <Image
            src={'/Wall.jpeg'}
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono opacity-90 break-words mb-2">
          Mohammad Zobair Hossain Fahim
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif mb-6">
          Junior Software Engineer
        </p>
      </div>
      <Navbar />
    </section>
  );
}
