<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-gl'

import earth from '../../../../assets/img/earth.jpg'
import starfield from '../../../../assets/img/starfield.jpg'

const earthRef = ref<HTMLDivElement | null>(null)

const ROOT_PATH = 'https://echarts.apache.org/examples'

const option = {
  backgroundColor: '#000', // 整个画布背景色
  globe: {
    // 3D 地球的配置
    baseTexture: earth, // 地球表面贴图
    shading: 'lambert', // 光照模型
    environment: starfield, // 背景（星空）
    atmosphere: {
      show: true, // 显示大气层
    },
    postEffect: {
      enable: true,
      bloom: {
        enable: true,
        intensity: 0.1,
      },
    },
    light: {
      ambient: {
        // 环境光
        intensity: 0.1,
      },
      main: {
        // 主光源
        intensity: 1.5,
      },
    },
  },
  series: [], // 这里可以放地球上的数据系列（如飞线、散点等），本例为空
}

onMounted(() => {
  if (earthRef.value) {
    const chart = echarts.init(earthRef.value)
    chart.setOption(option)
  }
})
</script>

<template>
  <div class="mian">
    <div class="earth-box" ref="earthRef"></div>
  </div>
</template>

<style lang="scss" scoped>
.mian {
  display: flex;
  justify-content: center;
  align-items: center;
  .earth-box {
    width: 280px;
    height: 170px;
    transform: translateY(8%);
  }
}
</style>
