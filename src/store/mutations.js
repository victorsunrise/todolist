import Vue from 'vue'

export default {
  SET_ACTIVE_TYPE: (state, { type }) => {
    state.activeType = type
  },

  SET_LIST: (state, { type, ids }) => {
    state.lists[type] = ids
  },

  SET_ITEMS: (state, { items }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  },

  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user || false) /* false means user not found */
  },

  SET_NEW_ITEM: (state, { item }) => {
    console.log('df', state, item);
    const newItem = {
      type: 'new',
      letter: item
    };
    if (state && state.item) {
      state.item.push(newItem);
    } else {
      state.item = [];
      state.item.push(newItem);
    }
  }
}
