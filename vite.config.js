import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gltf'], // Add support for GLTF files
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('desktop_pc')) {
            return 'model-chunk';
          }
        }
      }
    },
    // Adjust chunk size warning limit
    chunkSizeWarningLimit: 1000
  }
})