<!-- TEMPLATE -->
<template>
  <div class="container">
    <div class="description">
      Fragen! Weiter zu den Ergebnissen?
    </div>

    <div class="buttons">
      <!-- eslint-disable-next-line max-len -->
      <router-link :to="{ name: 'answers' }"><button class="button button--green">Wenns sein muss.</button></router-link>
      <button class="button button--red">Please kill me now.</button>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Questions',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>
