import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import City from '../components/City'
import Scenery from '../components/Scenery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/City',
      name: 'City',
      component: City
    },
    {
      path: '/Scenery',
      name: 'Scenery',
      component: Scenery
    }
  ]
})
