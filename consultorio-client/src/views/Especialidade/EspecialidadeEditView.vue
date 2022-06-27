<template>
  <div class="especialidade-edit">
    <h1 class="has-text-weight-bold is-size-2">Editar Especialidade</h1>
    <FormEspecialidadeEdit />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormEspecialidadeEdit from "../../components/Forms/Especialidade/FormEspecialidadeEdit.vue";

@Options({
  components: {
    FormEspecialidadeEdit,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.especialidade-edit {
  background-color: #f2f2f2;
}
</style>
