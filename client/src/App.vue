<script setup>
import { RouterView } from "vue-router";
import HeaderView from "./views/HeaderView.vue";
// import ToolBar from './components/ToolBar.vue';
</script>

<template>
  <div class="app">
    <HeaderView />
    <main>
      <RouterView class="router-view" />
      <!-- <ToolBar /> -->
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-top: 2vw;
  margin-bottom: 3vw;
}
</style>
