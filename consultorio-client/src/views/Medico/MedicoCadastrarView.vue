<template>
  <div class="medico-cadastrar">
    <h1 class="has-text-weight-bold is-size-2">Cadastrar Médico</h1>
    <FormMedicoCadastro />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormMedicoCadastro from "../../components/Forms/Medico/FormMedicoCadastro.vue";

@Options({
  components: {
    FormMedicoCadastro,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.medico-cadastrar {
  background-color: #f2f2f2;
}
</style>
