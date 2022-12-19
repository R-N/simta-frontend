import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RevisiProposal from '@/views/proposal/RevisiProposal'
import DetailRevisi from '@/views/proposal/DetailRevisi'
import RevisiTA from '@/views/ta/RevisiTA'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    redirect: '/proposal/revisi'
  },
  {
    path: '/proposal/revisi',
    name: 'revisi-proposal',
    component: RevisiProposal
  },
  {
    path: '/proposal/revisi/:sidangId',
    name: 'detail-revisi-proposal',
    component: DetailRevisi
  },
  {
    path: '/ta/revisi',
    name: 'revisi-ta',
    component: RevisiTA
  },
  {
    path: '/ta/revisi/:sidangId',
    name: 'detail-revisi-ta',
    component: DetailRevisi
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
