<template>
  <div class="columns is-flex has-text-centered">
    <div class="side column is-3">
      <img src="../assets/logo.png" class="menu-top pt-5" />
      <nav>
        <aside class="menu pt-3 has-text-white">
          <p class="menu-label has-text-white has-text-weight-bold">Agenda</p>
          <ul class="menu-list">
            <li><router-link to="/agenda">Agendamentos</router-link></li>
            <li><router-link to="/historico">Histórico</router-link></li>
          </ul>

          <p class="menu-label has-text-white has-text-weight-bold pt-4">
            Pessoas
          </p>
          <ul class="menu-list">
            <li><router-link to="/paciente">Paciente</router-link></li>
            <li><router-link to="/secretaria">Secretarias</router-link></li>
            <li><router-link to="/medico">Medicos</router-link></li>
          </ul>

          <p class="menu-label has-text-white has-text-weight-bold pt-4">
            Administração
          </p>
          <ul class="menu-list">
            <li>
              <router-link to="/especialidade">Especialização</router-link>
            </li>
            <li><router-link to="/convenio">Convênio</router-link></li>
          </ul>
        </aside>
      </nav>
    </div>
    <div class="column is-9 conteudo">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class SideBar extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss">
@import "~bulma/bulma.sass";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 10px;
  a {
    font-weight: bold;
    color: #ffffff;
    &.router-link-exact-active {
      color: #00e5ff;
      background-color: #0052a5;
      width: 104%;
    }
  }
}
.side {
  //background-color: #dcdcdc;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(4, 3, 65, 1) 29%,
    rgba(9, 9, 121, 1) 49%,
    rgba(6, 81, 168, 1) 74%,
    rgba(4, 116, 191, 1) 86%,
    rgba(0, 212, 255, 1) 100%
  );
  //height: 101.9vh;
  box-shadow: 2px 6px 10px rgb(48, 48, 48);
}
.menu-list a {
  border-radius: 2px;
  color: rgb(255, 255, 255);
  display: block;
  padding: 0.5em 0.75em;
}
.conteudo {
  margin-top: 30px;
}
.menu-top {
  padding: 15px;
  width: 240px;
  color: rgb(0, 0, 0);
}
</style>
