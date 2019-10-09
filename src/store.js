import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogs: []
  },
  getters: {
    dog: state => id => {
     return state.dogs.find(dog => dog.id == id) || {}
    }
  },
  mutations: { //only these can change the state - have to be sync
    setDogs(state, dogs) {
      state.dogs = dogs
    },
    upvoteDog(state, id){
      const dog = state.dogs.find(dog => dog.id == id)
      dog.likes++
    }
  },
  actions: { //async
    fetchDogs({commit}){
      Promise.resolve() //fake fetch
      .then(() => {
        commit('setDogs', dogs)
      })
    },
    upvoteDog({commit}, id){
      commit("upvoteDog", id)
    },
  }
})

const dogs = [{
  id: 1,
  name: "Bower",
  imageUrl: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*',
  likes: 0
}, {
  id: 2,
  name: "Waggy",
    imageUrl: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/16/Pictures/_1571873a-58de-11e8-b431-73159b4b09e2.jpg',
  likes: 0
}, {
  id: 3,
  name: "Percy",
    imageUrl: 'https://thehappypuppysite.com/wp-content/uploads/2017/10/Cute-Dog-Names-HP-long.jpg',
  likes: 0
}]
