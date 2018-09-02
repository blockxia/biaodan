<template>
  <section id="recommend">
    <ReHeader/>
    <ReSwiper/>
    <ReListSwiper/>
    <ReExploreRcmds/>
    <ReExploreTenFifteen/>
    <ReExploreRcmd/>
    <ReExploreLook/>
    <ReMexploreMore/>
  </section>


</template>

<script>
  import ReHeader from '../../components/ReHeader/ReHeader.vue'
  import ReSwiper from '../../components/ReSwiper/ReSwiper.vue'
  import ReListSwiper from '../../components/ReListSwiper/ReListSwiper.vue'
  import ReExploreRcmds from '../../components/ReExploreRcmds/ReExploreRcmds.vue'
  import ReExploreRcmd from '../../components/ReExploreRcmd/ReExploreRcmd.vue'
  import ReExploreTenFifteen from '../../components/ReExploreTenFifteen/ReExploreTenFifteen.vue'
  import ReExploreLook from '../../components/ReExploreLook/ReExploreLook.vue'
  import ReMexploreMore from '../../components/ReMexploreMore/ReMexploreMore.vue'

  export default {

    components: {ReHeader,ReSwiper,ReListSwiper,ReExploreRcmds,ReExploreTenFifteen,ReExploreRcmd
    ,ReExploreLook,ReMexploreMore}
  }
</script>

<style scoped lang="less">
  #recommend{
    background-color: #fafafa;
    margin-bottom: 98px;
  }

</style>
