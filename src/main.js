import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import axios from 'axios'

require ('./mockjs/mock.js')

import Vant from 'vant';
import 'vant/lib/index.css';

import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer)


import { Lazyload } from 'vant';
import { Tabbar, TabbarItem } from 'vant';

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Lazyload);


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem('token')
  // 筛选需要传token的路由，匹配route里面需要登录的路径，如果匹配到就是true
  if(to.matched.some(record=>record.meta.requiresAuth)){
    if(token){
      next()
    }else{
      next({path:'/login'})
    }
  }else{
    next()
  }
})