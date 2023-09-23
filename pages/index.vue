<template>
    <div>
        <h1 class="text-3xl font-bold underline">
            index page
        </h1>
        {{ counter }}
        <!--跳转链接-->
        <NuxtLink to="/detail">Detail Page</NuxtLink>
        <!-- <NuxtLink to="/parent/child">Parent</NuxtLink> -->
    </div>
</template>
<script setup lang="ts">
const counter = useState('counter', () => 500)
</script>