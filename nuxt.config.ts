export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=1920, height=1080, initial-scale=1",
      title: "Foxogram - New discovery in the world of messengers",
      meta: [{ property: "og:image", content: "/image/favicon.svg" }],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.svg" }],
    },
  },

  modules: ["@pinia/nuxt", "@nuxt/fonts"],

  css: ["@/assets/css/default.css"],

  runtimeConfig: {
    public: {
      apiBase: "https://api-dev.foxogram.su/",
    },
  },

  devtools: {
    enabled: true,
  },

  ssr: false,

  hooks: {
    "prerender:routes"({ routes }) {
      routes.clear();
    },
  },
});
