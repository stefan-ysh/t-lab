<template>
    <div class="w-full h-full px-5 md:px-20 lg:h-56 flex bg-slate-500 lg:px-6 p-x-0 flex-col lg:flex-row justify-center bg-secondBanner">
        <div v-for="(carousel, i) in carouselList" :key="carousel.img" class="carousel-item w-full lg:mt-0 mt-10
            bg-no-repeat
            bg-[length:100%]
            bg-center
            lg:w-1/3 border-blue-100 h-80 lg:h-auto md:bg-cover flex flex-col justify-center items-center "
            :class="carousel.img">
            <h1 class="mb-10 text-2xl text-cyan-50">{{ carousel.title }}</h1>
            <button class="btn btn-warning">More Info</button>
        </div>
    </div>
</template>
<script setup>
const carouselList = [
    {
        title: 'Commercial',
        img: 'bg-secondImgOne'
    },
    {
        title: 'Industrial',
        img: 'bg-secondImgTwo'
    },
    {
        title: 'Residential',
        img: 'bg-secondImgThree'
    }
]
</script>
<style scoped>
.carousel-item {
    clip-path: polygon(20% 0, 100% 0, 80% 100%, 0 100%);
}

@media screen and (max-width: 1024px) {
    .carousel-item {
        clip-path: none;
    }
}
</style>