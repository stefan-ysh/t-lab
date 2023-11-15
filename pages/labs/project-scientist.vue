<template>
    <div>

        <div class="hero min-h-[30vh]"
            style="background-image: url('/img/scientist/project-scientist.jpg');">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Project Scientists</h1>
                    <p class="mb-5">A growing collective of the world’s brightest minds</p>
                </div>
            </div>
        </div>
        <div
            class="px-0 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center mt-5 md:mt-10 lg:px-20 grid-flow-row-dense">
            <nuxt-link :to="{
                name: 'user-id',
                params: {
                    id: user.id
                }
            }" class="flex flex-col items-center justify-center m-5 cursor-pointer bg-slate-400 bg-opacity-5 rounded-md duration-300 hover:bg-opacity-20 p-5 mt-10"
                v-for="user in projectScientistList" :key="user.avatar">
                <div class="avatar mb-10">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img :src="user.avatar" />
                    </div>
                </div>
                <div class=" whitespace-nowrap mb-2 text-cyan-500">{{ user.name }}</div>
                <div class=" whitespace-nowrap">{{ user.post }}</div>
            </nuxt-link>
        </div>
    </div>
</template>
    
<script setup lang="ts">
import projectScientistList from '~/assets/data/projectScientistList.json'
</script>
<style scoped></style>