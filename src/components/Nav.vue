<template>
    <div>
        <ul class="nav">
            <li><a href="">首页</a></li>
            <li><a href="">热映</a></li>
            <li><a href="">分类</a></li>
            <li><a href="">我的</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      activeIndex,
      handleSelect,
    }
  },
})
</script>

<style scoped>
    .nav{
        list-style: none;
    }
    .nav li{
        display: flex;
    }
</style>