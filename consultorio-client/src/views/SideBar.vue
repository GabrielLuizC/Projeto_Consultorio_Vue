<template>
  <SideBar/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SideBar from '@/components/SideBar.vue';

@Options({
  components: {
    SideBar,
  },
})
export default class HomeView extends Vue {}
</script>
