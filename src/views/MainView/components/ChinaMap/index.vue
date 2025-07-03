<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

import chinaMapJson from '../../../../assets/json/chinaMap.json'

const chartRef = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null

const geoCoordMap = {
  北京: [116.405285, 39.904989],
  上海: [121.472644, 31.231706],
  广州: [113.264385, 23.129112],
  深圳: [114.057868, 22.543099],
  成都: [104.065735, 30.659462],
  西安: [108.948024, 34.263161],
  武汉: [114.298572, 30.584355],
  重庆: [106.504962, 29.533155],
  杭州: [120.153576, 30.287459],
}
const flowData = [
  { from: '上海', to: '北京', value: 95 },
  { from: '广州', to: '北京', value: 90 },
  { from: '深圳', to: '北京', value: 80 },
  { from: '成都', to: '北京', value: 70 },
  { from: '西安', to: '北京', value: 60 },
  { from: '武汉', to: '北京', value: 50 },
  { from: '重庆', to: '北京', value: 40 },
  { from: '杭州', to: '北京', value: 30 },
]
const linesData = flowData.map((item) => ({
  coords: [
    geoCoordMap[item.from as keyof typeof geoCoordMap],
    geoCoordMap[item.to as keyof typeof geoCoordMap],
  ],
  value: item.value,
}))
const option = {
  // 鼠标悬停时的提示框组件
  tooltip: {},
  // 视觉映射组件，用于分级着色
  geo: {
    map: 'china',
    roam: true,

    label: { show: false },
    itemStyle: {
      /* ... */
    },
    emphasis: {
      /* ... */
    },
  },
  visualMap: {
    min: 0, // 数据最小值
    max: 100, // 数据最大值
    left: 'left', // visualMap 组件显示在左侧
    top: 'bottom', // visualMap 组件显示在底部
    text: ['高', '低'], // visualMap 旁的文字，分别代表最大值和最小值
    inRange: { color: ['#e0ffff', '#006edd'] }, // 数据区间内的颜色范围（从浅蓝到深蓝）
    show: true, // 是否显示 visualMap 组件
  },
  // 系列列表，每个系列决定一种图表类型
  series: [
    {
      type: 'map', // 图表类型为地图
      map: 'china', // 使用注册名为 'china' 的地图
      roam: true, // 是否支持缩放和平移
      label: { show: true }, // 是否在地图区域上显示省份名称
      layoutCenter: ['50%', '50%'],
      layoutSize: 500,
      itemStyle: {
        areaColor: '#aee9f7', // 浅蓝色
        borderColor: '#ffffff', // 白色边框
        borderWidth: 1,
        shadowColor: '#b3e5fc', // 浅蓝阴影
        shadowBlur: 10,
      },
      emphasis: {
        itemStyle: {
          areaColor: '#ffd54f', // 高亮时浅黄色
          borderColor: '#ff9800', // 高亮时橙色边框
          shadowColor: '#ffe082', // 高亮时浅黄阴影
          shadowBlur: 20,
        },
      },
      data: [
        { name: '北京', value: 90 },
        { name: '广东', value: 70 },
        { name: '上海', value: 80 },
        { name: '江苏', value: 60 },
        { name: '浙江', value: 50 },
        { name: '福建', value: 40 },
        { name: '海南', value: 30 },
        { name: '广西', value: 20 },
        { name: '云南', value: 10 },
        { name: '贵州', value: 5 },
        { name: '四川', value: 8 },
        { name: '西藏', value: 2 },
        { name: '陕西', value: 6 },
        { name: '甘肃', value: 4 },
        { name: '青海', value: 1 },
        { name: '宁夏', value: 3 },
      ],
    },
    {
      type: 'lines',
      coordinateSystem: 'geo',
      zlevel: 2,
      effect: {
        show: true,
        period: 4, // 动画周期，越小速度越快
        trailLength: 0.2, // 尾巴长度
        color: '#ffea00', // 飞线颜色
        symbol: 'arrow', // 箭头
        symbolSize: 8,
      },
      lineStyle: {
        color: '#ffea00',
        width: 2,
        opacity: 0.6,
        curveness: 0.2, // 曲线弯曲度
      },
      data: linesData,
    },
    // 起点散点
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: { brushType: 'stroke' },
      label: {
        show: true,
        position: 'right',
        formatter: '{b}',
      },
      symbolSize: (val) => 8 + val[2] / 10,
      itemStyle: {
        color: '#ffea00',
      },
      data: flowData.map((item) => ({
        name: item.from,
        value: [
          ...geoCoordMap[item.from as keyof typeof geoCoordMap],
          item.value,
        ],
      })),
    },
    // 终点（北京）高亮
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: { brushType: 'stroke' },
      label: {
        show: true,
        position: 'right',
        formatter: '{b}',
      },
      symbolSize: 16,
      itemStyle: {
        color: '#ff4d4f',
      },
      data: [
        {
          name: '北京',
          value: [...geoCoordMap['北京'], 100],
        },
      ],
    },
  ],
}

onMounted(() => {
  if (chartRef.value) {
    chart = echarts.init(chartRef.value)
    echarts.registerMap('china', chinaMapJson as any)
    chart.setOption(option)
  }
})

onUnmounted(() => {
  chart?.dispose()
})
</script>

<template>
  <div class="mian">
    <div class="chianBox" ref="chartRef"></div>
  </div>
</template>

<style scoped lang="scss">
.mian {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .chianBox {
    width: 100%;
    height: 100%;
  }
}
</style>
