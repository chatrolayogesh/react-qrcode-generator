/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

// https://github.com/krishnadeveloper/react-qr-code-style/blob/main/.gitignore
// https://krishnadeveloper.github.io/react-qr-code-style/index.html
// https://qr-code-styling.com/