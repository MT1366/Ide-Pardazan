/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    width: {
      100: "100px",
      308: "308px",
      350: "350px",
      390: "390px",
      664: "664px",
    },
    height: {
      58: "58px",
      84: "84px",
      844: "844px",
    },
    colors: {
      "primary-color": "#7210FF",
      "secondary-color": "#edeaf1",
      "items-bg-primary": "#FBFFF1",
      "calendar-primary": "#e7d6ff",
      "textarea-primary-color": "#f7f6f4",
    },
  },
  plugins: [],
};
