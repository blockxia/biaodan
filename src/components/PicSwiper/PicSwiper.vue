<template>
  <div class="pic_swiper">
    <header>
      <a href="">
        <span>专题精选</span>
        <i></i>
      </a>
    </header>
    <section>
      <div class="main">
      <div class="swiper-containerq">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in topicList" :key="index">
            <a href=""><img :src="item.itemPicUrl" alt=""></a>
            <div>
              <div class="info"><span class="name">{{item.title}}</span> <span class="price">{{item.priceInfo}}&nbsp;&nbsp;元起</span></div>
              <span class="introduce">{{item.subtitle}}</span>
            </div>
          </div>

        </div>
      </div>
      </div>

    </section>

  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getTopicList',()=>{
        this.$nextTick(()=>{
          var meSwiper = new Swiper ('.swiper-containerq', {
            slidesPerView : 1,
            centeredSlides : true,
          })
        })
      })

    },
    methods:{
      ...mapActions(['getTopicList']),
    },

    computed:{
      ...mapState(['topicList']),
    },

    components: {}
  }
</script>

<style scoped lang="less">
  .pic_swiper{
    width: 100%;
    height: 550px;
    margin-bottom: 20px;
    background-color: white;
    header{
      width: 100%;
      height: 110px;
      font-size: 32px;
      text-align: center;
      line-height: 110px;
      span{
        font-weight: bold;
        vertical-align: middle;
      }
      i{
        display: inline-block;
        height: 30px;
        width: 30px;
        background-image: url("./images/right.png");
        vertical-align: middle;
      }
    }
    section{
      width: 750px;
      height: 440px;
      .main{
        width: 690px;
        height: 405px;
        margin: auto;
        overflow: hidden;
        .swiper-containerq{
          width: 590px;
          height: 405px;
          .swiper-wrapper{

            /*overflow: hidden;*/
            .swiper-slide{
              display: inline-block;
              width: 575px;
              height: 320px;
              margin-right: 20px;
              a{
                img{
                  width: 575px;
                  height: 320px;
                }
              }
              div{
                .info{
                  margin-top: 15px;
                  .name{
                    font-size: 28px;
                    font-weight: bold;
                  }
                  .price{
                    display: inline-block;
                    float: right;
                    color: #b4282d;
                  }
                }
                .introduce{
                  display: inline-block;
                  height: 24px;
                  width: 575px;
                  margin-top: 15px;
                  font-size: 24px;
                  color: #7f7f7f;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
              }

            }
          }
        }
      }

    }
  }


</style>
