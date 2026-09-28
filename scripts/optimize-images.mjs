// Converts source images in public/ to right-sized WebP files.
//
// Usage: pnpm images:optimize
//
// Each job maps a source file to a kebab-case WebP name derived from the
// image's alt text. Sources are left in place; delete them once references
// point at the new files. A job whose source is gone but whose output exists
// is skipped, so the script is safe to re-run.

import { existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const PUBLIC_DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'public',
);

const QUALITY = 78;
const BUDGET_KB = 250;

// Max output width by kind. Portraits are sized by their shorter side because
// they're shown center-cropped in a square frame.
const DESKTOP = { width: 1600 };
const PHONE = { width: 900 };
const PORTRAIT = { shortSide: 480 };

const jobs = [
  { from: 'Fahim2.jpg', to: 'profile.webp', ...PORTRAIT },

  {
    from: 'project-LENTHO/image.png',
    to: 'project-lentho/storefront.webp',
    ...DESKTOP,
  },
  {
    from: 'project-LENTHO/image copy.png',
    to: 'project-lentho/storefront-detail.webp',
    ...DESKTOP,
  },
  {
    from: 'project-LENTHO/image copy 2.png',
    to: 'project-lentho/dashboard.webp',
    ...DESKTOP,
  },
  {
    from: 'project-LENTHO/image copy 3.png',
    to: 'project-lentho/dashboard-detail.webp',
    ...DESKTOP,
  },

  {
    from: 'project-team-hub/kanban.png',
    to: 'project-team-hub/action-items-kanban-board.webp',
    ...DESKTOP,
  },
  {
    from: 'project-team-hub/announcements.png',
    to: 'project-team-hub/announcements-feed.webp',
    ...DESKTOP,
  },
  {
    from: 'project-team-hub/workspaces.png',
    to: 'project-team-hub/workspaces-list.webp',
    ...DESKTOP,
  },
  {
    from: 'project-team-hub/landing.png',
    to: 'project-team-hub/landing-page.webp',
    ...DESKTOP,
  },
  {
    from: 'project-team-hub/landing-light.png',
    to: 'project-team-hub/landing-page-light-mode.webp',
    ...DESKTOP,
  },

  {
    from: 'project-market-workflow/admin panel.png',
    to: 'project-market-workflow/admin-panel.webp',
    ...DESKTOP,
  },
  {
    from: 'project-market-workflow/admin panel 2.png',
    to: 'project-market-workflow/admin-panel-detail.webp',
    ...DESKTOP,
  },
  {
    from: 'project-market-workflow/Buyer panel.png',
    to: 'project-market-workflow/buyer-panel.webp',
    ...DESKTOP,
  },
  {
    from: 'project-market-workflow/buyer panel 2.png',
    to: 'project-market-workflow/buyer-panel-detail.webp',
    ...DESKTOP,
  },
  {
    from: 'project-market-workflow/solver panel.png',
    to: 'project-market-workflow/solver-panel.webp',
    ...DESKTOP,
  },

  {
    from: 'project-portfolio/home.png',
    to: 'project-portfolio/home.webp',
    ...DESKTOP,
  },
  {
    from: 'project-portfolio/about.png',
    to: 'project-portfolio/about.webp',
    ...DESKTOP,
  },

  {
    from: 'project-urban-garden/sign-up.png',
    to: 'project-urban-garden/sign-up-screen.webp',
    ...PHONE,
  },
  {
    from: 'project-urban-garden/plant-preferences.png',
    to: 'project-urban-garden/plant-preferences.webp',
    ...PHONE,
  },
  {
    from: 'project-urban-garden/scan.png',
    to: 'project-urban-garden/space-scan.webp',
    ...PHONE,
  },
  {
    from: 'project-urban-garden/home.png',
    to: 'project-urban-garden/home-screen.webp',
    ...PHONE,
  },
  {
    from: 'project-urban-garden/plant-details.png',
    to: 'project-urban-garden/plant-details.webp',
    ...PHONE,
  },
];

const kb = (bytes) => Math.round(bytes / 1024);

function resizeOptions(job) {
  if (job.shortSide) {
    return {
      width: job.shortSide,
      height: job.shortSide,
      fit: 'outside',
      withoutEnlargement: true,
    };
  }
  return { width: job.width, withoutEnlargement: true };
}

async function run() {
  let before = 0;
  let after = 0;
  let overBudget = 0;
  const rows = [];

  for (const job of jobs) {
    const src = join(PUBLIC_DIR, job.from);
    const out = join(PUBLIC_DIR, job.to);

    if (!existsSync(src)) {
      if (existsSync(out)) {
        rows.push({ file: job.to, note: 'skipped, already optimized' });
        continue;
      }
      throw new Error(`Missing source and output for ${job.from}`);
    }

    mkdirSync(dirname(out), { recursive: true });
    const info = await sharp(src)
      .rotate()
      .resize(resizeOptions(job))
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(out);

    const srcBytes = statSync(src).size;
    before += srcBytes;
    after += info.size;
    const over = kb(info.size) > BUDGET_KB;
    if (over) overBudget += 1;

    rows.push({
      file: job.to,
      size: `${info.width}x${info.height}`,
      beforeKB: kb(srcBytes),
      afterKB: kb(info.size),
      note: over ? `over ${BUDGET_KB} KB budget` : '',
    });
  }

  console.table(rows);
  console.log(
    `Total: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(2)} MB`,
  );

  if (overBudget > 0) {
    console.error(`${overBudget} file(s) exceed the ${BUDGET_KB} KB budget.`);
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
