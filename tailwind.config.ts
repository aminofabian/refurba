import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1e964c',
          light: '#23b75e',
          dark: '#187a3e'
        }
      },
      fontFamily: {
        outline: ['var(--font-bungee-outline)']
      }
    }
  },
  plugins: [],
}

export default config 