<template>
  <div class="secretaria-edit">
    <h1 class="has-text-weight-bold is-size-2">Editar Secretaria</h1>
    <FormSecretariaEdit />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormSecretariaEdit from "../../components/Forms/Secretaria/FormSecretariaEdit.vue";

@Options({
  components: {
    FormSecretariaEdit,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.secretaria-edit {
  background-color: #f2f2f2;
}
</style>
