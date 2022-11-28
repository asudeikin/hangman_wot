/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx,png}"],
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        backgroundYelowOne: "#E9E9BF",
        backgroundYelowTwo: "#CBAC77",
        btnBackgroundColor: "#E9E2BF",
        btnColor: "#EE7000",
        titleColor: "#37362E",
        progressBarBackgroundColor: "#37362E",
        grayBtn: "#8C8C7E",
        greenRightLetter: "#7AB300",
        wrongColor: "#FF2717"
      },
      backgroundImage: {
        'reversedTank': "url('./assets/reversedTank.png')",
        // 'tank': "url('./src/assets/tank.png')",
      },
      fontFamily: {
        roboto: ["roboto", "sans-serif"]
      },
    },
  },
  plugins: [],
}
