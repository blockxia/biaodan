<template>
  <div class="classify_right">
    <div class="shop_list" v-if="category[findIndex]">
      <div  class="headerIcon">
        <img  :src="category[findIndex].bannerUrl" alt="">
      </div>
      <header>
        {{category[findIndex].name}}分类
      </header>
      <ul v-if="category[findIndex].subCateList" class="icon_list">
        <li v-for="(item,index) in category[findIndex].subCateList" :key="index">
          <a href="">
            <img :src="item.wapBannerUrl" alt="">
            <span>{{item.name}}</span>
          </a>
        </li>
      </ul>


    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {

    props:{
      index:Number
    },

    computed:{
      findIndex(){
        return this.index?this.index:0
      },
      ...mapState(['category'])
    },

    components: {}
  }
</script>

<style scoped lang="less">
  .classify_right{
    position: absolute;
    right: 0;
    top: 0;
    width: 587px;
    background-color: white;
    margin-bottom: 98px;
    .shop_list{
      padding: 30px 30px 21px;
      .headerIcon{
        img {
          width: 528px;
          height: 192px;
        }

      }
      header{
        width: 528px;
        height: 108px;
        font-size: 24px;
        line-height: 108px;
        text-align: center;
        color: #333;
      }
      .icon_list{
        li{
          display: inline-block;
          margin-right: 30px;
          width: 144px;
          vertical-align: top;
          img{
            width: 144px;
            height: 144px;
            border-radius: 50%;
          }
          span{
            display: inline-block;
            width: 100%;
            height: 72px;
            font-size: 24px;
            color: #333;
            text-align: center;
            line-height: 34px;
          }
        }
      }
    }
  }

</style>
