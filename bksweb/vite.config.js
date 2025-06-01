import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Pre dev server
    host: '0.0.0.0', // Odporúčané pre konzistentnosť
    port: 5173, // Defaultný dev port
  },
  preview: {
    // Pre produkčný preview server
    host: '0.0.0.0', // Dôležité: počúvaj na všetkých rozhraniach v kontajneri
    port: 4173, // Štandardný port pre vite preview
    strictPort: true, // Zabezpečí, že sa použije tento port
    allowedHosts: [
      'isgsoc04gssgw88cw40k4c8c.tz-server.online',
      '.tz-server.online', // Povolí všetky subdomény pod tz-server.online
      // Môžeš pridať aj 'localhost' a '127.0.0.1', ak testuješ preview lokálne
      // 'localhost',
      // '127.0.0.1'
    ],
  },
})
