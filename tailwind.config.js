module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    
  ],
  theme: {
    
    extend: {
      colors:{
        primary:"#e3e5e8",
        secondary:"#ebedef",
        darkPrimary:"#36393f",
        darkSecondary:"#2f3136",
      }
    },
  },
  plugins: [],
}