import { content } from '@/content';
import Chip from './Chip';
import SectionHead from './SectionHead';

const { education } = content.profile;
const { thesis } = education;

const card =
  'fz-card fz-reveal flex flex-col gap-3 rounded-2xl border border-line bg-panel/80 p-5 sm:gap-4 sm:rounded-[18px] sm:p-[30px]';
const meta =
  'flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] tracking-[0.12em] sm:gap-3 sm:text-xs';
const h3 =
  'm-0 font-display text-lg font-semibold leading-[1.3] text-ink sm:text-2xl sm:leading-[1.25]';
const summary =
  'm-0 text-[15px] leading-[1.55] text-soft sm:text-base sm:leading-[1.6]';

// Earth–Moon line with the L1 balance point, about 326,000 of 384,400 km out.
function L1Marker() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 280 64"
      className="pointer-events-none absolute right-0 top-10 h-16 w-[280px] opacity-70 max-sm:hidden"
    >
      <circle cx="16" cy="32" r="10" fill="#3d59a1" />
      <path
        d="M7 29 C12 25 20 25 25 29"
        fill="none"
        stroke="#7dcfff"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      <path
        d="M32 32 H252"
        stroke="#3b4261"
        strokeWidth="1.5"
        strokeDasharray="3 6"
      />
      <circle cx="264" cy="32" r="7" fill="#9099c4" />
      <circle
        cx="226"
        cy="32"
        r="9"
        fill="none"
        stroke="#7dcfff"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <circle className="fz-blink" cx="226" cy="32" r="3.5" fill="#7dcfff" />
      <text
        x="226"
        y="12"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="10"
        letterSpacing="1"
        fill="#737aa2"
      >
        L1
      </text>
    </svg>
  );
}

// Federated learning in one picture: clients report to one aggregator.
const CLIENTS = [
  { x: 50, y: 12, c: '#7dcfff', d: '0s' },
  { x: 86, y: 38, c: '#c0caf5', d: '.5s' },
  { x: 72, y: 84, c: '#7dcfff', d: '1s' },
  { x: 28, y: 84, c: '#c0caf5', d: '1.5s' },
  { x: 14, y: 38, c: '#7dcfff', d: '.8s' },
];

function FederatedDiagram() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className="size-16 flex-none sm:size-24"
    >
      <path
        d={CLIENTS.map((n) => `M50 50 L${n.x} ${n.y}`).join(' ')}
        stroke="#3b4261"
        strokeWidth="1.3"
        strokeDasharray="2 3"
      />
      <circle
        cx="50"
        cy="50"
        r="9.5"
        fill="#2a2347"
        stroke="#bb9af7"
        strokeWidth="1.6"
      />
      {CLIENTS.map((n) => (
        <circle
          key={`${n.x}-${n.y}`}
          className="fz-tw"
          cx={n.x}
          cy={n.y}
          r="4.5"
          fill={n.c}
          style={{ animationDelay: n.d }}
        />
      ))}
    </svg>
  );
}

// Hyphenated terms (CIFAR-10) shouldn't break at the hyphen.
function NoBreakHyphens({ text }: { text: string }) {
  return text.split(/(\S+-\S+)/).map((part, i) =>
    i % 2 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

// Stop 04 of the journey: the degree and the thesis, between Missions and
// Contact (the same order as the résumé).
export default function Education() {
  return (
    <section
      id="edu"
      className="relative flex -scroll-mt-10 flex-col gap-7 py-16 sm:-scroll-mt-24 sm:gap-14 sm:py-[120px]"
    >
      <L1Marker />
      <SectionHead stop="edu" />
      <div className="relative flex flex-col gap-3.5 pl-[26px] sm:gap-7 sm:pl-10">
        <h2 className="fz-h2 fz-reveal m-0 mb-1.5 font-display text-[28px] font-semibold leading-[1.15] tracking-[-0.015em] text-ink sm:mb-3 sm:text-[44px] sm:leading-[1.12]">
          Academic background.
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(480px,100%),1fr))] gap-3.5 sm:gap-6">
          <article className={card}>
            <div className={meta}>
              <span className="font-bold text-violet">
                {education.graduated}
              </span>
              <span className="text-faint">{education.place}</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className={h3}>{education.degree}</h3>
              <span className="text-[15px] leading-[1.45] text-muted sm:text-[17px]">
                {education.school}
              </span>
            </div>
            <div className="border-t border-line pt-3 font-mono text-xs tracking-[0.06em] text-muted sm:mt-auto sm:pt-4 sm:text-[13px]">
              {education.gpa} CGPA
            </div>
          </article>

          <article className={card}>
            <div className={meta}>
              <span className="text-faint">UNDERGRADUATE THESIS</span>
              <span className="flex items-center gap-1.5 rounded-full bg-violet/[0.12] px-[9px] py-[3px] text-violet sm:px-2.5 sm:py-1">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-violet"
                />
                RESEARCH
              </span>
            </div>
            <div className="flex items-start gap-3.5 sm:gap-5">
              <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                <h3 className={h3}>{thesis.title}</h3>
                <p className={`${summary} max-sm:hidden`}>
                  <NoBreakHyphens text={thesis.summary} />
                </p>
              </div>
              <FederatedDiagram />
            </div>
            <p className={`${summary} sm:hidden`}>
              <NoBreakHyphens text={thesis.summary} />
            </p>
            <div className="flex flex-wrap gap-2 max-sm:hidden sm:mt-auto">
              {thesis.tags.map((t) => (
                <Chip key={t} small>
                  {t}
                </Chip>
              ))}
            </div>
            {/* phone: one line of tags; each tag stays whole when it wraps */}
            <div className="font-mono text-xs leading-[1.6] text-muted sm:hidden">
              {thesis.tags.map((t, i) => (
                <span key={t}>
                  {i > 0 && ' · '}
                  <span className="whitespace-nowrap">{t}</span>
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
