export const state = () => ({

})

export const mutations = {

}

export const actions = {
  async post({ commit }, payload) {
    const url = 'localhost:3000/api/v1/posts';
    const params = payload.params;
    await this.$axios.post(url, params)
    commit('savePost', {
      
    });
  },
}