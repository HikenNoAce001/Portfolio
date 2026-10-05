import { content } from '@/content';

const source = content.projects.find((p) => p.slug === 'portfolio')?.links.code;

export default function Footer() {
  return (
    <footer className="border-t border-dust/25 px-5 py-8 md:px-6">
      <div className="mx-auto max-w-[90rem] text-sm text-dust journey:pl-[clamp(0px,4vw,104px)]">
        <p>
          Built with Next.js and Tailwind CSS.{' '}
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-comet underline-offset-4 hover:underline"
            >
              Source on GitHub
            </a>
          )}
        </p>
      </div>
    </footer>
  );
}
