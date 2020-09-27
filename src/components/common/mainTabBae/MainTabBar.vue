<template>
  <div id="MainTabBar">
    <tab-bar>

      <!-- 首页 -->
      <tab-bar-item link="/home" color="#d81e06">
        <img slot="item-icon" src="~assets/img/tabBar/home.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabBar/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <!-- 消息 -->
      <tab-bar-item link="/news" color="#d81e06">
        <img slot="item-icon" src="~assets/img/tabBar/news.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabBar/news_active.png" alt="">
        <div slot="item-text">消息</div>
      </tab-bar-item>

      <!-- 添加 -->
      <tab-bar-item link="/add" color="#d81e06">
        <img slot="item-icon" src="~assets/img/tabBar/add.png" alt="" class="add">
        <img slot="item-icon-active" src="~assets/img/tabBar/add_active.png" alt="" class="add">
        <!-- <div slot="item-text">添加</div> -->
      </tab-bar-item>

      <!-- 购物车 -->
      <tab-bar-item link="/car" color="#d81e06">
        <img slot="item-icon" src="~assets/img/tabBar/car.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabBar/car_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>

      <!-- 我的 -->
      <tab-bar-item link="/self" color="#d81e06">
        <img slot="item-icon" src="~assets/img/tabBar/self.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabBar/self_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from '../tabBar/TabBar'
import TabBarItem from "../../content/tabBarItem/TabBarItem"

export default {
  name: 'MainTabBar',
  date(){
    return {

    }
  },
  components: {
    TabBar,
    TabBarItem
  },
}
</script>

<style lang="less" scoped>
.add{
  width: 44px !important;
  height: 44px !important;
}
</style>
