<template>
  <div class="paciente-desativar">
    <h1 class="has-text-weight-bold is-size-2">Desativar Paciente</h1>
    <FormPacienteDesativar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormPacienteDesativar from "../../components/Forms/Paciente/FormPacienteDesativar.vue";

@Options({
  components: {
    FormPacienteDesativar,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.paciente-desativar {
  background-color: #f2f2f2;
}
</style>
