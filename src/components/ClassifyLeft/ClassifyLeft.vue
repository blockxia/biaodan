<template>
  <div class="classify_left">
    <div class="wrapper">
      <ul class="content list"  >
        <li   :class="index===0?'active':''"
          v-if="category.length"
          v-for="(item, index) in category" :key="index" @click.prevent="active(index)" >
          <span></span>
          {{category[index].name}}
        </li>
        <div class="scroll"></div>
      </ul>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    props:{
      get:Function
    },
    data(){
      return{
        index:0
      }
    },
    methods:{
      active(index){
        const lists=document.querySelectorAll('.list li')
        const span=document.querySelector('.list span')
        console.log(lists)
        for (let i=0;i<lists.length;i++){
          lists[i].className=''
        }

        lists[index].className='active'
        this.index=index
        this.get(this.index)
      }
    },

    mounted(){

      let scroll = new BScroll('.wrapper',{
        scrollX: true,
        click:true
      })
    },
    computed:{
      ...mapState(['category'])
    },

    components: {}
  }
</script>

<style scoped lang="less">
  .classify_left{
    position: fixed;
    left: 0;
    top: 89px;
    width: 162px;
    border-right: 1px solid #ddd;
    background-color: white;
    z-index: 5;
    height: 1146px;
    .wrapper{
      height: 1146px;
      width: 100%;
      .content{
        width: 100%;
        .scroll{
          width: 100%;
          height: 50px;
        }
        li{
          display: block;
          color: #333;
          margin-top: 40px;
          height: 50px;
          line-height: 1.5;
          width: 100%;
          text-align: center;
          font-size: 28px;
          &.active{
            font-size: .48rem;
            color: #ab2b2b;
            line-height: 50px;
            span{
              float: left;
              margin-bottom: -10px;
              display: inline-block;
              width: 6px;
              height: 50px;
              background-color: #ab2b2b;

            }
          }

        }
      }
    }
  }

</style>
