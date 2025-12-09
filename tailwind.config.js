/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        warning: {
          500: "#9CA3AF", 
        },
        bgLight: {
          500: "#D1D5DB",   
        },
        bgDark: {
          500: "#BAE6FD",     
        },
        text: {
          500: "#FFFFFF",   
        },
        muted: {
          500: "#9CA3AF",     
        },
        warningOpacity: {
          500: "#52617B",     
        },
        blueOpacity: {
          500: "#8497B8",    
        },
        accentOpacity: {
          500: "#738CB6",
        },
        amber: {
          500: "#6E84A9",
        },
      }

    },
  },
  plugins: [],
}
