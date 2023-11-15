<template>
    <div class="card bg-base-100 shadow-xl p-0 md:px-20 md:py-10">
        <div class="hero min-h-[15vh] sticky top-0" :style="`background-image: url(${curStudio.img})`">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <h1 class="text-base md:text-lg lg:text-2xl font-bold">{{ curStudio.name }}</h1>
            </div>
        </div>
        <div class="card-body">
            <!-- <h2 class="card-title">{{ curStudio.name }}</h2> -->
            <p class="first-letter:text-7xl first-letter:italic font-extralight w-full text-justify indent-10">
                {{ curStudio.name }}: A Place for Your Dreams to Come True

                {{ curStudio.name }} is dedicated to providing high-quality, personalized services in the field of art and
                design. Our
                mission is to help individuals and organizations achieve their goals by offering a wide range of services,
                including graphic design, website design and development, and product design.
                Our team of experienced designers, artists, and developers work together to create innovative solutions that
                exceed our clients' expectations. We believe in the importance of collaboration and teamwork, and we strive
                to achieve our goals by listening to our clients' needs and providing solutions that are tailored to their
                specific needs.
                {{ curStudio.name }} is located in the heart of the city, where we can draw inspiration from the diverse
                culture
                and
                vibrant energy. We believe in the importance of creativity and innovation, and we encourage our clients to
                explore their own creativity and potential.

                Our services are not limited to our own city, and we are ready to serve clients from all over the world. We
                are excited about the opportunity to work with new clients and explore new possibilities.

                In conclusion, {{ curStudio.name }} is a place where dreams can come true. We are ready to take on new
                challenges and
                explore new opportunities. If you are looking for a partner in art and design, {{ curStudio.name }} is ready
                to help
                you achieve your goals.
                {{ curStudio.name }}: A Collaborative Space for Art and Design


                {{ curStudio.name }} is a collaborative space where art and design come together to create innovative
                solutions
                that
                exceed our clients' expectations. We believe in the importance of collaboration and teamwork, and we strive
                to achieve our goals by listening to our clients' needs and providing solutions that are tailored to their
                specific needs.

                Our team of experienced designers, artists, and developers work together to create solutions that exceed our
                clients' expectations. They believe in the importance of collaboration and teamwork, and they strive to
                achieve their goals by listening to their clients' needs and providing solutions that are tailored to their
                specific needs.

                {{ curStudio.name }} is located in the heart of the city, where we can draw inspiration from the diverse
                culture
                and
                vibrant energy. We believe in the importance of creativity and innovation, and we encourage our clients to
                explore their own creativity and potential.

                Our services are not limited to our own city, and we are ready to serve clients from all over the world. We
                are excited about the opportunity to work with new clients and explore new possibilities.

                In conclusion, {{ curStudio.name }} is a place where dreams can come true. We are ready to take on new
                challenges and
                explore new opportunities. If you are looking for a partner in art and design, {{ curStudio.name }} is ready
                to
                help
                you achieve your goals.</p>
        </div>
    </div>
</template>

<script setup>
import studioList from 'assets/data/studioList.json'

const { id } = useRoute().params
const curStudio = studioList.find((studio) => studio.id == id)
console.log(curStudio)
// http://fakeimg.pl/4000x2000/0079D8/fff/?text=Aprcasi
</script>
<style scoped></style>