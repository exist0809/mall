<template>
  <div class="TabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar',
    components: {
    }
  }
</script>

<style lang="less" scoped>
  .TabBar {
    display: flex;
    width: 100%;
    height: 49px;
    position: fixed;
    bottom: 0;
    background: var(--bgColorDef);
    box-shadow: 0px -1px 2px var(--borderColorXS);
  }
</style>