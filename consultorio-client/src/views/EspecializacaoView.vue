<template>
  <div class="medico">
    <h1 class="has-text-weight-bold is-size-2">Consulta de Especialidades</h1>
    <TableEspecializacao />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TableEspecializacao from "../components/Tables/TableEspecializacao.vue";

@Options({
  components: {
    TableEspecializacao,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.paciente {
  background-color: #f2f2f2;
}
</style>
