<template>
  <div class="convenio-cadastrar">
    <h1 class="has-text-weight-bold is-size-2">Cadastrar Convênio</h1>
    <FormConvenioCadastro />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormConvenioCadastro from "../../components/Forms/Convenio/FormConvenioCadastro.vue";

@Options({
  components: {
    FormConvenioCadastro,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.convenio-cadastrar {
  background-color: #f2f2f2;
}
</style>
