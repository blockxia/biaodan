<template>
  <div class="re_exploreLook">
    <header>严选LOOK</header>
    <a href="">
      <img src="https://yanxuan.nosdn.127.net/4d6df19e5d186b0e8f7914806fcd68da.jpg" alt="">
      <div class="author">
        <img :src="yxLook.avatar" alt="">
      {{yxLook.nickname}}</div>
      <p>{{yxLook.content}}</p>
    </a>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getYxLook')
    },
    computed:{
      ...mapState(['yxLook'])
    },


    components: {}
  }
</script>

<style scoped lang="less">
  .re_exploreLook{
    width: 100%;
    background-color: white;
    padding-bottom: 30px;
    header{
      width: 690px;
      margin: auto;
      height: 120px;
      line-height: 120px;
      font-size: 32px;
      text-align: center;
      color: #333;
    }
    img{
      width: 750px;
      height: 422px;
    }
    .author{
      width: 690px;
      margin: auto;
      margin-top: 20px;
      img{
        height: 48px;
        width: 48px;
        border-radius: 50%;
        vertical-align: middle;
      }
      height: 48px;
      font-size: 24px;
      line-height: 48px;
    }
    p{
      width: 690px;
      margin: auto;
      margin-top: 20px;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
      overflow: hidden;
      text-overflow: ellipsis;

      font-size: 28px;
      line-height: 1.6;
      color: #7f7f7f;
    }

  }

</style>
