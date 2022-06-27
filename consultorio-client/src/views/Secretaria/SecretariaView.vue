<template>
  <div class="medico">
    <h1 class="has-text-weight-bold is-size-2">Consulta de Secretarias</h1>
    <TableSecretaria />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TableSecretaria from "../../components/Tables/TableSecretaria.vue";

@Options({
  components: {
    TableSecretaria,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.paciente {
  background-color: #f2f2f2;
}
</style>
