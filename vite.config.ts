import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const now = new Date();
const pad = (n: number) => String(n).padStart(2, '0');
const appVersion = `${pad(now.getDate())}${pad(now.getMonth() + 1)}${now.getFullYear()}.${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
