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
        <div class="page-container">
            <section class="section-container no-bg-container lg:pr-[15rem] bg-default [&>h2]:h3 bg-white text-black">
                <h2 class=" mt-10 mb-20 ml-20">
                    We solve human needs through the power of human intellect. As Nokia's industrial research lab, we
                    innovate
                    with purpose, pursuing responsible, sustainable technologies that will have a demonstrable impact on
                    society.

                </h2>
            </section>
            <section class="section-bg-container lg:min-h-[43.75rem] min-h-[23.75rem] lg:flex sm:block">
                <div class="lg:w-6/12 sm:w-full">
                    <img src="@/assets/img/index_1.png" class="object-cover w-full h-full">
                </div>
                <div
                    class="lg:w-6/12 sm:w-full w-full bg-slate-400 flex flex-col justify-center lg:p-10 sm:p-10 p-10 text-black sm:mt-10 lg:mt-0">
                    <h3 class="pb-10">
                        Our Research
                    </h3>
                    <h4 class="w-[105%] py-10">
                        Nokia Bell Labs is innovating the technologies that will transform the way we live our lives
                    </h4>
                    <div class="flex items-center">
                        <a href="#">Learn about our four research areas</a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                            class="md:h-12 md:w-12 h-10 w-10 p-2 rounded-full border-[1.5px] text-black">
                            <path fill-rule="evenodd"
                                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </section>
            <section class="section-bg-container lg:flex sm:block p-10 pb-0">
                <img src="@/assets/img/index_2.jpg"
                    class=" lg:w-6/12 sm:w-full px-10object-contain w-full h-full rounded-md m-auto">
                <div class="lg:w-6/12 sm:w-full flex flex-col justify-center lg:p-10 sm:px-0 sm:py-10 text-black">
                    <a href="#"
                        class="gta-featured-topics lg:row-start-1 lg:col-span-2 col-span-1 flex flex-col gap-y-content-base hover-scale">
                        <h3>Responsible AI</h3>
                        <div class="flex gap-x-content-sm items-center">
                            <h4 class="flex-1 line-clamp-4">For AI to thrive, it must put humans first</h4><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true" class="h-9 w-9 md:h-12 md:w-12 p-1 rounded-full border-[1.5px]">
                                <path fill-rule="evenodd"
                                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </a>
                    <div class="lg:flex items-center sm:block">
                        <a href="#"
                            class=" hover:scale-105 transition-all justify-center sm:w-full sm:mx-0 gta-featured-topics flex p-6 m-6 w-full mx-0 flex-col p-content-base gap-y-content-sm rounded-md bg-gray-200 h-full hover-scale">
                            <p class="caption-base text-lg">Research</p>
                            <div class="flex md:flex-col flex-row gap-content-sm md:items-start items-center">
                                <h5 class="flex-1 line-clamp-3">What is Responsible AI?</h5>
                            </div>
                        </a>
                        <a href="#"
                            class=" hover:scale-105 transition-all justify-center sm:w-full sm:mx-0 lg:mx-10 gta-featured-topics flex p-6 m-6 w-full mx-0 flex-col p-content-base gap-y-content-sm rounded-md bg-gray-200 h-full hover-scale">
                            <p class="caption-base text-lg">Blog</p>
                            <div class="flex md:flex-col flex-row gap-content-sm md:items-start items-center">
                                <h5 class="flex-1 line-clamp-3">AI solutions look to create a sustainable future</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <section class="section-bg-container lg:flex sm:block mb-10 p-10 pt-0">
                <div class="lg:w-6/12 sm:w-full flex flex-col justify-center lg:p-10 sm:px-0 sm:py-0 text-black">
                    <a href="#"
                        class="gta-featured-topics lg:row-start-1 lg:col-span-2 col-span-1 flex flex-col gap-y-content-base hover-scale">
                        <h3>Responsible AI</h3>
                        <div class="flex gap-x-content-sm items-center">
                            <h4 class="flex-1 line-clamp-4">For AI to thrive, it must put humans first</h4><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true" class="h-9 w-9 md:h-12 md:w-12 p-1 rounded-full border-[1.5px]">
                                <path fill-rule="evenodd"
                                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </a>
                    <div class="lg:flex items-center sm:block">
                        <a href="#"
                            class=" hover:scale-105 transition-all justify-center sm:w-full sm:mx-0 w-full mx-0 gta-featured-topics flex p-6 m-6  flex-col p-content-base gap-y-content-sm rounded-md bg-gray-200 h-full hover-scale">
                            <p class="caption-base text-lg">Research</p>
                            <div class="flex md:flex-col flex-row gap-content-sm md:items-start items-center">
                                <h5 class="flex-1 line-clamp-3">What is Responsible AI?</h5>
                            </div>
                        </a>
                        <a href="#"
                            class=" hover:scale-105 transition-all justify-center sm:w-full sm:mx-0 w-full mx-0 lg:mx-10 gta-featured-topics flex p-6 m-6  flex-col p-content-base gap-y-content-sm rounded-md bg-gray-200 h-full hover-scale">
                            <p class="caption-base text-lg">Blog</p>
                            <div class="flex md:flex-col flex-row gap-content-sm md:items-start items-center">
                                <h5 class="flex-1 line-clamp-3">AI solutions look to create a sustainable future</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <img src="@/assets/img/index_3.jpg"
                    class=" lg:w-6/12 sm:w-full px-10object-contain w-full h-full rounded-md m-auto">

            </section>
            <section class="section-bg-container lg:flex sm:block p-10 py-0">
                <img src="@/assets/img/index_4.jpg"
                    class=" lg:w-6/12 sm:w-full px-10object-contain w-full h-full rounded-md m-auto">
                <div class="lg:w-6/12 sm:w-full flex flex-col justify-center lg:p-10 sm:px-0 sm:py-10 text-black">
                    <a href="#"
                        class="gta-featured-topics lg:row-start-1 lg:col-span-2 col-span-1 flex flex-col gap-y-content-base hover-scale">
                        <h3>UNEXT</h3>
                        <div class="flex gap-x-content-sm items-center">
                            <h4 class="flex-1 line-clamp-4">UNIX transformed computing; Now it’s UNEXT’s turn to transform
                                networking</h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="currentColor" aria-hidden="true"
                                class="h-9 w-9 md:h-12 md:w-12 p-1 rounded-full border-[1.5px]">
                                <path fill-rule="evenodd"
                                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </a>
                    <div class="lg:flex items-center sm:block">
                        <a href="#"
                            class=" hover:scale-105 transition-all justify-center sm:w-full w-full sm:mx-0 mx-0 gta-featured-topics flex p-6 m-6  flex-col p-content-base gap-y-content-sm rounded-md bg-gray-200 h-full hover-scale">
                            <p class="caption-base text-lg">Research</p>
                            <div class="flex md:flex-col flex-row gap-content-sm md:items-start items-center">
                                <h5 class="flex-1 line-clamp-3">What is UNEXT?</h5>
                            </div>
                        </a>
                        <a href="#"
                            class=" hover:scale-105 transition-all justify-center sm:w-full w-full sm:mx-0 mx-0 lg:mx-10 gta-featured-topics flex p-6 m-6  flex-col p-content-base gap-y-content-sm rounded-md bg-gray-200 h-full hover-scale">
                            <p class="caption-base text-lg">Project</p>
                            <div class="flex md:flex-col flex-row gap-content-sm md:items-start items-center">
                                <h5 class="flex-1 line-clamp-3">L4S, the crucial enabler for large-scale deployments of
                                    real-time applications</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
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

@media (min-width: 768px) {
    .page-container {
        row-gap: 5rem;
        padding-top: 5rem;
    }
}

.page-container {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 3.75rem;
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    padding-top: 3.75rem;
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