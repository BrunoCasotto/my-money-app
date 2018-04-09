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
    this.setDatePicker()
  },
  methods: {
    NotifyChange() {
      console.log("new date")
    },
    setDatePicker() {
      let elements = document.querySelectorAll('.datepicker')

      elements.forEach((elem) => {
        MaterializeJs.Datepicker.init(elem, {
          format: 'dd mmm, yyyy',
          onClose: this.NotifyChange,
          i18n: {
            today: 'Hoje',
            clear: 'Limpar',
            done: 'Ok',
            nextMonth: 'Próximo mês',
            previousMonth: 'Mês anterior',
            weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
            weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            weekdays: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
          }
        })
      })
    }
  }
}
</script>

<style>

</style>
