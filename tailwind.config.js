/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
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

