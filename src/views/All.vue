<template>
  <div>
    <headers></headers>
    <div>
      <item v-for="(item, index) in todolist"
        :key="index"
        :item="item">
      </item>
    </div>
  </div>
</template>

<script>
import Item  from '../components/Item.vue';
import Headers from '../components/Headers.vue'
export default {
  name: 'all',
  components: {
    Item,
    Headers
  },
  mounted() {
    this.$store.dispatch('INIT_ITEM');
  },
  computed: {
    todolist() {
      return this.$store.getters.getListTodo;
    }
  }
}

</script>

<style lang="less">
</style>
