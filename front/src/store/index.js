import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import tapsList from './modules/tapsList'
import app from './modules/app'
import tagsView from './modules/tagsView'
import settings from './modules/settings'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    app,
    settings,
    tagsView,
    tapsList
  },
  getters
})

export default store
