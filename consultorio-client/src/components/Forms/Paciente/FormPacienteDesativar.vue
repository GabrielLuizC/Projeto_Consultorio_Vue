<template>
  <div class="desativar-form mt-5 is-flex is-flex-direction-column">
    <div class="text is-size-3">
      <h1>Tem certeza que deseja desativar este Paciente??</h1>
    </div>
    <router-link to=""
      ><button class="btn-cadastrar mt-3">Confirmar</button></router-link
    >
    <router-link to="/pacientes"
      ><button class="btn-deletar mt-3">Cancelar</button></router-link
    >
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FormPacienteDesativar extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss">
.desativar-form {
  background-color: white;
  width: 100%;
  padding: 50px;
  border-radius: 30px;
  box-shadow: 2px 5px 10px #a7a7a7;
}

.btn-cadastrar {
  width: 70%;
  font-size: 20px;
  background-color: #0074ff;
  border-color: #0074ff;
  border-radius: 20px;
  border-width: 5px;
  color: white;
  font-weight: bold;
  padding: 10px;
}

.btn-cadastrar:hover {
  background-color: #00aeff;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #00aeff;
  border-width: 5px;
  color: white;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}

.btn-deletar {
  width: 70%;
  font-size: 20px;
  background-color: #b20000;
  border-color: #b20000;
  border-radius: 20px;
  border-width: 5px;
  color: white;
  font-weight: bold;
  padding: 10px;
}

.btn-deletar:hover {
  background-color: #cd0000;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #cd0000;
  border-width: 5px;
  color: white;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}
</style>
