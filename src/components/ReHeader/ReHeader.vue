<template>
  <div>
    <div class="kong"></div>
    <div class="re-header">
      <div @click.prevent="goto('/home')" class="home"></div>
      <a href="" class="tohome" @click.prevent="goto('/home')"></a>
      <div>
        <a href="" class="selected" @click.prevent="goto('/search')"></a>
        <a href="" class="shopping" @click.prevent="goto('/shopping')"></a>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    props:{
      color:String
    },

    methods:{
      goto(path){
        this.$router.push(path)
      }
    },

    components: {}
  }
</script>

<style scoped lang="less">
  div{
    background-color: #fafafa;
    .kong{
      width: 100%;
      height: 87px;
    }
    .re-header{
      background-color: #fafafa;
      z-index: 10;
      width: 100%;
      height: 87px;
      position: fixed;
      top: 0;
      text-align: center;

      .home{
        float: left;
        margin-top: 22px;
        margin-left: 22px;
        display: block;
        width: 48px;
        height: 44px;
        background-image: url("./images/xb.png");
        background-position: 0 -74px;
      }
      .tohome{
        display: inline-block;
        text-align: center;
        margin-top: 17px;
        width: 172px;
        height: 54px;
        background-image: url("./images/xb.png");
        background-position: 0 -128px;
        background-size: 172px 398px;
      }
      div{
        margin-top: 11px;
        margin-right: 20px;
        float: right;
        .selected{
          width: 64px;
          height: 64px;
          display: inline-block;
          background-image: url("./images/xb.png");
          background-position: 0 -334px;

        }
        .shopping{
          width: 64px;
          height: 64px;
          display: inline-block;
          background-image: url("./images/xb.png");

        }
      }
    }
  }

</style>
