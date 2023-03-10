/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
       'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '128': '32rem',
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
