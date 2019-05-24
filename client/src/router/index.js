import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Journey from '@/components/Journey/Index'
import AddJourney from '@/components/AddJourney'
import EditJourney from '@/components/EditJourney'
import ViewPlace from '@/components/ViewPlace'
import Game from '@/components/PlayGame'
import Timeline from '@/components/Timeline'
import Info from '@/components/Info'
import Rooms from '@/components/Rooms'
import History from '@/components/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Main
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
      path: '/journey/:placeId/edit',
      name: 'journey-edit',
      component: EditJourney
    },
    {
      path: '/journey/:placeId',
      name: 'place',
      component: ViewPlace
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: Rooms
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      // If user tries to navigate to path that doesn't exist, redirect them to main page
      path: '*',
      redirect: 'root'
    }
  ]
})
