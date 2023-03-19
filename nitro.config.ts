import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  srcDir: 'src',
  noPublicDir: true,
  errorHandler: '~/errorHandler',

  routeRules: {
    '/api/**': { cors: true },
  },

  imports: {
    dirs: ['./src/composables/**'],
    presets: [
      { from: 'zod', imports: ['z'] },
      { from: 'h3-zod', imports: ['useValidatedQuery', 'useValidatedBody'] },
    ],
  },
})
