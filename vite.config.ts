import { defineConfig } from 'vite';

export default defineConfig({
  // This ensures assets are correctly linked when deployed to hyo629923-netizen.github.io/claw_guide/
  base: '/claw_guide/',
  build: {
    outDir: 'dist',
  }
});
