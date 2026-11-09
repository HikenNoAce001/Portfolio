# 0xzhosain.com

Personal portfolio of Mohammad Zobair Hosain Fahim, built with Next.js (App Router), React and Tailwind CSS.

The site has two views of the same content:

- `/`: the website, a "deep space" journey from launch to the contact planet.
- `/terminal`: a Hyprland-style terminal with waybar, kitty, fastfetch and commands such as `whoami`, `missions`, `open <name>`, `btop` and `cava`.

Press <kbd>`</kbd> to switch between them. The terminal is for screens 720px and wider. Phones that open `/terminal` get a short animated message from the astronaut, with a link back to the website.

Clicking a nav link, the logo or "See missions" plays **Hyperjump**: a 900 ms eased scroll with star-trails, an altitude HUD and a landing pulse on the section's label row. The links are plain `href="#id"` anchors, so they still work without JavaScript, and with cmd-click or middle-click. Under reduced motion the jump is instant. The stops and their altitudes live in `src/lib/hyperjump.ts`, which also feeds each section header.

There is no WebGL. The art is inline SVG, and the motion is CSS keyframes and scroll-driven animations, limited to `transform` and `opacity`. `prefers-reduced-motion` freezes every loop.

In the terminal, `cava` plays "Oceanis" by Audioinsmusic, and its bars follow the real spectrum through Web Audio. `stop`, the pane's ×, `close` or leaving the page stops it. The track is [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/), so the credit line in the player has to stay and the audio must not be edited. `public/audio/oceanis.m4a` is a straight AAC re-encode of the original; its details live in `src/content/music.ts`.

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

| Script                 | What it does                                      |
| ---------------------- | ------------------------------------------------- |
| `pnpm build`           | Production build                                  |
| `pnpm start`           | Serve the production build                        |
| `pnpm type-check`      | `tsc --noEmit`                                    |
| `pnpm lint`            | ESLint                                            |
| `pnpm test`            | Unit tests (`node --test`, no extra dependencies) |
| `pnpm images:optimize` | Re-encode images in `public/` as WebP             |

On commit, Husky and lint-staged run Prettier (with the Tailwind plugin) and ESLint.

## Link previews and search

`src/app/opengraph-image.png` (1200×630, alt text in `opengraph-image.alt.txt`) is the card that LinkedIn, WhatsApp, X and others show when the site is shared; `apple-icon.png` is the small icon iMessage and iOS show. `robots.ts` and `sitemap.ts` serve `/robots.txt` and `/sitemap.xml`. Titles, descriptions and canonical URLs come from `pageMeta` in `src/lib/site.ts`. If you change the card, replace the PNG; link-preview caches can be refreshed with LinkedIn's Post Inspector.

## Editing content

All copy lives in `src/content/`, and both views read from it, so a change there updates the website and the terminal together.

| File            | Holds                                                   |
| --------------- | ------------------------------------------------------- |
| `profile.ts`    | Name, intro, about, telemetry numbers, education, links |
| `experience.ts` | Flight log roles                                        |
| `projects.ts`   | Projects. Only those with a `mission` block are shown   |
| `stack.ts`      | The loadout panel and the tech-logo meteors in the hero |

Where the phone layout uses shorter wording, the field has a `*Short` or `phone` sibling next to the desktop text.

## Layout

```
src/app/                  routes: / and /terminal
src/components/site/      website sections
src/components/space/     SVG art (astronaut, rockets, planets, backdrop)
src/components/terminal/  terminal window, waybar, panes
src/lib/terminal/         the command runner (a pure function)
src/lib/hyperjump.ts      Hyperjump stops, easing and scroll maths (pure)
src/lib/site.ts           site URL and the share/search metadata for each page
tests/                    unit tests for the pure helpers
src/styles/space.css      website animation (classes prefixed fz-)
src/styles/terminal.css   terminal styles (classes prefixed tm-)
```

Tailwind's `sm` breakpoint is 720px, so phone styles use `max-sm:`.
