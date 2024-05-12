import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $slides: '/src/slides',
      $lib: "/src/lib",
      $assets: "/src/assets"
    },
  },
})
