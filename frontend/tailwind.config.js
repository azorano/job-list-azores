/*

src/tailwind.config.js

*/

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customGreen: '#90EE90',
      },
      fontFamily: {
        sans: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
