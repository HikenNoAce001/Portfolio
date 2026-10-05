import { content } from '@/content';
import CrewId from './CrewId';
import Loadout from './Loadout';
import SectionHead from './SectionHead';

const { profile } = content;

const para =
  'm-0 max-w-[36em] text-pretty text-base leading-[1.65] text-soft sm:text-lg sm:leading-[1.7]';

export default function About() {
  return (
    <section
      id="about"
      className="relative flex -scroll-mt-10 flex-col gap-7 py-16 sm:-scroll-mt-24 sm:gap-14 sm:py-[120px]"
    >
      <div
        aria-hidden="true"
        className="fz-aurora left-0 top-[30px] h-[110px] w-[380px] sm:left-[10%] sm:top-10 sm:h-40 sm:w-[900px]"
      />
      <SectionHead stop="about" filled />
      <div className="relative flex flex-col gap-[18px] pl-[26px] sm:flex-row sm:flex-wrap sm:gap-16 sm:pl-10">
        <div className="fz-reveal flex min-w-0 flex-col gap-[18px] sm:flex-[999_1_480px] sm:gap-6">
          <h2 className="fz-h2 m-0 font-display text-[28px] font-semibold leading-[1.15] tracking-[-0.015em] text-ink sm:text-[44px] sm:leading-[1.12]">
            Frontend roots.
            <br />
            <span className="text-blue">Backend &amp; AI trajectory.</span>
          </h2>
          {profile.about.map((p) => (
            <p key={p} className={`${para} max-sm:hidden`}>
              {p}
            </p>
          ))}
          {profile.aboutShort.map((p) => (
            <p key={p} className={`${para} sm:hidden`}>
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-x-6 gap-y-2.5 font-mono text-[13px] tracking-[0.06em] text-faint max-sm:hidden">
            <span>BASE · CHITTAGONG, BD</span>
            <span>UTC+6</span>
            <span>B.SC. CSE · CUET</span>
          </div>
        </div>
        <div className="fz-reveal flex min-w-0 flex-col gap-[18px] sm:flex-[1_1_420px] sm:gap-5">
          <CrewId />
          <Loadout />
        </div>
      </div>
    </section>
  );
}
