const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Inter', ...fontFamily.sans]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
