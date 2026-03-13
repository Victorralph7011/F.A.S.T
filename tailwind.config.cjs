module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nvidia: {
                    green: '#76B900',
                    black: '#000000',
                    charcoal: '#111111',
                    card: '#1A1A1A',
                    textPrimary: '#FFFFFF',
                    textSecondary: '#A3A3A3',
                }
            },
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
