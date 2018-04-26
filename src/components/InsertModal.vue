<template>
  <div class="insert-modal">
    <div id="modal-insert" class="modal">
      <div class="modal-content">
        <h5 class="modal-content__title">Transação</h5>
        <input-form></input-form>
      </div>
    </div>
  </div>
</template>

<script>
import MaterializeJs from 'materialize-css'
import InputForm from '_components/InputForm.vue'

export default {
  mounted() {
    let elem = document.querySelector('#modal-insert');
    let instance = MaterializeJs.Modal.init(elem, {});
  },
  components: {
    InputForm
  }
}
</script>

<style lang="css" scoped>
.btn-floating {
  opacity: 1;
}
.modal .modal-content {
  padding: 20px;
  padding-bottom: 0;
}

.modal-content__title {
  margin-top: 0;
}
</style>
