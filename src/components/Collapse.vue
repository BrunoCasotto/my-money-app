<template>
  <li>
    <div class="collapsible-header cash-item">
      <i :class="`material-icons cash-item__icon ${collapseType} darken-1`">
        {{collapseIcon}}
      </i>
      <span class="cash-item__title">{{data.title}}</span>
      <span class="cash-item__value">{{data.value | currency}}</span>
    </div>
    <div class="collapsible-body cash-item__body">
      <p>{{data.description}}</p>
      <div class="cash-item__body__controller">
        <a class="btn-floating disabled">
          <i class="material-icons yellow darken-1">edit</i>
        </a>
        <a class="btn-floating disabled">
          <i class="material-icons red darken-1">delete</i>
        </a>
      </div>
    </div>
  </li>
</template>

<script>
import utils from '_src/utils.js'

export default {
  name: "Collapse",
  props:{
    data: {
      type: Object,
      default: {
        type       : '',
        title      : '',
        description: '',
        value      : 0.00
      }
    }
  },
  computed: {
    collapseType() {
      return this.data.type === 'input' ? 'green' : 'red'
    },
    collapseIcon() {
      return this.data.type === 'input' ? 'call_made' : 'call_received'
    }
  },
  filters: {
    currency: utils.setCurrency
  }
}
</script>

<style lang="sass" scoped>
  .material-icons {
    color: #fff;
  }

  .cash-item {
    display: flex;

    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__value {
      flex: 1;
      text-align: right;
      font-size: 1.5rem;
    }
  }
</style>
