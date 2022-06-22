<template>
<aside class="menu">
  <p class="menu-label">
    Agenda
  </p>
  <ul class="menu-list">
    <li><a>Agendamentos</a></li>
    <li><a>Histórico</a></li>
  </ul>
  <p class="menu-label">
    Pessoa
  </p>
  <ul class="menu-list">
    <li><a>Paciente</a></li>
    <li><a>Secretaria</a></li>
    <li><a>Médico</a></li>
  </ul>
  <p class="menu-label">
    Administração
  </p>
  <ul class="menu-list">
    <li><a>Especialização</a></li>
    <li><a>Convênio</a></li>
  </ul>
</aside>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<style scoped lang="scss">

</style>
