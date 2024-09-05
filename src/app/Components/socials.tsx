import Link from 'next/link';
import Image from 'next/image';

export const Socials = [
  {
    name: 'Github',
    src: '/github.svg',
    link: 'https://github.com/HikenNoAce001',
  },
  {
    name: 'Linkedin',
    src: '/linkedin.svg',
    link: 'https://www.linkedin.com/in/fahim77108/',
  },
];

export default function Social() {
  return (
    //bg-gradient-to-r from-[#7058b9] to-[#04013d]
    <div className="flex items-center absolute top-0 right-0 p-7 flex-row gap-5">
      {Socials.map((social) => (
        <Link
          key={social.name}
          href={social.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={social.src}
            alt={social.name}
            width={40}
            height={40}
            className="transition-transform transform hover:scale-110"
          />
        </Link>
      ))}
    </div>
  );
}
