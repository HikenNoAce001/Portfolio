import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', { lineHeight: '15.6px' }],
        sm: ['14px', { lineHeight: '18.2px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '27px' }],
        h8: ['14px', { lineHeight: '21px' }],
        h7: ['16px', { lineHeight: '24px' }],
        h6: ['18px', { lineHeight: '27px' }],
        h5: ['20px', { lineHeight: '30px' }],
        h4: ['24px', { lineHeight: '36px' }],
        h3: ['30px', { lineHeight: '42px' }],
        h2: ['36px', { lineHeight: '54px' }],
        h1: ['60px', { lineHeight: '66px' }],
        header: ['52px', { lineHeight: '66px' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
