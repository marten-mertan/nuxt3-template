// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],

  devtools: { enabled: true },

  app: {
    baseURL: '/nuxt3-template/',

    /**
     * Метатеги, фавиконки и т.п
     * Для генерации фавиконок - https://realfavicongenerator.net/
     */

    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Nuxt3 Template',
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'title',
          content: 'Kanjisho',
        },
        {
          name: 'description',
          content: 'Kanjisho description',
        },
        {
          name: 'author',
          content: 'Mertan',
        },
        /* Favicons */
        {
          name: 'msapplication-TileColor',
          content: '#e7609e',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ],
      link: [
        /* Favicons */
        { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicons/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#e7609e' },
      ],
    },
  },

  css: [
    '~/assets/scss/vendors.scss',
    '~/assets/scss/common.scss',
  ],

  compatibilityDate: '2025-03-09',

  /**
   * Миксины и переменные доступны во всех компонентах и во всех scss файлах
   */
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/shared.scss" as *;',
        },
      },
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
