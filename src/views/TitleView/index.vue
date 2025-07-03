<template>
  <div class="title-box">
    <div style="flex: 0 1 30%">
      <dv-decoration-10 style="width: 100%; height: 5px" />
    </div>
    <div style="flex: 0 1 40%">
      <div class="d-flex">
        <dv-decoration-8 class="item-box" />
        <dv-button border="Border2" color="#a4c2a8" class="btn-box"
          >智慧数字中心</dv-button
        >
        <dv-decoration-8 class="item-box" style="transform: rotateY(180deg)" />
      </div>
    </div>
    <div style="flex: 0 1 30%">
      <dv-decoration-10
        style="width: 100%; height: 5px; transform: rotateY(180deg)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-box {
  width: 100%;
  display: flex;
  .d-flex {
    display: flex;
    .item-box {
      flex: 1;
      width: 100%;
      height: 50px;
    }
    .btn-box {
      line-height: 40px;
      height: 40px;
    }
  }
}
</style>
