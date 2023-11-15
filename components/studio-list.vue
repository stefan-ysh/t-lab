<template>
    <div
        class="studio-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 justify-items-center p-5 bg-cyan-50">
        <nuxt-link
            v-for="(studio, i) in studioList"
            :key="studio.img"
            :to="{
                name: 'studio-id',
                params: {
                    id: studio.id
                }
            }"
            class="opacity-70 hover:opacity-100 cursor-pointer transition-all duration-1/2 flex flex-col w-full justify-center items-center p-5">
            <img class="w-full block h-full hover:scale-[0.98] duration-1000" :src="studio.img" />
            <div class="absolute w-1/5 text-sm lg:text-2xl text-cyan-50 text-center">{{ studio.name }}</div>
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">
import studioList from 'assets/data/studioList.json'
</script>