
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//     test: {
//       globals: true,
//       environment: 'jsdom',
//       setupFiles: './tests/setupTests',

//     }
// })





// /// <reference types="vitest" />
// /// <reference types="vite/client" />

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//     test: {
//       globals: true,
//       environment: 'jsdom',
//       setupFiles: './src/test/setup.ts',
//       coverage: {
//          reporter: ['text', 'json', 'html'],
//       }
//    }
// })


/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: "./__tests__/setupTests.jsx",
    }
})



