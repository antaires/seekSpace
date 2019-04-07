import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

/* eslint-disable */
//tell vue to use vuex to allow access to store and all vue components
Vue.use(Vuex)

export default new Vuex.Store({
    strict: true, 
    plugins: [
        createPersistedState()
    ],
    //globla states of application
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false
    },
    mutations: {
        setToken (state, token){
            state.token = token
            if (token) {
                state.isUserLoggedIn = true
            } else {
                state.isUserLoggedIn = false
            }
        },
        setUser (state, user){
            state.user = user
        }
    },
    actions: {
        //event names basically
        setToken({commit}, token){
            commit('setToken', token)
        },
        setUser({commit}, user){
            commit('setUser', user)
        }
    }
})
