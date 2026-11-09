'use client';

import { useState } from 'react';
import type { Asteroid } from '@/content';
import Astronaut from '@/components/space/Astronaut';
import HeroRocket from '@/components/space/HeroRocket';
import { RelaunchIcon } from '@/components/space/icons';
import RingedPlanet from '@/components/space/RingedPlanet';
import TechLogo from '@/components/space/TechLogo';
import DodgeCount from './DodgeCount';

// 20 spokes for the warp burst, laid out deterministically.
const WARP_LINES = Array.from({ length: 20 }, (_, i) => ({
  rot: i * 18 + (i % 3) * 5,
  delay: (((i * 37) % 9) / 30).toFixed(2),
  width: 120 + ((i * 53) % 130),
}));

// One meteor every BEAT seconds; the jump loop in space.css (.fz-jump and
// friends) and DodgeCount run on the same beat.
const BEAT = 1.5;

// Streaks that rush past the rocket. The last four are desktop-only.
const SPEED_LINES = [
  { top: 60, width: 120, delay: '0s' },
  { top: 120, width: 80, delay: '.5s', duration: '1.1s' },
  { top: 176, width: 160, delay: '.9s' },
  { top: 238, width: 100, delay: '.25s', duration: '.9s' },
  { top: 330, width: 140, delay: '.7s', duration: '1.2s', desktop: true },
  { top: 372, width: 90, delay: '1.1s', desktop: true },
  { top: 410, width: 170, delay: '.35s', duration: '1.5s', desktop: true },
  { top: 30, width: 70, delay: '1.2s', duration: '1s', desktop: true },
];

// Exhaust particles trailing the plume. The last two are desktop-only.
const EXHAUST = [
  { color: '#7dcfff', dir: 'm', glow: '#7dcfff', delay: '0s' },
  { color: '#bb9af7', dir: 'u', glow: '#bb9af7', delay: '.11s' },
  { color: '#7aa2f7', dir: 'd', glow: '#7aa2f7', delay: '.22s' },
  { color: '#e6ebff', dir: 'm', glow: '#7dcfff', delay: '.33s' },
  { color: '#7dcfff', dir: 'u', glow: '#7dcfff', delay: '.44s' },
  { color: '#bb9af7', dir: 'd', glow: '#bb9af7', delay: '.55s' },
  { color: '#7aa2f7', dir: 'm', glow: '#7aa2f7', delay: '.66s' },
  { color: '#e6ebff', dir: 'u', glow: '#bb9af7', delay: '.77s' },
  { color: '#7dcfff', dir: 'd', glow: '#7dcfff', delay: '.88s' },
  { color: '#bb9af7', dir: 'm', glow: '#bb9af7', delay: '.99s' },
];

const bracket = 'absolute h-[18px] w-[18px] border-line-bright max-sm:hidden';

