<template>
  <div class="preferential">
    <div class="limit">
      <div class="word">
        <div class="title">严&nbsp;选&nbsp;限&nbsp;时&nbsp;购</div>
        <div class="time">
          <span>01</span>&nbsp;:
          <span>04</span>&nbsp;:
          <span>09</span>
        </div>
        <div class="awit">下一场&nbsp;&nbsp;14:00&nbsp;&nbsp;开始</div>

      </div>
      <div class="icon" :style="`background-image: url(${flashSaleIndexVO.primaryPicUrl})`">
        <div>
          <span class="one">￥&nbsp;&nbsp;{{flashSaleIndexVO.activityPrice}}</span>
          <span>￥&nbsp;&nbsp;{{flashSaleIndexVO.originPrice}}</span>
        </div>
      </div>
    </div>
    <a href="" v-if="flashSaleIndexVO.saleIndexVO" ><img :src="flashSaleIndexVO.saleIndexVO.picUrl" alt=""></a>

  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed:{
      ...mapState(['flashSaleIndexVO']),
    },

    components: {}
  }
</script>

<style scoped lang="less">
  .preferential{
    width: 100%;
    height: 700px;
    margin-bottom: 20px;
    background-color: white;
    .limit{
      height: 380px;
      width: 100%;
      margin-bottom: 20px;
      overflow: hidden;
      .word{
        margin-top: 20px;
        float: left;
        width: 320px;
        height: 320px;
        margin-left: 40px;
        text-align: center;
        .title{
          margin-top: 80px;
          color: #222;
          height: 38px;
          line-height: 38px;
          font-size: 36px;

        }
        .time{
          margin-top: 20px;
          font-size: 32px;
          line-height: 60px;
          span{
            display: inline-block;
            height: 62px;
            width: 54px;
            border-radius: 50%;
            background-color: black;
            color: white;
          }

        }
        .awit{
          margin-left: -20px;
          margin-top: 20px;
          font-size: 24px;
        }

      }
      .icon{
        text-align: center;
        margin-top: 20px;
        margin-left: 30px;
        float: left;
        width: 320px;
        height: 320px;

        background-size: 320px 320px;

        position: relative;
        div{
          position: absolute;
          right: 30px;
          bottom: 30px;
          height: 96px;
          width: 96px;
          border-radius: 50%;
          background-color: #f59524;
          span{

            display: inline-block;

            height: 28px;
            line-height: 28px;
            font-size: 25px;
            color: white;
            &.one{
              margin-top: 20px;
            }

          }
        }
      }
    }
    a{
      display: block;
      height: 300px;
      width: 100%;
    }

  }

</style>
