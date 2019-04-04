import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Journey from '@/components/Journey'
import AddJourney from '@/components/AddJourney'
import ViewPlace from '@/components/ViewPlace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/journey',
      name: 'journey',
      component: Journey
    },
    {
      path: '/journey/add',
      name: 'journey-add',
      component: AddJourney
    },
    {
      path: '/journey/:placeId',
      name: 'place',
      component: ViewPlace
    }
  ]
})
