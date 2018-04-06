<template>
   <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

      <ul class="right hide-on-med-and-down">
        <li v-for="item in menuItems" v-bind:key="item">
          <a href="sass.html">{{item}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import store from '_vuex/store'

export default {
  name: 'Navigation',
  data() {
    return {
      menuItems: store.getters.getMenuItems
    }
  }
}
</script>

<style lang="sass">

</style>
