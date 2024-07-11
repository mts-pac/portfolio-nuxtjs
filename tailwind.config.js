/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        green: '#01c38e',
        blue: '#132d46',
        black: '#1a1e29'
      },
      dropShadow: {
        black: '0 0 3px rgba(0, 0, 0, 0.5)'
      },
      width: {
        'icon-svg-fixed': 'calc(28.98px - 0.025rem)'
      },
      keyframes: {
        scroll: {
          from: { transform: 'translateX(0px)' },
          to: { transform: 'translateX(-100%)' }
        }
      }
    }
  },
  plugins: []
}
