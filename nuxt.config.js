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
      { name: "format-detection", content: "telephone=no" },
      { hid: "description", name: "description", content: "" },
      {
        name: "msapplication-TileColor",
        content: "#404987"
      },
      {
        name: "msapplication-TileImage",
        content: "/favicon/ms-icon-144x144.png"
      },
      {
        name: "theme-color",
        content: "#404987"
      }
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

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/pwa"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtclub/feathericons",
    "@nuxtjs/style-resources"
  ],
  pwa: {
    manifest: {
      name: "Portfolio",
      short_name: "Portfolio",
      description: "Portfolio",
      background_color: "#404987",
      useWebmanifestExtension: false
    },
    icon: {
      icon: false
    }
    // workbox: {
    //   autoRegister: true,
    //   enabled: true
    // }
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
