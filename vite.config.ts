import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    /**
     * This ensures that the output files are builded without the hash.
     */
    rollupOptions: {
      input: {
        menu: './src/modules/menu/main.tsx',
        'menu-mobile': './src/modules/menu-mobile/main.tsx',
        searchbar: './src/modules/searchbar/main.tsx',
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.names?.[0]?.endsWith('.svg')) {
            return '[name].[ext]';
          }

          return '[name][extname]';
        },
        manualChunks: undefined,
        compact: true,
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
