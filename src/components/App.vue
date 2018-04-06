<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <!-- header -->
      <md-app-toolbar class="md-primary">
        <header-template></header-template>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>
        <navigation></navigation>
      </md-app-drawer>
      <!-- header (end) -->

      <!-- content of pages -->
      <md-app-content>
        <content-wrapper :page="activePage" ></content-wrapper>
      </md-app-content>
      <!-- content of pages (end) -->
    </md-app>
  </div>
</template>

<script>
import HeaderTemplate from '_components/Header.vue'
import Navigation from '_components/Navigation.vue'
import ContentWrapper from '_components/ContentWrapper.vue'
import store from '_vuex/store'

export default {
  name: 'App',
  components: {
    HeaderTemplate,
    Navigation,
    ContentWrapper
  },
  data: {
    activePage: store.getters.getActivePage
  },
  computed: {
    menuVisible () {
      return store.state.Menu.status
    }
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
