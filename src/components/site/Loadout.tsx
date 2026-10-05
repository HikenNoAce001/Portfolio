import { content } from '@/content';
import Chip from './Chip';

const { loadout, loadoutShort } = content;

// "Loadout": the stack, grouped on desktop and as one shorter, flat sweep on
// phones. Chips light up one after another (space.css .fz-scan).
export default function Loadout() {
  let n = 0;

  return (
    <div className="flex flex-col gap-3.5 rounded-2xl border border-line bg-panel/70 p-5 sm:gap-[18px] sm:rounded-[18px] sm:p-7">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-faint sm:text-xs">
        <span>Loadout</span>
        <span className="max-sm:hidden">stack.json</span>
      </div>

      <div className="flex flex-wrap gap-[7px] sm:hidden">
        {loadoutShort.map(({ text, tone }, i) => (
          <Chip key={text} tone={tone} bright delay={i * 0.25}>
            {text}
          </Chip>
        ))}
      </div>

      <div className="flex flex-col gap-[18px] max-sm:hidden">
        {[loadout.slice(0, 2), loadout.slice(2)].map((row, r) => (
          <div
            key={r}
            className={
              r === 0 ? 'flex flex-col gap-[18px]' : 'flex flex-wrap gap-6'
            }
          >
            {row.map((group) => (
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
