import { content } from '@/content';
import Chip from './Chip';

const { loadout, loadoutShort } = content;

// Desktop rows: Languages, Frontend, Backend, Mobile + Tools side by side,
// then AI coding agents (indexes into `loadout`).
const ROWS = [[0], [1], [2], [3, 4], [5]];
const label =
  'font-mono text-[11px] uppercase tracking-[0.14em] text-faint sm:text-xs';

// "Loadout": the stack, grouped on desktop and as shorter, flat sweeps on
// phones. Chips light up one after another (space.css .fz-scan).
export default function Loadout() {
  let n = 0;
  let m = 0;

  return (
    <div className="flex flex-col gap-3.5 rounded-2xl border border-line bg-panel/70 p-5 sm:gap-[18px] sm:rounded-[18px] sm:p-7">
      <div className={`flex items-center justify-between ${label}`}>
        <span>Loadout</span>
        <span className="max-sm:hidden">stack.json</span>
      </div>

      {loadoutShort.map((sweep, s) => (
        <div key={s} className="flex flex-col gap-3.5 sm:hidden">
          {sweep.label && <div className={label}>{sweep.label}</div>}
          <div className="flex flex-wrap gap-[7px]">
            {sweep.items.map(({ text, tone }) => (
              <Chip key={text} tone={tone} bright delay={m++ * 0.25}>
                {text}
              </Chip>
            ))}
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-[18px] max-sm:hidden">
        {ROWS.map((row) => (
          <div key={row.join()} className="flex flex-wrap gap-6">
            {row
              .map((g) => loadout[g])
              .map((group) => (
                <div key={group.label} className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-ink">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Chip
                        key={item}
                        tone={group.tone}
                        bright
                        delay={n++ * 0.25}
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
