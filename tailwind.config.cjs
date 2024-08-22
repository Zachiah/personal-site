const defaultTheme = require('tailwindcss/defaultTheme');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		screens: {
			'2xs': '305px',
			xs: '412px',
			...defaultTheme.screens
		}
	},

	plugins: [addDynamicIconSelectors()]
};

module.exports = config;
