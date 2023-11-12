<template>
    <div
        class="w-full mx-auto grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center mt-5 md:mt-10 px-20 grid-flow-row-dense">
        <nuxt-link
            class="flex flex-col items-center justify-center m-5 cursor-pointer bg-slate-400 bg-opacity-5 rounded-md duration-300 hover:bg-opacity-20 p-5 mt-10"
            v-for="user in imgs" :key="user.avatar">
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
import img1 from '~/assets/img/avatar/1/1.jpeg'
import img2 from '~/assets/img/avatar/1/2.jpeg'
import img3 from '~/assets/img/avatar/1/3.jpeg'
import img4 from '~/assets/img/avatar/1/4.jpeg'
import img5 from '~/assets/img/avatar/1/5.jpeg'
import img6 from '~/assets/img/avatar/1/6.jpeg'
import img7 from '~/assets/img/avatar/1/7.jpeg'
import img8 from '~/assets/img/avatar/1/8.jpeg'
const imgs = [
    {
        name: 'Jack',
        avatar: img1,
        post: 'Software Engineer'
    },
    {
        name: 'Marry Zhou',
        avatar: img2,
        post: 'Frontend Engineer'
    },
    {
        name: 'Jimmy',
        avatar: img3,
        post: 'UI Designer'
    },
    {
        name: 'Smith',
        avatar: img4,
        post: 'Backend Engineer'
    },
    {
        name: 'Jhon Simon',
        avatar: img5,
        post: 'Product Manager'
    },
    {
        name: 'Mike Jordan',
        avatar: img6,
        post: 'Product Designer'
    },
    {
        name: 'Omina',
        avatar: img7,
        post: 'Land Engineer'
    },
    {
        name: 'Stefan Yuan',
        avatar: img8,
        post: 'Marketing Manager'
    }
]
</script>
<style scoped></style>