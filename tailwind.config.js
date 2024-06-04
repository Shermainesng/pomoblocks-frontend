/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightOrange: "#EF8181",
        darkPurple: "#937B96",
        lightPink: "#E7DBEB",
        lightYellow: "#F7D270",
      },
    },
  },
  plugins: [require("daisyui")],
};
