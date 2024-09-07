// tailwind.config.js
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths based on your project structure
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",

  plugins: [nextui()],
};
