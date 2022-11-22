/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    screens: {
      xs: "340px",
      ...defaultTheme.screens,
      "3xl": "1900px",
    },
    extend: {
      colors: {
        gray: colors.slate,
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Bitter", ...defaultTheme.fontFamily.serif],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.500"),
          },
        },
      }),
      fontSize: {
        "7.5xl": "5.25rem",
        "9.5xl": "9rem",
        "10xl": "10rem",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        90: "90%",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        67: "16.75rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
  darkMode: "class",
}
