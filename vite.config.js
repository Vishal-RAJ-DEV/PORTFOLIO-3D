import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          drei: ['@react-three/drei'],
          fiber: ['@react-three/fiber'],
        }
      }
    },
    chunkSizeWarningLimit: 1600
  },
  optimizeDeps: {
    include: ['three']
  }
})
