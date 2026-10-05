import { content } from '@/content';
import { CloseIcon, FolderIcon } from '@/components/space/icons';
import { termMissions } from '@/lib/terminal/commands';
import { player, useBars, usePlayerState, useProgress } from './usePlayer';

const { profile, track } = content;

interface PaneProps {
  focused: boolean;
  onFocus: () => void;
  onClose: () => void;
}

function CloseButton({
  label,
  onClose,
}: {
  label: string;
  onClose: () => void;
}) {
  return (
    <button
      type="button"
      className="tm-close"
      aria-label={label}
      onClick={onClose}
    >
      <CloseIcon size={12} />
    </button>
  );
}

// ── yazi: the missions as a folder list with a README preview ────────────

const STATE_TONE = {
  live: 'text-green',
  design: 'text-violet',
  private: 'text-muted',
};

export function YaziPane({
  focused,
  onFocus,
  onClose,
  sel,
  onPick,
}: PaneProps & { sel: string; onPick: (key: string) => void }) {
  const idx = Math.max(
    0,
    termMissions.findIndex((m) => m.key === sel),
  );
  const m = termMissions[idx];

  return (
    <div
      className={`tm-pane tm-popin flex-[1.5_1_0%] ${focused ? 'tm-on' : ''}`}
      onPointerDown={onFocus}
    >
      <div className="tm-in text-[13px]">
        <span className="tm-tag" aria-hidden="true">
          yazi
        </span>
        <CloseButton label="Close file manager" onClose={onClose} />
        <div className="flex-none px-3.5 pb-2 pt-[11px] font-bold text-blue">
          ~/missions/<span className="text-ink">{m.key}</span>
        </div>
        <div className="flex min-h-0 flex-1">
          <nav
            aria-label="Missions"
            className="flex flex-[0_0_172px] flex-col gap-0.5 border-r border-line px-1.5 py-1"
          >
            {termMissions.map((f) => (
              <button
                key={f.key}
                type="button"
                className="tm-frow"
                aria-current={f.key === m.key}
                onClick={() => onPick(f.key)}
              >
                <FolderIcon size={15} className="flex-none" />
                <span className="min-w-0 truncate">{f.key}/</span>
              </button>
            ))}
          </nav>
          <div className="tm-out flex min-w-0 flex-1 flex-col gap-2.5 overflow-y-auto px-4 py-2.5 leading-normal">
            <div className="text-[11.5px] text-faint">README.md</div>
            <div className="text-base font-extrabold text-violet">
              # {m.title}
            </div>
            <div className={`text-xs ${STATE_TONE[m.state]}`}>● {m.status}</div>
            <div className="text-soft">{m.desc}</div>
            <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
              {m.points.map((p) => (
                <li key={p} className="text-muted">
                  <span className="text-blue">- </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="text-cyan">{m.stack}</div>
            {m.link && (
              <a
                href={m.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="tm-link w-fit text-blue underline decoration-current"
              >
                {m.link.label} ↗
              </a>
            )}
          </div>
        </div>
        <div className="flex min-h-[26px] flex-none items-stretch border-t border-line bg-[#1a1b26] text-[11.5px]">
          <span className="flex items-center bg-blue px-2.5 font-extrabold text-panel">
            NOR
          </span>
          <span className="flex items-center px-2.5 text-muted">
            drwxr-xr-x {' '}fahim
          </span>
          <span className="ml-auto flex items-center px-2.5 text-faint">
            {idx + 1}/{termMissions.length}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── cava: a visualizer for the one track the terminal plays ──────────────
// The bars dance on CSS until the music starts; then the player drives them
// from the real spectrum (lib/terminal/player.ts).

export function cavaBars(n: number) {
  return Array.from({ length: n }, (_, i) => ({
    height: `${30 + ((i * 47) % 70)}%`,
    animationDuration: `${(0.42 + ((i * 29) % 50) / 100).toFixed(2)}s`,
    animationDelay: `${(-((i * 17) % 90) / 100).toFixed(2)}s`,
  }));
}

const DESKTOP_BARS = cavaBars(24);
const PHONE_BARS = cavaBars(30);

export function CavaStrip() {
  const bars = useBars<HTMLDivElement>('dance');
  return (
    <div
      ref={bars}
      aria-hidden="true"
      className="flex h-[26px] flex-none items-end gap-0.5 px-3 opacity-85 sm:hidden"
    >
      {PHONE_BARS.map((s, i) => (
        <span key={i} className="tm-cbar" style={s} />
      ))}
    </div>
  );
}

function PlayButton({ className = '' }: { className?: string }) {
  const { playing } = usePlayerState();
  return (
    <button
      type="button"
      onClick={() => player().toggle()}
      aria-label={playing ? 'Pause music' : 'Play music'}
      aria-pressed={playing}
      className={`tm-play ${className}`}
    >
      {playing ? (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}

// The credit the track's licence asks for (CC BY-NC-ND 4.0).
function Credit() {
  return (
    <span className="min-w-0 truncate">
      <a
        href={track.page}
        target="_blank"
        rel="noopener noreferrer"
        className="tm-link text-violet"
      >
        ♪ {track.title} — {track.artist}
      </a>
      <span className="text-faint"> · </span>
      <a
        href={track.licenseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="tm-link text-faint"
      >
        {track.license}
      </a>
    </span>
  );
}

// Phones have no cava pane, so once the music starts this bar holds the
// credit and the pause button (sits just above the visualizer strip).
export function NowPlaying() {
  const { started } = usePlayerState();
  if (!started) return null;
  return (
    <div className="flex flex-none items-center gap-2 border-t border-line px-3 py-1 text-[11px] sm:hidden">
      <Credit />
      <PlayButton className="ml-auto" />
    </div>
  );
}

export function CavaPane({ focused, onFocus, onClose }: PaneProps) {
  const bars = useBars<HTMLDivElement>('flat');
  const progress = useProgress<HTMLDivElement>();
  return (
    <div
      className={`tm-pane tm-popin flex-1 ${focused ? 'tm-on' : ''}`}
      onPointerDown={onFocus}
    >
      <div className="tm-in px-3.5 pb-3 pt-9">
        <span className="tm-tag" aria-hidden="true">
          cava
        </span>
        <CloseButton label="Close visualizer" onClose={onClose} />
        <div
          ref={bars}
          aria-hidden="true"
          className="flex min-h-0 flex-1 items-end gap-[3px]"
        >
          {DESKTOP_BARS.map((s, i) => (
            <span key={i} className="tm-cbar" style={s} />
          ))}
        </div>
        <div className="mt-3 flex flex-none flex-col gap-1.5 text-[11.5px]">
          <div className="flex items-center gap-2">
            <Credit />
            <PlayButton className="ml-auto" />
          </div>
          <div
            aria-hidden="true"
            className="h-[3px] overflow-hidden rounded-sm bg-line"
          >
            <div
              ref={progress}
              className="tm-prog h-full bg-gradient-to-r from-blue to-violet"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── btop: the telemetry panel ────────────────────────────────────────────

const SPARK = Array.from({ length: 80 }, (_, k) => {
  const j = k % 40;
  const v =
    18 + Math.round(40 + 34 * Math.sin(j * 0.55) + 18 * Math.sin(j * 1.7));
  return Math.min(v, 100);
});

function Meter({
  label,
  value,
  pct,
  up,
  delay,
}: {
  label: string;
  value: string;
  pct: number;
  up?: boolean;
  delay: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between gap-2">
        <span className="text-blue">{label}</span>
        <span className="text-green">{value}</span>
      </div>
      <div className="h-[5px] overflow-hidden rounded-[3px] bg-line">
        <div
          className="tm-meter h-full"
          style={{
            width: `${pct}%`,
            animationDelay: delay,
            background: up
              ? 'linear-gradient(90deg, #7dcfff, #7aa2f7)'
              : 'linear-gradient(90deg, #9ece6a, #73daca)',
          }}
        />
      </div>
    </div>
  );
}

export function BtopPane({ focused, onFocus, onClose }: PaneProps) {
  const [features, users, api, bugs] = profile.telemetry;
  return (
    <div
      className={`tm-pane tm-popin flex-1 ${focused ? 'tm-on' : ''}`}
      onPointerDown={onFocus}
    >
      <div className="tm-in gap-2.5 px-3.5 pb-3 pt-9 text-xs">
        <span className="tm-tag" aria-hidden="true">
          btop
        </span>
        <CloseButton label="Close telemetry" onClose={onClose} />
        <div className="flex-none text-faint">telemetry · lentho.com</div>
        <div
          aria-hidden="true"
          className="h-[54px] flex-none overflow-hidden border-b border-line"
        >
          <div className="tm-spark">
            {SPARK.map((h, i) => (
              <span key={i} className="tm-sbar" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[9px]">
          <div className="flex justify-between gap-2">
            <span className="text-blue">features</span>
            <span className="text-ink">
              {features.value}
              {features.suffix} shipped
            </span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-blue">users/day</span>
            <span className="text-ink">
              {users.value.toLocaleString('en-US')}
              {users.suffix}
            </span>
          </div>
          <Meter
            label="api time"
            value={`▼ ${api.value}%`}
            pct={api.value}
            delay=".3s"
          />
          <Meter
            label="prod bugs"
            value={`▼ ${bugs.value}%`}
            pct={bugs.value}
            delay=".5s"
          />
          <Meter label="login ok" value="▲ 25%" pct={25} up delay=".7s" />
        </div>
      </div>
    </div>
  );
}
