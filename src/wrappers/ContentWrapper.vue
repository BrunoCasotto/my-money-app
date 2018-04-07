<template>
  <div class="page-wrapper">
    <home v-if="page === 'home'"></home>
    <statistics v-if="page === 'estatisticas'"></statistics>
    <cash-flow v-if="page === 'caixa'"></cash-flow>
  </div>
</template>

<script>
import Home from '_pages/Home.vue'
import CashFlow from '_pages/CashFlow.vue'
import Statistics from '_pages/Statistics.vue'

  export default {
    name: 'ContentWrapper',
    props: {
      page: {
        type: String,
        default: ''
      }
    },
    components: {
      Home,
      CashFlow,
      Statistics
    }
  }
</script>

<style>

</style>
