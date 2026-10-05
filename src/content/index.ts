import { experience } from './experience';
import { profile } from './profile';
import { track } from './music';
import { projects } from './projects';
import { asteroids, loadout, loadoutShort } from './stack';
import type { Content } from './types';

export const content: Content = {
  profile,
  experience,
  projects,
  loadout,
  loadoutShort,
  asteroids,
  track,
};

export type * from './types';
