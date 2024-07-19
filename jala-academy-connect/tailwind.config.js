/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'screen-72': 'calc(100vh - 72px)',
      },
      backgroundImage: {
        'formImage': "url('images/formImage.png')",
        'howWorksImage':"url('images/register.png')",
      },
    },
    fontFamily:{
      'poppins':["Poppins",' sans-serif']
    }
  },
  plugins: [],
}

