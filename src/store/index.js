import Vue from 'vue'
import Vuex from 'vuex'
import labels from './modules/labels'
import frames from './modules/frames'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerIsOpened: false
  },
  mutations: {
    openDrawer(state) {
      state.drawerIsOpened = true
    },
    closeDrawer(state) {
      state.drawerIsOpened = false
    },
    toggleDrawer(state) {
      state.drawerIsOpened = !state.drawerIsOpened
    }
  },
  modules: {
    labels,
    frames
  }
})