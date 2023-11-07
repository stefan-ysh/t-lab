<template>
    <div class="studio-container grid grid-cols-3 gap-x-4 gap-y-4 justify-items-center p-5 bg-cyan-50">
        <!-- <div class="flex flex-col w-full justify-center items-center">
                <img class="w-full block h-auto" src="http://fakeimg.pl/4000x2000/0079D8/fff/?text=Aprcasi">
                <h1 class="absolute">Studio 1</h1>
            </div>
            <div class="flex flex-col w-full justify-center items-center">
                <img class="w-full block h-auto" src="http://fakeimg.pl/4000x2000/0079D8/fff/?text=Aprcasi">
                <h1 class="absolute">Studio 2</h1>
            </div>
            <div class="flex flex-col w-full justify-center items-center">
                <img class="w-full block h-auto" src="http://fakeimg.pl/4000x2000/0079D8/fff/?text=Aprcasi">
                <h1 class="absolute">Studio 3</h1>
            </div>
            <div class="flex flex-col w-full justify-center items-center">
                <img class="w-full block h-auto" src="http://fakeimg.pl/4000x2000/0079D8/fff/?text=Aprcasi">
                <h1 class="absolute">Studio 4</h1>
            </div>
            <div class="flex flex-col w-full justify-center items-center">
                <img class="w-full block h-auto" src="http://fakeimg.pl/4000x2000/0079D8/fff/?text=Aprcasi">
                <h1 class="absolute">Studio 5</h1>
            </div> -->
        <div v-for="(studio, i) in studioList" :key="studio.img"
            class="flex flex-col w-full justify-center items-center p-5">
            <img class="w-full block h-full" :src="studio.img" />
            <div class="absolute w-1/5 text-sm lg:text-2xl text-cyan-50 text-center">{{ studio.name }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import img1 from '~/assets/img/studio/1.jpg'
import img2 from '~/assets/img/studio/2.jpg'
import img3 from '~/assets/img/studio/3.jpg'
import img4 from '~/assets/img/studio/4.jpg'
import img5 from '~/assets/img/studio/5.jpg'
import img6 from '~/assets/img/studio/6.jpg'
// import img7 from '~/assets/img/studio/7.jpg'
// import img8 from '~/assets/img/studio/8.jpg'
// import img9 from '~/assets/img/studio/9.jpg'
// import img10 from '~/assets/img/studio/10.jpg'
// import img11 from '~/assets/img/studio/11.jpg'
// import img12 from '~/assets/img/studio/12.jpg'
// import img13 from '~/assets/img/studio/13.jpg'
// import img14 from '~/assets/img/studio/14.jpg'
// import img15 from '~/assets/img/studio/15.jpg'
// import img16 from '~/assets/img/studio/16.jpg'
// import img17 from '~/assets/img/studio/17.jpg'
// import img18 from '~/assets/img/studio/18.jpg'
const counter = useState('counter', () => 500)
// http://fakeimg.pl/2000x800/0079D8/fff/?text=Without
// 工作室列表 1- 18
const studioList = [
    {
        name: 'APRCAST 亚太区高级科学技术研究中心',
        img: img1
    },
    {
        name: 'CSEAE 欧美经济研究中心',
        img: img2
    },
    {
        name: 'STEAM和PBL工作室',
        img: img3
    },
    {
        name: 'JSL 植物生长工作室',
        img: img4
    },
    {
        name: 'JOIN OUR COMPETITION',
        img: img5
    },
    {
        name: 'APRCAST 亚太区高级科学技术研究中心',
        img: img6
    },
    // {
    //     name: 'APRCAST 亚太区高级科学技术研究中心',
    //     img: img7
    // },
    // {
    //     name: 'APRCAST 亚太区高级科学技术研究中心',
    //     img: img8
    // },
    // {
    //     name: 'APRCAST 亚太区高级科学技术研究中心',
    //     img: img9
    // },
    // {
    //     name: 'APRCAST 亚太区高级科学技术研究中心',
    //     img: img10
    // },
    // {
    //     name: 'APRCAST 亚太区高级科学技术研究中心',
    //     img: img11
    // },
    // {
    //     name: 'APRCAST 亚太区高级科学技术研究中心',
    //     img: img12
    // },
    // {
    //     name: 'APRCAST 亚太区高级科学技术研究中心',
    //     img: img13
    // },
    // {
    //     name: 'APRCAST 亚太区高级科学技术研究中心',
    //     img: img14
    // },
    // {
    //     name: 'APRCAST 亚太区高级科学技术研究中心',
    //     img: img15
    // },
    // {
    //     name: 'APRCAST 亚太区高级科学技术研究中心',
    //     img: img16
    // },
    // {
    //     name: 'APRCAST 亚太区高级科学技术研究中心',
    //     img: img17
    // },
    // {
    //     name: 'APRCAST 亚太区高级科学技术研究中心',
    //     img: img18
    // }
]
</script>