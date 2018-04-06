<template>
  <ul class="sidenav" id="mobile-demo">
    <li v-for="item in menuItems" v-bind:key="item">
      <a href="sass.html">{{item}}</a>
    </li>
  </ul>
</template>

<script>
import MaterializeJs from 'materialize-css'
import store from '_vuex/store'

export default {
  name: 'SideNav',
  data() {
    return {
      menuItems: store.getters.getMenuItems
    }
  },
  mounted() {
    let menu = document.querySelector('.sidenav');

    if(menu) {
      MaterializeJs.Sidenav.init(menu,{})
    }
  }
}
</script>

<style lang="sass">

</style>
