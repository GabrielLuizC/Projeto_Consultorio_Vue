<template>
  <div class="paciente-edit">
    <h1 class="has-text-weight-bold is-size-2">Editar Paciente</h1>
    <FormPacienteEdit />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormPacienteEdit from "../../components/Forms/Paciente/FormPacienteEdit.vue";

@Options({
  components: {
    FormPacienteEdit,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.paciente-edit {
  background-color: #f2f2f2;
}
</style>
