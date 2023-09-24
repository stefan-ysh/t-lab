<template>
  <!-- 布局出口 -->
  <NuxtLayout name="default">
    <template #header>
      <default-header />
    </template>
    <!-- 路由出口 -->
    <nuxt-page />
    <template #footer>
      <default-footer />
    </template>
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
</style>
