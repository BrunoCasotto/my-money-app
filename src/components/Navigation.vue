<template>
   <nav>
    <div class="nav-wrapper red darken-1">
      <a href="#!" class="brand-logo">MMApp</a>
      <!-- <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a> -->

      <ul class="right hide-on-med-and-down">
        <li v-for="item in menuItems" v-bind:key="item.title">
          <a :href="item.link">{{item.title}}</a>
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
