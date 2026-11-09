import type { Metadata } from 'next';

// One place for the site's address and its share/search metadata. Next.js
// replaces (not merges) `openGraph` and `twitter` per page, so each page
// builds its own full set from here.
export const SITE_URL = 'https://0xzhosain.com';
export const SITE_NAME = '0xzhosain';

// Many desktops have no mail app set up, so a mailto click there seems to do
// nothing. Desktop email links open Gmail's compose window instead; phones
// keep mailto, which opens the visitor's mail app.
export const gmailCompose = (to: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;

// src/app/opengraph-image.png covers "/" by file convention, but a page that
// sets its own openGraph (like /terminal) drops it, so those pages name it.
const SHARE_IMAGE = {
  url: '/opengraph-image.png',
  width: 1200,
  height: 630,
  alt: 'Hi, I’m Fahim. Full-stack software engineer, now climbing toward backend systems and AI engineering. An astronaut rides a rocket past tech logos. 0xzhosain.com',
};

export function pageMeta({
  path,
  title,
  description,
}: {
  path: '/' | '/terminal';
  title: string;
  description: string;
}): Metadata {
  // Only set when needed: even `images: undefined` overrides the file image.
  const images = path === '/' ? {} : { images: [SHARE_IMAGE] };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: path,
      siteName: SITE_NAME,
      locale: 'en_US',
      title,
      description,
      ...images,
    },
    twitter: { card: 'summary_large_image', title, description, ...images },
  };
}
