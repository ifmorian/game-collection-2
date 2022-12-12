<script setup>
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <header class="header">
    <div class="header__logo" @click="this.$router.push('/')">
      <div><span class="color--red">G</span>ame</div>
      <div><span class="color--blue">C</span>ollection</div>
    </div>
    <NavBar class="header__nav" />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: start;

  width: 50%;
  height: 5vw;

  padding: 0 2%;

  border-bottom: 2px solid var(--color-border);
}
.header__logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  font-family: "Tannenberg";
  font-size: 2vw;

  cursor: pointer;
}

.header__logo > div:first-child {
  margin-bottom: -20%;
}

.header__nav {
  margin-left: 1em;
}
</style>
