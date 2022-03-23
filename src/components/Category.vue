<script setup>
import { ref } from 'vue'

defineProps({
  msg: "category.vue",
  title:"Category Page"
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    {{title}}
  </p>

  
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
