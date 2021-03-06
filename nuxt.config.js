const fs = require("fs");
const webpack = require("webpack");

export default {
  head: {
    title: "Porfolio",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "msapplication-TileColor",
        content: "#100470"
      },
      {
        name: "msapplication-TileImage",
        content: "/favicon/ms-icon-144x144.png"
      },
      {
        name: "theme-color",
        content: "#100470"
      }
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
      },
      { rel: "stylesheet", type: "text/css", href: "slick/slick.css" },
      { rel: "stylesheet", type: "text/css", href: "slick/slick-them.css" },

      {
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css",
        rel: "stylesheet"
      },
      {
        href:
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        rel: "stylesheet"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },

      {
        rel: "stylesheet",
        href: "https://unpkg.com/element-ui/lib/theme-chalk/index.css"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-2048-2732.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-2732-2048.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-1668-2388.png",
        media:
          "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-2388-1668.png",
        media:
          "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-1536-2048.png",
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-2048-1536.png",
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-1668-2224.png",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-2224-1668.png",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-1620-2160.png",
        media:
          "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-2160-1620.png",
        media:
          "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-1284-2778.png",
        media:
          "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-2778-1284.png",
        media:
          "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-1170-2532.png",
        media:
          "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-2532-1170.png",
        media:
          "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-1125-2436.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-2436-1125.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-1242-2688.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-2688-1242.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-828-1792.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-1792-828.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-1242-2208.png",
        media:
          "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-2208-1242.png",
        media:
          "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-750-1334.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-1334-750.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-640-1136.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      },
      {
        rel: "apple-touch-startup-image",
        href: "pwa-splash/apple-splash-1136-640.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      }
    ]
  },
  // script: [
  //   { type: "text/javascript", src: "slick/slick.min.js" },
  //   {
  //     src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
  //     type: "text/javascript"
  //   }
  // ],

  styleResources: {
    scss: ["~/styles/global/base.scss", "~/styles/animations/index.scss"]
  },

  css: ["~/styles/index.scss"],

  plugins: ["~/plugins/element-ui"],

  components: true,

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/pwa", "nuxt-purgecss"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtclub/feathericons",
    "@nuxtjs/style-resources",
    "@nuxtjs/bootstrap-vue",
    "@nuxtjs/firebase"
  ],
  build: {
    /**
     * add external plugins
     */
    vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        });
      }
    }
  },

  firebase: {
    config: {
      apiKey: "AIzaSyDigVamFN3f0QTMBsxZcgtcZ_AYk2OvKVU",
      authDomain: "futureworks-testing.firebaseapp.com",
      projectId: "futureworks-testing",
      storageBucket: "futureworks-testing.appspot.com",
      messagingSenderId: "1016994484935",
      appId: "1:1016994484935:web:930f54f968da076cb7e4e2"
    },
    services: {
      messaging: {
        // createServiceWorker: true,
        fcmPublicVapidKey:
          "BLtWdnruN9z3RozNVb8MuPiOdpV9bAA4BuuwperrEyDN73kOhVaSWZd0HKD7om2DOnEPmTtFmlnwtYmxZ7M87tQ",
        inject: fs.readFileSync("./static/firebase-messaging-sw.js")
      }
    }
  },

  pwa: {
    meta: {
      title: "Portfolio",
      author: "Junaid Ahmad"
    },

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
