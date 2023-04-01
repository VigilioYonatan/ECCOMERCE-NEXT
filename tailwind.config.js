/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                primary: "#F03637",
                primaryDark: "#DC0506",
                background: {
                    dark: "#0F0F0F",
                    light: "#F1F1F1",
                },
                paper: {
                    dark: "#282828",
                    light: "#FFFFFF",
                },
                hrColor: "#3F3F3F",
                gray: "#3F3F3F",
                gray2: "#848684",
            },
            textColor: {
                light: "#fff",
                dark: "#000",
            },
        },
    },
    plugins: [],
};
