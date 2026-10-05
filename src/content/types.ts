export type Emphasis = { text: string; strong?: string[] }; // substrings to bold, such as metrics

export interface Profile {
  fullName: string;
  shortName: string;
  role: string;
  headline: string; // hero H1
  intro: string; // hero paragraph
  summary: string; // one-paragraph professional summary (from the resume)
  status: string; // current position line
  availability: string; // used in contact and neofetch
  location: string;
  experienceLength: string;
  about: string[]; // paragraphs
  highlights: Emphasis[]; // key achievements
  stackSentence: string; // accessible version of the tech lanes
  education: {
    school: string;
    degree: string;
    graduated: string;
    thesis?: string;
  };
  email: string;
  phone?: string;
  socials: { label: string; href: string }[];
  resumeUrl?: string; // e.g. '/resume.pdf'
  photo: { src: string; alt: string };
}

export interface Role {
  id: string;
  company: string;
  companyUrl?: string;
  title: string;
  start: string;
  end?: string; // omitted means present
  location: string;
  highlights: Emphasis[];
  stack: string[];
}

export type PatchGlyph =
  | 'bowl'
  | 'kanban'
  | 'crate'
  | 'capsule'
  | 'rocket'
  | 'leaf';

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  kind: 'professional' | 'full-stack' | 'personal' | 'design';
  live: boolean;
  source: 'public' | 'proprietary';
  links: { live?: string; code?: string; design?: string };
  summary: string;
  highlights: string[];
  stack: string[];
  images: { src: string; alt: string }[];
  patch: { glyph: PatchGlyph; ring: string };
  brief?: { problem: string; approach: string; outcome: string };
}

export interface Lane {
  id: 'frontend' | 'backend' | 'ship' | 'ai';
  label: string;
  items: string[];
}

export interface Content {
  profile: Profile;
  experience: Role[];
  projects: Project[];
  lanes: Lane[];
}
