import { content } from '@/content';
import type { MissionStatus } from '@/content';

// The terminal's brain: a pure function from a typed command to output. It
// knows nothing about React, so the component only has to render the result.

const { profile, experience, projects, loadout, track } = content;

export type LineTone =
  | 'star'
  | 'soft'
  | 'dim'
  | 'faint'
  | 'violet'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'red';

export interface OutLine {
  t: string;
  tone: LineTone;
  /** Makes the whole line a link. */
  href?: string;
  /** `href` is an in-app route (use next/link) rather than a plain URL. */
  route?: boolean;
  /** Show on desktop only (phones have no panes to talk about). */
  wide?: boolean;
}

export type PaneName = 'files' | 'btop' | 'cava';
export type EntryKind = 'text' | 'fetch' | 'who';

export interface Entry {
  id: number;
  cmd: string;
  kind: EntryKind;
  lines: OutLine[];
}

export interface CommandResult {
  kind?: EntryKind;
  lines: OutLine[];
  open?: PaneName;
  /** Mission folder to preview in yazi. */
  sel?: string;
  closeAll?: boolean;
  clear?: boolean;
  /** Start or pause the music. Run inside the input handler so browsers
   * allow playback. */
  audio?: 'play' | 'pause';
}

export interface RunOptions {
  /** Phone layout: no side panes, so panes' content prints inline instead. */
  compact: boolean;
}

// ── lines ────────────────────────────────────────────────────────────────

const L = (t: string, tone: LineTone = 'soft', rest?: Partial<OutLine>) => ({
  t,
  tone,
  ...rest,
});

// ── missions (the yazi folders) ──────────────────────────────────────────

export interface TermMission {
  key: string; // folder name
  aliases: string[];
  title: string;
  status: string; // "live · professional"
  state: MissionStatus;
  desc: string;
  points: string[];
  stack: string; // "next.js · typescript · …"
  link?: { href: string; label: string };
}

export const termMissions: TermMission[] = projects
  .filter((p) => p.mission)
  .sort((a, b) => a.mission!.id.localeCompare(b.mission!.id))
  .map((p) => {
    const m = p.mission!;
    const href = p.links.live ?? p.links.design;
    return {
      key: m.dir,
      aliases: [...m.aliases, p.slug],
      title: m.termName,
      status: `${m.status} · ${m.tag.toLowerCase()}`,
      state: m.status,
      desc: m.termBlurb,
      points: m.termPoints,
      stack: m.chips.map((c) => c.text.toLowerCase()).join(' · '),
      link: href
        ? {
            href,
            label: m.liveLabel ?? (p.links.live ? 'live demo' : 'prototype'),
          }
        : undefined,
    };
  });

export const firstMission = termMissions[0].key;

function findMission(name: string): TermMission | undefined {
  const n = name.replace(/\/$/, '').toLowerCase();
  return termMissions.find((m) => m.key === n || m.aliases.includes(n));
}

const STATE_GLYPH: Record<MissionStatus, string> = {
  live: '●',
  private: '○',
  design: '◆',
};

// ── derived blocks ───────────────────────────────────────────────────────

const STACK_TONE: Record<string, LineTone> = {
  Frontend: 'blue',
  Backend: 'violet',
};

function wrapItems(items: string[], width: number): string[] {
  const rows: string[] = [];
  let row = '';
  for (const item of items) {
    const next = row ? `${row} · ${item}` : item;
    if (row && next.length > width) {
      rows.push(row);
      row = item;
    } else {
      row = next;
    }
  }
  if (row) rows.push(row);
  return rows;
}

function stackLines(compact: boolean): OutLine[] {
  const pad = 10;
  return loadout.flatMap((g) => {
    const tone = STACK_TONE[g.label] ?? 'cyan';
    const rows = wrapItems(
      g.items.map((i) => i.toLowerCase()),
      compact ? 36 : 44,
    );
    return rows.map((r, i) =>
      L(
        `${i === 0 ? g.label.toLowerCase().padEnd(pad) : ' '.repeat(pad)}${r}`,
        tone,
      ),
    );
  });
}

function logLines(): OutLine[] {
  const out: OutLine[] = [];
  for (const role of experience) {
    out.push(L(role.periodIso, 'violet'));
    out.push(L(role.terminal.org, 'star'));
    for (const line of role.terminal.lines) {
      out.push(L(line, line.trimStart().startsWith('▸') ? 'soft' : 'dim'));
    }
    out.push(L(''));
  }
  const { education } = profile;
  out.push(L(education.graduatedIso, 'violet'));
  out.push(L(`${education.degreeShort} · ${education.schoolShort}`, 'star'));
  return out;
}

function contactLines(): OutLine[] {
  const [github, linkedin] = profile.socials;
  return [
    L(`email     ${profile.email}`, 'star', {
      href: `mailto:${profile.email}`,
    }),
    L(`github    ${github.short}`, 'soft', { href: github.href }),
    L(`linkedin  ${linkedin.short}`, 'soft', { href: linkedin.href }),
    L(''),
    L('or try: sudo hire-me', 'faint'),
  ];
}

