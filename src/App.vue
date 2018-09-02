<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-if="!isWyyx"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'


  export default {
    computed:{
      isWyyx(){
        return this.$route.path==='/wyyx'||this.$route.path==='/login'
        ||this.$route.path==='/iphone'||this.$route.path==='/email'?true:false
      }
    },
    components: {
      FooterGuide
    }
  }
</script>

<style lang="less" >
  #app{
    width :100%;
    height :100%;
    background :#f5f5f5
  }
</style>
