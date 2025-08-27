import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from 'unplugin-parcel-macros';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    macrosPlugin.vite(),
  ],
  base: "/a11y-demo/",
})
