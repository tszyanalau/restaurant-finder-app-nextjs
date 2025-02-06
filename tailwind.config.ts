import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [typography, daisyui],
  daisyui: {
    themes: ['light'], // Ensure default themes are enabled
  },
  safelist: [{ pattern: /^(btn|size|text|link|range|badge|gap|alert|h)-/ }],
} satisfies Config
