<template>
  <div class="convenio-edit">
    <h1 class="has-text-weight-bold is-size-2">Editar Convênio</h1>
    <FormConvenioEdit />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormConvenioEdit from "../../components/Forms/Convenio/FormConvenioEdit.vue";

@Options({
  components: {
    FormConvenioEdit,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.convenio-edit {
  background-color: #f2f2f2;
}
</style>
