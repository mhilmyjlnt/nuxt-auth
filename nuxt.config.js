export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-auth",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
  ],
  axios: {
    baseURL: "http://127.0.0.1:3333/api",
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "login", method: "post", propertyName: "data.token" },
          user: { url: "me", method: "get", propertyName: "data" },
          logout: false,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
