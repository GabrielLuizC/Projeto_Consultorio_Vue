<template>
  <table class="table">
    <thead>
      <tr>
        <th><abbr title="Position">Pos</abbr></th>
        <th>Nome</th>
        <th>CRM</th>
        <th>Especialidade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Alberto Almeida da Silva</td>
        <td>000000/PR</td>
        <td>Cirurgião Geral</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class TablePaciente extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss">
.table {
  background-color: #f2f2f2;
  margin-top: 30px;
  margin-left: 170px;
}

.table th {
  padding: 15px;
  text-align: center;
}

.table td {
  padding: 15px;
  text-align: center;
}
</style>
