import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'ui-monospace', 'monospace'],
      },
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.neutral.700'),
            '--tw-prose-headings': theme('colors.neutral.900'),
            '--tw-prose-links': theme('colors.blue.600'),
            '--tw-prose-code': theme('colors.neutral.900'),
            '--tw-prose-pre-bg': 'transparent',
            maxWidth: 'none',
            'h2, h3, h4': {
              scrollMarginTop: '5rem',
            },
            pre: {
              padding: '0',
              backgroundColor: 'transparent',
              border: 'none',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.neutral.300'),
            '--tw-prose-headings': theme('colors.neutral.100'),
            '--tw-prose-links': theme('colors.blue.400'),
            '--tw-prose-code': theme('colors.neutral.100'),
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
