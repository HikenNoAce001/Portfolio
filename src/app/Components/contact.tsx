import Link from 'next/link';

const contactInfo = [
  {
    type: 'Email',
    value: 'zobairf03@gmail.com',
    href: 'mailto:zobairf03@gmail.com',
    icon: '✉️',
  },
  {
    type: 'Phone',
    value: '+880-1840219368',
    href: 'tel:+8801840219368',
    icon: '📱',
  },
  {
    type: 'Location',
    value: 'Bangladesh (Open to Remote)',
    href: null,
    icon: '📍',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="">
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-12 p-6 text-slate-900 dark:text-slate-100 tracking-tight">
          Contact
        </h1>

        <div className="w-full max-w-4xl">
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-300/70 dark:border-gray-700/50 hover:border-gray-400/70 dark:hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-300/50 dark:hover:bg-gray-800/30 group text-center"
              >
                <div className="text-4xl mb-3">{info.icon}</div>
                <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400 mb-2 group-hover:text-cyan-800 dark:group-hover:text-cyan-300 transition-colors duration-300">
                  {info.type}
                </h3>
                {info.href ? (
                  <Link
                    href={info.href}
                    className="text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-gray-300 transition-colors duration-300 break-all"
                  >
                    {info.value}
                  </Link>
                ) : (
                  <p className="text-slate-700 dark:text-gray-400">
                    {info.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
