import { experience } from './experience';
import { profile } from './profile';
import { projects } from './projects';
import { lanes } from './stack';
import type { Content } from './types';

export const content: Content = { profile, experience, projects, lanes };

export type * from './types';
