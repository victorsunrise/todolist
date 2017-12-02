export default {
  NEW_ITEM: ({ commit, state }, { item }) => {
    commit('SET_NEW_ITEM', {item : item});
  },
}
