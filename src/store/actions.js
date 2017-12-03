export default {
  INIT_ITEM: ({ commit, state }) => {
    commit('SET_INIT_ITEM');
  },
  NEW_ITEM: ({ commit, state }, { item }) => {
    commit('SET_NEW_ITEM', {item : item });
  },

  DONE_ITEM: ({ commit, state }, { item }) => {
    commit('SET_DONE_ITEM', { item : item });
  },

  DELETE_ITEM: ({ commit, state }, { item }) => {
    commit('SET_DELETE_ITEM', { item : item });
  }
}
