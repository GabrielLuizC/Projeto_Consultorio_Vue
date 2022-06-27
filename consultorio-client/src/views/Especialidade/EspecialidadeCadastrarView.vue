<template>
  <div class="especialidade-cadastrar">
    <h1 class="has-text-weight-bold is-size-2">Cadastrar Especialidade</h1>
    <FormEspecialidadeCadastro />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormEspecialidadeCadastro from "../../components/Forms/Especialidade/FormEspecialidadeCadastro.vue";

@Options({
  components: {
    FormEspecialidadeCadastro,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.especialidade-cadastrar {
  background-color: #f2f2f2;
}
</style>
