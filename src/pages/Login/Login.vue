<template>
  <div class="login">
    <ReHeader/>
    <div class="image">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="loginng">
      <div class="iphone" @click="goto('/iphone')">
        <i></i>手机号码登录</div>
      <div class="email" @click="goto('/email')">
        <i></i>邮箱帐号登录</div>
    </div>
    <div class="btn">
      手机号快捷注册
      <i class="btn_from"></i>
    </div>
    <div class="buttonlogin">
      <span>
        <img src="./images/wechat.png" alt="">
        微信
      </span>|
      <span>
        <img src="./images/qq.png" alt="">
        QQ
      </span>|
      <span>
        <img src="./images/weibo.png" alt="">
        微博
      </span>


    </div>

  </div>
</template>

<script>
  import ReHeader from '../../components/ReHeader/ReHeader.vue'


  export default {
    methods:{
      goto(path){
        this.$router.push(path)
      }
    },

    components: {ReHeader}
  }
</script>

<style scoped lang="less">
  .login{
    width: 100%;
    height: 100%;
    text-align: center;
    .image{
      width: 100%;
      height: 410px;
      img {
        margin-top:160px;
        width: 268px;
        height: 90px;
      }
    }
    .loginng{
      width: 100%;
      .iphone{
        width: 670px;
        height: 94px;

        border-radius: 4px;
        color: #fff;
        border: 1px solid #b4282d;
        background-color: #b4282d;
        text-align: center;
        font-size: 28px;
        line-height: 94px;
        margin: auto;
        margin-bottom: 32px;
        i{
          display: inline-block;
          background-image: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png");
          vertical-align: middle;
          background-position: 0 -50px;
          height: 40px;
          width: 40px;
          margin-right: 12px;
          margin-top: -10px;
          vertical-align: middle;
          background-repeat: no-repeat;
        }
      }
      .email{
        width: 670px;
        height: 94px;

        border-radius: 4px;
        color: #b4282d;
        border: 1px solid #b4282d;
        background-color: transparent;
        text-align: center;
        font-size: 28px;
        line-height: 94px;
        margin: auto;
        margin-bottom: 32px;
        i{
          display: inline-block;
          background-image: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png");
          vertical-align: middle;
          height: 40px;
          width: 40px;
          margin-right: 12px;
          margin-top: -10px;
          vertical-align: middle;
          background-repeat: no-repeat;
        }
      }



    }
    .btn{
      width: 100%;
      font-size: 28px;
      text-align: center;
      height: 30px;
      color: #333;
      .btn_from{
        display: inline-block;
        vertical-align: middle;
        height: 30px;
        width: 30px;
        background-image: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png");
      }
    }
    .buttonlogin{
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 80px;
      height: 40px;
      text-align: center;
      font-size: 28px;
      color: #7F7F7F;
      span{
        display: inline-block;
        margin:0 25px;
      }
      img{
        height: 40px;
        width: 40px;
        vertical-align: middle;
      }
    }

  }

</style>
