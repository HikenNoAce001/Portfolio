import Image from 'next/image';
import Navbar from './Navbar';
export default function Landing() {
  return (
    <section className="items-center justify-center flex flex-col p-24 mb-20 max-h-screen">
      <Image
        src={'/Wall.jpg'}
        alt="Profile"
        width={200}
        height={50}
        className="rounded-full aspect-square object-cover"
      />
      <div className="items-center space-y-10">
        <div className="flex flex-col space-y-2 items-center">
          <h1 className="text-5xl font-mono opacity-90">
            Mohammad Zobair Hossain Fahim
          </h1>
          <p className="text-2xl font-serif">Junior Software Engineer</p>
        </div>
        <Navbar />
      </div>
    </section>
  );
}
