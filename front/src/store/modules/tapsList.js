const tapsList = {
  state: {
    tapsList: [
      {index: "/", name: "首页" },
    ]
  },

  mutations: {
    SET_LIST: (state, tapsList) => {
      state.tapsList = tapsList
    },
  },

  actions: {
    GetTapsList(commit) {
      return new Promise((resolve, reject) => {
        commit('SET_LIST', commit);
        resolve(commit)
      }).catch(error => {
        // reject(error)
      })
    },
  }
}

export default tapsList
