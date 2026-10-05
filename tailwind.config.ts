import type { Config } from 'tailwindcss';

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      nav: '900px', // nav links collapse into a menu below this width
      journey: '1100px', // flight layout starts here
      xl: '1280px',
    },
    // Major-third scale (docs/DESIGN.md): 14, 17, 21, 27, 34, 43, 54.
    fontSize: {
      sm: ['0.875rem', { lineHeight: '1.5' }],
      base: ['1.0625rem', { lineHeight: '1.6' }],
      lg: ['1.3125rem', { lineHeight: '1.4' }],
      xl: ['1.6875rem', { lineHeight: '1.25' }],
      '2xl': ['2.125rem', { lineHeight: '1.2' }],
      '3xl': ['2.6875rem', { lineHeight: '1.15' }],
      '4xl': ['3.375rem', { lineHeight: '1.1' }],
    },
    extend: {
      colors: {
        abyss: token('abyss'),
        orbit: token('orbit'),
        starlight: token('starlight'),
        dust: token('dust'),
        flame: token('flame'),
        comet: token('comet'),
        nebula: token('nebula'),
        ember: token('ember'),
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: { panel: '14px', shot: '10px' },
    },
  },
  plugins: [],
};
export default config;
