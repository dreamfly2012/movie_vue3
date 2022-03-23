<script setup>
import { ref } from 'vue'

defineProps({
  msg: "home.vue",
  title:"Home Page"
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
