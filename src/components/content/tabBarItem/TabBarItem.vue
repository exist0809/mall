<template>
  <div class="tab-bar-item">
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
  </div>
</template>

<script>
  export default {
    name : 'TabBarItem'
  }
</script>

<style lang="less" scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;

    img {
      width: 30px;
      height: 30px;
      margin: 0 auto;

    }
  }
</style>