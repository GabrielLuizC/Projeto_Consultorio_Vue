<template>
  <div class="medico">
    <h1 class="has-text-weight-bold is-size-2">Consulta de Médicos</h1>
    <TableMedico />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TableMedico from "../components/Tables/TableMedico.vue";

@Options({
  components: {
    TableMedico,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.paciente {
  background-color: #f2f2f2;
}
</style>
