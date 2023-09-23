<template>
    <div>
        <h1 class="text-3xl font-bold underline">
            index page
        </h1>
        <div class="chat chat-start">
            <div class="chat-bubble">It's over Anakin, <br />I have the high ground.</div>
        </div>
        <div class="chat chat-end">
            <div class="chat-bubble">You underestimate my power!</div>
        </div>
        {{ counter }}
        <!--跳转链接-->
        <NuxtLink to="/detail">Detail Page</NuxtLink>
        <!-- <NuxtLink to="/parent/child">Parent</NuxtLink> -->
    </div>
</template>
<script setup lang="ts">
const counter = useState('counter', () => 500)
</script>