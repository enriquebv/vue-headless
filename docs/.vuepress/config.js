module.exports = {
  title: "vue-headless",
  description: "Build your own UI.",
  themeConfig: {
    searchPlaceholder: "Search...",
    sidebar: [
      '/introduction',
      '/usage',
      {
        title: 'Components',
        path: '/components/',
      }
    ],
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components/" },
    ]
  }
};
