import defaultTheme  from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ['class', 'dark'],
	content: ["./src/**/*.{html,js,svelte,ts,css}"],
	//safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
                "sm": defaultTheme.screens.sm,
                "md": defaultTheme.screens.md,
                "lg": defaultTheme.screens.lg,
                "xl": defaultTheme.screens.xl,
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
                uprising_pink: "#f4797e",
                anarcho_grey: "#605c5c",
                blush_pink: "#fbd2d4",
                charcoal: "#3b3838",
                dissent_silver: "#c1c0bf",
                gnd_green: "#129760",
                indusrial_grey: "#8c8989",
                liberation_pink: "#f7a5a9",
                panther_black: "#080a0a",
                rosa_red: "#f04c53",
                rose_red: "#ec1f27",
                snow_white: "#fbfdfd",
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...defaultTheme.fontFamily.sans]
			}
		}
	},
};

export default config;
