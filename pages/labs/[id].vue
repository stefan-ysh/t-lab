<template>
    <div>
        labd
        {{ id }}
    </div>
</template>
    
<script setup lang="ts">
import { useRoute } from 'vue-router'
const id = useRoute().params.id
console.log(id);
</script>
<style scoped></style>