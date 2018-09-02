<template>
  <div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in banner" :key="index" :data-history="`slide${index}`">
        <img v-lazy="item.picUrl"  alt="">
        <div class="content">
          <div class="a">─&nbsp;{{item.subTitle}}&nbsp;─</div>
          <div class="b">{{item.title}}</div>
          <div class="c">{{item.desc}}</div>
        </div>
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
      this.$store.dispatch('getBanner',()=>{
        this.$nextTick(()=>{
          var meSwiper = new Swiper ('.swiper-container', {
            loop: true,
            effect : 'coverflow',
            slidesPerView: 1.1,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 0,
              slideShadows : true
            },
          })

        })
      })

    },
    computed:{
      ...mapState(['banner'])
    },

    components: {}
  }
</script>

<style scoped lang="less">
  div{
    .swiper-container{
      background-color: white;
      width: 750px;
      height: 433px;
      .swiper-slide{
        text-align: center;
        line-height: 433px;
        position: relative;
        img{
          display: inline-block;

          width: 670px;
          height: 385px;

          vertical-align: middle;
        }
        .content{
          position: absolute;
          top: 118px;
          left: 142px;
          width: 466px;
          height: 198px;
          background-color: rgba(255,255,255,0.8);
          .a{
            line-height: 32px;
            font-size: 20px;
            color: #7f7f7f;
            margin: auto;
            margin-top: 30px;
          }
          .b{
            color: #333;
            font-size: 32px;
            line-height: 48px;
            margin: auto;
            margin-top: 16px;
            font-weight: bold;
          }
          .c{
            color: #333;
            font-size: 24px;
            line-height: 36px;
            margin: auto;
            margin-top: 5px;
          }
        }
      }

    }
  }


</style>
