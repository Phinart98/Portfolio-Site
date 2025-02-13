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

  css: ["bootstrap-icons/font/bootstrap-icons.css", "~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-gtag"],

  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: "github-dark", // or 'dracula', 'nord', 'material-palenight'
      langs: [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "sh",
        "mdc",
        "md",
        "yaml",
        "python",
        "sql"
      ],
    },
  },

  components: [
    {
      path: "~/components",
    },
  ],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    config: {
      plugins: [require("@tailwindcss/typography")],
    },
  },

  gtag: {
    id: "G-BCZF1LTT3V",
  },

  compatibilityDate: "2025-02-09",
});
