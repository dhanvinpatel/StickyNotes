/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      chalkboard: "#274C43",
      chalkboardLight: "#9BCDB0",
      noteHeading: "#FFFFC5",
    },
    fontFamily: {
      'caveat': ['Caveat', 'sans-serif']
    }
  },
};

export const plugins = [];
