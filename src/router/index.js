import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/EventDetails.vue'
import EventCreate from '../views/EventCreate.vue'
import AboutView from '../views/AboutView.vue'
import ErrorDisplay from '../views/ErrorDisplay.vue'
import Page404 from '../views/Page404.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    props: true,
    component: ErrorDisplay
  },
  {
    path: '/404',
    name: '404',
    component: Page404,
    hidden: true
  },
  {
    // 新版本(适用于vue3的vue-router)
    path: '/:pathMatch(.*)',
    redirect: '/404',
    hidden: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
