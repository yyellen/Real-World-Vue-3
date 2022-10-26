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
    path: '/event/123',
    name: 'EventDetail',
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
