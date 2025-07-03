<script setup lang="ts">
import ConicalChart from './components/ConicalChart/index.vue'
import Earth from './components/Earth/index.vue'
import ChinaMap from './components/ChinaMap/index.vue'
</script>

<template>
  <div class="module-box">
    <div style="flex: 0 1 25%">
      <dv-border-box1 style="width: 100%; height: 200px">
        <ConicalChart />
      </dv-border-box1>
      <dv-border-box7 style="width: 100%; height: 200px">
        <Earth />
      </dv-border-box7>
    </div>
    <div style="flex: 0 1 50%">
      <dv-border-box8 style="width: 100%; height: 400px">
        <ChinaMap />
      </dv-border-box8>
    </div>
    <div style="flex: 0 1 25%">
      <dv-border-box1 style="width: 100%; height: 133px"> 1111 </dv-border-box1>
      <dv-border-box1 style="width: 100%; height: 133px"> 1111 </dv-border-box1>
      <dv-border-box1 style="width: 100%; height: 133px"> 1111 </dv-border-box1>
    </div>
  </div>
</template>
