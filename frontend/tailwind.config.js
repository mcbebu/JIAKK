/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:
        {
          'login-page': "url('/src/assets/LoginPageBg.svg')",
          'home-page' : "url('/src/assets/HomePageBg.svg')",
        }
    },
  },
  plugins: [],
}
