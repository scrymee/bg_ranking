import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RakutenRanking from '@/components/RakutenRanking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/rakuten',
      name: 'RakutenRanking',
      component: RakutenRanking
    },
  ]
})