function missionInline(m: TermMission): OutLine[] {
  return [
    L(`# ${m.title} · ${m.state}`, 'violet'),
    L(m.desc, 'star'),
    ...m.points.map((p) => L(`  + ${p}`)),
    L(m.stack, 'cyan'),
    ...(m.link ? [L(`${m.link.label} ↗`, 'blue', { href: m.link.href })] : []),
  ];
}

// The line shown after `echo $TIP`, also used for the opening screen.
export const tipLines: OutLine[] = [
  L('→ try whoami, or tap a command below', 'faint'),
  L('  missions, btop and cava open new panes · close tidies up', 'faint', {
    wide: true,
  }),
];

const helpDesktop: OutLine[] = [
  L('COMMANDS', 'faint'),
  L('  whoami        who’s flying this thing'),
  L('  missions      projects — opens yazi →'),
  L('  open <name>   mission details'),
  L('  log           flight log — work & education'),
  L('  stack         languages, frameworks, tools'),
  L('  btop          telemetry pane'),
  L('  cava          music visualizer pane ♪'),
  L('  stop          stop the music'),
  L('  close         close side panes'),
  L('  contact       open a channel'),
  L('  resume        grab the PDF'),
  L('  website       leave the rice, see the site'),
  L('  clear         clear the screen'),
  L(''),
  L('psst: pacman -S fahim', 'faint'),
];

const helpCompact: OutLine[] = [
  L('COMMANDS', 'faint'),
  L('  whoami       about me'),
  L('  fastfetch    system info (it’s me)'),
  L('  stack        languages & tools'),
  L('  log          work & education'),
  L('  missions     projects'),
  L('  open <name>  mission details'),
  L('  btop         telemetry'),
  L('  cava         play some music ♪'),
  L('  stop         stop the music'),
  L('  contact      open a channel'),
  L('  clear        clear the screen'),
];

function btopInline(): OutLine[] {
  const t = profile.telemetry;
  const n = (i: number) =>
    `${t[i].prefix ?? ''}${t[i].value.toLocaleString('en-US')}${t[i].suffix}`;
  return [
    L('telemetry · lentho.com', 'faint'),
    L(`features   ${n(0)} shipped`, 'star'),
    L(`users/day  ${n(1)}`, 'star'),
    L(`api time   ${n(2)}`, 'green'),
    L(`prod bugs  ${n(3)}`, 'green'),
    L('login ok   +25%', 'green'),
  ];
}

// ── the runner ───────────────────────────────────────────────────────────

