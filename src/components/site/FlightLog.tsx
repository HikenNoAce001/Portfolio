import SpaceStation from '@/components/space/SpaceStation';
import { ArrowUpRightIcon } from '@/components/space/icons';
import { content } from '@/content';
import Chip from './Chip';
import SectionHead from './SectionHead';

const { experience } = content;

const card =
  'fz-card fz-reveal flex flex-col gap-3 rounded-2xl border border-line p-5 sm:flex-row sm:flex-wrap sm:gap-8 sm:rounded-[18px] sm:p-8';
const h3 = 'm-0 font-display text-lg font-semibold text-ink sm:text-2xl';
const body =
  'text-[15px] leading-[1.5] text-soft sm:text-base sm:leading-[1.55]';

function Highlights({
  items,
  className,
}: {
  items: string[];
  className: string;
}) {
  return (
    <ul
      className={`${body} m-0 flex list-none flex-col gap-2 p-0 sm:gap-2.5 ${className}`}
    >
      {items.map((h) => (
        <li key={h} className="flex gap-2.5 sm:gap-3">
          <span aria-hidden="true" className="font-mono text-blue">
            ▸
          </span>
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FlightLog() {
  return (
    <section
      id="log"
      className="relative flex -scroll-mt-10 flex-col gap-7 py-16 sm:-scroll-mt-24 sm:gap-14 sm:py-[120px]"
    >
      <SpaceStation className="max-sm:hidden" />
      <SectionHead stop="log" />
      <div className="relative flex flex-col gap-3.5 pl-[26px] sm:gap-7 sm:pl-10">
        <h2 className="fz-h2 fz-reveal m-0 mb-1.5 font-display text-[28px] font-semibold leading-[1.15] tracking-[-0.015em] text-ink sm:mb-3 sm:text-[44px] sm:leading-[1.12]">
          Where I’ve been flying.
        </h2>

        {experience.map((role) => (
          <article key={role.id} className={`${card} bg-panel/80`}>
            {/* phones: date and status share a row; desktop: a column */}
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono sm:flex-[0_1_200px] sm:flex-col sm:flex-nowrap sm:items-start sm:justify-start sm:gap-2.5">
              <span className="text-xs font-bold text-violet sm:text-sm">
                {role.period}
                <span className="sm:hidden"> · {role.placeShort}</span>
              </span>
              <span className="text-xs tracking-[0.1em] text-faint max-sm:hidden">
                {role.place.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </span>
              {role.current && (
                <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold tracking-[0.12em] text-green sm:mt-1 sm:gap-2 sm:text-[11px]">
                  <span
                    aria-hidden="true"
                    className="fz-pulse size-1.5 rounded-full bg-green sm:size-[7px]"
                  />
                  CURRENT<span className="max-sm:hidden"> MISSION</span>
                </span>
              )}
            </div>
            <div className="flex min-w-0 flex-col gap-3 sm:flex-[999_1_480px] sm:gap-4">
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <h3 className={h3}>{role.title}</h3>
                <span className="text-[15px] text-muted sm:text-[17px]">
                  {role.org}
                </span>
              </div>
              <Highlights items={role.highlights} className="max-sm:hidden" />
              {role.highlightsShort.length > 1 ? (
                <Highlights
                  items={role.highlightsShort}
                  className="sm:hidden"
                />
              ) : (
                <p className={`${body} m-0 sm:hidden`}>
                  {role.highlightsShort[0]}
                </p>
              )}
              {role.stack.length > 0 && (
                <div className="flex flex-wrap gap-2 max-sm:hidden">
                  {role.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              )}
              {role.link && (
                <a
                  href={role.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center gap-1.5 self-start text-[15px] font-semibold text-blue transition-colors hover:text-violet"
                >
                  {role.link.label}
                  <ArrowUpRightIcon />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
