import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Povolí počúvanie na všetkých verejných IP adresách (0.0.0.0)
    // a automaticky povolí prístup z nich.
    // Alternatívne: host: '0.0.0.0'
    // Ak by si chcel explicitne povoliť len niektoré:
    // allowedHosts: ['localhost', '127.0.0.1', 'tvojadomena.coolify.app']
  },
  preview: {
    host: true, // Povolí počúvanie na všetkých verejných IP adresách (0.0.0.0)
    // a automaticky povolí prístup z nich pre preview server.
    // Alternatívne: host: '0.0.0.0'
    // Ak by si chcel explicitne povoliť len niektoré:
    // allowedHosts: ['localhost', '127.0.0.1', 'isgsoc04gssgw88cw40k4c8c.tz-server.online', '.tz-server.online']
    // Môžeš použiť aj wildcard, napr. '.tz-server.online' na povolenie všetkých subdomén.
  },
})
