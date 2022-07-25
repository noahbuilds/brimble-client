module.exports = {
    // darkMode: false, // or 'media' or 'class'
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3366CC",
                secondary: "#0A1429",
                paragraph: "#666666",
            },
            animation: {
                'spin-slow': 'spin 7s linear infinite',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};