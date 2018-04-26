<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input v-model="transaction.title"
            placeholder=""
            id="titulo"
            type="text"
            class="validate"
          >
          <label for="titulo">Titulo</label>
        </div>

        <div class="input-field col s12">
          <input v-model="transaction.value"
            placeholder=""
            id="Valor"
            type="number"
            class="validate"
          >
          <label for="Valor">Valor</label>
        </div>

        <div class="input-field col s12">
          <input v-model="transaction.description"
            placeholder=""
            id="Descrição"
            type="text"
            class="validate"
          >
          <label for="Descrição">Descrição</label>
        </div>

        <div class="input-field col s4">
          <button
            for="save"
            type="button"
            class="btn red darken-1 s6 modal-close"
          > SAIR </button>
        </div>

        <div class="input-field col s8">
          <button
            for="save"
            type="button"
            class="btn green darken-1 modal-close"
            v-on:click="save"
          >SALVAR </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transaction: {
        title       : '',
        value       : '',
        description : ''
      }
    }
  },
  methods: {
    save() {
      console.log('test',this.transaction)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
