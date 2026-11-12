import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path'; 
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,

        alias: {
            '@': '/src',
            '@components': path.resolve(__dirname, './src/components'),
        },

        server: {
            port: 3000,
            open: true,
        },


        build: {
            outDir: 'dist',
            sourcemap: true,
            minify: 'esbuild',
        },
    },
});