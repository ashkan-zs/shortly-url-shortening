/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-cyan": "hsl(180, 66%, 49%)",
        "primary-dark-violet": "hsl(257, 27%, 26%)",
        "secondary-red": "hsl(0, 87%, 67%)",
        "neutral-gray": "hsl(0, 0%, 75%)",
        "neutral-grayish-violet": "hsl(257, 7%, 63%)",
        "neutral-very-dark-blue": "hsl(255, 11%, 22%)",
        "neutral-very-dark-violet": "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        "mobile-form": "url(/src/assets/bg-shorten-mobile.svg)",
        "desktop-form": "url(/src/assets/bg-shorten-desktop.svg)",
        "desktop-boost": "url(/src/assets/bg-boost-desktop.svg)",
        "mobile-boost": "url(/src/assets/bg-boost-mobile.svg)",
      },
    },
  },
  plugins: [],
};
