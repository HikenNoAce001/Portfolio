'use client';

import { useRouter } from 'next/navigation';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
  type MouseEvent,
} from 'react';
import { ArrowRightIcon } from '@/components/space/icons';
import ViewToggleKey from '@/components/ViewToggleKey';
import { useClock } from '@/lib/useClock';
import {
  compactChips,
  desktopChips,
  firstMission,
  runCommand,
  tipLines,
  type Entry,
  type PaneName,
} from '@/lib/terminal/commands';
import Fastfetch from './Fastfetch';
import { OutputLine } from './Output';
import { BtopPane, CavaPane, CavaStrip, NowPlaying, YaziPane } from './Panes';
import PromptLine from './Prompt';
import { player } from './usePlayer';
import Wallpaper from './Wallpaper';
import Waybar from './Waybar';
import WhoAmI, { PORTRAIT_SRC } from './WhoAmI';

type Focus = 'term' | PaneName;

interface State {
  input: string;
  entries: Entry[];
  nextId: number;
  past: string[];
  idx: number; // position while walking history, -1 = typing fresh
  sel: string; // mission highlighted in yazi
  focus: Focus;
  open: Record<PaneName, boolean>;
}

const PHONE = '(max-width: 719.98px)';
const isPhone = () => window.matchMedia(PHONE).matches;

const initial: State = {
  input: '',
  entries: [
    { id: 1, cmd: 'fastfetch', kind: 'fetch', lines: [] },
    { id: 2, cmd: 'echo $TIP', kind: 'text', lines: tipLines },
  ],
  nextId: 3,
  past: ['fastfetch'],
  idx: -1,
  sel: firstMission,
  focus: 'term',
  open: { files: false, btop: false, cava: false },
};

const TITLES: Record<Focus, string> = {
  term: 'kitty — ~/portfolio',
  files: 'yazi — ~/missions',
  btop: 'btop — telemetry',
  cava: 'cava — oceanis',
};

