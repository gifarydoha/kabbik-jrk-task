/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gold-yellow-200": "var(--gold-yellow-200)",
        "gold-yellow-300": "var(--gold-yellow-300)",
        "gold-yellow-500": "var(--gold-yellow-500)",
        "gold-yellow-700": "var(--gold-yellow-700)",
        "sea-green-100": "var(--sea-green-100)",
        "sea-green-300": "var(--sea-green-300)",
        "sea-green-500": "var(--sea-green-500)",
        "sea-green-700": "var(--sea-green-700)",
        "sea-green-900": "var(--sea-green-900)",
        "aqua-blue-100": "var(--aqua-blue-100)",
        "aqua-blue-500": "var(--aqua-blue-500)",
        "miranda-100": "var(--miranda-100)",
        "miranda-500": "var(--miranda-500)",
        "lime-green-100": "var(--lime-green-100)",
        "lime-green-500": "var(--lime-green-500)",
      },

      fontFamily: {
        title: "var(--title-font)",
      },
    },
  },
  plugins: [],
};
