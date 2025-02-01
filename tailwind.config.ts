import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
  important: true,
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [typography, daisyui],
  daisyui: {
    themes: ['light'], // Ensure default themes are enabled
  },
  safelist: ['btn-primary', 'btn-secondary', 'btn-xs', 'btn-sm', 'btn-md', 'btn-lg'],
} satisfies Config
