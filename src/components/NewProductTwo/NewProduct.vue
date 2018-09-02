<template>

  <div class="new_product" >
    <div class="bg">
      <span class="title">人气推荐·好物精选</span>
      <div>
        <span>查看全部</span>
        <i></i>
      </div>
    </div>
    <div class="wrapperl">
      <ul class="lists">

        <li v-for="(item,index) in popularItemList" :key="index">
          <a href="">
            <img :src="item.listPicUrl" alt="">
            <span class="name">{{item.name}}</span>
            <span class="bedeck">{{item.simpleDesc}}</span>
            <div>
              <span>￥</span>
              <span>{{item.retailPrice}}</span>
            </div>
          </a>
        </li>


        <a href="" class="select"> 查看全部</a>

      </ul>
    </div>
  </div>




</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        productList:[1,2]
      }
    },
    mounted(){
      let wrapperl = document.querySelector('.wrapperl')
      let scroll = new BScroll(wrapperl,{
        scrollX: true
      })

    },
    computed:{
      ...mapState(['popularItemList']),
    },

    components: {}
  }
</script>

<style scoped lang="less">

  .new_product{
    margin-bottom: 20px;

    background-color: white;
    width: 100%;
    height: 722px;
    .bg{
      width: 100%;
      height: 260px;
      background-image: url("./newProduct/bg.png");
      text-align: center;
      .title{
        display: inline-block;
        margin-top: 80px;
        font-size: 40px;
        color: #8ba0b6;
      }
      div{
        background-color: #f4e9cb;
        width: 240px;
        height: 56px;
        margin: auto;
        margin-top: 10px;
        line-height: 56px;
        font-size: 35px;
        color: #8ba0b6;
        vertical-align: middle;
        i{
          display: inline-block;
          height: 22px;
          width: 10px;
          vertical-align: middle;
          background-image: url("./newProduct/right.png");
        }
      }
    }
    .wrapperl{
      width: 750px;
      height: 416px;
      margin-top: 25px;
      overflow: hidden;
      ul{
        float: left;
        white-space: nowrap;
        li{
          display: inline-block;
          width: 280px;
          margin-left: 30px;
          a{
            display: inline-block;
            vertical-align: middle;
            img{
              display: block;
              background-color: #eee;
              width: 280px;
              height: 280px;
              border-radius: 30px;
            }
            .name{
              margin-top: 10px;
              display: block;
              width: 280px;
              height: 34px;
              font-size: 30px;
              color: black;
              line-height: 34px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;

            }
            .bedeck{
              margin-top: 10px;
              display: inline-block;

              width: 280px;
              height: 30px;
              font-size: 26px;
              color: #7e8c8d;
              line-height: 34px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            div{
              margin-top: 5px;
              color: red;
              font-size: 30px;

            }
          }
        }
        .select{
          margin-left: 30px;
          display: inline-block;
          vertical-align: top;
          width: 260px;
          height: 260px;
          border: 10px solid #eeeeee;
          border-radius: 20px;
          font-size: 30px;
          color: gray;
          line-height: 260px;
          text-align: center;
        }
      }
    }
  }



</style>
