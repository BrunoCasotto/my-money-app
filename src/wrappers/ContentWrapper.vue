<template>
  <div>Need call the {{page}} page</div>
</template>

<script>
  export default {
    name: 'ContentWrapper',
    props: {
      page: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style>

</style>
