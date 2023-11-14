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
        secondImgOne: "url('/img/second-carousel/1.jpeg')",
        secondImgTwo: "url('/img/second-carousel/2.webp')",
        secondImgThree: "url('/img/second-carousel/3.webp')",
        secondBanner: "url('/img/second-carousel/banner.jpeg')",
      },
      // 左边的值 left
      inset: {
        "2%": "2%",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        'x-100': 'x-100%',
        'y-100': 'y-100%',
        '100': '100% 100%',
        '16': '4rem',
      }
    },
  },
  plugins: [require("daisyui")],
};
