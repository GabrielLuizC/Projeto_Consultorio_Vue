<template>
  <div class="medico">
    <h1 class="has-text-weight-bold is-size-2">Consulta de Convênio</h1>
    <TableConvenio />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TableConvenio from "../components/Tables/TableConvenio.vue";

@Options({
  components: {
    TableConvenio,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.paciente {
  background-color: #f2f2f2;
}
</style>
