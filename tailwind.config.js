//RECORDAR QUE POR CADA VEZ QUE ACTUALICEMOS ESTE ARCHIVO DEBEMOS DE HACER BUILD MEDIANTE SHORTCUT ESTABLECIDO EN EL PACKAGE.JSON
//npm run tw:build que es equivalente a: tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css --watch
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],

  //Aplicando DarkMode
  darkMode: "class", //or media or class

  theme: {
    // BREAKPOINTS CUSTOMIZATION
    screens: {
      xsm: "320px",
      // => @media (min-width: 320px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      "2xl": "1440px",
      // => @media (min-width: 1280px) { ... }
      "3xl": "1720px",
      // => @media (min-width: 1920px) { ... }
    },

    extend: {
      // Personalizando nuestros backgrounds
      backgroundImage: {
        sanFrancisco: "url('/public/assets/img/sanFrancisco.jpg')",
        bali: "url('/public/assets/img/bali.jpg')",
        chicago: "url('/public/assets/img/chicago.jpg')",
        europe: "url('/public/assets/img/europe.jpg')",
        iceland: "url('/public/assets/img/iceland.jpg')",
        LA: "url('/public/assets/img/LA.jpg')",
        newyork: "url('/public/assets/img/new_york.jpg')",
        norway: "url('/public/assets/img/norway.jpg')",
        switzerland: "url('/public/assets/img/switzerland.jpg')",
        miami: "url('/public/assets/img/miami.jpg')",
        nicaragua: "url('/public/assets/img/Nicaragua.jpeg')",
        bora: "url('/public/assets/img/Bora.jpeg')",
        maldivas: "url('/public/assets/img/Maldivas.jpeg')",
        maui: "url('/public/assets/img/Maui.jpeg')",
        mykonos: "url('/public/assets/img/mykonos.jpeg')",
        paris: "url('/public/assets/img/Paris.jpeg')",
        santorini: "url('/public/assets/img/Santorini.jpeg')",
        victoria: "url('/public/assets/img/Victoria Falls.jpeg')",
        desktop: "url('/public/assets/img/Landingls.jpg')",
        santoriniwi: "url('/public/assets/img/Santoriniwi.jpeg')",
      },
      // Personalizando nuestra paleta de colores
      //Nos traemos nuetros colores que ya aloja Tailwind y agregaremos los colores que vamos a emplear en el desarrollo de nuestra pagina web
      backgroundColor: (theme) => ({
        ...theme("colors"),
        //Declarando nuestros colores personalizados.
        primary: "#CC2D4A",
        secundary: "#8FA206",
        terciary: "#61AEC9",
        tab: "#aaaa opacity:50%",
      }),
      //Ahora que vamos hacer si queremos un texto con alguno de estos colores.
      //Haremos lo mismo, metiendo los colors que declaramos ya podremos hacer uso de nuestros colores.
      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
        maintitle: "#FF0063",
      },
      //Agregamos nuestros Font-Familly
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [],
};
