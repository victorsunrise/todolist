<template>
  <div class="headers">
    <label class="headers__label"> Enter your todo: </label>
    <input class="header__input" ref="todoinput"  maxlength="100" @keyup.enter="submit"></input>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'headers',
  methods: {
    submit(val) {
      this.$store.dispatch('NEW_ITEM', { item: this.$refs.todoinput.value});
      this.$refs.todoinput.value="";
    }
  }
}
</script>

<style lang="less">
  .headers {
    display: flex;
    justify-content: center;
      &__label {
        padding-right: 50px;
        font-size: 20pt;
      }
      &__input {
          width: 400px;
          border-radius: 5px;
      }
  }
</style>
