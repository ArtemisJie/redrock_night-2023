import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

export default defineConfig({
  base : '/redrock-night-2023/',
  plugins: [react()],
  build:{
    outDir:'build'
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './public'),
      },
    ],
  },
})
