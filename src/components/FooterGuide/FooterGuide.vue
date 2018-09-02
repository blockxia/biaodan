<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="guide_item on" @click="goto('/home')">
      <span class="item_icon home" :class="{on: isActive('/home')}"></span>
      <span class="text" :class="{on: isActive('/home')}">首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/recommend')">
    <span class="item_icon recommend " :class="{on: isActive('/recommend')}">
    </span>
      <span class="text" :class="{on: isActive('/recommend')}">识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/classify')">
    <span class="item_icon classify" :class="{on: isActive('/classify')}">
    </span>
      <span class="text" :class="{on: isActive('/classify')}">分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/shopping')">
    <span class="item_icon shopping" :class="{on: isActive('/shopping')}">
    </span>
      <span class="text" :class="{on: isActive('/shopping')}">购物车</span >
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/personage')">
    <span class="item_icon personage" :class="{on: isActive('/personage')}">
    </span>
      <span class="text" :class="{on: isActive('/personage')}">个人</span>
    </a>
  </footer>
</template>

<script>


  export default {

    methods: {
      isActive (path) {
        return this.$route.path === path
      },
      goto (path) {
        this.$router.replace(path)
      }

    },
  }
</script>

<style scoped lang="less">
  .footer_guide{
    border-top: 1px solid #aaa;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display:flex;
    height:98px;
    z-index: 20;
    background-color: white;
    .guide_item{
      display:flex;
      flex :1;
      text-align:center;
      flex-direction :column;
      align-items:center;
      margin :5px;
      color:#999999;
      font-size: 24px;
      .item_icon{
        margin-top: 7px;
        display: inline-block;
        background-image: url("./images/footer.png");
        background-repeat: no-repeat;
        /*background-color: black;*/
        background-size :40px 490px;
        height: 40px;
        width: 40px;
        vertical-align: middle;
        &.home{
          background-position: 0 -250px;
          &.on{
            background-position: 0 -200px;
          }
        }
        &.recommend{
          background-position: 0 -350px;
          &.on{
            background-position: 0 -300px;
          }
        }
        &.classify{
          background-position: 0 -150px;
          &.on{
            background-position: 0 -100px;
          }
        }
        &.shopping{
          background-position: 0 -50px;
          &.on{
            background-position: 0 0;
          }
        }
        &.personage{
          background-position: 0 -450px;
          &.on{
            background-position: 0 -400px;
          }
        }

      }
      .text{
        margin-top:7px;
        &.on{
          color:#DA989B;
        }

      }
    }
  }

</style>
