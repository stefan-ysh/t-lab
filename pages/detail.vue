<template>
    <div>
        <h1>detail page</h1>
        <!--跳转链接-->
        <NuxtLink to="/">Index Page</NuxtLink>
        <NuxtLink to="/users-admins/123">管理员123</NuxtLink>
        <div>
            Counter: {{ counter }}
            <br>
            <button @click="counter++">
                +
            </button>
            <br>
            <button @click="counter--">
                -
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
const counter = useState('counter', () => 0)
</script>
