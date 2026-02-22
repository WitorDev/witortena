/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "primary-accent": "var(--color-primary-accent)",
        "secondary-accent": "var(--color-secondary-accent)",
        "terciary-accent": "var(--color-terciary-accent)",

        "primary-bg": "var(--color-primary-bg)",
        "secondary-bg": "var(--color-secondary-bg)",
        "terciary-bg": "var(--color-terciary-bg)",
        "quaternary-bg": "var(--color-quaternary-bg)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mylight: {
          "color-primary-accent": "#2bc133",
          "color-secondary-accent": "#79fc80",
          "color-terciary-accent": "#316634",
          "color-primary-bg": "#292929",
          "color-secondary-bg": "#122216",
          "color-terciary-bg": "#8d8d8d",
          "color-quaternary-bg": "#1f1f1f",
          "color-deep": "#00000033",
        },
      },
      {
        dark: {
          "color-primary-accent": "#79fc80",
          "color-secondary-accent": "#2bc133",
          "color-terciary-accent": "#316634",
          "color-primary-bg": "#1f1f1f",
          "color-secondary-bg": "#292929",
          "color-terciary-bg": "#122216",
          "color-quaternary-bg": "#8d8d8d",
          "color-deep": "#00000033",
        },
      },
    ],
  },
};
