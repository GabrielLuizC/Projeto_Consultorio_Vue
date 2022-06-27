<template>
  <div class="convenio-desativar">
    <h1 class="has-text-weight-bold is-size-2">Desativar Convênio</h1>
    <FormConvenioDesativar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormConvenioDesativar from "../../components/Forms/Convenio/FormConvenioDesativar.vue";

@Options({
  components: {
    FormConvenioDesativar,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.convenio-desativar {
  background-color: #f2f2f2;
}
</style>
