import type { Track } from './types';

// The track the terminal's `cava` plays. CC BY-NC-ND 4.0: credit the artist,
// non-commercial use, and play it as released. public/audio/oceanis.m4a is a
// straight AAC re-encode of the original 320 kbps MP3 (a format change the
// licence allows); it is not trimmed or edited, and loops by restarting.
export const track: Track = {
  title: 'Oceanis',
  artist: 'Audioinsmusic',
  src: '/audio/oceanis.m4a',
  page: 'https://freemusicarchive.org/music/audioinsmusic/calm/oceanismp3/',
  license: 'CC BY-NC-ND 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
};
