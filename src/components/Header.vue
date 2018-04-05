<template>
  <span class="md-title">My money app</span>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass">

.md-theme-default {
  .md-toolbar {
    padding: 0 15px;
  }

  .md-input-container {
    width: 150px;

    & {
      .md-icon {
        &:not(.md-icon-delete):after {
          background: none;
        }
      }
    }
  }
}
</style>
