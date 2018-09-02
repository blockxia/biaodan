<template>
  <div class="re_mexploreMore">
    <header>
      <div class="left"></div>
      更多精彩
      <div class="right"></div>
    </header>
    <div class="list">
      <div v-for="(i,x) in findMore" :key="x" class="good">
        <a :href="i.linkUrl">
          <div>
            <img   v-if="i.picList.length===0" class=" main" :src="i.itemPicUrl" alt="">

            <div v-if="i.picList.length">
              <div class="left">
                <img :src="i.picList[0]" alt="">
              </div>
              <div class="right">
                <img :src="i.picList[1]" alt="">
                <img :src="i.picList[2]" alt="">
              </div>
            </div>


          </div>
        </a>
        <div class="word">{{i.subtitle}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    mounted(){
      this.$store.dispatch('getFindMore')
    },
    computed:{
      ...mapState(['findMore'])
    },

    components: {}
  }
</script>

<style scoped lang="less">
  .re_mexploreMore{
    width: 690px;
    margin: auto;
    header{
      width: 100%;
      height: 140px;
      font-size: 28px;
      line-height: 140px;
      text-align: center;
      color: #333;
      position: relative;
      .left{
        position: absolute;
        left: 0;
        top: 70px;
        width: 264px;
        height: 1px;
        background-color: #d9d9d9;

      }
      .right{
        position: absolute;
        right: 0;
        top: 70px;
        width: 264px;
        height: 1px;
        background-color: #d9d9d9;

      }
    }
    .list{
      .good{
        box-sizing: border-box;
        margin: auto;
        width: 690px;
        height: 498px;
        padding: 24px;
        margin-bottom: 30px;
        background-color: white;
        position: relative;
        div{
          .main{
            width: 642px;
            height: 360px;
          }

          .left{
            float: left;
            img{
              width: 460px;
              height: 360px;
              vertical-align: middle;
            }
          }
          .right{
            float: right;
            img{
              margin: 1px;
              display: block;
              height: 178px;
              width: 178px;
            }
          }
        }
        .word{
          width: 642px;
          height: 90px;
          position: absolute;
          bottom: 15px;
          font-size: 28px;
          line-height: 90px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: #333;
        }
      }
    }
  }

</style>
