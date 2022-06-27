<template>
  <div class="paciente-cadastrar">
    <h1 class="has-text-weight-bold is-size-2">Cadastrar Paciente</h1>
    <FormPacienteCadastro />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormPacienteCadastro from "../../components/Forms/Paciente/FormPacienteCadastro.vue";

@Options({
  components: {
    FormPacienteCadastro,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.paciente-cadastrar {
  background-color: #f2f2f2;
}
</style>
