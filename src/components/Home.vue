<script setup>

import { reactive } from 'vue'

const data = reactive({ title: 'Home Page',  msg:'welcome to home page'})

</script>

<template>
  <h1>{{ data.msg }}</h1>

  <p>
    {{data.title}}
  </p>
  
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
