<template>
  <section id="main">
    <div id="mi">
    <HomeHeader :get="get"/>
    <Swiper v-if="this.index===null"/>
    <Manufacturer v-if="this.index===null"/>
    <NewProduct v-if="this.index===null"/>
    <NewProductTwo v-if="this.index===null"/>
    <Preferential v-if="this.index===null"/>
    <PicSwiper v-if="this.index===null"/>
    <IndexFloor v-if="this.index===null"/>
    <HomeList v-if="this.index!==null" :index="index"/>
    </div>
    <a href="#mi" id="top"> <img src="./images/top.png" alt=""></a>

  </section>
</template>

<script>
   import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
   import Swiper from '../../components/Swiper/Swiper.vue'
   import Manufacturer from '../../components/Manufacturer/Manufacturer.vue'
   import NewProduct from '../../components/NewProduct/NewProduct.vue'
   import NewProductTwo from '../../components/NewProductTwo/NewProduct.vue'
   import Preferential from '../../components/Preferential/Preferential.vue'
   import PicSwiper from '../../components/PicSwiper/PicSwiper.vue'
   import IndexFloor from '../../components/IndexFloor/IndexFloor.vue'
   import HomeList from '../../components/HomeList/HomeList.vue'
   import {mapActions} from 'vuex'
  export default {
    data(){
      return{
        index:null
      }
    },
     mounted(){
       this.$store.dispatch('getHeadCateList')
       this.$store.dispatch('getPolicyDescList')
       this.$store.dispatch('getNewItemList')
       this.$store.dispatch('getPopularItemList')
       this.$store.dispatch('getFlashSaleIndexVO')
       this.$store.dispatch('getTopicList')
       this.$store.dispatch('getCateList')
     },
    methods:{
      get(index){
        this.index=index
      }
    },


    components: {
      HomeHeader,Swiper,Manufacturer,NewProduct,NewProductTwo,Preferential,PicSwiper,IndexFloor,HomeList
    }
  }
</script>

<style scoped lang="less">
  #main{
    background-color: #fafafa;
    margin-bottom: 98px;
    position: relative;
    #top{
      transition: 1s;
      display: block;
      z-index: 10;
      position: fixed;
      bottom: 98px;
      right: 0;
    }

  }

</style>
