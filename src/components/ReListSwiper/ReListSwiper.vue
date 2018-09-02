<template>
  <div class="wrap">
    <div class="swiper-containerp">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in column" :key="index">
        <img :src="item.picUrl" alt="">
        <div class="top">{{item.articleCount}}</div>
        <div class="bottom">{{item.title}}</div>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    mounted(){
      this.$store.dispatch('getColumn',()=>{
        this.$nextTick(()=>{
          var mySwiper = new Swiper('.swiper-containerp',{
            slidesPerView : 4,
          })

        })
      })
    },
    computed:{
      ...mapState(['column'])
    },

    components: {}
  }
</script>

<style scoped lang="less">
  .wrap{
    background-color: white;
    border-top: 1px solid #eee;
    width: 100%;
    height: 286px;
    margin-bottom: 20px;
    overflow: hidden;
    .swiper-containerp{
      width: 100%;
      height: 226px;
      .swiper-wrapper{
        margin-left: 20px;
        margin-top: 20px;
        .swiper-slide{
          width: 184px;
          height: 210px;
          position: relative;
          img{
            width: 164px;
            height: 164px;
          }
          .top{
            width: 150px;
            position: absolute;
            top: 0;
            left: 15px;
            height: 32px;
            background-image: url("./images/shadow.png");
            background-repeat: no-repeat;
            background-size: 150px 32px;
            text-align: right;
            color: white;
            line-height:32px;
          }
          .bottom{
            width: 164px;
            color: #333;
            font-size: 24px;
            text-align: center;
            line-height: 75px;
          }
        }
      }

    }
  }

</style>
