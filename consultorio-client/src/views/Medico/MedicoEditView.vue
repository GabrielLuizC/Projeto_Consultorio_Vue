<template>
  <div class="medico-edit">
    <h1 class="has-text-weight-bold is-size-2">Editar Médico</h1>
    <FormMedicoEdit />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormMedicoEdit from "../../components/Forms/Medico/FormMedicoEdit.vue";

@Options({
  components: {
    FormMedicoEdit,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.medico-edit {
  background-color: #f2f2f2;
}
</style>
