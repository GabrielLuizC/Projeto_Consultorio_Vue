<template>
  <SideBar />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SideBar from "@/components/SideBar.vue";

@Options({
  components: {
    SideBar,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  background-color: #f2f2f2;
}
</style>
