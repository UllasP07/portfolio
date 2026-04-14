import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          danger: '#e63946',
          light: '#f1faee',
          accent: '#a8dadc',
          muted: '#457b9d',
          dark: '#1d3557'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains)']
      },
      boxShadow: {
        glow: '0 0 120px rgba(168, 218, 220, 0.25)'
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at top, rgba(230, 57, 70, 0.15), transparent 45%), radial-gradient(circle at 20% 20%, rgba(168, 218, 220, 0.08), transparent 40%)'
      }
    }
  },
  plugins: []
};

export default config;
