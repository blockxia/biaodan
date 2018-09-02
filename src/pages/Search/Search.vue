<template>
  <div class="main_search">
    <section>
      <div class="search">
        <div class="content">
          <i></i>
          <input type="text" placeholder="新秀丽制造商出行箱包49元起">
        </div>
        <span @click="goto">取消</span>
      </div>
      <div class="hot">热门搜索</div>
      <div class="list">
        <ul>
          <li class="red">餐厨超值88选4</li>
          <li class="red">指定服装买2免1</li>
          <li class="red">夏凉床品直降</li>
          <li class="red">鞋包热销榜</li>
          <li>电器</li>
          <li class="red">收纳</li>
          <li>内裤</li>
          <li>毛巾</li>
        </ul>
      </div>
    </section>



  </div>
</template>

<script>

  export default {
    methods:{
      goto(){
        this.$router.back()
      }
    },

    components: {}
  }
</script>

<style scoped lang="less">
  .main_search{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    background-color: #eee;
    z-index: 200;
    section{
      width: 100%;
      background-color: white;
      .search{
        width: 690px;
        margin:auto;
        height: 88px;

        display: flex;
        align-items: center;
        .content{
          padding-top: 0;
          padding-left: 20px;
          padding-bottom: 0;
          border: 0;
          background-color: #f4f4f4;
          height:56px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          i{
            margin-right: 16px;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 28px;
            height: 28px;
          }
          input{
            line-height: 40px;
            color: rgba(0,0,0,.8);
            background-color: transparent;
            font-size: 28px;
            width: 530px;
            height: 39px;
            outline: none;

          }
        }
        span{
          margin-left: 30px;
          font-size: 28px;
        }
      }
      .hot{
        margin: auto;
        width: 690px;
        height: 90px;
        line-height: 90px;
        background-color: white;
        color: #999;
        font-size: 28px;
      }
      .list{
        width: 690px;
        margin: auto;
        ul{

          li{
            display: inline-block;
            padding: 0 15px;
            margin-right: 32px;
            margin-bottom: 32px;
            line-height: 46px;
            border: 1px solid #999;
            border-radius: 4px;
            &.red{
              border-color: #b4282d;
              color: #b4282d;
            }
          }
        }
      }
    }

  }

</style>
