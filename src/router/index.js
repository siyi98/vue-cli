import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import HomeView from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/home', name: 'home', component: HomeView }
  ]
})
