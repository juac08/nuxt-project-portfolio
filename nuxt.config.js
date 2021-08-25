export default {
  head: {
    title: "Porfolio",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/element-ui/lib/theme-chalk/index.css"
      }
    ]
  },

  styleResources: {
    scss: ["~/styles/global/base.scss", "~/styles/animations/index.scss"]
  },

  css: ["~/styles/index.scss"],

  plugins: ["~/plugins/element-ui"],

  components: true,

  buildModules: ["@nuxt/typescript-build","@nuxtjs/pwa"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtclub/feathericons",
    "@nuxtjs/style-resources",
    
  ],
  pwa: {
    manifest: {
    name: 'Portfolio',
    lang: 'en',
    useWebmanifestExtension: false
  },
    icon: {
      icon: false
    },
    workbox: {
      autoRegister: true,
      enabled: true
    }
  },

  axios: {},

  build: {
    extend(config, { isDev, isClient }) {
      if (isClient) {
        config.node = {
          fs: "empty",
          child_process: "empty"
        };
      }
    }
  },
  generate: {
    fallback: true
  },
  target: "static",
  ssr: false,
  transition: {
    name: "fade",
    mode: "out-in"
  }
};
