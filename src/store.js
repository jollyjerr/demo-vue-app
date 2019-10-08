import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogs: []
  },
  mutations: { //only these can change the state - have to be sync
    setDogs(state, dogs) {
      state.dogs = dogs
    }
  },
  actions: { //async
    fetchDogs({commit}){
      Promise.resolve() //fake fetch
      .then(() => {
        commit('setDogs', [{
          id: 1,
          name: "Bower",
          imageUrl: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*'
        }, {
          id: 2,
          name: "Waggy",
          imageUrl: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*'
        }, {
          id: 3,
          name: "Percy",
          imageUrl: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*'
        }])
      })
    }

  }
})
