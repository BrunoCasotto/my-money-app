<template>
  <div class="page-container">
    <md-app>
      <!-- header -->
      <md-app-toolbar>
        <div class="md-toolbar-row">
          <header-template></header-template>
        </div>

        <div class="md-toolbar-row">
          <navigation></navigation>
        </div>
      </md-app-toolbar>
      <!-- header (end) -->

      <!-- content of pages -->
      <md-app-content>
        <content-wrapper></content-wrapper>
      </md-app-content>
      <!-- content of pages (end) -->
    </md-app>
  </div>
</template>

<script>
import HeaderTemplate from '_components/Header.vue';
import Navigation from '_components/Navigation.vue';
import ContentWrapper from '_components/ContentWrapper.vue';

export default {
  name: 'App',
  components: {
    HeaderTemplate,
    Navigation,
    ContentWrapper
  }
}
</script>

<style lang="sass">

.md-theme-default {
  *, *:after, *:before {
      box-sizing: border-box;
  }

}
</style>
