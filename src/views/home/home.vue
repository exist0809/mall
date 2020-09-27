<template>
  <div class="Home">

    <!-- 导航条 -->
    <nav-bar color="#555" right="list">
      <div slot="center">首页</div>
    </nav-bar>
    
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar"

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>
.Home{
  
}
</style>