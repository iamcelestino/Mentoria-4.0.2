module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'times': ['Times New Roman', 'serif'],
        },
      },
      with: {
        'full-plus-1.3px': 'calc(100% + 1.3px)'
      }, 
      container: {
        center: true,
        padding: '1.5rem'
      },
    },
    plugins: [],
  }