import MiniRocket from '@/components/space/MiniRocket';
import { ArrowUpRightIcon, MailIcon } from '@/components/space/icons';
import { content } from '@/content';
import SectionHead from './SectionHead';

const { profile } = content;

const ghost =
  'fz-btn-ghost flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-line-bright px-6 text-[15px] font-medium text-soft sm:min-h-[54px] sm:gap-2.5 sm:text-base';

// The last stop: the destination planet rises behind the call to action.
export default function Contact() {
  const github = profile.socials.find((s) => s.label === 'GitHub')!;
  const linkedin = profile.socials.find((s) => s.label === 'LinkedIn')!;

  return (
    <section
      id="contact"
      className="relative z-[2] flex min-h-[640px] -scroll-mt-10 flex-col overflow-clip px-4 pt-16 sm:-scroll-mt-24 sm:min-h-[900px] sm:px-12 sm:pt-[120px]"
    >
      <div className="relative z-[2] mx-auto flex w-full max-w-[1248px] flex-col gap-7 sm:gap-14">
        <SectionHead stop="contact" />
        <div className="fz-reveal flex flex-col gap-[18px] sm:items-center sm:gap-7 sm:text-center">
          <h2 className="fz-h1 m-0 font-display text-[34px] font-semibold leading-[1.1] text-ink sm:text-[68px] sm:leading-[1.06] sm:tracking-[-0.02em]">
            Next destination:
            <br />
            <span
              className="text-violet"
              style={{ textShadow: '0 0 48px rgba(187,154,247,0.4)' }}
            >
              your team.
            </span>
          </h2>
          <p className="m-0 max-w-[32em] text-pretty text-base leading-[1.6] text-muted sm:text-[19px]">
            <span className="max-sm:hidden">{profile.contactBlurb}</span>
            <span className="sm:hidden">{profile.contactBlurbShort}</span>
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3.5">
            <a
              href={`mailto:${profile.email}`}
              className="fz-btn-primary flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-blue px-[26px] text-[15px] font-semibold text-night sm:min-h-[54px] sm:text-base"
            >
              <MailIcon className="max-sm:hidden" />
              {profile.email}
            </a>
            <div className="grid grid-cols-2 gap-2.5 sm:contents">
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className={ghost}
              >
                GitHub
                <ArrowUpRightIcon className="max-sm:hidden" />
              </a>
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className={ghost}
              >
                LinkedIn
                <ArrowUpRightIcon className="max-sm:hidden" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* drifting moon */}
      <div
        aria-hidden="true"
        className="fz-drift absolute bottom-[300px] left-6 z-[1] size-7 rounded-full shadow-[0_0_24px_rgba(192,202,245,0.25)] sm:bottom-auto sm:left-[9%] sm:top-[330px] sm:size-11 sm:shadow-[0_0_30px_rgba(192,202,245,0.25)]"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, #e6ebff, #9099c4 55%, #3b4261)',
        }}
      />

      {/* small rocket on approach */}
      <div
        aria-hidden="true"
        className="absolute right-[11%] top-[300px] z-[1] h-[75px] w-[170px] max-sm:hidden"
      >
        <div className="fz-bob h-[75px] w-[170px]">
          <MiniRocket />
        </div>
      </div>

      {/* destination planet */}
      <div aria-hidden="true" className="fz-planet">
        <div className="fz-bands" />
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-[-1700px] left-1/2 z-0 -ml-[1150px] h-[2000px] w-[2300px] rounded-full border-t border-violet/25 max-sm:hidden"
      />

      <footer className="relative z-[2] mx-auto mt-auto flex w-full max-w-[1248px] flex-col gap-1.5 py-6 font-mono text-[11px] tracking-[0.06em] text-faint sm:flex-row sm:flex-wrap sm:justify-between sm:gap-3 sm:py-7 sm:text-xs">
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <span>
          Built with Next.js · zero WebGL
          <span className="max-sm:hidden"> · press ` for terminal</span>
        </span>
      </footer>
    </section>
  );
}
