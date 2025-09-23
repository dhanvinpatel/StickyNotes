/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      chalkboard: "#274C43",
      chalkboardLight: "#9BCDB0",
      noteHeading: "#FFF5F2",
    },
    fontFamily: {
      'caveat': ['Caveat', 'sans-serif']
    }
  },
};

export const plugins = [];
