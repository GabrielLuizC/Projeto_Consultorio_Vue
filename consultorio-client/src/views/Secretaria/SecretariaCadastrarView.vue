<template>
  <div class="secretaria-cadastrar">
    <h1 class="has-text-weight-bold is-size-2">Cadastrar Secretaria</h1>
    <FormSecretariaCadastro />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormSecretariaCadastro from "../../components/Forms/Secretaria/FormSecretariaCadastro.vue";

@Options({
  components: {
    FormSecretariaCadastro,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.secretaria-cadastrar {
  background-color: #f2f2f2;
}
</style>
