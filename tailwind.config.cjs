const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		screens: {
			'2xs': '305px',
			'xs': '412px',
			...defaultTheme.screens,
		},
	},

	plugins: []
};

module.exports = config;
