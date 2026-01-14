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
  plugins: [],
};
