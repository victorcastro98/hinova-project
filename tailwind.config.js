/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-start": '#37B2D4',
        "background-end": '#DDDDDD',
        "blue-light": '#1C5297',
        "blue-dark": '#21435B',
        "blue-pop": '#3b82f6'
    },
    animation: {
      'spin-slow': 'spin 8s linear infinite',
      'wide-in': 'wideIn 1s ease-in-out',
    },
    keyframes: {
      wideIn: {
        '0%': { width: '0%' },
        '100%': { wtdth: '100%' },
      },
      spin: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
    },
    },
  },
  plugins: [],
}