'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import { content } from '@/content';
import { getPlayer } from '@/lib/terminal/player';

export const player = () => getPlayer(content.track.src);

/** { playing, started } for controls; the server always renders "stopped". */
export function usePlayerState() {
  const p = player();
  const playing = useSyncExternalStore(
    p.subscribe,
    () => p.playing,
    () => false,
  );
  const started = useSyncExternalStore(
    p.subscribe,
    () => p.started,
    () => false,
  );
  return { playing, started };
}

/** Let the player drive the bars inside this element while music plays. */
export function useBars<T extends HTMLElement>(idle: 'flat' | 'dance') {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (el) return player().attachBars(el, idle);
  }, [idle]);
  return ref;
}

/** Let the player drive this progress bar from the real playback position. */
export function useProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (el) return player().attachProgress(el);
  }, []);
  return ref;
}
