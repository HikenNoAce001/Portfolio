// Unit tests for the pure Hyperjump helpers. Node 22 strips the types from
// the imported .ts file, so this runs with plain `node --test`.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  STOP_ORDER,
  altLabel,
  altShort,
  currentStop,
  easeInOutCubic,
  formatKm,
  isStopId,
  jumpDirection,
  kmAt,
  stopLabel,
  targetY,
  trails,
} from '../src/lib/hyperjump.ts';

test('easeInOutCubic hits 0, ½ and 1 and clamps', () => {
  assert.equal(easeInOutCubic(0), 0);
  assert.equal(easeInOutCubic(0.5), 0.5);
  assert.equal(easeInOutCubic(1), 1);
  assert.equal(easeInOutCubic(-1), 0);
  assert.equal(easeInOutCubic(2), 1);
  assert.ok(easeInOutCubic(0.25) < 0.25, 'eases in');
  assert.ok(easeInOutCubic(0.75) > 0.75, 'eases out');
});

test('easeInOutCubic is monotonic', () => {
  let prev = -1;
  for (let i = 0; i <= 100; i++) {
    const v = easeInOutCubic(i / 100);
    assert.ok(v >= prev);
    prev = v;
  }
});

test('formatKm groups thousands', () => {
  assert.equal(formatKm(35786), '35,786');
  assert.equal(formatKm(384400), '384,400');
  assert.equal(formatKm(0), '0');
  assert.equal(formatKm(407.6), '408');
});

test('section header labels come from the stops', () => {
  assert.equal(altLabel('about'), 'Alt 100 km · Kármán line');
  assert.equal(altLabel('log'), 'Alt 408 km · Low Earth orbit');
  assert.equal(altLabel('missions'), 'Alt 35,786 km · Geostationary');
  assert.equal(altLabel('contact'), '384,400 km · Next destination');
  assert.equal(altShort('missions'), '35,786 km');
  assert.equal(stopLabel('log'), '02 Flight log');
});

test('jumpDirection compares scroll positions', () => {
  assert.equal(jumpDirection(0, 900), 'down');
  assert.equal(jumpDirection(900, 0), 'up');
  assert.equal(jumpDirection(500, 500), 'down');
});

test('kmAt interpolates both ways', () => {
  assert.equal(kmAt(0, 408, 0), 0);
  assert.equal(kmAt(0, 408, 1), 408);
  assert.equal(kmAt(384400, 100, 1), 100);
  assert.ok(kmAt(384400, 100, 0.5) < 384400);
});

test('targetY lands the row 24px down and clamps', () => {
  assert.equal(targetY(1000, 500, 10000), 1476);
  assert.equal(targetY(0, 10, 10000), 0);
  assert.equal(targetY(4000, 3000, 5000), 5000);
});

test('currentStop picks the last row in the upper third', () => {
  assert.equal(currentStop([null, 600, 1400, 2400, 3400], 900), 'top');
  assert.equal(currentStop([null, -500, 200, 1200, 2200], 900), 'log');
  assert.equal(currentStop([null, -3000, -2000, -900, 100], 900), 'contact');
});

test('stops and trails', () => {
  assert.deepEqual(STOP_ORDER, ['top', 'about', 'log', 'missions', 'contact']);
  assert.ok(isStopId('missions'));
  assert.ok(!isStopId('main'));
  assert.ok(!isStopId('toString'));
  const t = trails();
  assert.equal(t.length, 28);
  assert.equal(t[0].color, '#7dcfff');
  assert.equal(t[7].color, '#bb9af7');
  assert.equal(t[0].width, 2.5);
  for (const x of t) {
    const left = parseInt(x.left, 10);
    assert.ok(left >= 1 && left <= 97);
    assert.ok(x.height >= 90 && x.height <= 260);
  }
});
