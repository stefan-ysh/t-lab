<template>
    <div class="index-container">
        <header-carousel />
        <studio-list />
        <second-carousel />
        <!-- <h1>index page</h1> -->
        <!-- {{ counter }} -->
        <!--跳转链接-->
        <!-- <NuxtLink to="/detail">Detail Page</NuxtLink> -->
        <!-- <NuxtLink to="/parent/child">Parent</NuxtLink> -->
    </div>
</template>
<script setup lang="ts">
const counter = useState('counter', () => 500)
// http://fakeimg.pl/2000x800/0079D8/fff/?text=Without
</script>
<style scoped>
.hero-container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    max-width: 1280px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.875rem 1.5rem 3.75rem;
}

h3 {
    font-size: 3rem;
}
</style>
