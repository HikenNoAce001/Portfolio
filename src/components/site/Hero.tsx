import Link from 'next/link';
import LaunchPad from '@/components/art/LaunchPad';
import RocketRider from '@/components/art/RocketRider';
import { content } from '@/content';

const { profile } = content;

export default function Hero() {
  return (
    <section
      id="top"
      data-journey-stop="hero"
      className="overflow-x-clip px-5 pb-12 pt-8 md:px-6 journey:pb-20 journey:pt-16"
    >
      <div className="mx-auto grid max-w-[90rem] items-center gap-10 journey:grid-cols-[minmax(0,40rem)_1fr] journey:pl-[clamp(0px,4vw,104px)]">
        <div>
          <h1 className="text-balance font-display text-[clamp(2.25rem,1.2rem+4.2vw,3.375rem)] font-semibold leading-[1.1] tracking-[-0.01em] text-starlight">
            {profile.headline}
          </h1>
          <p className="mt-5 max-w-[68ch] text-base text-starlight/90">
            {profile.intro}
          </p>
          <p className="mt-3 text-sm text-dust">
            {profile.role} {profile.status}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center rounded-full bg-flame px-6 font-semibold text-abyss transition-opacity hover:opacity-90"
            >
              See projects
            </a>
            <Link
              href="/terminal"
              className="inline-flex min-h-11 items-center rounded-full border border-comet px-6 font-semibold text-comet transition-colors hover:bg-comet/10"
            >
              Open terminal
            </Link>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto flex w-full max-w-[20rem] flex-col items-center journey:max-w-[24rem]"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[130%] -translate-x-1/2 -translate-y-[60%] bg-[radial-gradient(closest-side,rgb(var(--nebula)/0.4),transparent)]" />
          <RocketRider className="relative w-full max-w-[17.5rem] journey:max-w-[21rem]" />
          <LaunchPad className="relative -mt-3 w-full" />
        </div>
      </div>
    </section>
  );
}
