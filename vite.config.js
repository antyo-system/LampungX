// Source - https://stackoverflow.com/a/79776265
// Posted by Rakesh
// Retrieved 2025-12-09, License - CC BY-SA 4.0

    // vite.config.js
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      server: {
        watch: {
          usePolling: true,
        },
      },
    });
