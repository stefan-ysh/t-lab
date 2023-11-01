<template>
    <div class="index-container">
        <!-- <section class="hero-section hero-background">
            <div class="w-full h-52 md:min-h-[calc(77vh-6.729rem)] min-h-[calc(77vh-5.844rem)] hero-container text-cyan-50">
                <article class=" w-6/12">
                    <h1>
                        Innovation with purpose
                    </h1>
                </article>
            </div>
        </section> -->
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
        <div class="studio-container grid grid-cols-3 justify-items-center p-5">
            <div class="flex m-5 flex-col w-1/3 justify-center items-center">
                <img class="w-full block h-auto" src="http://fakeimg.pl/2000x800/0079D8/fff/?text=.">
                <h1 class="absolute">Without</h1>
            </div>
            <div class="flex m-5 flex-col w-1/3 justify-center items-center">
                <img class="w-full block h-auto" src="http://fakeimg.pl/2000x800/0079D8/fff/?text=.">
                <h1 class="absolute">Studio</h1>
            </div>
            <div class="flex m-5 flex-col w-1/3 justify-center items-center">
                <img class="w-full block h-auto" src="http://fakeimg.pl/2000x800/0079D8/fff/?text=.">
                <h1 class="absolute">Mine</h1>
            </div>
            <div class="flex m-5 flex-col w-1/3 justify-center items-center">
                <img class="w-full block h-auto" src="http://fakeimg.pl/2000x800/0079D8/fff/?text=.">
                <h1 class="absolute">Yours</h1>
            </div>
            <div class="flex m-5 flex-col w-1/3 justify-center items-center">
                <img class="w-full block h-auto" src="http://fakeimg.pl/2000x800/0079D8/fff/?text=.">
                <h1 class="absolute">China</h1>
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