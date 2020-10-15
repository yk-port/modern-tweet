export const state = () => ({
  postData: [],
})

export const mutations = {}

export const actions = {
  async post({ commit }, payload) {
    const url = '/api/v1/posts';
    const params = payload.params;
    await this.$axios.post(url, params)
  },
}
