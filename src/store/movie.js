export default {
  // module
  namespaced: '',
  // data
  state: () => ({
    movies: []
  }),
  // computed
  getters: {
    movieIds(state) {
      return state.movies.map(m => m.imdbID)
    }
  },
  // methods
  // 변이(관리하는 데이터 변경)
  mutations: {
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기
  actions: {
    searchMovies() {
      
    }
  }
}