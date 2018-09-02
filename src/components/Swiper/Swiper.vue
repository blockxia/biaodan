<template>
  <section>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in focusList" :key="index"><img :src="item.picUrl" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item,index) in policyDescList" :key="index"><a href="">
          <img  v-lazy="item.icon" alt="">{{item.desc}}</a></li>
      </ul>
    </div>
  </section>

</template>

<script>

  import {mapState,mapActions} from 'vuex'
  export default {
  mounted(){
    this.$store.dispatch('getFocusList',()=>{
      this.$nextTick(()=>{
        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal',
          speed:1000,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            waitForTransition: false,
          },

          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',

          },

        })
      })
    })
  },
    methods:{
      ...mapActions(['getFocusList','getPolicyDescList']),
    },

    computed:{
      ...mapState(['focusList','policyDescList']),
    },
    components: {}
  }
</script>

<style scoped lang="less">
  section{
    background-color: white;
    .swiper-container {
      width: 750px;
      height: 400px;

      .swiper-slide{
        display: inline-block;
        img{
          width: 750px;
          height: 400px;
        }
      }
    }
    .nav{
      height: 72px;
      width: 100%;
      li{
        img{
          height: 32px;
          width: 32px;
        }
        vertical-align: middle;
        line-height: 72px;
        font-size: 28px;
        text-align: center;
        display: inline-block;
        width: 245px;
      }
    }
  }

</style>
