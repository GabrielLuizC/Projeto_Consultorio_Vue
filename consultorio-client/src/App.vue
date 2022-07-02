<template>
  <SideBar />
</template>

<script lang="ts">
import SideBar from "@/components/SideBar.vue";

export default {
  components: { SideBar },
};
</script>

<style lang="scss">
@import "~bulma/bulma.sass";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html {
  background-color: #f2f2f2;
  height: 100%;
}

h1 {
  color: #2c3e50;
}
</style>
