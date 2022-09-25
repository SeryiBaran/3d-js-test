import { defineConfig } from 'vite';
import { copy } from 'vite-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/3d-js-test/',
  // plugins: [copy([{ src: './obj', dest: 'dist/' }])],
});
