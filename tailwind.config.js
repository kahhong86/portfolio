const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	purge: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			borderWidth: {
				'200': '200px',
				'60': '60px',
				'75': '75px',
				'48': '48px',
				'50': '56px',
			},
			backgroundImage: {
				'base': 'url("/assets/bg-pattern-edit.png")'
			},
			fontFamily: {
				sans: ["Raleway", ...defaultTheme.fontFamily.sans],
				header: ["Raleway", ...defaultTheme.fontFamily.sans],
			},
			boxShadow: {
				'heavy': 'inset 0 0 25px #000000'
			},
		},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}