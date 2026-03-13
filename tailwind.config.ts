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
          DEFAULT: '#9DBBAE',
          50: '#f0f5f3',
          100: '#e1ebe7',
          200: '#c3d7cf',
          300: '#9DBBAE',
          400: '#7ca797',
          500: '#5d8d7e',
          600: '#4a7164',
          700: '#3a5950',
          800: '#2d4540',
          900: '#243834',
        },
        'light-gray': '#F4F4F4',
        'pale-blue': '#E0E8F0',
        silver: '#D3D9DF',
        'rich-black': '#1A1A1A',
        background: '#ECECEC',
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
