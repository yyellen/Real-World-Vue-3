import { createRouter, createWebHashHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetail from '../views/EventDetail.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    props: true,
    component: EventDetail
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
