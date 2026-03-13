import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f6',
          100: '#e3e9e3',
          200: '#c7d3c7',
          300: '#a1b5a1',
          400: '#7a957a',
          500: '#5d7a5d',
          600: '#496249',
          700: '#3c503c',
          800: '#334133',
          900: '#2b362b',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf3e7',
          300: '#f5e9d3',
          400: '#eed9b3',
          500: '#e3c189',
          600: '#d4a665',
          700: '#c28d4d',
          800: '#a17141',
          900: '#825d37',
        },
        gold: {
          50: '#fefdf7',
          100: '#fdf9e7',
          200: '#fbf0c4',
          300: '#f7e397',
          400: '#f1cf5a',
          500: '#e9b930',
          600: '#d49a25',
          700: '#b17821',
          8: '#8f5e22',
          900: '#764d20',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
