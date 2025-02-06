import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      enabled: true,
    },
    include: ['./src/**/*.test.ts', './src/**/*.test.tsx'],
    globals: true,
  },
})
