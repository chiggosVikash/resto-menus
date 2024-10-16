import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E34B78',
        secondary: '#05877E',
        cardColor:'#f0E7DC',
        surface:'#F5F5F5',
        onSurface:'#212121',
        onPrimary:'#e5d5d9'

      },
    },
  },
  plugins: [],
};
export default config;
