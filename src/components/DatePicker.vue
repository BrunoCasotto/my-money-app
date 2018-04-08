<template>
  <div class="Date-picker">
    <label>{{title}}</label>
    <input type="text" class="datepicker" :placeholder="placeholder">
  </div>
</template>

<script>
import MaterializeJs from 'materialize-css'

export default {
  name: 'DatePicker',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'title'
    }
  },
  mounted() {
    let elements = document.querySelectorAll('.datepicker');
    elements.forEach((elem) => {
      MaterializeJs.Datepicker.init(elem, {});
    })
  }
}
</script>

<style>

</style>
