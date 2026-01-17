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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Fira+Code:wght@300;400;500;600&display=swap' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    },
  },

  css: ["bootstrap-icons/font/bootstrap-icons.css", "~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-gtag",
    "@nuxtjs/color-mode",
  ],

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
        "sql",
      ],
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
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

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  compatibilityDate: "2025-02-09",
});
