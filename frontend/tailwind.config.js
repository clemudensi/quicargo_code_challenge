// see doc for config options - https://tailwindcss.com/docs/configuration

const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./public/**/*.html",
      "./public/*.html",
      "./src/**/*.js",
      "./src/*.js",
      "./src/**/*.html",
      "./src/*.html",
      "./public/**/*.js",
      "./public/*.js",
    ],
    options: {
      safelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  variants: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents }) {
      addComponents([
        {
          ".container": { width: "100%" },
        }
      ]);
    }),
  ],
}
