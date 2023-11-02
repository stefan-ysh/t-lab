<template>
    <div class="index-container">
        <div class="carousel block w-full relative">
            <div class="relative mt-0 w-full">
                <div class="carousel-inner relative overflow-hidden w-full">
                    <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true"
                        hidden="true" :checked="true">
                    <div class=" w-full carousel-item absolute opacity-0 transition-opacity duration-1/2 ease-out">
                        <img class="block h-auto w-full" src="@/assets/img/index_1.png">
                    </div>
                    <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true"
                        hidden="true">
                    <div class=" w-full carousel-item absolute opacity-0 transition-opacity duration-1/2 ease-out">
                        <img class="block h-auto w-full" src="@/assets/img/index_2.jpg">
                    </div>
                    <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true"
                        hidden="true">
                    <div class=" w-full carousel-item absolute opacity-0 transition-opacity duration-1/2 ease-out">
                        <img class="block h-auto w-full" src="@/assets/img/index_3.jpg">
                    </div>
                    <label for="carousel-3"
                        class="carousel-control select-none bg-black bg-opacity-25 rounded-full hidden cursor-pointer text-cyan-50 h-10 leading-9 text-4xl absolute top-1/2 -translate-y-1/2 text-center w-10 z-10 hover:bg-black hover:bg-opacity-80 hover:text-cyan-300 left-2% prev control-1">‹</label>
                    <label for="carousel-2"
                        class="carousel-control select-none bg-black bg-opacity-25 rounded-full hidden cursor-pointer text-cyan-50 h-10 leading-9 text-4xl absolute top-1/2 -translate-y-1/2 text-center w-10 z-10 hover:bg-black hover:bg-opacity-80 hover:text-cyan-300 right-2% next control-1">›</label>
                    <label for="carousel-1"
                        class="carousel-control select-none bg-black bg-opacity-25 rounded-full hidden cursor-pointer text-cyan-50 h-10 leading-9 text-4xl absolute top-1/2 -translate-y-1/2 text-center w-10 z-10 hover:bg-black hover:bg-opacity-80 hover:text-cyan-300 left-2% prev control-2">‹</label>
                    <label for="carousel-3"
                        class="carousel-control select-none bg-black bg-opacity-25 rounded-full hidden cursor-pointer text-cyan-50 h-10 leading-9 text-4xl absolute top-1/2 -translate-y-1/2 text-center w-10 z-10 hover:bg-black hover:bg-opacity-80 hover:text-cyan-300 right-2% next control-2">›</label>
                    <label for="carousel-2"
                        class="carousel-control select-none bg-black bg-opacity-25 rounded-full hidden cursor-pointer text-cyan-50 h-10 leading-9 text-4xl absolute top-1/2 -translate-y-1/2 text-center w-10 z-10 hover:bg-black hover:bg-opacity-80 hover:text-cyan-300 left-2% prev control-3">‹</label>
                    <label for="carousel-1"
                        class="carousel-control select-none bg-black bg-opacity-25 rounded-full hidden cursor-pointer text-cyan-50 h-10 leading-9 text-4xl absolute top-1/2 -translate-y-1/2 text-center w-10 z-10 hover:bg-black hover:bg-opacity-80 hover:text-cyan-300 right-2% next control-3">›</label>
                    <ol class="carousel-indicators list-none p-0 m-0 absolute bottom-2% left-0 right-0 text-center z-10">
                        <li class="inline-block mt-0 mb-0 ml-1 mr-1">
                            <label for="carousel-1"
                                class="carousel-bullet text-cyan-50 cursor-pointer block text-4xl hover:text-cyan-500">•</label>
                        </li>
                        <li class="inline-block mt-0 mb-0 ml-1 mr-1">
                            <label for="carousel-2"
                                class="carousel-bullet text-cyan-50 cursor-pointer block text-4xl hover:text-cyan-500">•</label>
                        </li>
                        <li class="inline-block mt-0 mb-0 ml-1 mr-1">
                            <label for="carousel-3"
                                class="carousel-bullet text-cyan-50 cursor-pointer block text-4xl hover:text-cyan-500">•</label>
                        </li>
                    </ol>
                </div>
            </div>
            <div
                class="absolute bottom-20 left-1/2 -translate-x-1/2 h-10 leading-10 pl-10 pr-10 rounded-lg bg-cyan-600 text-cyan-50 hover:text-cyan-50 cursor-pointer hover:bg-gray-800">
                Know More
            </div>
        </div>
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
            <div v-for="(studio, i) in studioList" :key="studio"
                class="flex flex-col w-full justify-center items-center p-10">
            {{ i }}

                <img class="w-full block h-auto" :src="'/_nuxt/assets/img/studio/' + (i + 1) + '.jpg'">
                <h1 class="absolute">{{ studio }}</h1>
            </div>
        </div>

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
// 工作室列表 1- 18
const studioList = ['Studio 1', 'Studio 2', 'Studio 3', 'Studio 4', 'Studio 5', 'Studio 6', 'Studio 7', 'Studio 8', 'Studio 9', 'Studio 10', 'Studio 11', 'Studio 12', 'Studio 13', 'Studio 14', 'Studio 15', 'Studio 15', 'Studio 16', 'Studio 17']
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
<style>
.carousel-open:checked+.carousel-item {
    position: static;
    opacity: 100;
}

#carousel-1:checked~.control-1,
#carousel-2:checked~.control-2,
#carousel-3:checked~.control-3 {
    display: block;
}

#carousel-1:checked~.control-1~.carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet {
    color: #428bca;
}
</style>