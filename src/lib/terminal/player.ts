// The terminal's music player: one <audio> element routed through Web Audio
// so cava's bars can follow the real spectrum. Nothing is created or
// downloaded until the first start(), which must run inside a click or key
// handler so browsers (iOS included) allow playback.

type Listener = () => void;

const VOLUME = 0.35;
const FADE_IN = 1.6; // s
const FADE_OUT = 0.3; // s
const FLOOR = 0.06; // a silent bar keeps a sliver of height, like cava
// Top of the range the bars cover: bin 64 is ~5.5 kHz at 44.1 kHz with
// fftSize 512. Oceanis is an ambient drone with little energy above that.
const TOP_BIN = 64;

interface BarGroup {
  el: HTMLElement; // parent of the bars
  /** When the music stops: lie flat (the cava pane) or go back to the CSS
   * idle dance (the decorative phone strip). */
  idle: 'flat' | 'dance';
}

class Player {
  private audio: HTMLAudioElement | null = null;
  private ctx: AudioContext | null = null;
  private gain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private bins: Uint8Array | null = null;
  private groups = new Set<BarGroup>();
  private progress = new Set<HTMLElement>();
  private listeners = new Set<Listener>();
  private raf = 0;
  private stopTimer = 0;
  private src: string;

  playing = false;
  /** Set once the visitor has started the music, so the controls can stay. */
  started = false;

  constructor(src: string) {
    this.src = src;
  }

  subscribe = (fn: Listener) => {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  };

  private emit() {
    this.listeners.forEach((fn) => fn());
  }

  private setup() {
    const audio = new Audio(this.src);
    audio.loop = true; // restart at the end; the track itself is untouched
    audio.preload = 'auto';
    this.audio = audio;
    // If the file can't play (blocked, offline), fall back to idle bars.
    audio.addEventListener('error', () => this.pause());
    const Ctx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 512; // 256 bins of ~86 Hz
    analyser.smoothingTimeConstant = 0.82;
    analyser.maxDecibels = -22; // headroom so the drone's low end doesn't pin
    const gain = ctx.createGain();
    gain.gain.value = 0;
    // The analyser sits before the gain, so fades don't flatten the bars.
    ctx.createMediaElementSource(audio).connect(analyser);
    analyser.connect(gain);
    gain.connect(ctx.destination);
    this.ctx = ctx;
    this.analyser = analyser;
    this.gain = gain;
    this.bins = new Uint8Array(analyser.frequencyBinCount);
  }

  start() {
    if (this.playing) return;
    if (!this.audio) this.setup();
    const { audio, ctx, gain } = this;
    if (!audio) return;
    clearTimeout(this.stopTimer);
    void ctx?.resume();
    if (gain && ctx) {
      const now = ctx.currentTime;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(VOLUME, now + FADE_IN);
    } else {
      audio.volume = VOLUME;
    }
    audio.play().catch(() => this.pause());
    this.playing = true;
    this.started = true;
    this.emit();
    this.loop();
  }

  pause() {
    if (!this.playing) return;
    this.playing = false;
    this.emit();
    const { audio, ctx, gain } = this;
    if (gain && ctx) {
      const now = ctx.currentTime;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(0, now + FADE_OUT);
      this.stopTimer = window.setTimeout(() => audio?.pause(), FADE_OUT * 1000);
    } else {
      audio?.pause();
    }
  }

  toggle() {
    if (this.playing) this.pause();
    else this.start();
  }

  /** Leaving the terminal: stop at once and forget the controls. */
  reset() {
    clearTimeout(this.stopTimer);
    this.audio?.pause();
    if (this.gain && this.ctx) this.gain.gain.value = 0;
    this.playing = false;
    this.started = false;
    this.emit();
  }

  attachBars(el: HTMLElement, idle: BarGroup['idle']) {
    const g = { el, idle };
    this.groups.add(g);
    this.paint(g);
    if (this.playing) this.loop();
    return () => {
      this.groups.delete(g);
    };
  }

  attachProgress(el: HTMLElement) {
    this.progress.add(el);
    return () => {
      this.progress.delete(el);
    };
  }

  private reduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // Bars and progress, once per frame while the music plays. Only transform
  // is written.
  private loop = () => {
    cancelAnimationFrame(this.raf);
    const frame = () => {
      this.groups.forEach((g) => this.paint(g));
      const a = this.audio;
      if (a && a.duration && !this.reduced()) {
        const p = a.currentTime / a.duration;
        this.progress.forEach((el) => {
          el.classList.add('tm-prog-live');
          el.style.transform = `scaleX(${p.toFixed(4)})`;
        });
      }
      if (this.playing) this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  };

  private paint(g: BarGroup) {
    const bars = g.el.children;
    const live = this.playing && !!this.analyser && !this.reduced();
    g.el.classList.toggle('tm-cava-live', live);
    // Flat only when paused; reduced motion keeps the static bar heights.
    g.el.classList.toggle('tm-cava-flat', !this.playing && g.idle === 'flat');
    if (!live || !this.analyser || !this.bins) {
      for (let i = 0; i < bars.length; i++)
        (bars[i] as HTMLElement).style.transform = '';
      return;
    }
    this.analyser.getByteFrequencyData(this.bins);
    const bins = this.bins;
    const n = bars.length;
    // Spread the bars over ~86 Hz–5.5 kHz on a log scale, giving every bar at
    // least one bin of its own, and tilt the quieter highs up.
    let lo = 1;
    for (let i = 0; i < n; i++) {
      const edge = Math.round(Math.pow(TOP_BIN, (i + 1) / n));
      const hi = Math.min(bins.length, Math.max(lo + 1, edge));
      let sum = 0;
      for (let k = lo; k < hi; k++) sum += bins[k];
      const avg = sum / Math.max(1, hi - lo) / 255;
      lo = hi;
      const v = Math.min(1, Math.pow(avg, 1.4) * (0.85 + 1.1 * (i / n)));
      (bars[i] as HTMLElement).style.transform = `scaleY(${(
        FLOOR +
        (1 - FLOOR) * v
      ).toFixed(3)})`;
    }
  }
}

let player: Player | null = null;

/** The one player for the terminal, created on first use. */
export function getPlayer(src: string): Player {
  player ??= new Player(src);
  return player;
}

export type { Player };
