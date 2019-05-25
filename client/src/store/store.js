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
        isUserLoggedIn: false,
        isAdmin: false
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
        },
        setAdmin (state, admin){
            console.log("setting admin in store: " + admin)
            if (admin) {
                state.isAdmin = true
            } else {
                state.isAdmin = false
            }
        }
    },
    actions: {
        setToken({commit}, token){
            commit('setToken', token)
        },
        setUser({commit}, user){
            commit('setUser', user)
        },
        setAdmin({commit}, admin){
            commit('setAdmin', admin)
        }
    }
})
