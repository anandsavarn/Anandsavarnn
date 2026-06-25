/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        foreground: '#e6edf3',
        code: {
          bg: '#2b3342',
          surface: '#374256',
          border: '#4f5e78',
          accent: '#58a6ff',
          green: '#3fb950',
          amber: '#d29922',
          purple: '#a371f7',
        },
      },
    },
  },
  plugins: [],
}
