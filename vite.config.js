import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true, // Enable global test functions like `describe`, `test`, `expect`
    environment: 'jsdom', // Use jsdom for simulating the DOM (needed for React testing)
    setupFiles: './src/setupTests.js', // Optionally add a setup file
    transformMode: {
      web: [/\.jsx$/, /\.tsx$/], // Ensure JSX and TSX files are processed correctly
    },
  },
});