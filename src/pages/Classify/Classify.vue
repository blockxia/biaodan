<template>
  <div class="classify">
    <header>
        <div class="kong"></div>
        <div class="input">
          <div class="server" @click="goto('/search')">
            <i></i>搜索商品, 共10856款好物
          </div>
        </div>
      </header>
    <div class="contenx"  >
      <ClassifyLeft ref="content" :get="get"/>
      <ClassifyRight :index="index"/>


    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ClassifyLeft from '../../components/ClassifyLeft/ClassifyLeft.vue'
  import ClassifyRight from '../../components/ClassifyRight/ClassifyRight.vue'
  export default {
    data(){
      return{
        index:null
      }
    },

    mounted(){


      this.$store.dispatch('getCategory',()=>{
        this.$nextTick(()=>{
        })
      })

    },

    methods:{
      get(index){
        this.index=index
      },
      goto(path){
        this.$router.push(path)
      }
    },

    computed:{
      ...mapState(['category'])
    },



      components: {ClassifyLeft,ClassifyRight}
  }
</script>

<style scoped lang="less">
  .classify{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 98px;
    position: relative;
    background-color: white;

    header{
      width: 750px;
      height: 88px;
      line-height: 88px;



      .input{
        width: 100%;
        height: 87px;
        position: fixed;
        top: 0;
        z-index: 20;
        background-color: white;
        border-bottom: 1px solid #ddd;
        .server{
          margin: auto;
          margin-top: 16px;
          width: 690px;
          height: 56px;
          background-color: #ededed;
          text-align: center;
          line-height: 56px;
          font-size: 28px;
          color: #666;
          vertical-align: middle;
          i{
            display: inline-block;
            width: 28px;
            height: 28px;
            background-image: url("./images/search.png");
            background-size: 28px 28px;
            vertical-align: middle;
            margin-right: 20px;
          }

        }

      }
    }
    .contenx{
      position: relative;
      width: 100%;


    }
  }

</style>
