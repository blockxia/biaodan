<template>
  <section class="manufacturer">
    <div class="gray"></div>
    <div class="header">
      <a href="">
        品牌制造商直供
        <i></i>
      </a>
    </div>
    <div class="content">
      <ul>
        <li     v-if="sliceTagList"
            v-for="(item,index) in sliceTagList" :key="index"

            :style="`background-image: url(${item.picUrl})`"><span>{{item.name}}</span><span>{{item.floorPrice}}元起</span></li>
      </ul>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        sliceTagList:[]
      }
    },
    computed:{
      ...mapState(['tagList']),
    },
    mounted () {
      this.$store.dispatch('getTagList',()=>{
        for(var i=0;i<4;i++){
          this.sliceTagList.push(this.tagList[i])
        }
      })
    },
    components: {}
  }
</script>

<style scoped lang="less">
  .manufacturer{
    background-color: white;
    width: 100%;
    height: 625px;
    .gray{
      height: 15px;
      width: 100%;
      background-color: #eee;
    }
    .header{
      width: 100%;
      height: 110px;
      text-align: center;
      line-height: 110px;
      a{
        display: inline-block;
        font-size: 32px;
        vertical-align: middle;
        color: #444444;
        i{
          margin-left: 10px;
          display: inline-block;
          width: 30px;
          height: 30px;
          vertical-align: middle;
          background-image: url("./images/right.png");
        }
      }

    }
    .content{
      width: 100%;
      height: 476px;
      ul{
        width: 726px;
        height:468px ;
        margin: auto;
        li{
          float: left;
          height: 236px;
          width: 355px;
          margin-left: 8px;
          margin-bottom: 10px;
          background-color: #eee;
          background-size: 355px 277px;
          background-position: 10px -20px ;
          span{
            display: block;
            margin: 20px 0 0 10px;
            font-size: 26px;
            color: #7e8c8d;
          }
        }
      }
    }

  }

</style>
