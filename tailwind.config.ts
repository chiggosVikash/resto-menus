import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			cardColor: '#fff3e6',
  			surface: '#ffe6cc',
  			onSurface: '#212121',
  			onPrimary: '#e5d5d9',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			orbit: {
  				'0%': {
  					transform: 'rotate(0deg) translateX(100px) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateX(100px) rotate(-360deg)'
  				}
  			},
  			moveAlongArc: {
  				'0%': {
  					transform: 'translate(100px, 0) rotate(0deg)'
  				},
  				'10%': {
  					transform: 'translate(100px, 0) rotate(36deg)'
  				},
  				'20%': {
  					transform: 'translate(100px, 0) rotate(72deg)'
  				},
  				'30%': {
  					transform: 'translate(0, 100px) rotate(108deg)'
  				},
  				'40%': {
  					transform: 'translate(-100px, 0) rotate(144deg)'
  				},
  				'50%': {
  					transform: 'translate(-100px, 0) rotate(180deg)'
  				},
  				'60%': {
  					transform: 'translate(0, -100px) rotate(216deg)'
  				},
  				'70%': {
  					transform: 'translate(100px, 0) rotate(252deg)'
  				},
  				'80%': {
  					transform: 'translate(100px, 0) rotate(288deg)'
  				},
  				'90%': {
  					transform: 'translate(0, 100px) rotate(324deg)'
  				},
  				'100%': {
  					transform: 'translate(100px, 0) rotate(360deg)'
  				}
  			}
  		},
  		animation: {
  			'move-diamond': 'moveAlongArc 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
  			orbit: 'orbit 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
