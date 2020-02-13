module.exports = {
  title: "vue-headless",
  description: "Build your own UI.",
  locales: {
    "/": {
      lang: "en-US",
      title: "vue-headless",
      description: "Build your own UI."
    },
    "/es/": {
      lang: "es-ES",
      title: "vue-headless",
      description: "Build your own UI."
    }
  },
  themeConfig: {
    displayAllHeaders: true,
    searchPlaceholder: "Search...",
    nav: [
      { text: "Docs", link: "/" },
      { text: "API", link: "/api" },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [
          { text: "English", link: "/" },
          { text: "Español", link: "/es/" }
        ]
      }
    ],
    displayAllHeaders: true
  }
};
