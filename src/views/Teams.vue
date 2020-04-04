<!-- TEMPLATE -->
<template>
  <div class="container">
    <div class="description">
      Teams! Weiter zu den Fragen?
    </div>

    <div class="buttons">
      <!-- eslint-disable-next-line max-len -->
      <router-link :to="{ name: 'questions' }"><button class="button button--green">Let's do this!</button></router-link>
      <button class="button button--red">Der Scheiß is fad!</button>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Teams',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>
