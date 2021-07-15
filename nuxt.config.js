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
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon/favicon-16x16.png",
        sizes: "16x16"
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon/favicon-32x32.png",
        sizes: "32x32"
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        href: "/favicon/apple-touch-icon.png",
        sizes: "57x57"
      },

      {
        rel: "stylesheet",
        href: "https://unpkg.com/element-ui/lib/theme-chalk/index.css"
      },
      {
        rel: "manifest",
        href: "/favicon/manifest.json"
      }
    ]
  },
  styleResources: {
    scss: ["~/styles/global/base.scss", "~/styles/animations/index.scss"]
  },

  css: ["~/styles/index.scss"],

  plugins: ["~/plugins/element-ui"],

  components: true,

  buildModules: ["@nuxt/typescript-build"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtclub/feathericons",
    "@nuxtjs/style-resources"
  ],

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
