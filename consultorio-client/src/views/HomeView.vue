<template>
  <div class="is-size-1 has-font has-text-centered has-text-weight-bold">
    Seja Bem Vindo ao Sistema
  </div>

  <img src="../assets/fundomenu.png" class="img-principal pt-6 pb-6" />

  <div
    class="copy is-size-4 has-font has-text-centered has-text-weight-bold pt-6"
  >
    Copyright © Gabriel Luiz Conchinel - Desenvolvimento Front Consultorio
    Sistema
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.img-principal {
  width: 600px;
}

.copy {
  margin-top: 106.5px;
}
</style>
