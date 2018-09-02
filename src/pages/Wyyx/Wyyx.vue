<template>
  <div class="wyyx">
    <div >
      <img src="./images/top1.jpg" alt="" class="topOne">
      <img src="./images/top2.jpg" alt=""class="topTwo">
    </div>
    <div>
      <img src="./images/bottom.jpg" alt="" class="bottom">
      <router-link to="/home" class="toHome"></router-link>
    </div>
  </div>
</template>

<script>

  export default {

    components: {}
  }
</script>

<style scoped lang="less">
  .wyyx{
    width: 100%;
    /*overflow: hidden;*/
    /*background-color: yellow;*/
    div{
      img{
        width: 100%;
        vertical-align: middle;

        &.topOne{
          transform: scale(1.2) translateY(31px);

        }
        &.topTwo{
          transform: scale(1.17) translateY(66px);
        }
        &.bottom{
          transform: scale(1.2) translateY(120px);
        }


      }
    }
    .toHome{
      display: block;
      position: absolute;
      top:1090px;
      bottom: 200px;
      left: 200px;
      right: 200px;
      /*background-color: yellow;*/
    }
    /*background-color: #777777;*/
  }

</style>
