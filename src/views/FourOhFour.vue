<!-- TEMPLATE -->
<template>
  <div class="container">
    <!-- eslint-disable max-len -->
    <div class="description">
      <b>Four-Oh-Four!</b>
      Hier geht es leider nicht weiter.
      Aber du kannst immer zum Start <router-link :to="{ name: 'teams' }">zurück gehen</router-link>.
    </div>
    <!-- eslint-enable max-len -->
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'FourOhFour',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>
