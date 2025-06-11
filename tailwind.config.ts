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
        outfit: ['var(--font-outfit)']
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      backgroundSize: {
        'gradient-size': '200% 200%',
      }
    }
  },
  plugins: [],
}

export default config 