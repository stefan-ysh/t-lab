<template>
    <div class="flex justify-between p-5 bg-primary-content" style="background: hsl(var(--a));">
        <div>left</div>
        <Html :data-theme="theme" />
        <div>
            <Icon class="cursor-pointer" @click="toggleTheme" :name="theme === 'dark' ? 'ic:outline-light-mode':'ic:baseline-nights-stay'" color="black" />
            <!-- <Icon class="cursor-pointer" @click="toggleTheme" name="ic:outline-light-mode" color="black" /> -->
        </div>
    </div>
</template>
<script setup lang="ts">
import nuxtStorage from "nuxt-storage";

const theme = ref(nuxtStorage.localStorage.getData('theme') || 'light')

const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    nuxtStorage.localStorage.setData('theme', theme.value);
}
</script>