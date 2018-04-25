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

    <action-button effect=""></action-button>
  </div>
</template>

<script>
import Navigation     from '_components/Navigation.vue'
import ContentWrapper from '_wrappers/ContentWrapper.vue'
import ActionButton   from '_components/ActionButton.vue'
import SideNav        from '_components/SideNav.vue'
import store          from '_vuex/store'
import BillingService from '_services/billing.js'

export default {
  name: 'App',
  components: {
    ActionButton,
    ContentWrapper,
    Navigation,
    SideNav
  },
  props: {
    activePage: ''
  },
  mounted() {
    let billing = new BillingService();
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
