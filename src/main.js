// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible'
import './mock/mockServer'
import VueLazyload from 'vue-lazyload'
import loading from './common/img/001mWx81gy6GMys5Op937&690.gif'
Vue.use(VueLazyload, {
  loading
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'

})

