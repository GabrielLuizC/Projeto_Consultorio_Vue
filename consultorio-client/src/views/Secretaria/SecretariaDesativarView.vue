<template>
  <div class="secretaria-desativar">
    <h1 class="has-text-weight-bold is-size-2">Desativar Secretaria</h1>
    <FormSecretariaDesativar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormSecretariaDesativar from "../../components/Forms/Secretaria/FormSecretariaDesativar.vue";

@Options({
  components: {
    FormSecretariaDesativar,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.secretaria-desativar {
  background-color: #f2f2f2;
}
</style>
