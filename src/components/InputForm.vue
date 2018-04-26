<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Titulo" id="titulo" type="text" class="validate">
          <label for="titulo">Titulo</label>
        </div>

        <div class="input-field col s12">
          <input placeholder="Valor" id="Valor" type="number" class="validate">
          <label for="Valor">Valor</label>
        </div>

        <div class="input-field col s12">
          <input placeholder="Descrição" id="Descrição" type="text" class="validate">
          <label for="Descrição">Descrição</label>
        </div>

        <div class="input-field col s4">
          <button for="save" type="button" class="btn red darken-1 s6 modal-close">
            SAIR
          </button>
        </div>

        <div class="input-field col s8">
          <button for="save" type="button" class="btn green darken-1 modal-close">
            SALVAR
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>

</style>
