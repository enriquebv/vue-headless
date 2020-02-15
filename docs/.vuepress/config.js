module.exports = {
  title: "vue-headless",
  description: "Build your own UI.",
  locales: {
    "/": {
      label: 'English',
      lang: "en-US",
      title: "vue-headless",
      description: "Build your own UI."
    },
    "/es/": {
      label: 'Español',
      lang: "es-ES",
      title: "vue-headless",
      description: "Construye to propia Vue UI"
    }
  },
  themeConfig: {
    searchPlaceholder: "Search...",
    sidebar: [
      "/introduction",
      "/usage",
      {
        title: "Components",
        path: "/components/"
      }
    ],
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components/" }
    ]
  }
};
