
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/@premieroctet/next-admin/dist/**/*.{js,ts,jsx,tsx}",
    "./nextAdminOptions.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nextadmin: {
          background: {
            default: '#FEFEFE'
          }
        },
        // // Dark mode colors
        // "dark-nextadmin": {
        //   background: {
        //     default: "#2F2F2F"
        //   }
        // }
      }
    }
  },
  presets: [require("@premieroctet/next-admin/preset")],
};
  