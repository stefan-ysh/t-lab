<template>
    <div>
        <div class="w-[90%] lg:w-[70%]  p-5 lg:p-20 m-5 mx-auto lg:m-y-10 flex flex-col items-center justify-center"
            v-for="img in imgs" :key="img">
            <div class="card lg:card-side bg-base-100 shadow-xl w-full">
                <figure>
                    <img :src="img" alt="Album" class="w-1/2 lg:w-full" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-center md:justify-end">
                        <button class="btn btn-outline">KNOW MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang="ts">
import img1 from '/img/science-research/1.svg'
import img2 from '/img/science-research/2.svg'
import img3 from '/img/science-research/3.svg'
import img4 from '/img/science-research/4.svg'
const imgs = [img1, img2, img3, img4]
import { useRoute } from 'vue-router'
const id = ref()
const curId = useRoute().params.id
id.value = curId
// 请求数据
try {
    const { data, pending, error, refresh } = await useFetch('/api/enterprise?id=' + curId)
    console.log('[ data.id ] >', data.value.id)
} catch (error) {
    console.log(error)
}
</script>
<style scoped></style>