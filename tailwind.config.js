/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        defaultBlack: '#121212',
        defaultGreen: '#1DB954',
        defaultGray: '#2E2E2E',
        defaultDarkerGray: '#161515'

      },
      fontFamily: {
        montserratRegular: ['Montserrat-Regular', 'sans-serif'],
        montserratExtraBold: ['Montserrat-ExtraBold', 'sans-serif'],
        montserratSemiBold: ['Montserrat-SemiBold', 'sans-serif']
      },
    },
  },
  plugins: [],
}