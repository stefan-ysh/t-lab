<template>
    <div
        class="w-full mx-auto grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center mt-5 md:mt-10 px-20 grid-flow-row-dense">
        <nuxt-link :to="{
            name: 'user-id',
            params: {
                id: user.id
            }
        }"
            class="flex flex-col items-center justify-center m-5 cursor-pointer bg-slate-400 bg-opacity-5 rounded-md duration-300 hover:bg-opacity-20 p-5 mt-10"
            v-for="user in ResrarchScientistList" :key="user.avatar">
            <div class="avatar mb-10">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img :src="user.avatar" />
                </div>
            </div>
            <div class=" whitespace-nowrap mb-2">{{ user.name }}</div>
            <div class=" whitespace-nowrap">{{ user.post }}</div>
        </nuxt-link>
    </div>
</template>
    
<script setup lang="ts">
import ResrarchScientistList from '~/assets/data/researchScientistList.json'
</script>
<style scoped></style>