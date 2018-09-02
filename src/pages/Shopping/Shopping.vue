<template>
  <div class="wrap">
    <div class="header">
      <span>购物车</span>
    </div>

      <ul class="list">
        <li>
          <div>
            <img src="./images/circle.png" alt="">
            <span>30天无忧退货</span>
          </div>
        </li>
        <li>
          <div>
            <img src="./images/circle.png" alt="">
            <span>48小时快速退款</span>
          </div>
        </li>
        <li>
          <div>
            <img src="./images/circle.png" alt="">
            <span>满88元免邮费</span>
          </div>
        </li>
      </ul>
    <div class="content">
      <div class="icon">
        <img src="./images/shopcart.png" alt="">
      </div>
      <div class="login">
        <span>购物车空空如也</span>
        <a href="" @click.prevent="goto('/login')">登陆</a>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    methods:{
      goto(path){
        this.$router.push(path)
      }
    },

    components: {}
  }
</script>

<style scoped lang="less">
  .wrap{
    .header{
      z-index: 2;
      display: flex;
      left: 0;
      top:0;
      width: 100%;
      height: 88px;
      /*text-align: center;*/
      background-color: white;
      border-bottom: 1px solid #ddd;
      span{
        height: 88px;
        line-height: 88px;
        margin: auto;
        text-align: center;
        font-size: 36px;
      }
    }
    .list{
      color: #7e8c8d;
      height: 70px;
      width: 100%;
      display: flex;
      line-height: 70px;
      li{
        display: block;
        width: 33.3%;
        text-align: center;
        div{
          display: inline-block;

          img{
            vertical-align: middle;
          }
          span{
            font-size: 24px;
            vertical-align: middle;
          }
        }
      }


    }
    .content{
      position: absolute;
      left: 0;
      top:0;
      bottom: 0;
      right: 0;
      margin: auto;
      text-align: center;
      .icon{
        display: inline-block;
        width: 248px;
        height: 248px;
        margin-top: 500px;
      }
      .login{
        margin-top: -20px;
        span{
          font-size: 28px;
          color: #7e8c8d;
        }
        a{
          background-color: #b4282d;
          border-radius:10px ;
          color: white;
          font-size: 30px;
          /*font-weight: bold;*/
          margin: auto;
          width: 480px;
          height: 92px;
          line-height: 92px;
          text-align: center;
          margin-top: 40px;
          display: block;
        }
      }
    }
  }

</style>
