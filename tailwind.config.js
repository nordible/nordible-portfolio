/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#145BFF',
          dark: '#0D2B75',
        },
        secondary: '#0D2B75',
        accent: '#FF9F1A',
        background: {
          DEFAULT: '#FAFBFF',
          section: '#F3F7FF',
        },
        nordible: {
          blue: '#145BFF',
          dark: '#0D2B75',
          orange: '#FF9F1A',
          bg: '#FAFBFF',
          card: '#FFFFFF',
          border: '#E8ECF4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      maxWidth: {
        'container': '1280px',
      },
      spacing: {
        'section': '120px',
      }
    },
  },
  plugins: [],
};
