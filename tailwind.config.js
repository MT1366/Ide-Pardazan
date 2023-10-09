/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    width: {
      390: "390px",
      350: "350px",
    },
    height: {
      58: "58px",
      844: "844px",
    },
    colors: {
      "primary-color": "#7210FF",
      "secondary-color": "#edeaf1",
      "items-bg-primary": "#FBFFF1",
    },
  },
  plugins: [],
};
