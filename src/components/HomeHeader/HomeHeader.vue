<template>
  <div>
    <div class="kong"></div>
    <section>
      <header>
        <a href="" class="logo"></a>
        <i></i>
        <input type="text" placeholder="搜索商品，共97565款好物" @click.prevent="goto('/search')">
      </header>
      <div class="scroll">
        <ul @click="active" class="list"  >
          <li class="active" @click="findInde(null)">推荐<span></span></li>
          <li v-for="(item,index) in headCateList" :key="index"
          @click="findInde(index)">{{item.name}}<span></span></li>

        </ul>

      </div>
    </section>
  </div>

</template>

<script>
//  import BScroll from 'better-scroll'
//  const scroll = new BScroll('.wrapper')
import BScroll from 'better-scroll'

import {mapState} from 'vuex'


  export default {

  data(){
    return{
      index:0
    }
  },
    props:{
      get:Function
    },
  mounted(){
    let scroll = new BScroll('.scroll',{
      scrollX: true,
      click:true
    })
  },
    methods:{
      active(event){
        const lists=document.querySelectorAll('.list li')
        const span=document.querySelector('.list span')
        console.log(lists)
        for (let i=0;i<lists.length;i++){
          lists[i].className=''
        }
        event.target.className='active'


      },
      findInde(index){
        this.index=index
        this.get(this.index)
        console.log(this.index)
      },
      goto(path){
        this.$router.push(path)
      }
    },
    computed:{
      ...mapState(['headCateList']),
    },

    components: {}
  }
</script>

<style scoped lang="less">
  div{
    /*background-color: white;*/
    .kong{
      width: 750px;
      height: 148px;
    }
    section{
      z-index: 10;
      position: fixed;
      top:0;
      width: 750px;
      height: 148px;
      background-color: white;
      header{
        height: 88px;
        box-sizing: border-box;
        padding: 16px 30px;
        position: relative;
        /*line-height: 56px;*/
        .logo{
          display: inline-block;
          width: 138px;
          height: 40px;
          vertical-align: middle;
          margin-right: 20px;
          background-image: url("./images/logo.png");


        }
        i{
          display: inline-block;
          height: 28px;
          width: 28px;
          position: absolute;
          left: 270px;
          top: 26px;
          background-image: url("./images/search.png");
          /*margin-right: -100px;*/
        }
        input{
          vertical-align: middle;
          box-sizing: border-box;
          padding: 0 120px;
          width: 500px;
          height: 56px;
          border-radius: 5px;
          background-color: #ddd;
          outline:none;

        }
      }
      .scroll{
        width: 750px;
        height: 60px;
        overflow: hidden;
        ul{
          float: left;
          /*overflow: hidden;*/
          /*float: left;*/
          height: 60px;
          font-size: 28px;
          white-space: nowrap;

          li{
            display: inline-block;

            height: 60px;
            text-align: center;
            line-height: 56px;
            font-weight: bold;
            color: #7e8c8d;
            box-sizing: border-box;
            width: 140px;
            &.active{
              color: red;
              span{
                margin: auto;
                display: block;
                width: 90px;
                height: 4px;
                background-color: red;
              }
            }

          }
        }
      }

    }
  }



</style>
