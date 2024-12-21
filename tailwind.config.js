/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				customBlue: {
					light: "#3a86ff",
					DEFAULT: "#003566",
					dark: "#001d3d",
				},
				customGreen: {
					light: "#80ed99",
					DEFAULT: "#4caf50",
					dark: "#087f23",
				},
				customGray: {
					light: "#d3d3d3",
					DEFAULT: "#a9a9a9",
					dark: "#2b2d42",
				},
			},
		},
	},
	plugins: [],
};

