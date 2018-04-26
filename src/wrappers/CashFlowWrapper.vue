<template>
  <div class="cash-flow-wrapper">
    <!-- <date-picker title="Data inicio"></date-picker>
    <date-picker title="Data fim"></date-picker> -->

    <ul class="collapsible">
      <template v-for="cash in cashList">
        <collapse :key="cash.title" :data="cash" ></collapse>
      </template>
    </ul>

    <insert-modal></insert-modal>
  </div>
</template>

<script>
import MaterializeJs from 'materialize-css'
import Collapse      from '_components/Collapse.vue'
import DatePicker    from '_components/DatePicker.vue'
import InsertModal    from '_components/InsertModal.vue'

export default {
  name: "CashFlowWrapper",
  data() {
    return {
      cashList: [
        {
          title: 'Salario',
          type: 'input',
          description: 'Adiantamento',
          value      : 8000.00
        },
        {
          title: 'Combustivel',
          type: 'output',
          description: 'Combustivel para faculdade',
          value      : 80.00
        },
        {
          title: 'Aluguel',
          type: 'output',
          description: 'Aluguel do apartamento',
          value      : 1800.00
        }
      ]
    }
  },
  mounted() {
    let elem = document.querySelector('.collapsible')
    if(elem) {
      let instance = MaterializeJs.Collapsible.init(elem, {});
    }
  },
  components: {
    Collapse,
    DatePicker,
    InsertModal
  }
}
</script>

<style lang="sass" scoped>
.cash-flow-wrapper {
  padding-top: 10px;
}
</style>
