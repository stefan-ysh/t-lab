<script setup lang="ts">
import { ref } from 'vue'
const _d = ref('')
const inputName = ref('')
const getData = async () => {
    const { data } = await useFetch('/api/hello', { method: "post", body: { inputName } })
    _d.value = data.value
}

</script>

<template>
    <div>
        <input type="text" v-model="inputName" placeholder="Enter your name">
        <button @click="getData">Submit</button>
        {{ _d }}
    </div>
</template>