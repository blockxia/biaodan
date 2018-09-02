import {RECEIVE_HEADCATES,
  RECEIVE_FOCUSLISTS,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_TAGLISTS,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATELISTS,
  RECEIVE_ZHENPIN,
  RECEIVE_YXLOOK,
  RECEIVE_TENFIFTEEN,
  RECEIVE_RECOMMEND,
  RECEIVE_FINDMORE,
  RECEIVE_COLUMN,
  RECEIVE_BANNER,
  RECEIVE_CATEGORY,
  RECEIVE_PREF
}from './mutation-type'
export default {
  [RECEIVE_PREF](state,{pref}){
    state.pref=pref
  },
  [RECEIVE_CATEGORY](state,{category}){
    state.category=category
  },




  [RECEIVE_ZHENPIN](state,{zhenpin}){
    state.zhenpin=zhenpin
  },
  [RECEIVE_YXLOOK](state,{yxLook}){
    state.yxLook=yxLook
  },
  [RECEIVE_TENFIFTEEN](state,{tenfifteen}){
    state.tenfifteen=tenfifteen
  },
  [RECEIVE_RECOMMEND](state,{recommend}){
    state.recommend=recommend
  },
  [RECEIVE_FINDMORE](state,{findMore}){
    state.findMore=findMore
  },
  [RECEIVE_COLUMN](state,{column}){
    state.column=column
  },
  [RECEIVE_BANNER](state,{banner}){
    state.banner=banner
  },




  [RECEIVE_HEADCATES] (state, {headCateList}) {
    state.headCateList = headCateList
  },
  [RECEIVE_FOCUSLISTS] (state, {focusList}) {
    state.focusList = focusList
  },
  [RECEIVE_POLICYDESCLIST] (state, {policyDescList}) {
    state.policyDescList = policyDescList
  },
  [RECEIVE_TAGLISTS] (state, {tagList}) {
    state.tagList = tagList
  },
  [RECEIVE_NEWITEMLISTS] (state, {newItemList}) {
    state.newItemList = newItemList
  },
  [RECEIVE_POPULARITEMLISTS] (state, {popularItemList}) {
    state.popularItemList = popularItemList
  },
  [RECEIVE_FLASHSALEINDEXVO] (state, {flashSaleIndexVO}) {
    state.flashSaleIndexVO = flashSaleIndexVO
  },
  [RECEIVE_TOPICLISTS] (state, {topicList}) {
    state.topicList = topicList
  },
  [RECEIVE_CATELISTS] (state, {cateList}) {
    state.cateList = cateList
  },
}
