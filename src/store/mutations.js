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
    let ids;
    if (state.item.length === 0) {
      ids = 0;
    } else if (state.item.length > 0) {
      ids = state.item[state.item.length-1].id + 1;
    };
    const newItem = {
      type: 'new',
      letter: item,
      id: ids
    };
    if (state && state.item) {
      state.item.push(newItem);
    } else {
      state.item = [];
      state.item.push(newItem);
    }
  },

  SET_DONE_ITEM: (state, { item }) => {
    state.item[state.item.indexOf(item)].type === 'new'
    ? state.item[state.item.indexOf(item)].type = 'done'
    : state.item[state.item.indexOf(item)].type = 'new';
  },

  SET_DELETE_ITEM: (state, { item }) => {
    state.item.splice(state.item.indexOf(item),1);
  },
}
