<template>
  <div class="SearchBox">

    <!-- 左侧扫一扫 -->
    <div class="left" v-if="left" @click="clickLeft">
      <slot name="left"></slot>
    </div>

    <!-- 中心输入框 -->
    <div class="center">
      <div class="search_box">

        <!-- 搜索图标 -->
        <div class="search_icon">
          <img src="~assets/img/searchbox/search.png" alt="">
        </div>

        <!-- 输入框 -->
        <input type="text" class="search_text"/>
      </div>
    </div>

    <!-- 左侧文本 -->
    <div class="right"  v-if="right" @click="clickRight">
      <slot name="rigth"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  props: {
    // 左侧
    left: {
      type: Boolean,
      default: false
    },

    // 右侧
    right: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 左侧点击事件
    clickLeft() {
      this.$emit('clickLeft')
    },

    // 左侧点击事件
    clickRight() {
      this.$emit('clickRight')
    }
  }
}
</script>

<style lang="less" scoped>
.SearchBox {
  width: 100%;
  height: 40px;
  background: var(--bgColorMD);
  display: flex;

  img {
    width: 24px;
    height: 24px;
    margin: 8px auto;
  }

  .left {
    flex: 1;
    line-height: 40px;
    text-align: center;
    color: var(--fontColorXL)
  }

  .center {
    flex: 6;
    
    .search_box{
      width: 90%;
      height:30px;
      margin: 5px auto;
      background: #fff;
      border-radius:15px;
      display: flex;

      .search_icon {
        flex: 1;

        img {
          width: 20px;
          height: 20px;
          margin: 5px auto;
        }
      }
      

      .search_text {
        flex: 5;
        border-radius: 15px ;
        border: 0;
        outline: none; // 隐藏获取焦点后的外边框
      }
    }
  }

  .right {
    flex: 1;
    line-height: 40px;
    text-align: center;
    color: var(--fontColorXL)
  }
}
</style>