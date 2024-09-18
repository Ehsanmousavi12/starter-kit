const gecut = require("@gecut/styles");

/** @type {import('tailwindcss').Config} */
export default {
  ...gecut.tailwindConfig,

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};