export function runCommand(
  raw: string,
  { compact }: RunOptions,
): CommandResult {
  const cmd = raw.trim();
  const parts = cmd.split(/\s+/);
  let head = (parts[0] ?? '').toLowerCase();
  let arg = (parts[1] ?? '').toLowerCase();
  let arg2 = (parts[2] ?? '').toLowerCase();

  if (head === 'sudo' && arg === 'pacman') {
    head = 'pacman';
    arg = arg2;
    arg2 = (parts[3] ?? '').toLowerCase();
  }
  if (head === 'yay' || head === 'paru') head = 'pacman';

  switch (head) {
    case '':
      return { lines: [] };

    case 'clear':
      return { clear: true, lines: [] };

    case 'help':
      return { lines: compact ? helpCompact : helpDesktop };

    case 'whoami':
      return { kind: 'who', lines: [] };

    case 'fastfetch':
    case 'neofetch':
      return { kind: 'fetch', lines: [] };

    case 'stack':
      return { lines: stackLines(compact) };

    case 'log':
    case 'experience':
      return { lines: logLines() };

    case 'missions':
    case 'projects':
    case 'yazi':
      if (compact) {
        return {
          lines: [
            ...termMissions.map((m) =>
              L(`${m.key.padEnd(16)}${STATE_GLYPH[m.state]} ${m.state}`),
            ),
            L(''),
            L('→ open <name>', 'cyan'),
          ],
        };
      }
      return {
        open: 'files',
        lines: [
          L('spawning yazi → ~/missions', 'faint'),
          L('click a mission, or: open <name>', 'cyan'),
        ],
      };

    case 'open':
    case 'cat':
    case 'cd': {
      if (!arg) {
        return {
          lines: [
            L(
              compact
                ? 'usage: open <name>'
                : `usage: open <name>   (try: open ${termMissions[1].key})`,
              'faint',
            ),
          ],
        };
      }
      const m = findMission(arg);
      if (!m) {
        return {
          lines: [L(`no mission called "${arg}" — run missions`, 'red')],
        };
      }
      if (compact) return { lines: missionInline(m) };
      return {
        open: 'files',
        sel: m.key,
        lines: [
          L(`# ${m.title}  ·  ${m.status}`, 'violet'),
          L('(previewing in yazi →)', 'faint'),
        ],
      };
    }

    case 'btop':
    case 'stats':
    case 'telemetry':
      if (compact) return { lines: btopInline() };
      return { open: 'btop', lines: [L('spawning btop →', 'faint')] };

    case 'cava':
    case 'music':
    case 'lofi':
    case 'play':
      if (compact) {
        return {
          audio: 'play',
          lines: [
            L(`♪ now playing: ${track.title} — ${track.artist}`, 'violet', {
              href: track.page,
            }),
            L(`  ${track.license}`, 'faint', { href: track.licenseUrl }),
            L('  the bars below follow the music · stop to pause', 'faint'),
          ],
        };
      }
      return {
        open: 'cava',
        audio: 'play',
        lines: [L(`spawning cava → ♪ ${track.title}`, 'faint')],
      };

    case 'stop':
    case 'pause':
    case 'mute':
      return { audio: 'pause', lines: [L('♪ music stopped', 'faint')] };

    case 'close':
    case 'q':
    case 'tidy':
      return {
        closeAll: true,
        // Closing the cava pane stops its music; phones have no pane to close.
        audio: compact ? undefined : 'pause',
        lines: [
          L(
            compact
              ? 'nothing to close — this is already focus mode'
              : 'side panes closed — back to focus mode',
            'faint',
          ),
        ],
      };

    case 'contact':
      return { lines: contactLines() };

    case 'resume':
    case 'cv':
      return {
        lines: [
          L('fetching resume.pdf …', 'dim'),
          L('↓ resume.pdf', 'cyan', { href: profile.resumeUrl }),
        ],
      };

    case 'website':
    case 'gui':
    case 'exit':
    case 'logout':
      return {
        lines: compact
          ? [L('→ tap “web” up top', 'cyan', { href: '/', route: true })]
          : [
              L('killing hyprland session … jk', 'dim'),
              L('→ hit “website” in the bar up top', 'cyan', {
                href: '/',
                route: true,
              }),
            ],
      };

    case 'pacman':
      if (arg === '-s' && arg2 === 'fahim') {
        return {
          lines: compact
            ? [
                L('resolving dependencies...', 'dim'),
                L('Packages (1)  fahim-3.0.0-yrs', 'star'),
                L('(1/1) installing fahim  [#########] 100%', 'cyan'),
                L('→ next: run contact', 'green'),
              ]
            : [
                L(':: Synchronizing package databases...', 'dim'),
                L('resolving dependencies...', 'dim'),
                L('Packages (1)  fahim-3.0.0-yrs', 'star'),
                L('Total Installed Size:  1 engineer', 'star'),
                L(
                  '(1/1) installing fahim   [####################] 100%',
                  'cyan',
                ),
                L('optional deps: remote-role, interesting-problems', 'faint'),
                L('→ next: run contact', 'green'),
              ],
        };
      }
      return { lines: [L('usage: pacman -S fahim', 'faint')] };

    case 'btw':
      return { lines: [L('I use Arch, btw.', 'violet')] };

    case 'ls':
      return {
        lines: compact
          ? [L('about.txt  log.md  missions/'), L('contact.vcf  resume.pdf')]
          : [L('about.txt  log.md  missions/  contact.vcf  resume.pdf')],
      };

    case 'pwd':
      return { lines: [L('/home/fahim/portfolio')] };

    case 'echo': {
      const text = cmd.slice(4).trim();
      if (text === '$TIP') return { lines: tipLines };
      return { lines: [L(text)] };
    }

    case 'sudo':
      if (arg === 'hire-me') {
        return {
          lines: compact
            ? [
                L('[sudo] password for recruiter: ****', 'faint'),
                L('access granted ✓', 'green'),
                L(`→ ${profile.email}`, 'violet', {
                  href: `mailto:${profile.email}`,
                }),
              ]
            : [
                L('[sudo] password for recruiter: ********', 'faint'),
                L('access granted ✓', 'green'),
                L(`opening a channel → ${profile.email}`, 'violet', {
                  href: `mailto:${profile.email}`,
                }),
              ],
        };
      }
      return { lines: [L('nice try. (hint: sudo hire-me)', 'faint')] };

    default:
      return {
        lines: [
          L(`zsh: command not found: ${parts[0]}`, 'red'),
          L("try 'help'", 'faint'),
        ],
      };
  }
}

/** Chips under the window: tmux status bar (desktop) and chip row (phone). */
export const desktopChips = [
  'whoami',
  'missions',
  'log',
  'btop',
  'cava',
  'contact',
  'close',
  'help',
];

export const compactChips = [
  'whoami',
  'missions',
  `open ${termMissions[0].key}`,
  'log',
  'cava',
  'contact',
  'help',
  'pacman -S fahim',
  'sudo hire-me',
];
