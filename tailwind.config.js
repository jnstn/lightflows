/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    spacing: {
      0.5: '8px',
      1: '16px',
      1.5: '24px',
      2: '32px',
      2.5: '40px',
      3: '48px',
      3.5: '56px',
      4: '64px',
      4.5: '72px',
      5: '80px',
      5.5: '88px',
      6: '96px',
      6.5: '104px',
      7: '112px',
      7.5: '120px',
      8: '128px',
      8.5: '136px',
      9: '144px',
      9.5: '152px',
      10: '160px',
    },
    extend: {
      colors: {
        black: '#000000',
        gold: '#AB8E66',
        grey: '#F7F8FA',
        white: '#ffffff',
        platinum: '#3B4758',
      },
    },
  },
  plugins: [],
};
