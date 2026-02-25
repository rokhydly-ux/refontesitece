import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'corporate-blue': '#004AAD',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
