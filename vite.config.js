import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'icon/icon-192.png',
        'icon/icon-512.png',
        'vite.svg' // Optional: add other public assets here if needed
      ],
      manifest: {
        name: 'Monopoly Deluxe Companion',
        short_name: 'Monopoly',
        description: 'Digital assistant for Monopoly Deluxe board game',
        theme_color: '#ffffff',
        background_color: '#ffe5b4',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'icon/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
