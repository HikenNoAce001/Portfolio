import { content } from '@/content';
import Duo from './Duo';

const { profile } = content;

// Four lines of rocket, colored top to bottom like the website's hero ship.
const ROCKET = {
  nose: String.raw`          .
         / \
        /   \
       / .-. ${'\\'}`,
  body: String.raw`      | ( o ) |
      |  '-'  |
      |  F Z  |
      |  0 1  |`,
  fins: String.raw`     /|       |\
    / |   |   | \
   /__|___|___|__${'\\'}`,
  flame: String.raw`       \  |  /
        \ | /
         \|/
          '`,
};

const SWATCH = [
  '#15161e',
  '#f7768e',
  '#9ece6a',
  '#e0af68',
  '#7aa2f7',
  '#bb9af7',
  '#7dcfff',
  '#a9b1d6',
];

interface Row {
  key: string;
  d: string;
  m?: string; // omitted: the row is desktop-only
  tone?: string;
}

const ROWS: Row[] = [
  { key: 'OS', d: '0xzhosain OS x86_64 · arch btw', m: 'arch btw' },
  { key: 'Host', d: profile.baseLine, m: profile.city.split(',')[0] },
  { key: 'Uptime', d: '3 years in production', m: '3 yrs prod' },
  { key: 'Packages', d: '16 (react, next, ts, fastapi, postgres…)' },
  { key: 'WM', d: 'Hyprland · Tokyo Night', m: 'Hyprland' },
  {
    key: 'Focus',
    d: 'backend & AI engineering',
    m: 'backend & AI',
    tone: 'text-ink',
  },
  {
    key: 'Status',
    d: `● ${profile.availability.toLowerCase()}`,
    m: '● remote',
    tone: 'text-green',
  },
];

// `fastfetch`: the ASCII rocket beside a spec sheet that is really a résumé.
export default function Fastfetch() {
  return (
    <div className="mt-2.5 flex flex-wrap items-start gap-[26px] max-sm:mt-2 max-sm:flex-nowrap max-sm:gap-3">
      <pre
        role="img"
        aria-label="ASCII rocket"
        className="m-0 whitespace-pre font-[inherit] text-[12.5px] font-bold leading-[1.24] max-sm:flex-none max-sm:text-[9.5px] max-sm:leading-[1.22]"
      >
        <span className="text-violet">{ROCKET.nose}</span>
        {'\n'}
        <span className="text-blue">{ROCKET.body}</span>
        {'\n'}
        <span className="text-cyan">{ROCKET.fins}</span>
        {'\n'}
        <span className="tm-flick text-violet">{ROCKET.flame}</span>
      </pre>

      <div className="flex min-w-0 flex-col text-[13px] leading-[1.5] max-sm:flex-1 max-sm:text-[11px]">
        <div>
          <span className="font-extrabold text-violet">fahim</span>
          <span className="text-soft">@</span>
          <span className="font-extrabold text-blue">{profile.callsign}</span>
        </div>
        <div className="text-line-strong">
          <Duo d="───────────────────────" m="──────────────" />
        </div>
        {ROWS.map((r) => (
          <div
            key={r.key}
            className={`flex gap-2.5 max-sm:gap-1.5 ${r.m ? '' : 'max-sm:hidden'}`}
          >
            <span className="w-[9ch] flex-none font-bold text-blue max-sm:w-[6ch]">
              {r.key}
            </span>
            <span className={r.tone}>
              <Duo d={r.d} m={r.m ?? r.d} />
            </span>
          </div>
        ))}
        <div aria-hidden="true" className="mt-2.5 flex max-sm:mt-1.5">
          {SWATCH.map((c) => (
            <span
              key={c}
              className="h-3.5 w-6 max-sm:h-2.5 max-sm:w-3.5"
              style={{ background: c }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
