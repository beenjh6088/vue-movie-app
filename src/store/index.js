import Vuex from 'vuex'
import movie from './movie'
import about from './about'

export default new Vuex.Store({
  modules: {
    movie,
    about
  }
})