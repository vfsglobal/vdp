import routerBaseUrl from "./router-base-url";

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "keywords", name: "keywords", content: "" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: routerBaseUrl + "vdp-favicon.png"
      }
    ],
    script: [{ src: routerBaseUrl + "js/jquery-3.2.1.min.js" }]
  },

  /*For Demo Server*/
  router: {
    base: routerBaseUrl,
    scrollBehavior() {
      return {};
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    height: "5px",
    color: "#172272"
  },

  /*
   ** Global CSS
   */
  css: [
    "~/assets/scss/main.scss",
    "~/static/fonts/icons/font-face.css",
    "~/static/fonts/Poppins/font-face.css",
    "~/static/fonts/Roboto/font-face.css"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/assign-global-components",
    "~/plugins/router-url",
    "~/plugins/html-entity-encode",
    "~/plugins/show-by-slide",
    "~/plugins/animate-height",
    {
      src: "~/plugins/outer-hooks",
      ssr: false
    }
  ],

  /*
   ** Build configuration
   */
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: false,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend() {}
  }
};
