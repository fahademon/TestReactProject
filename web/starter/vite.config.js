import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from 'vite-jsconfig-paths'
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import tailwindcss from "@tailwindcss/vite";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths(), svgr(),
  eslint({
    overrideConfig: {
      rules: {
        // tell ESLint you don’t need React in scope
        'react/react-in-jsx-scope': 'off',
        // silence unused-vars only for the identifier React
        'no-unused-vars': ['warn', { varsIgnorePattern: '^React$' }]
      }
    }
}), tailwindcss(),
  ],
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, '../../common'),
      '@components': path.resolve(__dirname, 'src/components'),
    }
  },
  server: {
    fs: {
      // Allow Vite to serve files from these locations:
      allow: [
        // your common folder (outside web/starter)
        path.resolve(__dirname, '../../common'),
        // your own project root inside web/starter
        path.resolve(__dirname, '.'),

      ],
    },
  },
  optimizeDeps: {
    // force Vite to pre-bundle Zustand (and any other deps used by common/)
    include: ['zustand', 'axios'],
  }
})
