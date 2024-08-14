import Image from 'next/image';
import { Socials } from './constant';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-[rgb(57,65,66)] to-[#000000] flex-col items-center justify-between p-24">
      <div className="flex flex-row gap-5 bg-gradient-to-r from-[#7058b9] to-[#04013d] p-5 rounded-xl">
        {Socials.map((social) => (
          <Link key={social.name} href={social.link} passHref>
            <Image
              src={social.src}
              alt={social.name}
              width={50}
              height={50}
              className="transition-transform transform hover:scale-110"
            />
          </Link>
        ))}
      </div>
      <div className="border-2 border-x-4 border-y-4 shadow-2xl rounded-3xl p-7 bg-black">
        {' '}
        <div className="text-h1">
          Hello
          <p className="text-h3">Portfolio skeleton on build</p>
        </div>
      </div>
    </main>
  );
}
