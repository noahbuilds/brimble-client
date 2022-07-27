export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Brimble - Deployment made easy",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "title", content: "Brimble - Deployment made easy" },
      {
        name: "description",
        content:
          "The most efficient way to host and scale your web apps. Be part of the 10k+ developers and teams building incredible things on Brimble.",
      },
      { name: "author", content: "Brimble" },
      { name: "og:title", content: "Brimble - Deployment made easy" },
      {
        name: "og:description",
        content: "The easiest place to deploy your web apps.",
      },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://brimble.io" },
      {
        name: "og:image",
        content:
          "https://storage.googleapis.com/brimble-assets/img/display_img.png",
      },
      { name: "og:image:width", content: "1200" },
      { name: "og:image:height", content: "630" },
      { name: "og:image:type", content: "image/png" },
      { name: "og:image:alt", content: "Brimble logo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: "https://brimble.io" },
      { name: "twitter:site", content: "@brimblehq" },
      { name: "twitter:creator", content: "@brimblehq" },
      { name: "twitter:title", content: "Brimble - Deployment made easy" },
      {
        name: "twitter:description",
        content: "The easiest place to deploy your web apps.",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/brimble-assets/img/display_img.png",
      },
      { name: "twitter:image:alt", content: "Brimble logo" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vee-validate", ssr: true }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
    "@nuxt/image",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "vue-toastification/nuxt"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: ["vee-validate/dist/rules"],
  },
  target: "static",
  image: {
    domains: ["storage.googleapis.com"],
  },
};
