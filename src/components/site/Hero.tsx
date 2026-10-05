import { ArrowRightIcon, DownloadIcon } from '@/components/space/icons';
import Satellite from '@/components/space/Satellite';
import { content } from '@/content';
import HeroScene from './HeroScene';
import MissionClock from './MissionClock';
import Telemetry from './Telemetry';

const { profile, asteroids } = content;

const primaryBtn =
  'fz-btn-primary flex items-center gap-2.5 rounded-full bg-blue px-[26px] font-semibold text-night min-h-[52px] text-base max-sm:justify-center';
const ghostBtn =
  'fz-btn-ghost flex items-center gap-2.5 rounded-full border border-line-bright px-6 font-medium text-soft min-h-[52px] text-base max-sm:justify-center';

export default function Hero() {
  const [first, second] = profile.focus;

  return (
    <section
      id="top"
      className="relative z-[2] scroll-mt-[120px] px-4 pb-16 pt-6 sm:px-12 sm:pb-24 sm:pt-[72px]"
    >
      <div aria-hidden="true" className="fz-streams">
        <div className="fz-streams-rot">
          <div className="fz-st fz-st1" />
          <div className="fz-st fz-st2" />
        </div>
      </div>
      <Satellite className="max-sm:hidden" />

      <div className="relative mx-auto flex max-w-[1248px] flex-col-reverse gap-[22px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-12">
        <div className="flex min-w-0 flex-col gap-[22px] sm:flex-[1_1_520px] sm:gap-7">
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.1em] text-muted sm:gap-3 sm:text-[13px] sm:tracking-[0.12em]">
            <span className="fz-pulse size-2 rounded-full bg-green" />
            <span className="max-sm:hidden">{profile.availability}</span>
            <span className="sm:hidden">{profile.availabilityShort}</span>
            <span className="text-line-bright">/</span>
            <span>
              <MissionClock />
              <span className="max-sm:hidden"> · in flight</span>
            </span>
          </div>

          <h1 className="m-0 font-display text-[46px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink sm:text-[80px] sm:leading-[1.02]">
            Hi, I’m
            <br />
            <span
              className="text-violet"
              style={{ textShadow: '0 0 48px rgba(187,154,247,0.45)' }}
            >
              {profile.shortName}.
            </span>
          </h1>

          <p className="m-0 max-w-[34em] text-pretty text-[17px] leading-[1.55] text-muted sm:text-[21px]">
            {profile.intro}{' '}
            <span className="sr-only">
              {profile.focus.join(' ').replace('. ', ' and ')}
            </span>
            <span aria-hidden="true" className="fz-roles">
              <span className="fz-roles-in">
                <span className="block h-[1.55em] whitespace-nowrap text-ink">
                  {first}
                </span>
                <span className="block h-[1.55em] whitespace-nowrap text-cyan">
                  {second}
                </span>
                <span className="block h-[1.55em] whitespace-nowrap text-ink">
                  {first}
                </span>
              </span>
            </span>
          </p>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
            <a href="#missions" className={primaryBtn}>
              See missions
              <ArrowRightIcon />
            </a>
            <a href={profile.resumeUrl} className={ghostBtn}>
              <DownloadIcon />
              Résumé (PDF)
            </a>
            <span className="font-mono text-[13px] text-faint max-sm:hidden">
              or press{' '}
              <kbd className="inline-block rounded-[5px] border border-line-bright px-[7px] py-px font-mono text-soft">
                `
              </kbd>{' '}
              for terminal
            </span>
          </div>

          <div className="mt-1.5 flex flex-col gap-3.5 border-t border-line pt-5 sm:mt-2 sm:pt-[22px]">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint sm:text-xs">
              Telemetry · Lentho.com
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-[18px] sm:grid-cols-[repeat(auto-fit,minmax(min(120px,100%),1fr))] sm:gap-5">
              <Telemetry items={profile.telemetry} />
            </div>
          </div>
        </div>

        <div className="flex min-w-0 justify-center sm:flex-[1_1_560px]">
          <HeroScene asteroids={asteroids} />
        </div>
      </div>
    </section>
  );
}
