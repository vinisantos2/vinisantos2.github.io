import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

 
module.exports = withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
});

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [],
});

export default config;
