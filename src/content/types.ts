export type Tone = 'plain' | 'violet';

export interface Chip {
  text: string;
  tone: Tone;
}

export interface Telemetry {
  value: number;
  prefix?: string; // e.g. a minus sign
  suffix: string; // e.g. "+" or "%"
  label: string;
  labelShort?: string; // phone label when it differs
  accent?: boolean; // cyan instead of ink
}

export interface Profile {
  fullName: string;
  shortName: string;
  callsign: string;
  role: string;
  intro: string; // hero paragraph, ends where the rotating focus begins
  focus: [string, string]; // "backend systems", "AI engineering": both shown, never rotated
  availability: string;
  availabilityShort: string; // phone hero
  contactBlurb: string;
  contactBlurbShort: string; // phone
  city: string; // "Chittagong, BD"
  timezone: string;
  baseLine: string; // "Chittagong, Bangladesh (UTC+6)"
  about: string[]; // **word** marks a highlighted keyword; same on every screen
  telemetry: Telemetry[];
  education: {
    school: string;
    schoolShort: string;
    degree: string;
    degreeShort: string;
    graduated: string; // display, e.g. "JUL 2023"
    graduatedIso: string;
    place: string; // "CHITTAGONG, BANGLADESH"
    gpa: string; // "3.21 / 4.00"
    /** The undergraduate thesis, shown in the Education & research section. */
    thesis: { title: string; summary: string; tags: string[] };
  };
  email: string;
  socials: { label: string; href: string; short: string }[];
  resumeUrl: string;
}

export interface Role {
  id: string;
  title: string;
  org: string; // "The WOS Germany GmbH · Lentho.com"
  period: string; // "MAY 2023 – MAY 2026" (en dash, no em dashes in copy)
  periodIso: string; // "2023-05 → 2026-05"
  place: string[]; // lines under the date
  placeShort: string; // after the date on phones
  /** The role in progress: shows the green "current mission" status. */
  current?: boolean;
  /** A live product to link from the card, e.g. lentho.com. */
  link?: { label: string; href: string };
  highlights: string[];
  /** Phone bullets. A single entry prints as a paragraph. */
  highlightsShort: string[];
  stack: string[];
  /** Short line for the terminal `log` command. `id` is the role's folder in
   * yazi (~/log/<id>); `aliases` are other names `open` accepts. */
  terminal: { org: string; lines: string[]; aliases?: string[] };
}

export interface LoadoutGroup {
  label: string;
  tone: Tone;
  items: string[];
  /** The terminal `stack` lines for this group, broken by hand. */
  term: {
    label: string; // "frontend"
    rows: string[];
    compact?: string[]; // phone rows, when they differ
  };
}

export type TechLogoId =
  | 'react'
  | 'nextjs'
  | 'typescript'
  | 'fastapi'
  | 'postgresql'
  | 'docker'
  | 'socketio'
  | 'flutter';

export interface Asteroid {
  word: string; // accessible name; the meteor shows the logo
  logo: TechLogoId;
  tone: Tone;
}

export type MissionStatus = 'live' | 'private' | 'design';

export interface Mission {
  id: string; // MSN-01
  dir: string; // folder name in the terminal's yazi pane
  aliases: string[]; // extra names `open` accepts
  status: MissionStatus;
  tag: string; // PROFESSIONAL, FULL-STACK, ...
  /** Card copy. The longer summary stays in `Project.summary`. */
  blurb: string;
  points: string[]; // two short bullets (terminal and featured card)
  /** Backend and feature bullets on the mission card, checked against the
   * project's code. Cards without them show the blurb only. */
  features?: string[];
  chips: Chip[];
  liveLabel?: string; // text for the live link when it is not "Live"
  /** Phone card copy, from the MainMobile board. */
  phone: {
    name?: string; // when the project name is too long for a phone card
    blurb: string;
    /** Featured card: chips. Other cards: one "a · b · c" line. */
    stack: string[];
    tone: Tone;
  };
  /** Terminal-only names. */
  termName: string;
  termBlurb: string;
  termPoints: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  live: boolean;
  source: 'public' | 'proprietary';
  links: { live?: string; code?: string; design?: string };
  summary: string;
  highlights: string[];
  stack: string[];
  images: { src: string; alt: string }[];
  /** Present when the project is shown as a mission on the site. */
  mission?: Mission;
}

/** Music for the terminal's `cava` pane, with what its licence asks for. */
export interface Track {
  title: string;
  artist: string;
  src: string; // file in public/
  page: string; // the track's page, linked from the credit
  license: string;
  licenseUrl: string;
}

export interface Content {
  profile: Profile;
  experience: Role[];
  projects: Project[];
  loadout: LoadoutGroup[];
  /** The phone loadout: flat, shorter sweeps, each with an optional label. */
  loadoutShort: { label?: string; items: Chip[] }[];
  asteroids: Asteroid[];
  track: Track;
}
