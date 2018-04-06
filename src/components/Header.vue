<template>
  <div class="header">
    Header
  </div>
</template>

<script>
import store from '_vuex/store'

export default {
  name: 'Header',
  methods: {
    toggleMenu() {
      store.dispatch('toggleMenu')
    }
  }
}
</script>

<style lang="sass">
</style>