// The hero scene: an astronaut on a laptop rides a rocket while tech-logo
// meteors drift past and get jumped over. Everything is SVG plus CSS keyframes; the
// only JavaScript is the re-launch toggle and the DODGED counter.
export default function HeroScene({ asteroids }: { asteroids: Asteroid[] }) {
  // Flipping a/b swaps the keyframe names, which replays the launch burst.
  const [warp, setWarp] = useState<'a' | 'b'>('a');

  return (
    <div className="fz-scene-box relative h-[460px] w-[620px] max-sm:h-[262px] max-sm:w-[358px] max-[389px]:h-[236px] max-[389px]:w-[320px]">
      <div
        aria-hidden="true"
        className="fz-scene absolute left-0 top-0 h-[460px] w-[620px] origin-top-left max-sm:left-1 max-sm:scale-[.56] max-[389px]:scale-50"
      >
        {/* HUD */}
        <div
          className={`${bracket} left-0 top-0 border-l-[1.5px] border-t-[1.5px]`}
        />
        <div
          className={`${bracket} right-0 top-0 border-r-[1.5px] border-t-[1.5px]`}
        />
        <div
          className={`${bracket} bottom-0 left-0 border-b-[1.5px] border-l-[1.5px]`}
        />
        <div
          className={`${bracket} bottom-0 right-0 border-b-[1.5px] border-r-[1.5px]`}
        />
        <div className="absolute left-7 top-1.5 flex gap-[18px] font-mono text-[11px] tracking-[0.14em] text-faint max-sm:left-1 max-sm:top-0 max-sm:gap-6 max-sm:text-[19px] max-sm:tracking-[0.12em]">
          <span>
            FZ-01<span className="max-sm:hidden"> · CREW 1</span>
          </span>
          <span className="text-green">
            <DodgeCount />
          </span>
        </div>
        <div className="absolute bottom-1 right-7 font-mono text-[11px] tracking-[0.14em] text-faint max-sm:hidden">
          VEL 7.66 KM/S · ION DRIVE
        </div>

        {/* ringed planet + orbiting moon */}
        <div className="absolute right-[26px] top-[30px] h-20 w-[120px] max-sm:right-5 max-sm:top-[34px]">
          <div className="absolute left-0 top-0 h-20 w-[120px]">
            <RingedPlanet />
          </div>
          <div className="fz-moon" />
        </div>

        <div
          className={`fz-warp-${warp} absolute inset-0`}
          style={{ transform: 'rotate(-16deg)' }}
        >
          {SPEED_LINES.map((l, i) => (
            <div
              key={i}
              className={`fz-speed ${l.desktop ? 'max-sm:hidden' : ''}`}
              style={{
                top: l.top,
                width: l.width,
                animationDelay: l.delay,
                ...(l.duration ? { animationDuration: l.duration } : {}),
              }}
            />
          ))}

          {/* warp burst */}
          <div className="absolute h-0 w-0" style={{ left: 338, top: 286 }}>
            <div className="fz-flash" />
            {WARP_LINES.map((w, i) => (
              <div
                key={i}
                className="fz-wr"
                style={{ transform: `rotate(${w.rot}deg)` }}
              >
                <div
                  className="fz-wl"
                  style={{ width: w.width, animationDelay: `${w.delay}s` }}
                />
              </div>
            ))}
          </div>

          {/* rocket */}
          <div className="fz-kick z-[1]">
            <div className="fz-bob">
              {EXHAUST.map((p, i) => (
                <span
                  key={i}
                  className={`fz-ex fz-ex-${p.dir} ${i > 7 ? 'max-sm:hidden' : ''}`}
                  style={{
                    background: p.color,
                    boxShadow: `0 0 10px ${p.glow}`,
                    animationDelay: p.delay,
                  }}
                />
              ))}
              <HeroRocket />
            </div>
          </div>

          {/* tech-logo meteors */}
          <div className="fz-words">
            {asteroids.map((a, i) => (
              <span
                key={a.word}
                className={`fz-word ${a.tone === 'violet' ? 'fz-word-b' : 'fz-word-a'} ${
                  i % 2 === 0 ? 'fz-blob1' : 'fz-blob2'
                }`}
                style={{ animationDelay: `${(i * BEAT).toFixed(2)}s` }}
              >
                <TechLogo id={a.logo} />
              </span>
            ))}
            {/* reduced motion: two parked meteors instead of the drift */}
            <div className="fz-static">
              <span
                className="fz-word-a fz-meteor fz-blob1 absolute"
                style={{ left: 450, top: -6 }}
              >
                <TechLogo id="nextjs" />
              </span>
              <span
                className="fz-word-b fz-meteor fz-blob2 absolute"
                style={{ left: 560, top: 4 }}
              >
                <TechLogo id="fastapi" />
              </span>
            </div>
          </div>

          {/* astronaut */}
          <div className="fz-kick z-[3]">
            <div className="fz-bob">
              <span className="fz-dust fz-dust-l" />
              <span className="fz-dust fz-dust-r" />
              <span className="fz-plus">+1</span>
              <div
                className="fz-jump absolute"
                style={{ left: 267, top: 135, width: 100, height: 125 }}
              >
                <Astronaut />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setWarp((w) => (w === 'a' ? 'b' : 'a'))}
        className="fz-hudbtn absolute z-[6] flex min-h-9 items-center gap-2 rounded-lg border border-line-strong bg-panel/85 px-3 font-mono text-[11px] tracking-[0.12em] text-muted hover:border-violet hover:text-ink max-sm:-bottom-1 max-sm:right-0 max-sm:min-h-10 max-sm:gap-1.5 sm:-bottom-1.5 sm:left-6"
      >
        <RelaunchIcon />
        RE-LAUNCH
      </button>
    </div>
  );
}
