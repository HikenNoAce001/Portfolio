import Image from 'next/image';
import { content } from '@/content';

const { profile } = content;

const dt =
  'font-mono text-[9.5px] uppercase tracking-[0.1em] text-faint sm:text-[10.5px] sm:tracking-[0.12em]';
const dd = 'm-0 text-[13px] text-soft sm:text-sm';
const corner = 'absolute size-2 border-cyan sm:size-2.5';

// The "Crew ID" badge: the background-removed portrait on a violet glow, with
// a scan line and a holographic sheen. Decorative motion only.
export default function CrewId() {
  return (
    <article
      aria-label="Crew ID"
      className="relative flex flex-col gap-3.5 overflow-hidden rounded-2xl border border-line-strong p-[18px] shadow-[0_20px_50px_-28px_rgba(187,154,247,0.5)] sm:gap-[18px] sm:rounded-[18px] sm:p-6 sm:shadow-[0_24px_60px_-30px_rgba(187,154,247,0.5)]"
      style={{
        background:
          'linear-gradient(160deg, rgba(36,40,59,0.94), rgba(17,18,29,0.97))',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-2 -ml-[18px] h-1.5 w-9 rounded-[3px] border border-line-strong bg-night sm:top-2.5 sm:-ml-[22px] sm:h-[7px] sm:w-11 sm:rounded"
      />
      <div className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] sm:text-[11px] sm:tracking-[0.16em]">
        <span className="text-faint">Crew manifest</span>
        <span className="font-bold text-violet">FZ-01</span>
      </div>

      <div className="relative flex items-center gap-3.5 sm:gap-5">
        <div
          className="relative h-[125px] w-[100px] flex-none overflow-hidden rounded-xl border-[1.5px] border-violet shadow-[0_0_22px_rgba(187,154,247,0.3)] sm:h-[165px] sm:w-[132px] sm:rounded-[14px] sm:shadow-[0_0_26px_rgba(187,154,247,0.3)]"
          style={{
            background:
              'radial-gradient(circle at 50% 30%, #3a2f6b 0%, #1a1b3a 55%, #11121d 100%)',
          }}
        >
          <Image
            src="/fahim-cutout.webp"
            alt="Portrait of Fahim"
            fill
            sizes="132px"
            className="object-cover object-[50%_20%]"
          />
          <div aria-hidden="true" className="fz-scanline" />
          <span
            aria-hidden="true"
            className={`${corner} left-1.5 top-1.5 border-l-[1.5px] border-t-[1.5px] sm:left-[7px] sm:top-[7px]`}
          />
          <span
            aria-hidden="true"
            className={`${corner} right-1.5 top-1.5 border-r-[1.5px] border-t-[1.5px] max-sm:hidden sm:right-[7px] sm:top-[7px]`}
          />
          <span
            aria-hidden="true"
            className={`${corner} bottom-1.5 left-1.5 border-b-[1.5px] border-l-[1.5px] max-sm:hidden sm:bottom-[7px] sm:left-[7px]`}
          />
          <span
            aria-hidden="true"
            className={`${corner} bottom-1.5 right-1.5 border-b-[1.5px] border-r-[1.5px] sm:bottom-[7px] sm:right-[7px]`}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-3">
          <div className="font-display text-sm font-semibold leading-[1.3] text-ink sm:text-base">
            {profile.fullName}
          </div>
          <dl className="m-0 grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-2.5 gap-y-[5px] sm:gap-x-3 sm:gap-y-[7px]">
            <dt className={dt}>Callsign</dt>
            <dd className="m-0 font-mono text-xs text-cyan sm:text-[13px]">
              {profile.callsign}
            </dd>
            <dt className={dt}>Role</dt>
            <dd className={dd}>{profile.role}</dd>
            <dt className={dt}>Base</dt>
            <dd className={dd}>Chittagong · {profile.timezone}</dd>
            <dt className={dt}>Status</dt>
            <dd className="m-0 text-[13px] text-green sm:text-sm">
              ● Open to remote
            </dd>
          </dl>
        </div>
      </div>

      <div className="relative flex items-center justify-between gap-3 border-t border-dashed border-line-strong pt-3 sm:gap-4 sm:pt-3.5">
        <div
          aria-hidden="true"
          className="h-5 w-[110px] opacity-70 sm:h-6 sm:w-[150px]"
          style={{
            background:
              'repeating-linear-gradient(90deg, #a9b1d6 0 2px, transparent 2px 4px, #a9b1d6 4px 5px, transparent 5px 9px, #a9b1d6 9px 12px, transparent 12px 14px)',
          }}
        />
        <span className="font-mono text-[9.5px] tracking-[0.1em] text-faint sm:text-[10.5px] sm:tracking-[0.12em]">
          IN SERVICE SINCE 2023
        </span>
      </div>
      <div aria-hidden="true" className="fz-holo" />
    </article>
  );
}
