/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				accent: "#000E9D",
				black: "#18191D",
				white: "#F5F5F5",
			},
			animation: {
				fadeIn: "fadeIn .3s ease-in forwards",
				fadeInOpacity: "fadeInOpacity .2s ease-in forwards",
				onloadAnimation: " .7s textShrink 1.2s ease-in-out forwards",
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				textShrink: {
					from: {},
					to: {fontSize: "50px", top: "-14px", left:"0" },
				},
			},
		},
	},
	plugins: [],
};
