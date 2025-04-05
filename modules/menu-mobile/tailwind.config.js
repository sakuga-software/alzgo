/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        host: ['Host Grotesk', 'sans-serif'],
      },
      colors: {
        dark_blue: '#062442',
        second_blue: '#0074E8',
        white: '#F8FCFF',
        black: '#041A2D',
      },
      width: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1440px',
      },
      maxWidth: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1440px',
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
