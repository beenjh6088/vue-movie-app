import axios from 'axios'

export default {
  // store에서 모듈로 사용한다 의미
  namespaced: true,
  // data
  state: () => ({
    movies: [],
    message: '',
    loading: false
  }),
  // computed
  getters: {},
  // methods
  // 변이. 데이터 변경 가능
  mutations: {
    updateState(state, payload) {
      // ['movies', 'message', 'loading']
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기
  actions: {
    async searchMovies({ state, commit }, payload) {
      try {
        const res = await _fetchMovie({
          ...payload,
          page: 1
        })
        const { Search, totalResults } = res.data
        commit('updateState', {
          movies: Search
        })
        console.log(totalResults)
  
        const total = parseInt(totalResults, 10)
        const pageLength = Math.ceil(total / 10)
  
        // 추가 요청
        if(pageLength > 1) {
          for (let page = 2; page <= pageLength; page += 1) {
            if (page > (payload.number / 10)) break
  
            const res = await _fetchMovie({
              ...payload,
              page
            })
            const { Search } = res.data
            commit('updateState', {
              movies: [...state.movies, ...Search]
            })
          }
        }
      } catch (message) {
        commit('updateState', {
          movies: [],
          message
        })
      }
    }
  }
}

function _fetchMovie(payload) {
  const { title, type, year, page } = payload
  const OMDB_API_KEY = '7035c60c'
  const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&t=${type}&y=${year}&page=${page}`

  return new Promise((resolve, reject) => {
    axios.get(url)
    .then((res) => {
      if (res.data.Error) {
        reject(res.data.Error)
      }
      resolve(res)
    })
    .catch(err => {
      reject(err.message)
    })
  })
}