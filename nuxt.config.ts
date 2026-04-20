// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Yelli Myriem Milaman Coulibaly — Portfolio',
      meta: [
        { name: 'description', content: 'Développeuse web & Étudiante MIAGE' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap' }
      ]
    }
  }
})
