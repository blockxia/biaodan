import {
  reqHeadCateList,
  reqFocusList,
  reqPolicyDescList,
  reqTagList,
  reqNewItemList,
  reqPopularItemList,
  reqFlashSaleIndexVO,
  reqTopicList,
  reqCateList,
  reqBanner,
  reqColumn,
  reqFindMore,
  reqRecommend,
  reqTenfifteen,
  reqYxLook,
  reqZhenpin,
  reqCategory,
  reqPref

} from '../api/index'
import {RECEIVE_HEADCATES,
  RECEIVE_FOCUSLISTS,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_TAGLISTS,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATELISTS,
  RECEIVE_BANNER,
  RECEIVE_COLUMN,
  RECEIVE_FINDMORE,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEEN,
  RECEIVE_YXLOOK,
  RECEIVE_ZHENPIN,
  RECEIVE_CATEGORY,
  RECEIVE_PREF
}from './mutation-type'
export default {
  async getPref({commit},b){
    const result=await reqPref()
    if(result.code===0){
      const pref=result.data
      commit(RECEIVE_PREF,{pref})
      b&&b()
    }
  },
  async getCategory({commit},b){
    const result=await reqCategory()
    if(result.code===0){
      const category=result.data
      commit(RECEIVE_CATEGORY,{category})
      b&&b()
    }
  },




  async getBanner({commit},b){
    const result=await reqBanner()
    if(result.code===0){
      const banner=result.data
      commit(RECEIVE_BANNER,{banner})
      b&&b()
    }
  },
  async getColumn({commit},b){
    const result=await reqColumn()
    if(result.code===0){
      const column=result.data
      commit(RECEIVE_COLUMN,{column})
      b&&b()
    }
  },
  async getFindMore({commit},b){
    const result=await reqFindMore()
    if(result.code===0){
      const findMore=result.data
      commit(RECEIVE_FINDMORE,{findMore})
      b&&b()
    }
  },
  async getRecommend({commit},b){
    const result=await reqRecommend()
    if(result.code===0){
      const recommend=result.data
      commit(RECEIVE_RECOMMEND,{recommend})
      b&&b()
    }
  },
  async getTenfifteen({commit},b){
    const result=await reqTenfifteen()
    if(result.code===0){
      const tenfifteen=result.data
      commit(RECEIVE_TENFIFTEEN,{tenfifteen})
      b&&b()
    }
  },
  async getYxLook({commit},b){
    const result=await reqYxLook()
    if(result.code===0){
      const yxLook=result.data
      commit(RECEIVE_YXLOOK,{yxLook})
      b&&b()
    }
  },
  async getZhenpin({commit},b){
    const result=await reqZhenpin()
    if(result.code===0){
      const zhenpin=result.data
      commit(RECEIVE_ZHENPIN,{zhenpin})
      b&&b()
    }
  },











  async getHeadCateList({commit}){
    const result=await reqHeadCateList()
    if(result.code===0){
      console.log(1)
      const headCateList=result.data
      commit(RECEIVE_HEADCATES,{headCateList})
    }
  },
  async getFocusList({commit},b){
    const result=await reqFocusList()
    if(result.code===0){
      const focusList=result.data
      commit(RECEIVE_FOCUSLISTS,{focusList})
      b&&b()
    }

  },
  async getPolicyDescList({commit}){
    const result=await reqPolicyDescList()
    if(result.code===0){
      const policyDescList=result.data
      commit(RECEIVE_POLICYDESCLIST,{policyDescList})
    }
  },
  async getTagList({commit},c){
    const result=await reqTagList()
    if(result.code===0){
      const tagList=result.data
      commit(RECEIVE_TAGLISTS,{tagList})
    }
    c&&c()
  },
  async getNewItemList({commit}){
    const result=await reqNewItemList()
    if(result.code===0){
      const newItemList=result.data
      commit(RECEIVE_NEWITEMLISTS,{newItemList})
    }
  },
  async getPopularItemList({commit}){
    const result=await reqPopularItemList()
    if(result.code===0){
      const popularItemList=result.data
      commit(RECEIVE_POPULARITEMLISTS,{popularItemList})
    }
  },
  async getFlashSaleIndexVO({commit}){
    const result=await reqFlashSaleIndexVO()
    if(result.code===0){
      const flashSaleIndexVO=result.data
      commit(RECEIVE_FLASHSALEINDEXVO,{flashSaleIndexVO})
    }
  },
  async getTopicList({commit},b){
    const result=await reqTopicList()
    if(result.code===0){
      const topicList=result.data
      commit(RECEIVE_TOPICLISTS,{topicList})
      b&&b()
    }
  },
  async getCateList({commit}){
    const result=await reqCateList()
    if(result.code===0){
      const cateList=result.data
      commit(RECEIVE_CATELISTS,{cateList})
    }
  }
}
