import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#0A0E17',
          soft: '#111827',
          panel: '#161F32',
          line: '#232D45',
        },
        ember: {
          DEFAULT: '#F5A524',
          soft: '#FFCE7C',
          dim: '#8A5A1E',
        },
        enchant: {
          DEFAULT: '#2FD8A6',
          soft: '#8FF3D6',
          deep: '#127A63',
        },
        dusk: {
          DEFAULT: '#3B2E5A',
          soft: '#5B4A85',
        },
        parchment: '#F2E8D0',
        danger: '#E2583E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        pixel: ['var(--font-pixel)', 'monospace'],
        stat: ['var(--font-mono)', 'monospace'],
      },
      keyframes: {
        drift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.55' },
          '55%': { opacity: '0.85' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        drift: 'drift 20s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        flicker: 'flicker 3.2s ease-in-out infinite',
        rise: 'rise 0.7s ease-out both',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
}
export default config
