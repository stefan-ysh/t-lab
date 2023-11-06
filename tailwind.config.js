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
        "header-color": "#ffffff",
      },
      transitionDuration: {
        "1/2": "0.5s",
      },
      backgroundImage: {
        "index-bgimg": "url('/assets/bg-img/Homepage_banner.jpg')",
        "index-bgimg-mobile": "url('/assets/bg-img/Homepage_mobile.jpg')",
        secondImg: "url('~/assets/img/studio/1.jpg')",
      },
      // 左边的值 left
      inset: {
        "2%": "2%",
      },
    },
  },
  plugins: [require("daisyui")],
};
