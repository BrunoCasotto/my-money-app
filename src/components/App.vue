<template>
  <div class="main">
    <div class="main__navigation">
      <navigation></navigation>
    </div>

    <div class="main__menu">
      <side-nav></side-nav>
    </div>

    <div class="container row main__content">
      <content-wrapper :page="activePage"></content-wrapper>
    </div>
  </div>
</template>

<script>
import Navigation     from '_components/Navigation.vue'
import ContentWrapper from '_components/ContentWrapper.vue'
import SideNav        from '_components/SideNav.vue'
import store          from '_vuex/store'

export default {
  name: 'App',
  components: {
    Navigation,
    ContentWrapper,
    SideNav
  },
  data: {
    activePage: store.getters.getActivePage
  }
}
</script>

<style lang="sass">

.md-theme-default {
  *, *:after, *:before {
      box-sizing: border-box;
  }

  .page-container {
    height: 100%;
  }

}
</style>
