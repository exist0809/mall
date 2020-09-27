<template>
  <div class="TabBarItem" @click="itemClick">

    <!-- 正常图片 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>

    <!-- 选中状态 -->
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <!-- 文字 -->
    <div :style="{'color':activeColor}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'TabBarItem',
    props:{

      // 连接名
      link:String,

      // 选中颜色
      color: {
        type : String,
        default : '#333'
      }
    },
    data(){
      return {
      }
    },
    computed:{

      // 选中页面
      isActive(){
        return this.$route.path == this.link
      },

      // 选中时文字颜色
      activeColor(){
        return this.isActive?this.color:''
      }
    },
    methods: {

      // 点击跳转对应链接
      itemClick(){
        this.$router.replace(this.link)
      },
    }
  }
</script>

<style lang="less" scoped>
  .TabBarItem {
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