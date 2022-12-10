import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
		// hmr: {
		// 	clientPort: 443,
		// },
		host: true,
	},
  plugins: [react()]
})
