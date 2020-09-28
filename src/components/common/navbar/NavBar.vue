<template>
  <div class="NavBar" :style="{'background':background}">

    <!-- 左侧 -->
    <div class="nav-bar-left" @click="clickLeft">

      <!-- 返回 -->
      <img v-if="left == 'back'" src="~assets/img/navbar/left_back.png" alt="">

    </div>

    <!-- 标题 -->
    <div class="nav-bar-center" :style="{'color':color}">
      <slot name="center"></slot>
    </div>

    <!-- 右侧 -->
    <div class="nav-bar-right" @click="clickRight">

      <!-- 返回 -->
      <img v-if="right == 'back'" src="~assets/img/navbar/right_back.png" alt="">
      <!-- 添加 -->
      <img v-if="right == 'add'" src="~assets/img/navbar/add.png" alt="">
      <!-- 删除 -->
      <img v-if="right == 'del'" src="~assets/img/navbar/del.png" alt="">
      <!-- 更多 -->
      <img v-if="right == 'more'" src="~assets/img/navbar/more.png" alt="">
      <!-- 列表 -->
      <img v-if="right == 'list'" src="~assets/img/navbar/list.png" alt="">
      <!-- 保存 -->
      <img v-if="right == 'save'" src="~assets/img/navbar/save.png" alt="">

    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      // 导航条背景颜色
      background: {
        type: String,
        default: "var(--bgColorDef)"
      },

      // 左侧选择
      left: {
        type: String,
        default: null
      },

      // 标题颜色
      color: {
        type: String,
        default: "var(--fontColorDef)"
      },

      // 右侧选择
      right: {
        type: String,
        default: null
      }
    },
    components: {
    },
    methods: {

      // 左侧点击事件
      clickLeft(){
        this.$emit('clickLeft')
      },

      // 右侧点击事件
      clickRight(){
        this.$emit('clickRight')
      }
    }
    
  }
</script>

<style lang="less" scoped>
  .NavBar {
    display: flex;
    width: 100%;
    height: 49px;
    position: fixed;
    top: 0;
    text-align: center;
    line-height: 49px;

    img {
      width: 25px;
      height: 25px;
      margin: 12px auto;
    }

    .nav-bar-left {
      flex:1;
    }

    .nav-bar-center {
      flex:5;
      font-size: var(--fontSizeLG);
    }

    .nav-bar-right {
      flex:1;
    }
  }
</style>