<template>
  <div class="fixed-action-btn">
    <a :class="`btn-floating btn-large blue darken-1 ${effect}`">
      <i class="large material-icons">add</i>
    </a>
    <ul>
      <li>
        <a class="btn-floating green darken-1"><i class="material-icons">create</i></a>
      </li>
      <li>
        <a class="btn-floating yellow darken-1"><i class="material-icons">record_voice_over</i></a>
      </li>
    </ul>
  </div>
</template>

<script>
import MaterializeJs from 'materialize-css'

export default {
  name: 'ActionButton',
  props: {
    effect: ''
  },
  mounted() {
    let elem = document.querySelector('.fixed-action-btn')
    if(elem) {
      let instance = MaterializeJs.FloatingActionButton.init(elem, {
        direction: "left"
      })
    }
  }
}
</script>

<style>

</style>
