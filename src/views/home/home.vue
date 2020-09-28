<template>
  <div class="Home">

    <!-- 搜索框 -->
    <search-box></search-box>
  </div>
</template>

<script>

import SearchBox from "components/common/searchbox/SearchBox"

export default {
  name: 'Home',
  components: {
    SearchBox
  },
}
</script>

<style lang="less" scoped>
.Home{
  width: 100%;
  height:500px;
}
</style>