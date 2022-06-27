<template>
  <div class="especialidade">
    <h1 class="has-text-weight-bold is-size-2">Consulta de Especialidades</h1>
    <TableEspecialidade />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TableEspecialidade from "../../components/Tables/TableEspecialidade.vue";

@Options({
  components: {
    TableEspecialidade,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.especialidade {
  background-color: #f2f2f2;
}
</style>
