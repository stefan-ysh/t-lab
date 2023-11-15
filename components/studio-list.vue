<template>
    <div
        class="studio-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 justify-items-center px-10 md:px-16 lg:px-24 bg-base-200 py-5">
        <nuxt-link v-for="(studio, i) in studioList" :key="studio.img" :to="{
            name: 'studio-id',
            params: {
                id: studio.id
            }
        }"
            class=" relative group cursor-pointer transition-all flex flex-col justify-center items-center hover:text-xs hover:scale-[0.98] duration-1/2 hover:rounded-3xl overflow-hidden">
            <img class="h-full" :src="studio.img" />
            <div class="hidden group-hover:block absolute text-sm lg:text-2xl text-center z-20">{{ studio.name
            }}
            </div>
            <div class=" opacity-0 group-hover:opacity-80 absolute inset-0 bg-base-200 z-[10]"></div>
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">
import studioList from 'assets/data/studioList.json'
</script>