import Vue from 'vue'
import VueRouter from 'vue-router'
import RevisiProposal from '@/views/proposal/RevisiProposal'
import DetailRevisi from '@/views/proposal/DetailRevisi'
import RevisiTA from '@/views/ta/RevisiTA'

Vue.use(VueRouter)

const routes = [
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
