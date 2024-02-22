/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": { //esto apunta a que en navegadores webkit como Chrome y Safari la barra de scroll no sea visible
          display: "none",
        },
        
      };
  
      addUtilities(newUtilities);
    },
    ],
}

