// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      title: "Philip Narteh - Software Engineer",
      meta: [
        // objects for SEO type stuff
        // {}
      ],
      link: [
        // {rel:"stylesheet" href:"get font and icons link from Google fonts"}
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],

  content: {
    markdown: {
      anchorLinks: false,
    },
  },

  components: [
    {
      path: "~/components",
    },
  ],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: 'tailwind.config',
    config: {
      plugins: [require("@tailwindcss/typography")],
    },
  },
});
