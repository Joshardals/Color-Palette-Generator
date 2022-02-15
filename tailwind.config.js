module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors: {
        transparent: "transparent",
        currentColor: "currentColor",
        "light-bg": "#e8ecf3", 
        "dark-blue": "#0d1327", 
      },
        screen: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
