// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },

  target: 'server',

  serverMiddleware: {
    '/api': '~/api'
  },
})