<template>
    <div class="w-full h-full lg:h-56 flex bg-slate-500 lg:px-24 p-x-0 flex-col lg:flex-row justify-center bg-secondBanner">
        <div
            class="test w-full lg:mt-0 mt-10 lg:w-1/3 border-blue-100 h-80 lg:h-auto bg-cover bg-secondImgOne flex flex-col justify-center items-center">
            <h1 class="mb-10 text-2xl text-cyan-50">Commercial</h1>
            <button class="btn btn-warning">More Info</button>
        </div>
        <div
            class="test w-full lg:mt-0 mt-10 lg:w-1/3 border-blue-100 h-80 lg:h-auto bg-cover bg-secondImgTwo flex flex-col justify-center items-center ">
            <h1 class="mb-10 text-2xl text-cyan-50">Industrial</h1>
            <button class="btn btn-warning">More Info</button>
        </div>
        <div
            class="test w-full lg:mt-0 mt-10 lg:w-1/3 border-blue-100 h-80 lg:h-auto bg-cover bg-secondImgThree flex flex-col justify-center items-center ">
            <h1 class="mb-10 text-2xl text-cyan-50">Residential</h1>
            <button class="btn btn-warning">More Info</button>
        </div>
    </div>
</template>
<style scoped>
.test {
    clip-path: polygon(20% 0, 100% 0, 80% 100%, 0 100%);
}

@media screen and (max-width: 1024px) {
    .test {
        clip-path: none;
    }
}</style>