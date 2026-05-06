// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },

          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
  ],
};