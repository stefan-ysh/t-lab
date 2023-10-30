<template>
  <!-- 布局出口 -->
  <NuxtLayout>
    <!-- 路由出口 -->
    <nuxt-page />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: '%s - Site Title',
  // ... or as a function
  // titleTemplate: (productCategory) => {
  //   return productCategory
  //     ? `${productCategory} - Site Title`
  //     : 'Site Title'
  // },
  script: [
    { innerHTML: 'console.log(\'Hello world\')' },
    // {
    //   src: 'https://third-party-script.com',
    //   // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
    //   tagPosition: 'bodyClose'
    // }
  ]
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  /* transform: rotate3d(1, 1, 1, 15deg); */
}

@media (min-width: 1024px) {

  h1,
  .h1 {
    font-size: 4.5rem;
    line-height: 1;
    line-height: 5.375rem;
  }
}

@media (min-width: 640px) {

  h1,
  .h1 {
    font-size: 3.75rem;
    line-height: 1;
    line-height: 4.5rem;
  }
}

h1 {
  font-family: Nokia Pure Headline, sans-serif;
  line-height: 1;
  font-weight: 100;
  line-height: 3.625rem;
  letter-spacing: .01rem;
}

@media (min-width: 1024px) {
  .\[\&\>h2\]\:h3>h2 {
    font-size: 3rem;
    line-height: 1;
    line-height: 3.125rem;
    letter-spacing: .01rem;
  }
}

@media (min-width: 640px) {
  .\[\&\>h2\]\:h3>h2 {
    font-size: 2.25rem;
    line-height: 3.625rem;
    letter-spacing: .01rem;
  }
}

@media (min-width: 640px) {

  h2,
  .h2 {
    font-size: 3.75rem;
    line-height: 1;
    line-height: 4.5rem;
    letter-spacing: .01rem;
  }
}

h2,
.h2 {
  font-family: Nokia Pure Headline, sans-serif;
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.625rem;
  letter-spacing: .02rem;
}</style>