// A Hyprland desktop with one centred kitty window. Commands that need more
// room (missions, btop, cava) tile extra panes beside it; `close` tidies up.
export default function Terminal() {
  const router = useRouter();
  const clock = useClock();
  const [s, setS] = useState<State>(initial);

  const scrollRef = useRef<HTMLDivElement>(null);
  const deskInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);

  const hasBottom = s.open.btop || s.open.cava;
  const hasSide = s.open.files || hasBottom;

  const focusInput = useCallback(() => {
    // Only the input that is actually on screen can take focus.
    const el = [deskInput.current, phoneInput.current].find(
      (i) => i && i.offsetParent !== null,
    );
    el?.focus();
  }, []);

  // Land in the prompt on desktop; on a phone that would pop the keyboard.
  useEffect(() => {
    if (!isPhone()) deskInput.current?.focus();
    // Warm the portrait so `whoami` never pops in an empty circle.
    const img = new window.Image();
    img.src = PORTRAIT_SRC;
  }, []);

  // Leaving the terminal stops the music.
  useEffect(() => () => player().reset(), []);

  // Keep the newest output in view.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [s.entries]);

  const exec = useCallback((raw: string) => {
    const cmd = raw.trim();
    const res = runCommand(cmd, { compact: isPhone() });
    // Synchronous, still inside the submit/click handler: browsers only allow
    // audio that starts from a user gesture.
    if (res.audio === 'play') player().start();
    else if (res.audio === 'pause') player().pause();
    setS((p) => {
      const past = cmd ? [...p.past, cmd] : p.past;
      if (res.clear) {
        return { ...p, entries: [], input: '', past, idx: -1, focus: 'term' };
      }
      const open = res.closeAll
        ? { files: false, btop: false, cava: false }
        : res.open
          ? { ...p.open, [res.open]: true }
          : p.open;
      return {
        ...p,
        entries: [
          ...p.entries,
          { id: p.nextId, cmd, kind: res.kind ?? 'text', lines: res.lines },
        ],
        nextId: p.nextId + 1,
        input: '',
        past,
        idx: -1,
        sel: res.sel ?? p.sel,
        focus: 'term',
        open,
      };
    });
  }, []);

  const runChip = (cmd: string) => {
    exec(cmd);
    if (!isPhone()) focusInput();
  };

  const closePane = (name: PaneName) => {
    if (name === 'cava') player().pause();
    setS((p) => ({
      ...p,
      open: { ...p.open, [name]: false },
      focus: 'term',
    }));
    focusInput();
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    exec(s.input);
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === '`' && !s.input && !e.ctrlKey && !e.metaKey && !e.altKey) {
      // An empty prompt has nothing to type, so backtick flips views.
      e.preventDefault();
      router.push('/');
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      exec('clear');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setS((p) => {
        if (!p.past.length) return p;
        const a = p.idx < 0 ? p.past.length - 1 : Math.max(0, p.idx - 1);
        return { ...p, idx: a, input: p.past[a] };
      });
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setS((p) => {
        if (p.idx < 0) return p;
        const b = p.idx + 1;
        return b >= p.past.length
          ? { ...p, idx: -1, input: '' }
          : { ...p, idx: b, input: p.past[b] };
      });
    }
  };

  // Clicking empty terminal space focuses the prompt, unless the click is a
  // text selection or a link.
  const onOutputClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest('a, button')) return;
    if (window.getSelection()?.toString()) return;
    focusInput();
  };

  const inputProps = {
    type: 'text',
    value: s.input,
    autoComplete: 'off',
    autoCapitalize: 'none',
    autoCorrect: 'off',
    spellCheck: false,
    'aria-label': 'Terminal command',
    onChange: (e: { target: { value: string } }) =>
      setS((p) => ({ ...p, input: e.target.value, idx: -1 })),
    onKeyDown: onKey,
    onFocus: () =>
      setS((p) => (p.focus === 'term' ? p : { ...p, focus: 'term' })),
  } as const;

  return (
    <main className="tm-root relative flex h-dvh min-h-[640px] flex-col gap-2.5 overflow-hidden bg-night p-2.5 font-mono text-ink max-sm:min-h-0 max-sm:gap-2 max-sm:p-2">
      <h1 className="sr-only">Fahim’s terminal</h1>
      <Wallpaper />
      <Waybar title={TITLES[s.focus]} />

      <div className={`tm-wsp ${hasSide ? 'tm-wide' : ''}`}>
        {/* kitty */}
        <div
          className={`tm-pane flex-[1.35_1_0%] ${s.focus === 'term' ? 'tm-on' : ''}`}
          onPointerDown={() => setS((p) => ({ ...p, focus: 'term' }))}
        >
          <div className="tm-in">
            <span className="tm-tag !right-3.5" aria-hidden="true">
              kitty
            </span>

            <div
              ref={scrollRef}
              onClick={onOutputClick}
              className="tm-out min-h-0 flex-1 overflow-y-auto break-words px-5 pb-2.5 pt-4 text-[13.5px] leading-[1.55] text-soft max-sm:px-3 max-sm:pb-2 max-sm:pt-3 max-sm:text-xs"
            >
              <div role="log" aria-label="Terminal output">
                {s.entries.map((e) => (
                  <div key={e.id} className="mb-3.5 max-sm:mb-3">
                    <PromptLine />
                    <div>
                      <span className="text-line-strong">╰─</span>
                      <span className="font-bold text-green">❯ </span>
                      <span className="whitespace-pre-wrap text-ink">
                        {e.cmd}
                      </span>
                    </div>
                    {e.kind === 'fetch' && <Fastfetch />}
                    {e.kind === 'who' && <WhoAmI />}
                    {e.lines.map((l, i) => (
                      <OutputLine key={i} l={l} />
                    ))}
                  </div>
                ))}
              </div>

              {/* live prompt (desktop; phones get the bar below) */}
              <form onSubmit={onSubmit} className="tm-inrow max-sm:hidden">
                <PromptLine
                  right={
                    <span className="ml-auto text-[11.5px] text-faint">
                      {clock?.short}
                    </span>
                  }
                />
                <div className="flex items-center">
                  <label
                    htmlFor="tm-cmd-d"
                    className="flex-none whitespace-pre"
                  >
                    <span className="text-line-strong">╰─</span>
                    <span className="tm-caret font-bold text-green">❯ </span>
                  </label>
                  <input
                    {...inputProps}
                    ref={deskInput}
                    id="tm-cmd-d"
                    placeholder="type whoami…"
                    className="h-7 min-w-0 flex-1 border-none bg-transparent p-0 font-[inherit] text-[13.5px] text-ink caret-violet focus-visible:outline-none placeholder:text-faint"
                  />
                </div>
              </form>
            </div>

            <NowPlaying />
            <CavaStrip />

            {/* tmux status line (desktop) */}
            <div className="flex min-h-8 flex-none items-stretch overflow-x-auto border-t border-line bg-[#1a1b26] text-xs max-sm:hidden">
              <span className="flex flex-none items-center bg-blue px-3 font-extrabold text-panel">
                [fz] 0:zsh*
              </span>
              <div className="flex items-stretch">
                {desktopChips.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => runChip(c)}
                    className="tm-tmux flex flex-none items-center whitespace-nowrap border-none bg-transparent px-[11px] font-[inherit] text-xs text-muted"
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* quick commands (phone) */}
            <div
              role="group"
              aria-label="Quick commands"
              className="tm-chips flex flex-none gap-1.5 overflow-x-auto border-t border-line bg-[#1a1b26] px-2.5 py-2 sm:hidden"
            >
              {compactChips.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => runChip(c)}
                  className="flex min-h-10 flex-none items-center gap-1.5 whitespace-nowrap rounded-[9px] border border-line-strong bg-panel/90 px-3 font-[inherit] text-xs text-soft"
                >
                  <span className="text-green">❯</span>
                  {c}
                </button>
              ))}
            </div>

            {/* prompt bar (phone) */}
            <form
              onSubmit={onSubmit}
              className="flex flex-none items-center gap-1.5 border-t border-line py-1.5 pl-3 pr-1.5 sm:hidden"
            >
              <label
                htmlFor="tm-cmd-m"
                className="flex-none text-[13px] font-bold text-green"
              >
                ❯
              </label>
              <input
                {...inputProps}
                ref={phoneInput}
                id="tm-cmd-m"
                enterKeyHint="send"
                placeholder="type help…"
                className="h-11 min-w-0 flex-1 border-none bg-transparent p-0 font-[inherit] text-base text-ink caret-violet focus-visible:outline-none placeholder:text-faint"
              />
              <button
                type="submit"
                aria-label="Run command"
                className="flex size-11 flex-none items-center justify-center rounded-[10px] border-none bg-gradient-to-br from-blue to-violet text-panel"
              >
                <ArrowRightIcon size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* side panes, spawned by commands */}
        {hasSide && (
          <div className="flex min-w-0 flex-1 basis-0 flex-col gap-2.5 max-sm:hidden">
            {s.open.files && (
              <YaziPane
                sel={s.sel}
                focused={s.focus === 'files'}
                onFocus={() => setS((p) => ({ ...p, focus: 'files' }))}
                onClose={() => closePane('files')}
                onPick={(key) =>
                  setS((p) => ({ ...p, sel: key, focus: 'files' }))
                }
              />
            )}
            {hasBottom && (
              <div className="flex min-h-0 flex-1 basis-0 gap-2.5">
                {s.open.cava && (
                  <CavaPane
                    focused={s.focus === 'cava'}
                    onFocus={() => setS((p) => ({ ...p, focus: 'cava' }))}
                    onClose={() => closePane('cava')}
                  />
                )}
                {s.open.btop && (
                  <BtopPane
                    focused={s.focus === 'btop'}
                    onFocus={() => setS((p) => ({ ...p, focus: 'btop' }))}
                    onClose={() => closePane('btop')}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <ViewToggleKey to="/" />
    </main>
  );
}
