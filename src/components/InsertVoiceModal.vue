<template>
  <div class="insert-modal">
    <div id="modal-voice" class="modal">
      <div class="modal-content">
        <h4>Modal voice</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  </div>
</template>

<script>
import MaterializeJs from 'materialize-css'

export default {
  mounted() {
    let elem = document.querySelector('#modal-voice');
    let instance = MaterializeJs.Modal.init(elem, {});
  }
}
</script>

<style lang="css" scoped>
.btn-floating {
  opacity: 1;
}
</style>
