module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class', // We'll force the class on HTML
  theme: {
    extend: {
      colors: {
        accent: '#FF5722',
        bg: '#0f0f0f'
      },
      boxShadow: {
        soft: '0 6px 18px rgba(0,0,0,0.6)'
      }
    }
  },
  plugins: []
}
