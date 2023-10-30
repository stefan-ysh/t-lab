module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'header-color': '#ffffff',
      },
      backgroundImage: {
        'index-bgimg': "url('/assets/bg-img/Homepage_banner.jpg')",
        'index-bgimg-mobile': "url('/assets/bg-img/Homepage_mobile.jpg')",
       }

    }
  },
  plugins: [], // 以插件的方式引入
};
