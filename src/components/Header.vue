<template>
  <div class="header">
    <md-button class="md-icon-button" @click="toggleMenu">
      <md-icon>menu</md-icon>
    </md-button>
    <span class="md-title">My Title</span>
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
