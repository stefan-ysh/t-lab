// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue"],
  css: [
    "~/assets/css/tailwind.css",
    "primevue/resources/themes/lara-dark-teal/theme.css",
    "primeicons/primeicons.css",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: '*',
    },
  },
});
