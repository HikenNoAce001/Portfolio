import Link from 'next/link';

const navigation = [
  { id: 1, name: 'About', href: '#about' },
  { id: 2, name: 'Experience', href: '#experience' },
  { id: 3, name: 'Project', href: '#project' },
];

export default function Navbar() {
  return (
    <div className="flex items-center justify-center p-10">
      <nav className="text-xl text-white p-4">
        <ul className="flex justify-center space-x-8">
          {navigation.map((item) => (
            <li key={item.id} className="relative group">
              <Link
                href={item.href}
                className="transition-colors duration-300 group-hover:text-[#ecfccb]"
              >
                {item.name}
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ecfccb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
