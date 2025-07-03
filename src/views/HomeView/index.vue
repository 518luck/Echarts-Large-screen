<script setup lang="ts">
import { onMounted, ref } from 'vue'

import MainView from '../MainView/index.vue'
import FooterView from '../FooterView/index.vue'
import TitleView from '../TitleView/index.vue'

const loading = ref<boolean>(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 100)
})
</script>

<template>
  <dv-full-screen-container class="min">
    <dv-loading v-if="loading"> Loading... </dv-loading>
    <div class="module-min">
      <TitleView></TitleView>
      <MainView></MainView>
      <FooterView></FooterView>
    </div>
  </dv-full-screen-container>
</template>

<style scoped lang="scss">
.min {
  height: 100%;
  .module-min {
    display: flex;
    flex-direction: column;
    .module-box {
      width: 100%;
      height: 100%;
      display: flex;
    }
  }
}
</style>
