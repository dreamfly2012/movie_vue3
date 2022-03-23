<template>
  <div>
    <ul class="nav">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/hot">热映</router-link></li>
      <li><router-link to="/category">分类</router-link></li>
      <li><router-link to="/my">我的</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeIndex = ref("1");
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      activeIndex,
      handleSelect,
    };
  },
});
</script>

<style scoped>
.nav {
  list-style: none;
  bottom: 0;
  position: fixed;
  display: flex;
  padding: 0;
  height: 40px;
  width:100%;
}
.nav li {
  flex: 1;
}
</style>