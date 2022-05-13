module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // COLORS
        'primary': 'hsla(216, 90%, 60%, 1)',
        'secondary': 'hsla(210, 100%, 28%, 1)',
        'tertiary': 'hsla(210, 71%, 28%, 1)',
        'orange': 'hsla(29, 95%, 54%, 1)',
        'light': 'hsla(0, 0%, 100%, 1)',
        'dark': 'hsla(0, 0%, 32%, 1)',

        // BG
        'gradient-from': 'hsl(220, 43%, 93%)',
        'gradient-to': 'hsla(220, 43%, 93%, 0)',
        'ceo-bg': 'hsla(220, 43%, 93%, 1)',
        'footer-bg': 'hsla(210, 86%, 17%, 1)',
      }
    },
  },
  plugins: [],
};
