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
      keyframes: {
        orbit: {
          '0%':{ transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%':{ transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' }
        },
        moveAlongArc: {
          '0%': { transform: 'translate(100px, 0) rotate(0deg)' }, // Start at 100px radius
          '10%': { transform: 'translate(100px, 0) rotate(36deg)' },
          '20%': { transform: 'translate(100px, 0) rotate(72deg)' },
          '30%': { transform: 'translate(0, 100px) rotate(108deg)' }, // Adjusted for circular motion
          '40%': { transform: 'translate(-100px, 0) rotate(144deg)' },
          '50%': { transform: 'translate(-100px, 0) rotate(180deg)' },
          '60%': { transform: 'translate(0, -100px) rotate(216deg)' },
          '70%': { transform: 'translate(100px, 0) rotate(252deg)' },
          '80%': { transform: 'translate(100px, 0) rotate(288deg)' },
          '90%': { transform: 'translate(0, 100px) rotate(324deg)' },
          '100%': { transform: 'translate(100px, 0) rotate(360deg)' }, // End at the same point as start
        },
      },
      animation: {
        'move-diamond': 'moveAlongArc 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
        'orbit': 'orbit 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
      }
    },
  },
  plugins: [],
};

export default config;
