import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevtools from 'vite-plugin-vue-devtools' // Додали імпорт vueDevtools

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevtools()], // Замінено на [vue(), vueDevtools()]
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env': {
      BASE_URL: '/'
    }
  }
})
