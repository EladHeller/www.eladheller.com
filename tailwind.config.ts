import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            maxWidth: '100%',
            h1: {
              color: '#fff',
              fontWeight: '700',
            },
            h2: {
              color: '#fff',
              fontWeight: '600',
            },
            h3: {
              color: '#fff',
              fontWeight: '600',
            },
            strong: {
              color: '#fff',
            },
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#60a5fa',
              },
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#fff',
              direction: 'ltr',
              textAlign: 'left',
            },
            code: {
              color: '#fff',
              backgroundColor: '#1f2937',
              borderRadius: '0.25rem',
              padding: '0.25rem 0.5rem',
              '&::before': {
                content: '""',
              },
              '&::after': {
                content: '""',
              },
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderRadius: '0',
              padding: '0',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#fff',
            '--tw-prose-headings': '#fff',
            '--tw-prose-links': '#3b82f6',
            '--tw-prose-bold': '#fff',
            '--tw-prose-code': '#fff',
            '--tw-prose-pre-code': '#fff',
            '--tw-prose-pre-bg': '#1f2937',
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config; 