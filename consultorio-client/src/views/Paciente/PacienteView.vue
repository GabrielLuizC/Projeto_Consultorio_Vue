<template>
  <div class="paciente">
    <h1 class="has-text-weight-bold is-size-2">Consulta de Pacientes</h1>
    <TablePaciente />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TablePaciente from "../../components/Tables/TablePaciente.vue";

@Options({
  components: {
    TablePaciente,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.paciente {
  background-color: #f2f2f2;
}
</style>
