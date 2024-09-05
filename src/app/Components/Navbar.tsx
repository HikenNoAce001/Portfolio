import Link from 'next/link';

const navigation = [
  { id: 1, name: 'About', href: '#about' },
  { id: 2, name: 'Experience', href: '#experience' },
  { id: 3, name: 'Project', href: '#project' },
];

export default function Navbar() {
  return (
    <div className="flex items-center justify-center p-10">
      <nav className="text-xl text-white p-2">
        <ul className="flex justify-center space-x-8">
          {navigation.map((item) => (
            <li className="hover:underline" key={item.id}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
