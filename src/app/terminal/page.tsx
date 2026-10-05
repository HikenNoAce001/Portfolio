import Link from 'next/link';

export const metadata = { title: 'Terminal · Fahim' };

export default function TerminalPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[40rem] flex-col items-start justify-center gap-6 px-5 md:px-6">
      <h1 className="font-display text-2xl font-semibold text-starlight">
        Terminal
      </h1>
      <p className="text-starlight/90">
        The terminal view is coming soon. Everything is also on the site.
      </p>
      <Link
        href="/"
        className="inline-flex min-h-11 items-center rounded-full border border-comet px-6 font-semibold text-comet transition-colors hover:bg-comet/10"
      >
        Back to site
      </Link>
    </main>
  );
}
