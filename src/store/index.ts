import { createStore } from 'vuex'

export default createStore({
  state: {
    route: [],
    loginInfo: {
      userId: ''
    },
    logined: false
  },
  getters: {
    routeGetter: route=> {
      return route
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
