const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/js/**/*.{js,ts,jsx,tsx,vue}"],
    theme: {
        screens: {
            sm: "375px",
            md: "480px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },

        extend: {
            colors: {
                primary: colors.green,
                secondary: colors.yellow,
                neutral: colors.gray,
            },
        },
    },
    plugins: [],
};
