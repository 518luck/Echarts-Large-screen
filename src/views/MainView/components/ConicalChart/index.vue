<script setup lang="ts">
import { reactive } from 'vue'

import top1 from '../../../../assets/img/1st.png'
import top2 from '../../../../assets/img/2st.png'
import top3 from '../../../../assets/img/3st.png'
import top4 from '../../../../assets/img/4st.png'
import top5 from '../../../../assets/img/5st.png'
import top6 from '../../../../assets/img/6st.png'
import top7 from '../../../../assets/img/7st.png'

const config = reactive({
  data: [
    {
      name: '周口',
      value: 55,
    },
    {
      name: '南阳',
      value: 120,
    },
    {
      name: '西峡',
      value: 71,
    },
    {
      name: '驻马店',
      value: 66,
    },
    {
      name: '新乡',
      value: 80,
    },
    {
      name: '信阳',
      value: 35,
    },
    {
      name: '漯河',
      value: 15,
    },
  ],
  img: [top1, top2, top3, top4, top5, top6, top7],
})
</script>

<template>
  <div class="main">
    <dv-conical-column-chart :config="config" class="conicalChart" />
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.conicalChart {
  width: 280px;
  height: 170px;
  transform: translateY(8%);
}
</style>
