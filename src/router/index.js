import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import BasicLayout from '@/components/BasicLayout'
import HomeView from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BasicLayout,
      children: [
        {
          name: 'Home',
          path: '',
          component: HomeView
        }
      ]
    }
  ]
})
