<template>
  <div class="fixed-action-btn">
    <a class="btn-floating btn-large red">
      <i class="large material-icons">create</i>
    </a>
    <ul>
      <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
      <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
      <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
      <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
    </ul>
  </div>
</template>

<script>
import MaterializeJs from 'materialize-css'

export default {
  name: 'ActionButton',
  mounted() {
    var elem = document.querySelector('.fixed-action-btn')
    if(elem) {
      var instance = MaterializeJs.FloatingActionButton.init(elem, {
        direction: "left"
      })
    }
  }
}
</script>

<style>

</style>
