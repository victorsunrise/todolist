<template>
  <div class="todoitem">
    <div class="todoitem-block">
      <div class="todoitem-block__header">
        <input type="checkbox" class="checkbox"
          :checked="getChecked"
          @change="checked(item)"
        ></input>
        <div class="todoitem-block__header-label">
          <span v-if="item.type === 'new'">{{item.letter}}</span>
          <strike class="done" v-if="item.type === 'done'">{{item.letter}}</strike>
        </div>
      </div>
      <div class="todoitem-block__footer">
        <div class="todoitem-block__footer-status">
          <label>STATUS: </label>
          <span class="info" v-if="item.type === 'new'">{{item.type}}</span>
          <span class="done" v-if="item.type === 'done'">{{item.type}}</span>
        </div>
        <div>
          <button class="btn" @click="deleted(item)">X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    getChecked() {
      if (this.item.type === 'done') {
        return true
      }
      return false;
    }
  },
  methods: {
    checked(item) {
      this.$store.dispatch('DONE_ITEM', { item: item });
    },
    deleted(item) {
      this.$store.dispatch('DELETE_ITEM', { item: item });
    }
  }
}

</script>

<style lang="less">
  .todoitem {
    display: flex;
    justify-content: center;
    &-block {
      background-color: #ffffff;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      border: 1px solid #ffffff;
      border-radius: 5px;
      padding: 15px;
      margin: 15px;
      width: 850px;
      height: 120px;

      &__header {
        display: flex;
        margin-bottom: 20px;
        .checkbox {
          margin-top: 30px;
          margin-right: 30px;
          width: 40px;
          height: 40px;
          border-radius: 5px;
        }

        &-label {
          margin-right: 20px;
          padding-bottom: 20px;
          padding-top: 15px;
          font-size: 20pt;
          color: #ff5d00;
          .done {
            color: red;
          }

        }
      }

      &__footer {
        border-top: 1px solid #52464680;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        padding: 15px 0;
        &-status {
          font-size: 10pt;
          .info {
            font-size: 14pt;
            color: #2ed270;
          }
          .done {
            font-size: 14pt;
            color: #e40a63;
          }
        }
        .btn {
          border-color: #e40a63;
          color: #e40a63;
          border-radius: 5px;
        }
      }
    }
  }
</style>
