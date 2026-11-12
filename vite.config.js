import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path'; 
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const transformJsxInJs = () => ({
    name:'transform-jsx-in-js',
    enforce: 'pre',
    async transform(code, id){
        if (!id.split('?')[0].endsWith('.js')) {
            return null;

        }
        const result = await transformWithOxc(code, id, { lang:'jsx' });
        return {
            code: result.code,
            map: result.map
        };
    }
});

export default defineConfig({
    plugins: [transformJsxInJs(), react()],
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