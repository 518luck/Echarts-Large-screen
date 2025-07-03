<script setup lang="ts">
import HomeView from './views/HomeView/index.vue'
</script>

<template>
  <div class="app-root">
    <HomeView></HomeView>
  </div>
</template>

<style scoped lang="scss">
.app-root {
  height: 100vh;
  background-image: url('./assets/bag.png');
  background-size: cover; /* 让图片等比例缩放填满容器 */
  background-position: center; /* 图片居中显示 */
  background-repeat: no-repeat; /* 不平铺 */
}
</style>
