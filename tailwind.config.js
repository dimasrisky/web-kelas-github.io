/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url(public/img/background/bg-hero.jpg)",
      },

      height: {
        '99': '50rem',
      },

      fontFamily: {
        inter : ['Inter', 'sans-serif'],
      },
      colors: {
        gray: '#94A3B8',
        jeruk: '#EA580C',
      }
    },
    container: { 
      center: true,
      padding: '2rem',
      screens: {
        lg : '1124px',
        xl : '1124px',
        "2xl" : '1124px',
      },
    },
    
  },
  plugins: [],
}
