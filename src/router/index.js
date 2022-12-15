import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/EventDetails.vue'
import EventCreate from '../views/EventCreate.vue'
import AboutView from '../views/AboutView.vue'
import ErrorDisplay from '../views/ErrorDisplay.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
