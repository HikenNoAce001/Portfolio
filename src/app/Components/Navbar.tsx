import Link from 'next/link';

const navigation = [
  { id: 1, name: 'About', href: '#about' },
  { id: 2, name: 'Experience', href: '#experience' },
  { id: 3, name: 'Project', href: '#project' },
  { id: 4, name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center py-6">
          <ul className="flex items-center gap-1 sm:gap-2 bg-slate-200/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-full px-4 sm:px-6 py-3 border border-slate-300/50 dark:border-gray-700/50">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="relative px-4 sm:px-6 py-2 text-sm sm:text-base font-medium text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-full hover:bg-slate-300/50 dark:hover:bg-gray-700/50 block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
