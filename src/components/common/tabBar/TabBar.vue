<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tabBar',
    components: {
    }
  }
</script>

<style lang="less" scoped>
  .tabBar {
    display: flex;
    width: 100%;
    height: 49px;
    position: fixed;
    bottom: 0;
    background: #f5f5f5;
    box-shadow: 0px -1px 2px #eeeeee;
  }
</style>