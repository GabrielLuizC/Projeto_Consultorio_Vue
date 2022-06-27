<template>
  <div class="medico-desativar">
    <h1 class="has-text-weight-bold is-size-2">Desativar Médico</h1>
    <FormMedicoDesativar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormMedicoDesativar from "../../components/Forms/Medico/FormMedicoDesativar.vue";

@Options({
  components: {
    FormMedicoDesativar,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.medico-desativar {
  background-color: #f2f2f2;
}
</style>
