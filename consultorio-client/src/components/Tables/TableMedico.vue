<template>
  <div
    class="buttons is-flex is-flex-direction-column is-justify-content-space-around m-2"
  >
    ¨
    <button class="btn-cadastrar mb-4">Cadastrar Médico</button>
    <button class="btn-search mb-1">Buscar Médico</button>
  </div>
  <div class="list is-flex is-justify-content-center">
    <table class="table">
      <thead>
        <tr>
          <th>Dt.</th>
          <th>ID</th>
          <th>Nome</th>
          <th>CRM</th>
          <th>Especialidade</th>
          <th>Editar</th>
          <th>Desativar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><button class="btn-detail">i</button></td>
          <th>1</th>
          <td>Alberto Almeida da Silva</td>
          <td>000000/PR</td>
          <td>Dermatologista</td>
          <td><button class="btn-edit">Editar</button></td>
          <td><button class="btn-delet">Desativar</button></td>
        </tr>

        <tr>
          <td><button class="btn-detail">i</button></td>
          <th>2</th>
          <td>Anderson Stompert</td>
          <td>010101/SP</td>
          <td>Cirurgião Geral</td>
          <td><button class="btn-edit">Editar</button></td>
          <td><button class="btn-delet">Desativar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class TableMedico extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss">
.table {
  background-color: #f2f2f2;
  margin-top: 30px;
  font-size: 20px;
}

.table th {
  padding: 15px;
  text-align: center;
}

.table td {
  padding: 15px;
  text-align: center;
}

.btn-cadastrar {
  width: 60%;
  font-size: 30px;
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

.btn-search {
  width: 60%;
  font-size: 30px;
  background-color: #001780;
  border-color: #001780;
  border-radius: 20px;
  border-width: 5px;
  color: white;
  font-weight: bold;
  padding: 10px;
}

.btn-search:hover {
  background-color: #0022bd;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #0022bd;
  border-width: 5px;
  color: white;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}

.btn-edit {
  font-size: 17px;
  background-color: #00a983;
  border-color: #00a983;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  padding: 10px;
}

.btn-edit:hover {
  background-color: #00cb9d;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #00cb9d;
  color: white;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}

.btn-delet {
  font-size: 17px;
  background-color: #b20000;
  border-color: #b20000;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  padding: 10px;
}

.btn-delet:hover {
  background-color: #cd0000;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #cd0000;
  color: white;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}

.btn-detail {
  font-size: 17px;
  background-color: #f2f2f2;
  border-color: #0093ff;
  border-width: 3px;
  border-radius: 100px;
  color: #0093ff;
  font-weight: bold;
  width: 30px;
}

.btn-detail:hover {
  background-color: #f2f2f2;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #00c1ff;
  color: #00c1ff;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}
</style>
