/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	future: { hoverOnlyWhenSupported: true },
	theme: {
		extend: {
			colors: {
				fuchsia: { 50: 'rgb(var(--c-fuchsia-50) / <alpha-value>)', 100: 'rgb(var(--c-fuchsia-100) / <alpha-value>)', 200: 'rgb(var(--c-fuchsia-200) / <alpha-value>)', 300: 'rgb(var(--c-fuchsia-300) / <alpha-value>)', 400: 'rgb(var(--c-fuchsia-400) / <alpha-value>)', 500: 'rgb(var(--c-fuchsia-500) / <alpha-value>)', 600: 'rgb(var(--c-fuchsia-600) / <alpha-value>)', 700: 'rgb(var(--c-fuchsia-700) / <alpha-value>)', 800: 'rgb(var(--c-fuchsia-800) / <alpha-value>)', 900: 'rgb(var(--c-fuchsia-900) / <alpha-value>)', 950: 'rgb(var(--c-fuchsia-950) / <alpha-value>)' },
				purple: { 50: 'rgb(var(--c-purple-50) / <alpha-value>)', 100: 'rgb(var(--c-purple-100) / <alpha-value>)', 200: 'rgb(var(--c-purple-200) / <alpha-value>)', 300: 'rgb(var(--c-purple-300) / <alpha-value>)', 400: 'rgb(var(--c-purple-400) / <alpha-value>)', 500: 'rgb(var(--c-purple-500) / <alpha-value>)', 600: 'rgb(var(--c-purple-600) / <alpha-value>)', 700: 'rgb(var(--c-purple-700) / <alpha-value>)', 800: 'rgb(var(--c-purple-800) / <alpha-value>)', 900: 'rgb(var(--c-purple-900) / <alpha-value>)', 950: 'rgb(var(--c-purple-950) / <alpha-value>)' },
				indigo: { 50: 'rgb(var(--c-indigo-50) / <alpha-value>)', 100: 'rgb(var(--c-indigo-100) / <alpha-value>)', 200: 'rgb(var(--c-indigo-200) / <alpha-value>)', 300: 'rgb(var(--c-indigo-300) / <alpha-value>)', 400: 'rgb(var(--c-indigo-400) / <alpha-value>)', 500: 'rgb(var(--c-indigo-500) / <alpha-value>)', 600: 'rgb(var(--c-indigo-600) / <alpha-value>)', 700: 'rgb(var(--c-indigo-700) / <alpha-value>)', 800: 'rgb(var(--c-indigo-800) / <alpha-value>)', 900: 'rgb(var(--c-indigo-900) / <alpha-value>)', 950: 'rgb(var(--c-indigo-950) / <alpha-value>)' },
			},
			animation: {
				'nebula': 'nebula 15s ease-in-out infinite',
			},
			keyframes: {
				nebula: {
					'0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
					'25%': { transform: 'translate(0%, -80%) scale(1.5)' },
					'50%': { transform: 'translate(-100%, -20%) scale(0.7)' },
					'75%': { transform: 'translate(-20%, 30%) scale(1.4)' },
				}
			}
		},
	},
	plugins: [],
}

