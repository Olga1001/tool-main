import { defineConfig } from 'vite';
import iife from 'rollup-plugin-iife';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  build: {
    outDir: 'build/' + process.env.TEST_PATH,
    lib: {
      entry: 'src/' + process.env.TEST_PATH + '/index.' + process.env.FILE_TYPE,
      name: process.env.TEST_PATH,
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      plugins: [nodePolyfills()]
    },
    sourcemap: true,
    reportCompressedSize: true
  },
  plugins: [
    iife({
      useStrict: false,
      prependSemicolon: false,
      format: {
        args: ['window'],
        params: ['window'],
        wrapper: '(function(%s){\n%s\n})(%s)'
      }
    })
  ],
  assetsInclude: ['**/*.css']
});
