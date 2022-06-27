<template>
  <div class="especialidade-desativar">
    <h1 class="has-text-weight-bold is-size-2">Desativar Especialidade</h1>
    <FormEspecialidadeDesativar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormEspecialidadeDesativar from "../../components/Forms/Especialidade/FormEspecialidadeDesativar.vue";

@Options({
  components: {
    FormEspecialidadeDesativar,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.especialidade-desativar {
  background-color: #f2f2f2;
}
</style>
