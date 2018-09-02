<template>
  <div class="re_exploreTenFifteen">
    <div class="title">十点一刻</div>
    <div class="swiper-containers">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in tenfifteen" :key="index" >
          <a :href="item.url">
            <div class="bg" >
              <div class="content">
                <div class="a">─&nbsp;今日话题&nbsp;─</div>
                <div class="b">{{item.title}}</div>
                <div class="c">{{item.desc}}</div>
                <div class="icon" >
                  <img v-if="item.participantAvatar"
                    v-for="(items,index) in item.participantAvatar" :key="index"
                    :src="items" alt="">

                  <img src="./images/ava.png" alt="">
                  &nbsp;&nbsp;
                  <span>535人参与话题</span>
                </div>
              </div>
            </div>
          </a>

        </div>
        <div class="swiper-slide mony">
          查看全部话题
          <img src="./images/right.png" alt="">
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
      this.$store.dispatch('getTenfifteen',()=>{
        this.$nextTick(()=>{
          var mySwipers = new Swiper('.swiper-containers',{
            freeMode : true,
            freeModeMomentum : false,
          })

        })
      })

    },
    computed:{
      ...mapState(['tenfifteen'])
    },


    components: {}
  }
</script>

<style scoped lang="less">
  .re_exploreTenFifteen{
    width: 750px;
    margin: auto;
    padding-bottom: 40px;
    margin-bottom: 20px;
    background-color: white;
    overflow: hidden;
    .title{
      width: 690px;
      height: 120px;
      line-height: 120px;
      text-align: center;
      font-size: 32px;
    }
    .swiper-containers{
      margin-left: -30px;
      width: 580px;
      height: 411px;

      .swiper-slide{
        width: 580px;
        height: 411px;
        margin-left: 30px;
        .bg{
          background-image: url("./images/bg.png");
          background-size: 588px 411px;
          width: 588px;
          height: 411px;
          margin-left: 30px;
          position: relative;
          .content{
            position: absolute;
            bottom: 79px;
            left: 40px;
            right: 40px;
            top:38px ;
            text-align: center;
            .a{
              display: inline-block;
              line-height: 32px;
              font-size: 24px;
              color: #7f7f7f;
              margin-top: 10px;
            }
            .b{

              color: #333;
              font-size: 36px;
              line-height: 48px;
              margin: auto;
              margin-top: 16px;
              font-weight: bold;
              margin-top: 40px;
            }
            .c{
              color: #333;
              font-size: 28px;
              line-height: 36px;
              margin: auto;
              margin-top: 5px;
            }
            .icon{
              margin-top: 80px;
              img{
                border-radius: 50%;
                display: inline-block;
                width: 48px;
                height: 48px;
                background-size: 48px 48px;
                vertical-align: middle;
                margin-right: -5px;
              }
              span{
                height: 48px;
                display: inline-block;
                line-height: 48px;
                vertical-align: middle;
                font-size: 24px;
                color: #7f7f7f;
              }
            }

          }

        }
      }
      .mony{
        margin-left: 60px;
        height: 364px;
        width: 560px;
        border: 10px solid #e6e6e6;
        background-color: #fafafa;
        line-height: 364px;
        font-size: 32px;

        color: #7f7f7f;
        text-align: center;
        img{
          margin-left: 20px;
          vertical-align: middle;
        }
      }

    }
  }

</style>
